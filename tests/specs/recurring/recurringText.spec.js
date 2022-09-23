
import elements from '../locators/pageTextLocators'; // Page Text Locators
import * as pageFunc from '../utils/pageTextFunction'; // Use function defined in utils
import recurringElms from '../locators/iBankingImgLocators';
import testData from '../testdata/pageTextTestData'; // Give Page data

const { test, expect } = require('@playwright/test');

test.describe(
    'Recurring Page Text Scenario',
    async () => {
        let page;
        test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });
        test.beforeEach(async ({ browser }) => {
            await page.goto(elements.url['recurring_url']);
        });

        test('Users see correct info for SMS (Text-to-give)', async () => {
            //Wait for tab
            await pageFunc.clickElement(page, recurringElms.recurring.not_on_text['register_checkbox'])

            // Wait for SMS text selector
            await page.waitForSelector(elements.sms['smsTextLocator']);

            // Verify user will see correct number
            await expect(page.locator(elements.sms['smsTextLocator'])).toContainText(
                testData.sms['smsTextData']
            );
        });

        test('Users see correct info for POSB/DBS iBanking', async () => {
            // Verify information
            await pageFunc.verifyPosbDbsBankInfo(page, 'true');
        })

        test('Users see correct info for OCBC iBanking', async () => {
            // Verify information
            await pageFunc.verifyOCBCBankInfo(page);
        })

        test('Users see correct info for UOB iBanking', async () => {
            // Verify information
            await pageFunc.verifyUOBBankInfo(page);
        })

        test('Users see correct info for Standard Chartered Bank', async () => {
            // Verify information
            await pageFunc.verifySCBBankInfo(page, 'true');
        })

        test('Users see correct info for Citibank', async () => {
            // Verify information
            await pageFunc.verifyCitiBankInfo(page, 'true');
        })

        test.afterAll(async () => {
            await page.close();
        });

    });