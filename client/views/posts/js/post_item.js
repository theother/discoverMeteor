'use strict';

//Added the domain
Template.postItem.helpers({
  ownPost: function () {
    return this.userId === Meteor.userId();
  },
  //Helper for the {{domain}}
  domain: function () {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
