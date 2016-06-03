'use strict';

var TestView = Backbone.View.extend({
  initialize: function() {
    this.render();
  }, 
  render: function() {
    this.$el.html(ejs.render(TestTemplate, this.model.toJSON()));
    this.stickit();
  },
  events: {
  
  },
  bindings: {
  
  }
});
