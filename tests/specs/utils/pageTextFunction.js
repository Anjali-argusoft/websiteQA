import elements from '../locators/pageTextLocators';
import recuringElems from '../locators/iBankingImgLocators';
import testData from '../testdata/pageTextTestData';
const { expect } = require('@playwright/test');

async function verifySmsInfo(page) {
    // Wait for SMS tab to get expand
    await page.waitForSelector(elements.sms['smsTextTabLocator']);

    // Click on SMS tab accoridan to expand
    await page.click(elements.sms['smsTextTabLocator'], {
        delay: 1000,
    });

    // Wait for SMS text selector
    await page.waitForSelector(elements.sms['smsTextLocator']);

    // Verify user will see correct number
    await expect(page.locator(elements.sms['smsTextLocator'])).toContainText(
        testData.sms['smsTextData']
    );

}

async function verifyCashAndChequeInfo(page) {

    // Wait for cheque name selector
    await page.waitForSelector(elements.cashAndCheque['chequeNameLocator']);

    // Verify user will see correct cheque name
    await expect(page.locator(elements.cashAndCheque['chequeNameLocator'])).toContainText(
        testData.cashAndCheque['chequeName'],
    );

    // Wait for cheque address selector
    await page.waitForSelector(elements.cashAndCheque['chequeAddressLocator']);

    // Verify user will see correct cheque address
    await expect(page.locator(elements.cashAndCheque['chequeAddressLocator'])).toContainText(
        testData.cashAndCheque['chequeAddress'],
    );
}

async function verifyPosbDbsBankInfo(page, isRecurring) {

    if (isRecurring == 'true') {
        // Wait for posb/dbs bank selector
        await page.waitForSelector(recuringElems.recurring.posbBank['posbTab']);

        // Click on posb/dbs bank tab accordian to expand
        await page.click(recuringElems.recurring.posbBank['posbTab'], {
            delay: 1000,
        });

    } else {
        // Wait for posb/dbs bank selector
        await page.waitForSelector(elements.iBanking.posbBank['posbTab']);

        // Click on posb/dbs bank tab accordian to expand
        await page.click(elements.iBanking.posbBank['posbTab'], {
            delay: 1000,
        });
    }

    //Scroll into view if needed to verify payee details
    await page.locator(elements.iBanking.posbBank['pos_dbs_payee']).scrollIntoViewIfNeeded();

    // Verify user will see correct recipient name
    await expect(page.locator(elements.iBanking.posbBank['pos_dbs_payee'])).toContainText(
        testData.iBanking.posbBank['name'],
    );

    // Verify user will see correct recipient account number
    await expect(page.locator(elements.iBanking.posbBank['pos_dbs_payee'])).toContainText(
        testData.iBanking.posbBank['accountNo'],
    );
}

async function verifyOCBCBankInfo(page) {

    // Wait for ocbc bank selector
    await page.waitForSelector(elements.iBanking.ocbcBank['ocbcTab']);

    // Click on ocbc bank tab accordian to expand
    await page.click(elements.iBanking.ocbcBank['ocbcTab'], {
        delay: 1000,
    });

    //Scroll into view if needed to verify payee details
    await page.locator(elements.iBanking.ocbcBank['ocbc_payee']).scrollIntoViewIfNeeded();

    // Verify user will see correct bank name
    await expect(page.locator(elements.iBanking.ocbcBank['ocbc_payee'])).toContainText(
        testData.iBanking.ocbcBank['bankName'],
    );

    // Verify user will see correct recipient name
    await expect(page.locator(elements.iBanking.ocbcBank['ocbc_payee'])).toContainText(
        testData.iBanking.ocbcBank['name'],
    );

    // Verify user will see correct recipient account number
    await expect(page.locator(elements.iBanking.ocbcBank['ocbc_payee'])).toContainText(
        testData.iBanking.ocbcBank['accountNo'],
    );
}

