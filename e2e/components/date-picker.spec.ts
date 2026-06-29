import { test, expect } from "@playwright/test";
import { format, addMonths } from "date-fns";

/**
 * DatePicker component tests — popover calendar interaction requires a real browser.
 * The component is rendered in step 0 of the invoice create wizard ("Due Date").
 */
test.describe("DatePicker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/invoice/create");
    // Step 0 renders the DatePicker for "Due Date"
    await page.waitForSelector('button:has-text("Select date")');
  });

  test("renders trigger button with placeholder text", async ({ page }) => {
    const trigger = page.getByRole("button", { name: /Select date/i }).first();
    await expect(trigger).toBeVisible();
    await expect(trigger).toBeEnabled();
  });

  test("opens calendar popover on trigger click", async ({ page }) => {
    await page.getByRole("button", { name: /Select date/i }).first().click();
    // Calendar header shows the current month/year
    const monthYear = format(new Date(), "MMMM yyyy");
    await expect(page.getByText(monthYear)).toBeVisible();
  });

  test("closes calendar when a date is selected", async ({ page }) => {
    await page.getByRole("button", { name: /Select date/i }).first().click();

    // Navigate to next month to avoid past/disabled dates
    await page.getByRole("button").filter({ has: page.locator("svg") }).nth(1).click();

    // Click day 15 of next month
    const dayButtons = page.locator('[role="dialog"] button, [data-radix-popper-content-wrapper] button').filter({ hasText: /^15$/ });
    await dayButtons.first().click();

    // Calendar should close; trigger should now show a formatted date
    const monthYear = format(new Date(), "MMMM yyyy");
    // Popover content should not be in the DOM
    await expect(page.getByText(monthYear)).not.toBeVisible();
  });

  test("displays selected date on the trigger button", async ({ page }) => {
    await page.getByRole("button", { name: /Select date/i }).first().click();

    // Navigate to next month
    const nextMonthBtn = page
      .locator('[data-radix-popper-content-wrapper] button')
      .last();
    await nextMonthBtn.click();

    // Pick a specific day
    const allDayBtns = page.locator('[data-radix-popper-content-wrapper] button');
    const count = await allDayBtns.count();
    // The last few are day cells; pick the one with text "20"
    for (let i = 0; i < count; i++) {
      const text = await allDayBtns.nth(i).textContent();
      if (text?.trim() === "20") {
        await allDayBtns.nth(i).click();
        break;
      }
    }

    const trigger = page.getByRole("button").first();
    // Trigger should no longer say "Select date"
    await expect(trigger).not.toHaveText(/Select date/i);
  });

  test("navigates to previous month with back chevron", async ({ page }) => {
    await page.getByRole("button", { name: /Select date/i }).first().click();

    const prevMonth = addMonths(new Date(), -1);
    const prevMonthYear = format(prevMonth, "MMMM yyyy");

    // Click the prev-month button (first chevron button inside the popover)
    const prevBtn = page.locator('[data-radix-popper-content-wrapper] button').first();
    await prevBtn.click();

    await expect(page.getByText(prevMonthYear)).toBeVisible();
  });

  test("navigates to next month with forward chevron", async ({ page }) => {
    await page.getByRole("button", { name: /Select date/i }).first().click();

    const nextMonth = addMonths(new Date(), 1);
    const nextMonthYear = format(nextMonth, "MMMM yyyy");

    // Click the next-month button (last chevron button inside the popover)
    const nextBtn = page.locator('[data-radix-popper-content-wrapper] button').last();
    await nextBtn.click();

    await expect(page.getByText(nextMonthYear)).toBeVisible();
  });

  test("updates the hidden input value after selection", async ({ page }) => {
    await page.getByRole("button", { name: /Select date/i }).first().click();

    // Navigate two months ahead to avoid any min-date constraints
    const popoverNextBtn = page.locator('[data-radix-popper-content-wrapper] button').last();
    await popoverNextBtn.click();
    await popoverNextBtn.click();

    // Pick day 10
    const dayBtns = page.locator('[data-radix-popper-content-wrapper] button');
    const count = await dayBtns.count();
    for (let i = 0; i < count; i++) {
      const text = await dayBtns.nth(i).textContent();
      if (text?.trim() === "10") {
        await dayBtns.nth(i).click();
        break;
      }
    }

    // The hidden input should hold the yyyy-MM-dd value
    const hiddenInput = page.locator('input[type="hidden"][name="dueDate"]');
    const val = await hiddenInput.inputValue();
    expect(val).toMatch(/^\d{4}-\d{2}-10$/);
  });
});
