Ext.define('MyApp.controller.detailController', {
    extend: 'Ext.app.Controller',
    config: {

        id: 'detailController',
        refs: {
            'detailView': '#detailFormView',
            'MainView': '#MainView',
            'backButton': 'button#detailBackButton',
            'deleteButton': 'button#detailDeleteContactButton',
            'editButton': 'button#detailEditButton',
            'nameField': 'textfield#detailNameField',
            'addressField': 'textfield#detailAddressField',
            'ageField': 'selectfield#detailAgeField',
            'emailField': '#detailEmailField',
            'genderField': '#detailGenderField',
            'noteField': '#detailNoteField'

        },

        control: {
            /* attach event listeners here */
            detailView: {
                initialize: 'OnDetailViewInitialize'
            },
            backButton: {
                tap: 'onBackButtonTap'
            },
            ageField: {
                initialize: 'onAgeFieldinitialize'
            },
            editButton: {
                tap: 'onEditButtonTap',
                readOnly: 'changeFormReadOnly'
            },
            deleteButton: {
                tap: 'onDeleteButtonTap',
                customEvent: 'customDeleteButtonTap'
            },
            genderField: {
                change: 'onchangeGenderField',
            }
        }
    },
    /* event listener handler methods go here */

    onBackButtonTap: function(button, event) {

        // Remove the current view
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    },

    onAgeFieldinitialize: function(ageField, eOpts) {

        // Simple loop to make the options 1-100 for age
        var list = [];
        for (var i = 1; i <= 100; i++) {

            // Important!!  For some reason you need to
            // have a value and text property to load this
            // array into a picker.
            list.push({
                value: i,
                text: i
            });
        }

        // Assign the options to the picker
        this.getAgeField().setOptions(list);
    },

    onEditButtonTap: function(button, event) {

        if (this.getEditButton().getIconCls() == 'compose') {

            // Change Button Icon to check
            this.getEditButton().setIconCls('check');

            // Allow User to input data
            this.getEditButton().fireEvent('readOnly', this, false);
        } else {

            // Change back to read only
                    button.fireEvent('readOnly', this, true);

            // Change the button to the compose icon again
            this.getEditButton().setIconCls('compose');

            // This gets the record that we had loaded into the form fields
            var rec = this.getDetailView().getRecord();

            if (rec != 'undefined') {
                // Remove the Old record
                Ext.getStore('MyContacts').remove(rec);
            }

            this.saveContact(rec.get('id'),
                            this.getNameField().getValue(),
                            this.getAddressField().getValue(),
                            this.getEmailField().getValue(),
                            this.getAgeField().getValue(),
                            this.getGenderField().getLabel(),
                            this.getNoteField().getValue()
                            );
        }


    }, // End of edit button tap

    saveContact: function(idNum, name, address, email, age, gender, notes) {
        // Add the new record
        Ext.getStore('MyContacts').add({
            id: idNum,
            name: name,
            address: address,
            email: email,
            age: age,

            // For toggle pickers if the value is 1, then 
            // that mean that it is true
            gender: gender,
            notes: notes

        }); // End of Contact.Add

        Ext.getStore('MyContacts').each(function(record) {
            record.save();
        });

    }, // End of saveContact

    customDeleteButtonTap: function(button, rec) {

        // Remove the desired record
        Ext.getStore('MyContacts').remove(rec);

        // Remove the current view
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);

    }, // End of delete button tap

    onchangeGenderField: function(field, newValue, oldValue) {
        var test1 = newValue;
        var test2 = oldValue;

        if (newValue == 1) {
            this.getGenderField().setLabel('Female');
        } else {
            this.getGenderField().setLabel('Male');
        }
    },

    onDeleteButtonTap: function(button, event) {

        // This gets the record that we had loaded into the form fields
        var rec = this.getDetailView().getRecord();
        button.fireEvent('customEvent', this, rec);
    },

    changeFormReadOnly: function(button, isReadOnly) {

        this.getNameField().setReadOnly(isReadOnly);
        this.getAddressField().setReadOnly(isReadOnly);
        this.getAgeField().setReadOnly(isReadOnly);
        this.getEmailField().setReadOnly(isReadOnly);
        this.getGenderField().setReadOnly(isReadOnly);
        this.getNoteField().setReadOnly(isReadOnly);
    }

});