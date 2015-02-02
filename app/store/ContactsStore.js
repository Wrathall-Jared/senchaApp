Ext.define('MyApp.store.ContactsStore', {
    extend: 'Ext.data.Store',
    requires: ['MyApp.model.Contact'],

    config: {
        autoLoad: true,
        model: 'MyApp.model.Contact',
        storeId: 'MyContacts',
        autoSync: true,

    },

});