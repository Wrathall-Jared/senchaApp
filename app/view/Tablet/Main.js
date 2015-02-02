Ext.define('MyApp.view.Tablet.Main', {
    id: 'MainView',
    extend: 'Ext.Container',
    alias: 'MainView',
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
                        iconCls: 'maps',
                        xclass: 'MyApp.view.Tablet.MapView',
                    }, 
                    // TAB 3
                    {
                        title: 'Tab 3',
                        iconCls: 'info',
                        xclass: 'MyApp.view.AboutView'
                    }
                ],

                // Configure the TabBar propertiy of the the tab Panel
                tabBar: {
                    docked: 'bottom',
                    layout: {
                        pack: 'center',
                        type: 'hbox'
                    },
                    height: 60
                }
            }
        ]
    }
});