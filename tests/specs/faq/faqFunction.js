import faqLocator from '../faq/faqPageLocators'; // FAQ Locators
import faqTestData from '../faq/faqTestData'; // FAQ TestData

const { expect } = require('@playwright/test');

async function verifyFaqEmail(page, emailLocator) {
    // Verify FAQ email have href valid attribute
    await expect(page.locator(emailLocator)).toHaveAttribute(
        faqLocator.attribute, faqTestData.faq_email_link
    );

    // verify email has valid value 
    await expect(page.locator(emailLocator)).toHaveText(
        faqTestData.faq_email
    );

    // Verify email link is clickable
    await expect(page.locator(emailLocator)).toBeEnabled();

}

async function verifyFaqPhone(page, phoneLocator) {
    // Verify FAQ phone have href valid attribute
    await expect(page.locator(phoneLocator)).toHaveAttribute(
        faqLocator.attribute, faqTestData.faq_phone_link
    );

    // verify phone has valid value 
    await expect(page.locator(phoneLocator)).toHaveText(
        faqTestData.faq_phone
    );

    // Verify phone link is clickable
    await expect(page.locator(phoneLocator)).toBeEnabled();
}

export {
    verifyFaqEmail,
    verifyFaqPhone
};