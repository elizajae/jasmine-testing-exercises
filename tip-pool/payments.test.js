describe('Payments Tests', () => {
    it("submitPaymentInfo adds a new payment to allPayments on submit", () => {
        allPayments = {};

        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
    });

    it("createCurPayment returns undefined with negative or empty inputs", () => {
        billAmtInput.value = '';
        tipAmtInput.value = '';

        let val = createCurPayment();

        expect(val).toEqual(undefined);

        
        billAmtInput.value = 10;
        tipAmtInput.value = 2;

        val = createCurPayment();

        expect(val).toEqual({
            billAmt: '10',
            tipAmt: '2',
            tipPercent: 20
        });
    })

    it("appendPaymentTable creates a new table row and appends to paymentTbody", () => {
        billAmtInput.value = 10;
        tipAmtInput.value = 2;

        paymentTbody.children = []

        val = createCurPayment();

        appendPaymentTable(val);

        expect(paymentTbody.children.length).toEqual(5);
    });
});