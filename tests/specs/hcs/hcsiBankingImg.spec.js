
import elements from '../locators/pageTextLocators'; // Page Text Locators
import iBankingElms from '../locators/iBankingImgLocators'; // Page URL Locators
import iBankingURL from '../testdata/iBankingImgSrc'; // Page URL Locators

import * as pageFunc from '../utils/pageFunction'; // Use function defined in utils
import * as pageTextFunc from '../utils/pageTextFunction'; // Use function defined in utils

const { test, expect } = require('@playwright/test');

test.describe(
    'Heart Community Services iBanking Image Scenario',
    async () => {
        let page;
        test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });
        test.beforeEach(async ({ browser }) => {
            await page.goto(elements.url['hcs_url']);

            // Wait and click iBanking tab to get expand
            await pageTextFunc.clickElement(page, elements.iBanking['iBankingTab']);
        });

        test('User sees correct POSB/DBS Bank screenshots', async () => {

            //Wait and click for POSB/DBS Bank tab in HCS page 
            await page.waitForSelector(elements.iBanking.posbBank['posbTab']);
            await page.click(elements.iBanking.posbBank['posbTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.posbBank['step1'], iBankingURL.posbBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.posbBank['step2'], iBankingURL.posbBank['step2']);

            // Verify Step 3 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.posbBank['step3'], iBankingURL.posbBank['step3']);

            // Verify Step 4 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.posbBank['step4'], iBankingURL.hcs.posbBank['step4']);

        });

        test('User sees correct OCBC Bank screenshots', async () => {

            //Wait and click for OCBC Bank tab in HCS page 
            await page.waitForSelector(elements.iBanking.ocbcBank['ocbcTab']);
            await page.click(elements.iBanking.ocbcBank['ocbcTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.ocbcBank['step1'], iBankingURL.ocbcBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.ocbcBank['step2'], iBankingURL.ocbcBank['step2']);

            // Verify Step 3 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.ocbcBank['step3'], iBankingURL.ocbcBank['step3']);

            // Verify Step 4 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.ocbcBank['step4a'], iBankingURL.ocbcBank['step4a']);
            await pageFunc.verifyImageUrl(page, iBankingElms.ocbcBank['step4b'], iBankingURL.ocbcBank['step4b']);

            // Verify Step 5 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.ocbcBank['step5'], iBankingURL.hcs.ocbcBank['step5']);

        });

        test('User sees correct UOB Bank screenshots', async () => {

            //Wait and click for UOB Bank tab in HCS page 
            await page.waitForSelector(elements.iBanking.uobBank['uobTab']);
            await page.click(elements.iBanking.uobBank['uobTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.uobBank['step1'], iBankingURL.uobBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.uobBank['step2'], iBankingURL.uobBank['step2']);

            // Verify Step 3 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.uobBank['step3'], iBankingURL.hcs.uobBank['step3']);

        });

        test('User sees correct Standard Chartered Bank screenshots', async () => {

            //Wait and click for SCB Bank tab in HCS page 
            await page.waitForSelector(elements.iBanking.standardCharteredBank['standardTab']);
            await page.click(elements.iBanking.standardCharteredBank['standardTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.standardCharteredBank['step1'], iBankingURL.standardCharteredBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.standardCharteredBank['step2'], iBankingURL.standardCharteredBank['step2']);

            // Verify Step 3 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.standardCharteredBank['step3'], iBankingURL.standardCharteredBank['step3']);

            // Verify Step 4 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.standardCharteredBank['step4'], iBankingURL.standardCharteredBank['step4']);

            // Verify Step 5 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.standardCharteredBank['step5'], iBankingURL.hcs.standardCharteredBank['step5']);

        });

        test('User sees correct Citibank screenshots', async () => {

            //Wait and click for CitiBank tab in HCS page 
            await page.waitForSelector(elements.iBanking.citiBank['citiTab']);
            await page.click(elements.iBanking.citiBank['citiTab'], { delay: 1000 });

            // Verify Step 1 - Add HOGC as a payee image
            await pageFunc.verifyImageUrl(page, iBankingElms.citiBank['step1'], iBankingURL.citiBank['step1']);

            // Verify Step 2 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.citiBank['step2'], iBankingURL.citiBank['step2']);

            // Verify Step 3 - Add HOGC as a payee
            await pageFunc.verifyImageUrl(page, iBankingElms.citiBank['step3'], iBankingURL.citiBank['step3']);

            // Verify Step 4 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.citiBank['step4'], iBankingURL.citiBank['step4']);

            // Verify Step 5 - One-Time Giving (FAST)
            await pageFunc.verifyImageUrl(page, iBankingElms.citiBank['step5'], iBankingURL.hcs.citiBank['step5']);

        });

        test.afterAll(async () => {
            await page.close();
        });

    });