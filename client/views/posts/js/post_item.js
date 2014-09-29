'use strict';

//Added the domain
Template.postItem.helpers({
  //Helper for the {{domain}}
  domain: function () {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
