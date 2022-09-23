
import elements from '../locators/pageTextLocators'; // Page Text Locators
import faqLocator from '../faq/faqPageLocators'; // FAQ Locators
import faqTestData from '../faq/faqTestData'; // FAQ TestData

import * as faqFunc from '../faq/faqFunction'; // Use function defined in utils

const { test, expect } = require('@playwright/test');

test.describe(
    'FAQ Page Scenario',
    async () => {
        let page;
        test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });
        test.beforeEach(async ({ browser }) => {
            await page.goto(elements.url['faq_url']);
        });

        test('Users see correct info for What happens if I have texted the wrong amount?', async () => {

            // Wait for What happens if I have texted the wrong amount? accordian selector
            await page.waitForSelector(faqLocator.wrong_amount_ques['faq_wrong_amount_locator']);

            // Click on tab accordian to expand
            await page.click(faqLocator.wrong_amount_ques['faq_wrong_amount_locator'], {
                delay: 1000,
            });

            await faqFunc.verifyFaqEmail(page, faqLocator.wrong_amount_ques['faq_wrong_amount_email']);
            await faqFunc.verifyFaqPhone(page, faqLocator.wrong_amount_ques['faq_wrong_amount_phone'])

        });

        test('Users see correct info for What happens if I change my mobile phone number?', async () => {

            // Wait for What happens if I change my mobile phone number? accordian selector
            await page.waitForSelector(faqLocator.change_mobile_no_que['faq_change_mbl_tab_loc']);

            // Click on tab accordian to expand
            await page.click(faqLocator.change_mobile_no_que['faq_change_mbl_tab_loc'], {
                delay: 1000,
            });

            await faqFunc.verifyFaqEmail(page, faqLocator.change_mobile_no_que['faq_change_mobile_email']);
            await faqFunc.verifyFaqPhone(page, faqLocator.change_mobile_no_que['faq_change_mobile_phone'])

        });

        test('Users see correct info for What happens if I lose my mobile phone?', async () => {

            // Wait for What happens if I lose my mobile phone? accordian selector
            await page.waitForSelector(faqLocator.lose_mobile_que['faq_lose_mobile_tab_loc']);

            // Click on tab accordian to expand
            await page.click(faqLocator.lose_mobile_que['faq_lose_mobile_tab_loc'], {
                delay: 1000,
            });

            await faqFunc.verifyFaqEmail(page, faqLocator.lose_mobile_que['faq_lose_mobile_email']);
            await faqFunc.verifyFaqPhone(page, faqLocator.lose_mobile_que['faq_lose_mobile_phone'])

        });

        test('Users see correct info for Can I use Text-to-Give when I am overseas?', async () => {
            // Wait for Can I use Text-to-Give when I am overseas? accordian selector
            await page.waitForSelector(faqLocator.overseas_giving['faq_overseas_tab']);

            // Click on tab accordian to expand
            await page.click(faqLocator.overseas_giving['faq_overseas_tab'], {
                delay: 1000,
            });

            // Verify FAQ phone have href valid attribute
            await expect(page.locator(faqLocator.overseas_giving['faq_overseas_phone'])).toHaveAttribute(
                faqLocator.attribute, faqTestData.faq_overseas_phone_link
            );

            // verify phone has valid value 
            await expect(page.locator(faqLocator.overseas_giving['faq_overseas_phone'])).toHaveText(
                faqTestData.faq_overseas_phone_data
            );

        });

        test('Users see correct info for How do I change my user details?', async () => {
            // Wait for How do I change my user details? ? accordian selector
            await page.waitForSelector(faqLocator.user_detail['faq_user_detail_tab']);

            // Click on tab accordian to expand
            await page.click(faqLocator.user_detail['faq_user_detail_tab'], {
                delay: 1000,
            });

            /// Verify user detail have href valid attribute
            await expect(page.locator(faqLocator.user_detail['faq_user_detail_url_locator'])).toHaveAttribute(
                faqLocator.attribute, faqTestData.faq_user_detail_link
            );

            // verify user detail has valid url value 
            await expect(page.locator(faqLocator.user_detail['faq_user_detail_url_locator'])).toHaveText(
                faqTestData.faq_user_detail_url_value
            );

        })

        test.afterAll(async () => {
            await page.close();
        });
    });