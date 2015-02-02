Ext.define('MyApp.profile.Tablet', {
    extend: 'Ext.app.Profile',

    views: [
        'Main',
        'detailView',
        'MapView'
    ],

    launch: function() {
        Ext.Viewport.add(Ext.create('MyApp.view.Tablet.Main'));
    },

    isActive: function() {
        return Ext.os.is('Tablet');
    }
});