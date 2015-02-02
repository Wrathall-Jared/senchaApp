Ext.define('MyApp.controller.Contacts', {
    extend: 'Ext.app.Controller',
    config: {

        // This is how Controllers know what objects they are working with
        refs: {
            'detailController': '#detailController',
            'addContactButton': 'button#AddContactButton',
            'contactTab': 'container#contactTab',
            'contactList': 'list#ContactList',
            'genderField': '#detailGenderField',
        },
        control: {
            /* attach event listeners here */
            addContactButton: {
                tap: 'onAddContactButtonTap'
            },
            contactList: {
                itemtap: 'onContactListItemTap'
            }
        }
    },
    /* event listener handler methods go here */
    onAddContactButtonTap: function(button, event) {

        // Find next id
        var item = Ext.getStore('MyContacts').getCount();

        // Add the new record with the new ID
        Ext.getStore('MyContacts').add({
            id: item
        });

        // Get the new rec so that we can open a form on the correct one
        var rec = Ext.getStore('MyContacts').getAt(item);

        // create the detail view
        var detailView = Ext.create('MyApp.view.detailView');

        // Change the view 
        Ext.Viewport.setActiveItem(detailView);

        // Give the Record Over
        detailView.setRecord(rec);

        // Press the edit button so they can change the details
        this.getApplication().getController('detailController').onEditButtonTap();
    },

    /* event listener handler methods go here */
    onContactListItemTap: function(index, item, e) {

        // Lets get the item the user has selected
        var rec = Ext.getStore('MyContacts').getAt(item);

        if (!Ext.getCmp('MyApp.view.detailView')) {
            // Create the detail page view
            var detailView = Ext.create('MyApp.view.detailView');
        }

        // Load the item the user choose into the form
        detailView.setRecord(rec);

        // Change to the details page
        Ext.Viewport.setActiveItem(detailView);

        // get the gender
        this.getGenderField().setLabel(rec.get('gender'));

        // If it is male toggle off
        if (rec.get('gender') == 'Male') {
            this.getGenderField().setValue(0);
        } else {
            this.getGenderField().setValue(1);
        }

    },
});