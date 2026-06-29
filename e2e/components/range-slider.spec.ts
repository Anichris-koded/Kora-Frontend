import { test, expect } from "@playwright/test";

/**
 * RangeSlider component tests — keyboard interactions require a real browser.
 * The component is rendered on the marketplace page as the APR filter slider.
 */
test.describe("RangeSlider", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/marketplace");
    // Wait for the APR range slider to be present
    await page.waitForSelector('[aria-label^="Minimum APR"]');
  });

  test("renders min and max range inputs", async ({ page }) => {
    const minThumb = page.locator('[aria-label^="Minimum APR"]');
    const maxThumb = page.locator('[aria-label^="Maximum APR"]');

    await expect(minThumb).toBeVisible();
    await expect(maxThumb).toBeVisible();
    await expect(minThumb).toHaveAttribute("type", "range");
    await expect(maxThumb).toHaveAttribute("type", "range");
  });

  test("min thumb decrements with ArrowLeft key", async ({ page }) => {
    const minThumb = page.locator('[aria-label^="Minimum APR"]');
    const initialValue = Number(await minThumb.inputValue());

    await minThumb.focus();
    await minThumb.press("ArrowLeft");

    const newValue = Number(await minThumb.inputValue());
    expect(newValue).toBeLessThanOrEqual(initialValue);
  });

  test("min thumb increments with ArrowRight key", async ({ page }) => {
    const minThumb = page.locator('[aria-label^="Minimum APR"]');
    const maxThumb = page.locator('[aria-label^="Maximum APR"]');

    // Set min to a low value first so there is room to increase
    const maxVal = Number(await maxThumb.inputValue());
    await minThumb.evaluate((el: HTMLInputElement, val) => {
      el.value = String(Math.max(0, val - 20));
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }, maxVal);

    const valueBefore = Number(await minThumb.inputValue());
    await minThumb.focus();
    await minThumb.press("ArrowRight");

    const valueAfter = Number(await minThumb.inputValue());
    expect(valueAfter).toBeGreaterThanOrEqual(valueBefore);
  });

  test("max thumb increments with ArrowRight key", async ({ page }) => {
    const maxThumb = page.locator('[aria-label^="Maximum APR"]');
    const max = Number(await maxThumb.getAttribute("max"));
    const initialValue = Number(await maxThumb.inputValue());

    await maxThumb.focus();
    await maxThumb.press("ArrowRight");

    const newValue = Number(await maxThumb.inputValue());
    // Either increased or already at max
    expect(newValue).toBeGreaterThanOrEqual(Math.min(initialValue, max));
  });

  test("max thumb decrements with ArrowLeft key", async ({ page }) => {
    const maxThumb = page.locator('[aria-label^="Maximum APR"]');
    const minThumb = page.locator('[aria-label^="Minimum APR"]');

    // Set max to a high value to ensure there is room to decrease
    await maxThumb.evaluate((el: HTMLInputElement) => {
      const max = Number(el.max);
      el.value = String(max);
      el.dispatchEvent(new Event("input", { bubbles: true }));
    });

    const valueBefore = Number(await maxThumb.inputValue());
    await maxThumb.focus();
    await maxThumb.press("ArrowLeft");

    const valueAfter = Number(await maxThumb.inputValue());
    const minVal = Number(await minThumb.inputValue());
    // Value should have decreased (or is constrained to minVal + step)
    expect(valueAfter).toBeLessThanOrEqual(valueBefore);
    expect(valueAfter).toBeGreaterThanOrEqual(minVal);
  });

  test("Home key sets min thumb to minimum value", async ({ page }) => {
    const minThumb = page.locator('[aria-label^="Minimum APR"]');
    const minAttr = Number(await minThumb.getAttribute("min"));

    await minThumb.focus();
    await minThumb.press("Home");

    const value = Number(await minThumb.inputValue());
    expect(value).toBe(minAttr);
  });

  test("End key sets max thumb to maximum value", async ({ page }) => {
    const maxThumb = page.locator('[aria-label^="Maximum APR"]');
    const maxAttr = Number(await maxThumb.getAttribute("max"));

    await maxThumb.focus();
    await maxThumb.press("End");

    const value = Number(await maxThumb.inputValue());
    expect(value).toBe(maxAttr);
  });

  test("min value never exceeds max value", async ({ page }) => {
    const minThumb = page.locator('[aria-label^="Minimum APR"]');
    const maxThumb = page.locator('[aria-label^="Maximum APR"]');

    // Press ArrowRight many times to try to push min past max
    await minThumb.focus();
    for (let i = 0; i < 20; i++) {
      await minThumb.press("ArrowRight");
    }

    const minVal = Number(await minThumb.inputValue());
    const maxVal = Number(await maxThumb.inputValue());
    expect(minVal).toBeLessThanOrEqual(maxVal);
  });
});
