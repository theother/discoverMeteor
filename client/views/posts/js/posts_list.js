'use strict';

Template.postsList.helpers({
  //Posts, being populated by Mongo
  posts: function () {
    return Posts.find();
  }
});
