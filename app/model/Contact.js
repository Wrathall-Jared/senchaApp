Ext.define('MyApp.model.Contact', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.proxy.LocalStorage',
        'Ext.data.identifier.Uuid'
    ],
    config: {
         identifier: 'uuid',
        idProperty: 'id',
        fields: [
            'id', 'name', 'address', 'email', { name: 'age', type: 'int'}, 'gender', 'notes'
        ],

        proxy: {
            type: 'localstorage',
            id: 'StoredContacts1'
        },

        dirty: true

    }
});