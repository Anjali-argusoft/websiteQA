
import elements from '../locators/pageTextLocators'; // Page Text Locators
import urlElements from '../locators/pageUrlLocators'; // Page URL Locators
import imageLink from '../testdata/pageSrc'; // Page URL Locators

import * as pageFunc from '../utils/pageFunction'; // Use function defined in utils

const { test, expect } = require('@playwright/test');

test.describe(
    'Tithes Page Link Scenario',
    async () => {
        let page;
        test.beforeAll(async ({ browser }) => {
            page = await browser.newPage();
        });
        test.beforeEach(async ({ browser }) => {
            await page.goto(elements.url['tithes_url']);
        });

        test('User goes to the right link to give by Credit Card', async () => {

            //Wait and click for credit card tab in tithes page 
            await page.waitForSelector(urlElements.cc_tab);
            await page.click(urlElements.cc_tab, { delay: 1000 });

            // Verify User goes to the right link to give by Credit Card
            await pageFunc.verifyLinkUrl(page, urlElements.cc_give_link, imageLink.tithely_cc_url);
        });

        test('User goes to the right link to give by eNETs', async () => {

            //Wait and click for eNETs tab in tithes page 
            await page.waitForSelector(urlElements.eNets_tab);
            await page.click(urlElements.eNets_tab, { delay: 1000 });

            // Verify User goes to the right link to give by eNETs
            await pageFunc.verifyLinkUrl(page, urlElements.eNets_link, imageLink.eNets_url);
        });


        test.afterAll(async () => {
            await page.close();
        });

    });