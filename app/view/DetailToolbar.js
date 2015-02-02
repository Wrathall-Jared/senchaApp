Ext.define('MyApp.view.DetailToolbar', {
    extend: 'Ext.Toolbar',
    docked: 'top',
    config: {

        height: Ext.os.deviceType == 'Phone' ? null : '8%',
        layout: {
            //pack: 'center',
            type: 'hbox'
        },
        items: [

            // Back Button
            {
                height: Ext.os.deviceType == 'Phone' ? null : '50px',
                width: Ext.os.deviceType == 'Phone' ? null : '50px',
                xtype: 'button',
                align: 'left',
                ui: 'back',
                iconCls: 'arrow_left',
                id: 'detailBackButton'
            },

            // Space between buttons
            {
                xtype: 'spacer'
            },

            // Back Button
            {
                height: Ext.os.deviceType == 'Phone' ? null : '50px',
                width: Ext.os.deviceType == 'Phone' ? null : '50px',
                flex: Ext.os.deviceType == 'Phone' ? 2 : null,
                xtype: 'button',
                align: 'left',
                iconCls: 'compose',
                id: 'detailEditButton'
            },

            // Space between buttons
            {
                xtype: 'spacer'
            },

            // Delete Contact Button
            {
                height: Ext.os.deviceType == 'Phone' ? null : '50px',
                width: Ext.os.deviceType == 'Phone' ? null : '50px',
                xtype: 'button',
                align: 'center',
                ui: 'round',
                iconCls: 'trash',
                id: 'detailDeleteContactButton',
                reference: 'DeleteButton'

            } // End Delete Contact Button

        ], // End Tool Bar Items

        initialize: function() {
            Ext.getCmp('detailDeleteContactButton').on('tap', 'customDeleteButtonTap', this);
        }
    }
})