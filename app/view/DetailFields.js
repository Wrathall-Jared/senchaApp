Ext.define('MyApp.view.DetailFields', {
    extend: 'Ext.form.FieldSet',
    config: {

    	layout: '',
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
                    value: '',
                    name: 'gender',
                    labelWidth: '30%',
                    readOnly: 'True'

                }, {

                    xtype: 'textareafield',
                    id: 'detailNoteField',
                    label: 'Notes',
                    value: '',
                    name: 'notes',
                    readOnly: 'True',
                    height: '50%'

                }] // End of Form Items


    }
});