Ext.define('MyApp.view.Tablet.MapView', {
    extend: 'Ext.Map',
    title: 'Tab 2',
    iconCls: 'maps',
    mapOptions: {
        center: new google.maps.LatLng(39, -98),
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        zoom: 200
    },
    id: 'mapHomeView',

    items: [

        //Tool Bar
        {
            xtype: 'toolbar',
            docked: 'top',
            layout: {
                pack: 'center',
                type: 'hbox'
            },
            items: [


            ]
        }
    ]
})