async function verifyUOBBankInfo(page) {

    // Wait for uob bank selector
    await page.waitForSelector(elements.iBanking.uobBank['uobTab']);

    // Click on uob bank tab accordian to expand
    await page.click(elements.iBanking.uobBank['uobTab'], {
        delay: 1000,
    });

    //Scroll into view if needed to verify payee details
    await page.locator(elements.iBanking.uobBank['uob_payee']).scrollIntoViewIfNeeded();

    // Verify user will see correct bank name
    await expect(page.locator(elements.iBanking.uobBank['uob_payee'])).toContainText(
        testData.iBanking.uobBank['bankName'],
    );

    // Verify user will see correct recipient name
    await expect(page.locator(elements.iBanking.uobBank['uob_payee'])).toContainText(
        testData.iBanking.uobBank['name'],
    );

    // Verify user will see correct recipient account number
    await expect(page.locator(elements.iBanking.uobBank['uob_payee'])).toContainText(
        testData.iBanking.uobBank['accountNo'],
    );

    // Verify user will see correct nickName
    await expect(page.locator(elements.iBanking.uobBank['uob_payee'])).toContainText(
        testData.iBanking.uobBank['nickName'],
    );
}

async function verifySCBBankInfo(page, isRecurring) {

    if (isRecurring == 'true') {
        // Wait for posb/dbs bank selector
        await page.waitForSelector(recuringElems.recurring.standardCharteredBank['standardTab']);

        // Click on posb/dbs bank tab accordian to expand
        await page.click(recuringElems.recurring.standardCharteredBank['standardTab'], {
            delay: 1000,
        });

    } else {
        // Wait for standardChartered bank selector
        await page.waitForSelector(elements.iBanking.standardCharteredBank['standardTab']);

        // Click on standardChartered bank tab accordian to expand
        await page.click(elements.iBanking.standardCharteredBank['standardTab'], {
            delay: 1000,
        });
    }

    //Scroll into view if needed to verify payee details
    await page.locator(elements.iBanking.standardCharteredBank['scb_payee']).scrollIntoViewIfNeeded();

    // Verify user will see correct bank name
    await expect(page.locator(elements.iBanking.standardCharteredBank['scb_payee'])).toContainText(
        testData.iBanking.standardCharteredBank['bankName'],
    );

    // Verify user will see correct recipient name
    await expect(page.locator(elements.iBanking.standardCharteredBank['scb_payee'])).toContainText(
        testData.iBanking.standardCharteredBank['name'],
    );

    // Verify user will see correct recipient account number
    await expect(page.locator(elements.iBanking.standardCharteredBank['scb_payee'])).toContainText(
        testData.iBanking.standardCharteredBank['accountNo'],
    );
}

async function verifyCitiBankInfo(page, isRecurring) {

    if (isRecurring == 'true') {
        // Wait for posb/dbs bank selector
        await page.waitForSelector(recuringElems.recurring.citiBank['citiTab']);

        // Click on posb/dbs bank tab accordian to expand
        await page.click(recuringElems.recurring.citiBank['citiTab'], {
            delay: 1000,
        });
    } else {
        // Wait for citi bank selector
        await page.waitForSelector(elements.iBanking.citiBank['citiTab']);

        // Click on citi bank tab accordian to expand
        await page.click(elements.iBanking.citiBank['citiTab'], {
            delay: 1000,
        });
    }

    //Scroll into view if needed to verify payee details
    await page.locator(elements.iBanking.citiBank['citi_payee']).scrollIntoViewIfNeeded();


    // Verify user will see correct bank name
    await expect(page.locator(elements.iBanking.citiBank['citi_payee'])).toContainText(
        testData.iBanking.citiBank['bicCode'],
    );

    // Verify user will see correct recipient name
    await expect(page.locator(elements.iBanking.citiBank['citi_payee'])).toContainText(
        testData.iBanking.citiBank['name'],
    );

    // Verify user will see correct recipient account number
    await expect(page.locator(elements.iBanking.citiBank['citi_payee'])).toContainText(
        testData.iBanking.citiBank['accountNo'],
    );

}

async function clickElement(page, locator) {
    // Wait for tab to get expand
    await page.waitForSelector(locator);

    // Click on tab accordian to expand
    await page.click(locator, {
        delay: 1000,
    });
}

export {
    verifySmsInfo,
    verifyCashAndChequeInfo,
    verifyPosbDbsBankInfo,
    verifyOCBCBankInfo,
    verifyUOBBankInfo,
    verifySCBBankInfo,
    verifyCitiBankInfo,
    clickElement
};