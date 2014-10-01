'use strict';

Template.postsList.helpers({
  //Posts, being populated by Mongo
  posts: function () {
    return Posts.find({}, {sort: {submitted: -1, title: 1}});
  }
});
