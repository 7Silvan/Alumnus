require.config({
  paths: {
    jQuery: '/js/libs/jquery',
    Underscore: '/js/libs/underscore',
    Backbone: '/js/libs/backbone',
    Sockets: '/socket.io/socket.io',
    models: 'models',
    text: '/js/libs/text',
    templates: '../templates',

    AlumnusView: '/js/AlumnusView'
  },

  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    'Alumnus': ['Backbone']
  }
});

require(['Alumnus'], function(Alumnus) {
  Alumnus.initialize();
});
