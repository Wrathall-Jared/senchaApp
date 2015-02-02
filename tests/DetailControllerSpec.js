// Test the detail controller
describe('detailController', function() {
    var controller = null;

    beforeEach(function() {
        controller = MyApp.app.getController('MyApp.controller.detailController');
        store = Ext.getStore('MyContacts');
    });

    describe('saveContact', function() {
        it('save jared contact', function() {
            controller.saveContact('1', 'Jared', 'Georgia', 'lala@gmail.com', 24, 'male', 'this is a test');
            expect(store.getCount()).toBeGreaterThan(0);
        });
    });

    describe('saveContact', function() {
        it('save dallin contact', function() {
            controller.saveContact('2', 'Dallin', 'Utah', 'lds@gmail.com', 20, 'male', 'this is a test');
            expect(store.getCount()).toBeGreaterThan(1);
        });
    });

});