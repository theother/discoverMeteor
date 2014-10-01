// Code here will be linted with JSHint.
/* jshint ignore:start */

//Global var - so no strict
Posts = new Meteor.Collection('posts');

// If the user is not logged in it will denie access
// to submit posts to the DB
Posts.allow({
  insert: function (userId, doc) {
    return !! userId;
  }
});




// Code here will be linted with ignored by JSHint.
/* jshint ignore:end */
