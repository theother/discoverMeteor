'use strict';

Template.postSubmit.events({
  'submit form': function (e) {
    e.preventDefault();
    // Collect the entered data from the form and put it in
    // a post object
    var post ={
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    };
    // The insert call generates an _id, that we put into
    // the post obj which the Router.go uses it as its path
    post._id = Posts.insert(post);
    Router.go('postPage', post);

  }
});
