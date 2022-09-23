import urlElements from '../locators/pageUrlLocators';
import elements from '../locators/pageTextLocators';

const { expect } = require('@playwright/test');

async function verifyImageUrl(page, locator, image_src) {

    //Scroll into view if needed to verify payee details
    await page.locator(locator).scrollIntoViewIfNeeded();

    //Wait for locator
    await page.waitForSelector(locator);

    // Verify locator has valid src attribute
    await expect.soft(page.locator(locator)).toHaveAttribute(
        urlElements.attribute,
        image_src);
}

async function verifyLinkUrl(page, locator, link) {

    //Scroll into view if needed to verify payee details
    await page.locator(locator).scrollIntoViewIfNeeded();

    //Wait for locator
    await page.waitForSelector(locator);

    // Verify locator has valid href attribute
    await expect.soft(page.locator(locator)).toHaveAttribute(
        elements.attribute,
        link);
}

export {
    verifyImageUrl,
    verifyLinkUrl
};