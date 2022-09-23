module.exports = {
    wrong_amount_ques: {
        faq_wrong_amount_locator: '[for= "faq-giving-wrong"]',
        faq_wrong_amount_email: "//p[contains(text(),'If you have texted a wrong amount')]//a[@data-test-id='email-hotline']",
        faq_wrong_amount_phone: "//p[contains(text(),'If you have texted a wrong amount')]//a[@data-test-id='phone-hotline']",
    },
    change_mobile_no_que: {
        faq_change_mbl_tab_loc: '[for="faq-phone-change"]',
        faq_change_mobile_email: "(//a[@data-test-id='email-hotline'][normalize-space()='accounts@heartofgodchurch.org'])[2]",
        faq_change_mobile_phone: "(//a[contains(text(),'68462529')])[2]"
    },
    lose_mobile_que: {
        faq_lose_mobile_tab_loc: '[for="faq-phone-loss"]',
        faq_lose_mobile_email: "//p[contains(text(),'We would recommend')]//a[@data-test-id='email-hotline']",
        faq_lose_mobile_phone: "//p[contains(text(),'We would recommend')]//a[@data-test-id='phone-hotline']"
    },
    overseas_giving: {
        faq_overseas_tab: '[for="faq-overseas"]',
        faq_overseas_phone: '[data-test-id="overseas-phone-hotline"]',
    },
    user_detail: {
        faq_user_detail_tab: '[for="faq-hogc-details"]',
        faq_user_detail_url_locator: '[data-test-id="give-website"]',
    },
    faq_sms: '[data-test-id="phone-hotline"]',
    attribute: 'href'
}