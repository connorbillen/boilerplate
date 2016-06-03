'use strict';

var TestView = Backbone.View.extend({
  initialize: function() {
    this.render();
  }, 
  render: function() {
    var template = _.template($('#TestTemplate').html());

    this.$el.html(template(this.model.toJSON()));
    this.stickit();
  },
  events: {
  
  },
  bindings: {
  
  }
});
