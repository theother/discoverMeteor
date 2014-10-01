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
  // Route for the indv. post pages
  this.route('postPage', {
    path: '/posts/:_id',
    // Specifies the data context
    // this corresponds with the currently matched route - 'to a post'
    // this.params to access the named parts of the route\
    data: function () {
      return Posts.findOne(this.params._id);
    }
  });
  //Post submit route
  this.route('postSubmit', {
    path: '/submit'
  });
});

// Checks if user is logged in and if not renders
// a access denied template
var requireLogin = function (pause) {
  if(!Meteor.user()){
    this.render('accessDenied');
    // Pause stops the route from doign anything else
    pause();
  }
};

// Loaing hook, will make sure posts is loaded before
// sending the user through to the route they requested
Router.onBeforeAction('loading');
// Only calles this when the route of 'postSubmit' is clicked
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
