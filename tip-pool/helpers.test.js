describe('Helpers Tests', () => {
    it("calculates the tipAmt correctly with sumPaymentTotal", function () {
        allPayments = {};

        billAmtInput.value = 10;
        tipAmtInput.value = 2;
    
        submitPaymentInfo();

        let val = sumPaymentTotal('tipAmt');
        expect(val).toEqual(2)

        billAmtInput.value = 10;
        tipAmtInput.value = 4;
        submitPaymentInfo();
        
        val = sumPaymentTotal('tipAmt');
        expect(val).toEqual(6)
    });

    it("calculates the billAmt correctly with sumPaymentTotal", function () {
        allPayments = {};

        const val = sumPaymentTotal("billAmt");
        expect(val).toEqual(0);
    });

    it("calculates the tipPercent correctly with sumPaymentTotal", function () {
        allPayments = {};

        billAmtInput.value = 10;
        tipAmtInput.value = 4;
        submitPaymentInfo();

        const val = sumPaymentTotal("tipPercent");
        expect(val).toEqual(40);
    });

    it("calculates the tipPercent with calculateTipPercent", () => {
        const val = calculateTipPercent(10, 2);

        expect(val).toEqual(20);
    });

    it("appends a td to a tr with appendTd", () => {
        const tr = document.createElement("tr");
        const val = "test";

        appendTd(tr, val);

        expect(tr.children[0].innerText).toEqual(val);
    });
});