A simple boilerplate for webapps that includes a basic Grunt build script, Bulma for styling, Cucumber for testing and employing Behaviour-Driven Design, and Chai for assertion testing.

Note: the uglify asks utilizes the harmony branch of uglify and not the standard branch --- in order for the uglification task to use the proper version of uglify, which is required for ES6 
compatibility, edit `node_modules/grunt-contrib-uglify/tasks/lib/uglify.js` and swap `require('uglify-js')` for `require('uglify-js-harmony')`.
