Ext.define('MyApp.view.detailView', {
    extend: 'Ext.form.Panel',
    config: {
        layout: 'fit',

        itemId: 'detailFormView',
        items: [

            // CRUD Tool Bar
            {
               xclass: 'MyApp.view.DetailToolbar'
            }, // End of Tool Bar

            // Form Fields
            {
                xclass: 'MyApp.view.DetailFields'
            } // End of Form Fields
        ]


    },
})