define(['AlumnusView', 'text!templates/mailUs.html'], function(AlumnusView, mailUsTemplate) {
    var mailUsView = AlumnusView.extend({
        requireLogin: false,
        el: $('#content'),
        events: {
        },
        render: function() {
            this.$el.html(mailUsTemplate);
        }
    });
    return mailUsView;
});