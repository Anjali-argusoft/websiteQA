
import urlElements from '../locators/pageUrlLocators'; // Page Locators
import elements from '../locators/pageTextLocators'; // Page Locators
import imageLink from '../testdata/pageSrc'; // Page Image link Data
import * as urlFunc from '../utils/pageFunction'; // Use function defined in utils

const { test, expect } = require('@playwright/test');

test.describe(
    'Tithes Page Image Scenario',
    async () => {
        let page;
        test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });
        test.beforeEach(async ({ browser }) => {
            await page.goto(elements.url['tithes_url']);
        });

        test('User sees correct Paynow QR code', async () => {

            // Wait for payNow tab to get expand
            await page.waitForSelector(urlElements.payNow['payNow_locator']);

            // Click on payNow tab accordian to expand
            await page.click(urlElements.payNow['payNow_locator'], {
                delay: 1000,
            });

            // Verify paynow qr scan has valid src
            await urlFunc.verifyImageUrl(page, urlElements.payNow['payNow_qr_scan'], imageLink.payNow_tithes_scan);

        });

        test('Users see correct SMS Text-to-give screenshots', async () => {
            // Wait for sms tab to get expand
            await page.waitForSelector(elements.sms['smsTextTabLocator']);

            // Click on sms tab accordian to expand
            await page.click(elements.sms['smsTextTabLocator'], {
                delay: 1000,
            });

            // Verify step1 image
            await urlFunc.verifyImageUrl(page, urlElements.steps_locator['step1'], imageLink.steps_src['step1']);

            // Verify step2 image
            await urlFunc.verifyImageUrl(page, urlElements.steps_locator['step2'], imageLink.steps_src['step2']);

            // Verify step3 image
            await urlFunc.verifyImageUrl(page, urlElements.steps_locator['step3'], imageLink.steps_src['step3']);

            // Verify step4a image
            await urlFunc.verifyImageUrl(page, urlElements.steps_locator['step4a'], imageLink.steps_src['step4a']);

            // Verify step4b image
            await urlFunc.verifyImageUrl(page, urlElements.steps_locator['step4b'], imageLink.steps_src['step4b']);

        });

        test('Users see correct Credit Card screenshot', async () => {

            // Wait for credit card tab to get expand
            await page.waitForSelector(urlElements.cc_locator);

            // Click on credit card tab accordian to expand
            await page.click(urlElements.cc_locator, {
                delay: 1000,
            });

            // Verify credit card has valid src
            await urlFunc.verifyImageUrl(page, urlElements.cc_locator, imageLink.cc_src);
        })

        test.afterAll(async () => {
            await page.close();
        });
    });