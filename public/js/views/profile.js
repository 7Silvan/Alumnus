define(['AlumnusView', 'text!templates/profile.html'],
function(AlumnusView,  profileTemplate)
{
  var profileView = AlumnusView.extend({
    requireLogin: true,
    el: $('#content'),

    events: {
    },

    render: function(){
        this.$el.html(
            _.template(profileTemplate,this.model.toJSON())
        );
    }
  });

    return profileView;
});
