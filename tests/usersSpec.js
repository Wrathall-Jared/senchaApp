describe("Contacts", function() {
    var store = null , ctlr = null;

    beforeEach(function() {
        if (!ctlr) {
            ctlr = Application.getController('detailController');
        }

        if (!store) {
            store = Ext.getStore('MyContacts');
        }
    });

    it("should have loaded", function() {
        expect(store).toBeTruthy();
    });

    it("should have contacts", function() {
        expect(store.getCount()).toBeGreaterThan(1);
    });


});