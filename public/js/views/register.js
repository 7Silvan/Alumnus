define(['AlumnusView', 'text!templates/register.html'], function(AlumnusView, registerTemplate) {
  var registerView = AlumnusView.extend({
    requireLogin: false,

	el: $('#content'),

    events: {
      "submit form": "register"
    },

    register: function() {
      $.post('/register', {
        firstName: $('input[name=firstName]').val(),
        lastName: $('input[name=lastName]').val(),
        email: $('input[name=email]').val(),
        password: $('input[name=password]').val(),
      }, function(data) {
        console.log(data);
      });
      return false;
    },

    render: function() {
      this.$el.html(registerTemplate);
    }
  });

  return registerView;
});
