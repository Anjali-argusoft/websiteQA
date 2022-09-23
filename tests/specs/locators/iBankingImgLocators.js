module.exports = {
    posbBank: {
        step1: '[data-test-id="ibanking-dbs-menu"]',
        step2: '[data-test-id="ibanking-dbs-add-payee"]',
        step3: '[data-test-id="ibanking-dbs-other-account"]',
        step4: '[data-test-id="ibanking-dbs-comments"]'
    },
    ocbcBank: {
        step1: '[data-test-id="ibanking-ocbc-menu"]',
        step2: '[data-test-id="ibanking-ocbc-add-payee"]',
        step3: '[data-test-id="ibanking-ocbc-enter-details"]',
        step4a: '[data-test-id="ibanking-ocbc-other-account"]',
        step4b: '[data-test-id="ibanking-ocbc-transfer-from"]',
        step5: '[data-test-id="ibanking-ocbc-transfer-purpose"]'
    },
    uobBank: {
        step1: '[data-test-id="ibanking-uob-menu"]',
        step2: '[data-test-id="ibanking-uob-enter-details"]',
        step3: '[data-test-id="ibanking-uob-my-initials"]',
    },
    standardCharteredBank: {
        step1: '[data-test-id="ibanking-sc-menu"]',
        step2: '[data-test-id="ibanking-sc-add-payee"]',
        step3: '[data-test-id="ibanking-sc-enter-details"]',
        step4: '[data-test-id="ibanking-sc-local-transfer"]',
        step5: '[data-test-id="ibanking-sc-transfer-once"]'
    },
    citiBank: {
        step1: '[data-test-id="ibanking-citi-menu"]',
        step2: '[data-test-id="ibanking-citi-add-payee"]',
        step3: '[data-test-id="ibanking-citi-enter-details"]',
        step4: '[data-test-id="ibanking-citi-payment-transfer"]',
        step5: '[data-test-id="ibanking-citi-fast-transfer"]'
    },
    recurring: {
        posbBank: {
            posbTab: '[for="paynow-checkbox"]',
            step1: '[data-test-id="ibanking-dbs-menu"]',
            step2: '[data-test-id="ibanking-dbs-enter-details"]',
            step3a: '[data-test-id="ibanking-dbs-more-services"]',
            step3b: '[data-test-id="ibanking-dbs-standing-instructions"]',
            step4a: '[data-test-id="ibanking-dbs-recipient"]',
            step4b: '[data-test-id="ibanking-dbs-payment-frequency"]'
        },
        ocbcBank: {
            step1: '[data-test-id="ibanking-ocbc-menu"]',
            step2: '[data-test-id="ibanking-ocbc-add-payee"]',
            step3: '[data-test-id="ibanking-ocbc-enter-details"]',
            step4a: '[data-test-id="ibanking-ocbc-make-transfer"]',
            step4b: '[data-test-id="ibanking-ocbc-transfer-from"]',
            step5: '[data-test-id="ibanking-ocbc-transfer-purpose"]'
        },
        uobBank: {
            step1: '[data-test-id="ibanking-uob-menu"]',
            step2: '[data-test-id="ibanking-uob-add-payee"]',
            step3: '[data-test-id="ibanking-uob-my-initials"]',
        },
        standardCharteredBank: {
            standardTab: '[for="sc-checkbox"]',
            step1: '[data-test-id="ibanking-sc-menu"]',
            step2: '[data-test-id="ibanking-sc-add-payee"]',
            step3: '[data-test-id="ibanking-sc-enter-details"]',
            step4: '[data-test-id="ibanking-sc-local-transfer"]',
            step5: '[data-test-id="ibanking-sc-transfer-monthly"]'
        },
        citiBank: {
            citiTab: '[for="citi-checkbox"]',
            step1: '[data-test-id="ibanking-citi-menu"]',
            step2: '[data-test-id="ibanking-citi-payee-type"]',
            step3: '[data-test-id="ibanking-citi-enter-details"]',
            step4: '[data-test-id="ibanking-citi-payment-transfer"]',
            step5: '[data-test-id="ibanking-citi-set-schedule"]'
        },
        not_on_text: {
            register_checkbox: '[for="register-checkbox"]',
            step1: '[data-test-id="sms-text-message"]',
            step2: '[data-test-id="sms-enter-information"]',
            step3: '[data-test-id="sms-cover-fees"]',
            step4: '[data-test-id="sms-text-format"]',
        },
        already_on_text: {
            recurring_checkbox: '[for="recurring-checkbox"]',
            step1: '[data-test-id="existing-sms-text-format"]',
        },

    }
}