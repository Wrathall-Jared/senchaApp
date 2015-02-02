Ext.define('MyApp.view.ListView', {
    extend: 'Ext.Panel',

    config: {

        layout: 'hbox',

        defaults: {
            xtype: 'component'
        },

        // Panel Items
        items: [{
            // CRUD Tool Bar 
            height: Ext.os.deviceType == 'Phone' ? null : '8%',
            xtype: 'toolbar',
            docked: 'top',
            layout: {
                pack: 'center',
                type: 'hbox'
            },
            items: [

                // Add contact button
                {
                    height: Ext.os.deviceType == 'Phone' ? null : '50px',
                    width: Ext.os.deviceType == 'Phone' ? null : '50px',
                    xtype: 'button',
                    ui: 'round',
                    iconCls: 'add',
                    align: 'right',
                    id: 'AddContactButton'
                }
            ] // End CRUD bar items
        }, {
            xtype: 'list',
            store: 'MyContacts',
            itemTpl: '{name} {age} {gender}',
            id: 'ContactList',
            flex: 1

        }] // End of Container Items
    }
});