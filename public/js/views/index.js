define(['AlumnusView', 'text!templates/index.html'],
function(AlumnusView, indexTemplate) {
  var indexView = AlumnusView.extend({
    el: $('#content'),
    events: {
    },
    initialize: function(options) {
    },
    render: function() {
      this.$el.html(indexTemplate);
    }
  });

  return indexView;
});
