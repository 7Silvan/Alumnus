define(['AlumnusView', 'text!templates/about.html'], function(AlumnusView, aboutTemplate) {
    var aboutView = AlumnusView.extend({
        requireLogin: false,

        el: $('#content'),

        events: {

        },

        render: function() {
            this.$el.html(aboutTemplate);
        }
    });

    return aboutView;
});