Ext.define('MyApp.view.Phone.Main', {
    extend: 'Ext.Container',
    config: {
        layout: {
            type: 'fit'
        },

        // Items of the Main Container        
        items: [

            // First Item is Tab Panel
            {
                xtype: 'tabpanel',
                layout: {
                    type: 'card'
                },
                items: [

                    // TAB 1
                    {
                        xclass: 'MyApp.view.ListView',
                        title: 'Tab 1',
                        iconCls: 'user',
                    },
                    // TAB 2
                    {
                        title: 'Tab 2',
                        iconCls: 'video',
                        xclass: 'MyApp.view.Phone.VideoView',
                    },
                    // TAB 3
                    {
                        title: 'Tab 3',
                        iconCls: 'info',
                        xclass: 'MyApp.view.AboutView',
                    }
                ],

                // Configure the TabBar propertiy of the the tab Panel
                tabBar: {
                    id: 'tabBar',
                    docked: 'bottom',
                    layout: {
                        pack: 'center',
                        type: 'hbox'
                    }
                }
            }
        ]
    }
});