define(['AlumnusView', 'text!templates/profile.html'],
function(AlumnusView,  profileTemplate)
{
  var profileView = AlumnusView.extend({
      //requireLogin: false,
    el: $('#content'),

    events: {
    },

    render: function(){
        this.$el.html(profileTemplate);
    }
  });

    return profileView;
});
