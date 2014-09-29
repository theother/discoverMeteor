'use strict';

//Published posts, for a client-side subsribtion in client/main.js
Meteor.publish('posts', function () {
  return Posts.find();
});
