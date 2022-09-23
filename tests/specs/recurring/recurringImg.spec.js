
import elements from '../locators/pageTextLocators'; // Page Text Locators
import iBankingElms from '../locators/iBankingImgLocators'; // Page URL Locators
import iBankingURL from '../testdata/iBankingImgSrc'; // Page URL Locators

import * as pageFunc from '../utils/pageFunction'; // Use function defined in utils

const { test, expect } = require('@playwright/test');

test.describe(
    'Recurring iBanking Image Scenario',
    async () => {
        let page;
        test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });
        test.beforeEach(async ({ browser }) => {
            await page.goto(elements.url['recurring_url']);
        });

        test('User sees correct POSB/DBS Bank screenshots', async () => {

            //Wait and click for POSB/DBS Bank tab in recurring page 
            await page.waitForSelector(iBankingElms.recurring.posbBank['posbTab']);
            await page.click(iBankingElms.recurring.posbBank['posbTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.posbBank['step1'], iBankingURL.posbBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.posbBank['step2'], iBankingURL.posbBank['step2']);

            // Verify Step 3 - Recurring Giving
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.posbBank['step3a'], iBankingURL.posbBank['step3']);
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.posbBank['step3b'], iBankingURL.recurring.posbBank['step3b']);

            // Verify Step 4 - Recurring Giving
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.posbBank['step4a'], iBankingURL.recurring.posbBank['step4a']);
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.posbBank['step4b'], iBankingURL.recurring.posbBank['step4b']);

        });

        test('User sees correct OCBC Bank screenshots', async () => {

            //Wait and click for OCBC Bank tab in recurring page 
            await page.waitForSelector(elements.iBanking.ocbcBank['ocbcTab']);
            await page.click(elements.iBanking.ocbcBank['ocbcTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.ocbcBank['step1'], iBankingURL.ocbcBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.ocbcBank['step2'], iBankingURL.ocbcBank['step2']);

            // Verify Step 3 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.ocbcBank['step3'], iBankingURL.ocbcBank['step3']);

            // Verify Step 4 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.ocbcBank['step4a'], iBankingURL.ocbcBank['step4a']);
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.ocbcBank['step4b'], iBankingURL.ocbcBank['step4b']);

            // Verify Step 5 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.ocbcBank['step5'], iBankingURL.recurring.ocbcBank['step5']);

        });

        test('User sees correct UOB Bank screenshots', async () => {

            //Wait and click for UOB Bank tab in recurring page 
            await page.waitForSelector(elements.iBanking.uobBank['uobTab']);
            await page.click(elements.iBanking.uobBank['uobTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.uobBank['step1'], iBankingURL.uobBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.uobBank['step2'], iBankingURL.uobBank['step2']);

            // Verify Step 3 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.uobBank['step3'], iBankingURL.recurring.uobBank['step3']);

        });

        test('User sees correct Standard Chartered Bank screenshots', async () => {

            //Wait and click for SCB Bank tab in recurring page 
            await page.waitForSelector(iBankingElms.recurring.standardCharteredBank['standardTab']);
            await page.click(iBankingElms.recurring.standardCharteredBank['standardTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.standardCharteredBank['step1'], iBankingURL.standardCharteredBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.standardCharteredBank['step2'], iBankingURL.standardCharteredBank['step2']);

            // Verify Step 3 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.standardCharteredBank['step3'], iBankingURL.standardCharteredBank['step3']);

            // Verify Step 4 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.standardCharteredBank['step4'], iBankingURL.standardCharteredBank['step4']);

            // Verify Step 5 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.standardCharteredBank['step5'], iBankingURL.recurring.standardCharteredBank['step5']);

        });

        test('User sees correct Citibank screenshots', async () => {

            //Wait and click for CitiBank tab in recurring page 
            await page.waitForSelector(iBankingElms.recurring.citiBank['citiTab']);
            await page.click(iBankingElms.recurring.citiBank['citiTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.citiBank['step1'], iBankingURL.citiBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.citiBank['step2'], iBankingURL.citiBank['step2']);

            // Verify Step 3 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.citiBank['step3'], iBankingURL.citiBank['step3']);

            // Verify Step 4 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.citiBank['step4'], iBankingURL.citiBank['step4']);

            // Verify Step 5 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.citiBank['step5'], iBankingURL.recurring.citiBank['step5']);

        });

        test('Users see correct SMS Text-to-give screenshots for “Not on Text-To-Give”', async () => {

            //Wait and click for CitiBank tab in recurring page 
            await page.waitForSelector(iBankingElms.recurring.not_on_text['register_checkbox']);
            await page.click(iBankingElms.recurring.not_on_text['register_checkbox'], { delay: 1000 });

            //Scroll into view if needed to verify payee details
            await page.locator(iBankingElms.recurring.not_on_text['step1']).scrollIntoViewIfNeeded();
            // Verify Step 1 - One-Time Setup
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.not_on_text['step1'], iBankingURL.recurring.not_on_text['step1']);

            //Scroll into view if needed to verify payee details
            await page.locator(iBankingElms.recurring.not_on_text['step2']).scrollIntoViewIfNeeded();
            // Verify Step 2 - One-Time Setup
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.not_on_text['step2'], iBankingURL.recurring.not_on_text['step2']);

            // Scroll into view if needed to verify payee details
            await page.locator(iBankingElms.recurring.not_on_text['step3']).scrollIntoViewIfNeeded();
            // Verify Step 2 - One-Time Setup
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.not_on_text['step3'], iBankingURL.recurring.not_on_text['step3']);

            //Scroll into view if needed to verify payee details
            await page.locator(iBankingElms.recurring.not_on_text['step4']).scrollIntoViewIfNeeded();
            // Verify Step 4 - Recurring Giving
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.not_on_text['step4'], iBankingURL.recurring.not_on_text['step4']);

        });

        test('Users see correct SMS Text-to-give screenshots for “Already on Text-To-Give”', async () => {

            //Wait and click for CitiBank tab in recurring page 
            await page.waitForSelector(iBankingElms.recurring.already_on_text['recurring_checkbox']);
            await page.click(iBankingElms.recurring.already_on_text['recurring_checkbox'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.recurring.already_on_text['step1'], iBankingURL.recurring.already_on_text['step1']);

        });

        test.afterAll(async () => {
            await page.close();
        });

    });