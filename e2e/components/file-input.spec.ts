import { test, expect } from "@playwright/test";

/**
 * FileInput component tests — browser-specific interactions not suitable for jsdom.
 * The component is rendered in the invoice create wizard (step 2: "Upload & Review").
 */

/** Advances the invoice create wizard past step 0 and step 1 to reach the FileInput on step 2. */
async function navigateToStep2(page: import("@playwright/test").Page) {
  await page.goto("/invoice/create");
  await page.waitForLoadState("networkidle");

  // ── Step 0: Invoice Details ──────────────────────────────────────────────
  await page.getByLabel("Invoice Number").fill("INV-TEST-001");
  await page.getByLabel("Debtor Company Name").fill("Acme Corp");
  await page.getByLabel("Debtor Address").fill("123 Business Street, Nairobi");
  await page.getByLabel(/Invoice Amount/).fill("10000");

  // Open DatePicker for Due Date and pick a future date
  await page.getByRole("button", { name: /Select date/i }).first().click();
  // Click the next-month chevron (last button inside the popover)
  await page.locator('[data-radix-popper-content-wrapper] button').last().click();
  // Pick day 20
  const popoverBtns = page.locator('[data-radix-popper-content-wrapper] button');
  const count = await popoverBtns.count();
  for (let i = 0; i < count; i++) {
    if ((await popoverBtns.nth(i).textContent())?.trim() === "20") {
      await popoverBtns.nth(i).click();
      break;
    }
  }

  // Click Next (enabled once step 0 is valid)
  await page.getByRole("button", { name: /^Next/ }).click();

  // ── Step 1: Financing Terms ──────────────────────────────────────────────
  await page.getByLabel(/Discount Rate/).fill("8");
  await page.getByLabel(/Minimum Investment/).fill("500");

  // Open DatePicker for Listing Expiry Date and pick an earlier date
  await page.getByRole("button", { name: /Select date/i }).first().click();
  const popoverBtns2 = page.locator('[data-radix-popper-content-wrapper] button');
  const count2 = await popoverBtns2.count();
  for (let i = 0; i < count2; i++) {
    if ((await popoverBtns2.nth(i).textContent())?.trim() === "10") {
      await popoverBtns2.nth(i).click();
      break;
    }
  }

  await page.getByRole("button", { name: /^Next/ }).click();
}

test.describe("FileInput", () => {
  test.beforeEach(async ({ page }) => {
    await navigateToStep2(page);
  });

  test("renders drop zone with correct instructions", async ({ page }) => {
    await expect(page.getByText(/Drag & drop your invoice PDF/i)).toBeVisible();
    await expect(page.getByText(/Only PDF up to/i)).toBeVisible();
  });

  test("accepts a PDF file via file input", async ({ page }) => {
    const pdfBuffer = Buffer.from(
      "%PDF-1.4\n1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj " +
        "2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj " +
        "3 0 obj<</Type/Page/MediaBox[0 0 3 3]>>endobj\n" +
        "xref\n0 4\n0000000000 65535 f\n0000000009 00000 n\n" +
        "0000000058 00000 n\n0000000115 00000 n\ntrailer<</Size 4/Root 1 0 R>>\n" +
        "startxref\n190\n%%EOF"
    );

    await page.locator('input[type="file"]').setInputFiles({
      name: "invoice-test.pdf",
      mimeType: "application/pdf",
      buffer: pdfBuffer,
    });

    await expect(page.getByText("invoice-test.pdf")).toBeVisible();
  });

  test("shows error for non-PDF file type", async ({ page }) => {
    await page.locator('input[type="file"]').setInputFiles({
      name: "document.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("not a pdf"),
    });

    await expect(page.getByText(/Only PDF files are accepted/i)).toBeVisible();
  });

  test("shows error for file exceeding max size", async ({ page }) => {
    const oversized = Buffer.alloc(11 * 1024 * 1024, "a"); // 11 MB > wizard's 10 MB limit
    await page.locator('input[type="file"]').setInputFiles({
      name: "large.pdf",
      mimeType: "application/pdf",
      buffer: oversized,
    });

    await expect(page.getByText(/too large/i)).toBeVisible();
  });

  test("removes selected file when trash button is clicked", async ({ page }) => {
    await page.locator('input[type="file"]').setInputFiles({
      name: "invoice.pdf",
      mimeType: "application/pdf",
      buffer: Buffer.from("%PDF-1.4 minimal"),
    });

    await expect(page.getByText("invoice.pdf")).toBeVisible();
    await page.getByTitle("Remove file").click();
    await expect(page.getByText("invoice.pdf")).not.toBeVisible();
    await expect(page.getByText(/Drag & drop/i)).toBeVisible();
  });

  test("drag-and-drop: drop zone highlights on dragover", async ({ page }) => {
    const dropZone = page.locator('[class*="rounded-xl"][class*="border-dashed"]').first();

    await dropZone.dispatchEvent("dragenter", {
      dataTransfer: { items: [{ kind: "file", type: "application/pdf" }] },
    });

    // isDragActive adds border-primary to the drop zone
    await expect(dropZone).toHaveClass(/border-primary/);
  });
});
