define(['AlumnusView', 'text!templates/login.html'], function(AlumnusView, loginTemplate) {
  var loginView = AlumnusView.extend({
    requireLogin: false,

    el: $('#content'),

    events: {
      "submit form": "login"
    },

    initialize: function(options) {
      this.socketEvents = options.socketEvents;
    },

    login: function() {
      var socketEvents = this.socketEvents;
      $.post('/login',
        this.$('form').serialize(), function(data) {
          socketEvents.trigger('app:loggedin', data);
          window.location.hash = 'profile';
      }).error(function(){
        $("#error").text('Неможливо ввійти.');
        $("#error").slideDown();
      });
      return false;
    },

    render: function() {
      this.$el.html(loginTemplate);
      $("#error").hide();
      $("input[name=email]").focus();
    }
  });

  return loginView;
});
