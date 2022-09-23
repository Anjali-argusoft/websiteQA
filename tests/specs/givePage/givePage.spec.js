
import elements from '../givePage/givePageLocators';
import testData from '../givePage/givePageData'; // Give Page data

const { test, expect } = require('@playwright/test');

test.describe(
    'Give Page Scenario',
    async () => {
        let page;
        test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });

        test('User reads important info under "How do I give?"', async () => {
            // Redirect to give page
            await page.goto(elements.give_url);

            //Wait for text selector
            await page.waitForSelector(elements.givePageText);

            // Verify it will read - You may make your cheques payable to “Heart of God Church - Heart Com Services”
            await expect(page.locator(elements.givePageText)).toContainText(
                testData.givePageTextData,
            );

        });

        test('User wants to access phone info under "How do I give?"', async () => {

            // Redirect to give page
            await page.goto(elements.give_url);

            //Wait for phone info selector
            await page.waitForSelector(elements.givePagePhone);

            // Verify phone has valid attribute href as tel:+6568462529
            await expect(page.locator(elements.givePagePhone)).toHaveAttribute(
                elements.attribute, testData.givePagePhoneData
            );

            // verify phone has valid value 
            await expect(page.locator(elements.givePagePhone)).toHaveText(
                testData.givePagePhoneValue
            );

            // Verify phone link is clickable
            await expect(page.locator(elements.givePagePhone)).toBeEnabled();

        })

        test('User wants to access email info under "How do I give?"', async () => {

            // Redirect to give page
            await page.goto(elements.give_url);

            //Wait for email info selector
            await page.waitForSelector(elements.givePageEmail);

            // Verify email has attribute href as mailto:accounts@heartofgodchurch.org
            await expect(page.locator(elements.givePageEmail)).toHaveAttribute(
                elements.attribute, testData.givePageEmailData
            );

            // verify email has valid value 
            await expect(page.locator(elements.givePageEmail)).toHaveText(
                testData.givePageEmailValue
            );

            // Verify email link is clickable
            await expect(page.locator(elements.givePageEmail)).toBeEnabled();

        })

        test.afterAll(async () => {
            await page.close();
        });
    });