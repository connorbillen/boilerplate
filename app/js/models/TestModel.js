'use strict';

var TestModel = Backbone.Model.extend({
  defaults: {
    title: '',
    message: ''
  }, 
  initialize: function() {
    this.set('title', 'Welcome');
    this.set('message', 'to the generic app boilerplate');
  }
});
