define(['views/index', 'views/about', 'views/mailUs', 'views/register', 'views/login',
        'views/forgotpassword', 'views/profile',
        'models/Account'],
function(IndexView, AboutView, MailUsView, RegisterView, LoginView, ForgotPasswordView, ProfileView, Account) {
  var AlumnusRouter = Backbone.Router.extend({
    currentView: null,

    socketEvents: _.extend({}, Backbone.Events),

    routes: {
      'index': 'index',
      'login': 'login',
      'register': 'register',
      'forgotpassword': 'forgotpassword',
      'profile/:id': 'profile',
      'about': 'about',
      'mailUs': 'mailUs'
    },

    changeView: function(view) {
      if ( null != this.currentView ) {
        this.currentView.undelegateEvents();
      }
      this.currentView = view;
      this.currentView.render();
    },

    index: function() {
      this.changeView(new IndexView());
    },

    about: function() {
      this.changeView(new AboutView());
    },

    addcontact: function() {
      this.changeView(new AddContactView());
    },

    mailUs: function() {
        this.changeView(new MailUsView());
    },

    login: function() {
      this.changeView(new LoginView({socketEvents:this.socketEvents}));
    },

    forgotpassword: function() {
      this.changeView(new ForgotPasswordView());
    },

    register: function() {
      this.changeView(new RegisterView());
    },

    profile: function(id) {
      var model = new Account({id:id});
      this.changeView(new ProfileView({model:model, socketEvents:this.socketEvents}));
      model.fetch();
    }
  });

  return new AlumnusRouter();
});

