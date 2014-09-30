'use strict';

// Tells the router to use 'layout' template as
// the default layout for all routs
Router.configure({
  layoutTemplate: 'layout'
});

// A new route called 'postList' mapped to '/' path
Router.map(function () {
  this.route('postsList', {path: '/'});
});
