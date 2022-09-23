
import elements from '../locators/pageTextLocators'; // Page Text Locators
import * as pageFunc from '../utils/pageTextFunction'; // Use function defined in utils

const { test, expect } = require('@playwright/test');

test.describe(
    'General Fund Page Text Scenario',
    async () => {
        let page;
        test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });
        test.beforeEach(async ({ browser }) => {
            await page.goto(elements.url['generalFund_url']);
        });

        test('Users see correct info for SMS (Text-to-give)', async () => {
            await pageFunc.verifySmsInfo(page);
        });

        test('Users see correct info for Cash and Cheque', async () => {
            // Wait and click Tab accordian
            await pageFunc.clickElement(page, elements.cashAndCheque['cashAndChequeTab']);
            // Verify information
            await pageFunc.verifyCashAndChequeInfo(page);
        });

        test('Users see correct info for POSB/DBS iBanking', async () => {
            // Wait and click iBanking tab to get expand
            await pageFunc.clickElement(page, elements.iBanking['iBankingTab']);
            // Verify information
            await pageFunc.verifyPosbDbsBankInfo(page, 'false');
        })

        test('Users see correct info for OCBC iBanking', async () => {
            // Wait and click iBanking tab to get expand
            await pageFunc.clickElement(page, elements.iBanking['iBankingTab']);
            // Verify information
            await pageFunc.verifyOCBCBankInfo(page);
        })

        test('Users see correct info for UOB iBanking', async () => {
            // Wait and click iBanking tab to get expand
            await pageFunc.clickElement(page, elements.iBanking['iBankingTab']);
            // Verify information
            await pageFunc.verifyUOBBankInfo(page);
        })

        test('Users see correct info for Standard Chartered Bank', async () => {
            // Wait and click iBanking tab to get expand
            await pageFunc.clickElement(page, elements.iBanking['iBankingTab']);
            // Verify information
            await pageFunc.verifySCBBankInfo(page, 'false');
        })

        test('Users see correct info for Citibank', async () => {
            // Wait and click iBanking tab to get expand
            await pageFunc.clickElement(page, elements.iBanking['iBankingTab']);
            // Verify information
            await pageFunc.verifyCitiBankInfo(page, 'false');
        })

        test.afterAll(async () => {
            await page.close();
        });
    });