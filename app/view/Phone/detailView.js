Ext.define('MyApp.view.Phone.detailView', {
    extend: 'Ext.form.Panel',
    config: {

        itemId: 'detailFormView',
        items: [
            // CRUD Tool Bar
            {
                xtype: 'toolbar',
                docked: 'top',
                layout: {
                    //pack: 'center',
                    type: 'hbox'
                },
                items: [

                    // Back Button
                    {
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
                        xtype: 'button',
                        align: 'center',
                        ui: 'round',
                        iconCls: 'trash',
                        id: 'detailDeleteContactButton'
                    } // End Delete Contact Button

                ] // End Tool Bar Items
            }, // End of Tool Bar

            // Form Fields
            {
                xtype: 'fieldset',
                title: 'Contact Info',
                items: [{
                    xtype: 'textfield',
                    id: 'detailNameField',
                    label: 'Name',
                    name: 'name',
                    placeHolder: 'Name',
                    value: '',
                    readOnly: 'True'
                }, {
                    xtype: 'textfield',
                    id: 'detailAddressField',
                    label: 'Address',
                    name: 'address',
                    required: false,
                    placeHolder: 'Address',
                    value: '',
                    readOnly: 'True'
                }, {
                    xtype: 'emailfield',
                    id: 'detailEmailField',
                    label: 'Email',
                    name: 'email',
                    required: false,
                    placeHolder: 'Email',
                    value: '',
                    readOnly: 'True'
                }, {

                    xtype: 'selectfield',
                    id: 'detailAgeField',
                    label: 'Age',
                    name: 'age',
                    required: false,
                    placeHolder: '',
                    value: '',
                    usePicker: 'auto',
                    readOnly: 'True'

                }, {

                    xtype: 'togglefield',
                    id: 'detailGenderField',
                    label: 'Male',
                    value:  '',
                    name: 'gender',
                    labelWidth: '30%',
                    readOnly: 'True'

                },
                {

                    xtype: 'textareafield',
                    id: 'detailNoteField',
                    label: 'Notes',
                    value:  '',
                    name: 'notes',
                    readOnly: 'True'

                }] // End of Form Items
            } // End of Form Fields
        ]


    }
})