// Make sure Everything has loaded correctly
describe("Basic Assumptions", function() {

    it("has ExtJS4 loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(2);
    });

    it("has loaded MyApp code",function(){
        expect(MyApp).toBeDefined();
    });
});