// Code here will be linted with JSHint.
/* jshint ignore:start */

//Global var - so no strict
Posts = new Meteor.Collection('posts');

Meteor.methods({
  post: function (postAttributes) {
    // Define a user variable
    var user = Meteor.user();
      // Since we pasted thePost into the call, we are able to find
      // the attribute of the post object
      postWithTheSameLink = Posts.findOne({url: postAttributes.url});

    //ensure the user is logged in
    if(!user)
      throw new Meteor.Error(401, 'You need to login to post new stories');

    //ensure the post has a title
    if(!postAttributes.title)
      throw new Meteor.Error(422, 'Add a title brother');

    //Check that there are no previous post with the same link
    if (postAttributes.url && postWithTheSameLink) {
      throw new Meteor.Error(302,
        'This link has already been posted',
        postWithTheSameLink._id);
    }

    // pick out the whitelisted keys
    var post = _.extend(_.pick(postAttributes, 'url', 'title', 'message'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });

    // Insert the post into the DB
    var postId = Posts.insert(post)

    // Return _Id of the post for the route template
    return postId;
  }
});
// Code here will be linted with ignored by JSHint.
/* jshint ignore:end */
