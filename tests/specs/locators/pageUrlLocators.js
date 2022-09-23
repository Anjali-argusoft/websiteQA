module.exports = {
    payNow: {
        payNow_locator: '[for="paynow-checkbox"]',
        payNow_qr_scan: '[data-test-id="paynow-qr"]',
    },
    steps_locator: {
        step1: '[data-test-id="sms-text-message"]',
        step2: '[data-test-id="sms-enter-information"]',
        step3: '[data-test-id="sms-cover-fees"]',
        step4a: '[data-test-id="sms-text-format"]',
        step4b: '[data-test-id="sms-emoji-giving"]'
    },
    cc_tab: '[for="cc-checkbox"]',
    cc_locator: '[data-test-id="credit-card-payment"]',
    eNets_tab: '[for="enets-checkbox"]',
    attribute: 'src',
    cc_give_link: '[data-test-id="credit-card-give"]',
    eNets_link: '[data-test-id="enets-give"]',

}