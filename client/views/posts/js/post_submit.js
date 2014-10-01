'use strict';

Template.postSubmit.events({
  'submit form': function (e) {
    e.preventDefault();
    // Collect the entered data from the form and put it in
    // a post object
    var thePost ={
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      message: $(e.target).find('[name=message]').val()
    };

    Meteor.call('post', thePost, function (error, id) {
      if(error){
        return alert(error.reason);
      }
      Router.go('postPage', {_id: id});
    });

  }
});
