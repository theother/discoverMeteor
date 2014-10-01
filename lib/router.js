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

var requireLogin = function (pause){
  // Check to see if user is logged-in
  if(!Meteor.user()){
    //Check to see if user is currently loggin-in
    if (Meteor.loggingIn()) {
      //In which case it will render the loading template
      // until if can verify if it be legit
      this.render(this.loadingTemplate);
    }else{
      // Otherwise shut them down the the accessDenited template
      this.render('accessDenied');
    }
    pause();
  }
};

// Loaing hook, will make sure posts is loaded before
// sending the user through to the route they requested
Router.onBeforeAction('loading');
// Only calles this when the route of 'postSubmit' is clicked
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
