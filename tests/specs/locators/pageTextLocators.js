module.exports = {
    sms: {
        smsTextTabLocator: '[for="ttg-checkbox"]',
        smsTextLocator: '[data-test-id="sms-phone-hotline"]',
    },
    cashAndCheque: {
        cashAndChequeTab: '[for="cash-checkbox"]',
        chequeNameLocator: '[data-test-id="cash-name"]',
        chequeAddressLocator: '[data-test-id="cash-address"]',
    },
    iBanking: {
        iBankingTab: '[for="ibanking-checkbox"]',
        posbBank: {
            posbTab: '[for="posb-checkbox"]',
            pos_dbs_payee: '[data-test-id="ibanking-dbs-payee-info"]',
        },
        ocbcBank: {
            ocbcTab: '[for="ocbc-checkbox"]',
            ocbc_payee: '[data-test-id="ibanking-ocbc-payee-info"]'
        },
        uobBank: {
            uobTab: '[for="uob-checkbox"]',
            uob_payee: '[data-test-id="ibanking-uob-payee-info"]'
        },
        standardCharteredBank: {
            standardTab: '[for="scb-checkbox"]',
            scb_payee: '[data-test-id="ibanking-sc-payee-info"]',
        },
        citiBank: {
            citiTab: '[for="citibank-checkbox"]',
            citi_payee: '[data-test-id="ibanking-citi-payee-info"]'
        }
    },

    url: {
        offering_url: '/give/offerings',
        tithes_url: '/give/tithes',
        buildingFund_url: '/give/building-fund',
        generalFund_url: '/give/general-fund',
        hcs_url: '/give/heart-community-services',
        missions_url: '/give/missions',
        recurring_url: '/give/recurring-giving',
        faq_url: '/give/faq'
    },
    attribute: 'href'


}