// This is the test js script for minification and lint
'use strict';

var body = document.getElementById('app');
var container = document.createElement('div');
body.appendChild(container);

var testModel = new TestModel();
var testView = new TestView({model: testModel, el: container});
