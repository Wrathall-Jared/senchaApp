Ext.require('Ext.app.Application');


var Application = null;
Ext.setup({

    onReady: function() {
        Application = Ext.create('Ext.app.Application', {
            name: 'MyApp',

            controllers: [
                'detailController'
            ],

            stores: [
                'ContactsStore'
            ],
            models: [
                'Contact'
            ],

            launch: function() {
                //include the tests in the test.html head
                // jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
                // jasmine.getEnv().execute();
                window.onReady();
            }
        });
    }

});