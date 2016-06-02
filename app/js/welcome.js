/*global $, Backbone, _*/

// This is the test js script for minification and lint
'use strict';

var Test = Backbone.Model.extend({
  initialize: function() {
                console.log('Welcome to the generic app boilertemplate');
              }
});

var test = new Test();
