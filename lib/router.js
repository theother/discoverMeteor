'use strict';

// Tells the router to use 'layout' template as
// the default layout for all routs
Router.configure({
  layoutTemplate: 'layout',
  // Procides the router with the name of the loading template
  loadingTemplate: 'loading',
  // Function will return our posts subscription
  // Since the func is global, this sequence will only happen onnce
  waitOn : function () {
    return Meteor.subscribe('posts');
  }
});

// A new route called 'postList' mapped to '/' path
// ie. you could change it to '/test' and it would route there
Router.map(function () {
  this.route('postsList', {path: '/'});
});

// Loaing hook, will make sure posts is loaded before
// sending the user through to the route they requested
Router.onBeforeAction('loading');
