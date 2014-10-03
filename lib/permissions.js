// Code here will be linted with JSHint.
/* jshint ignore:start */

//Check that the userId specified owns the doc
ownsDocument = function (userId, doc) {
  console.log(doc);
  return doc && doc.userId === userId;
}

// Code here will be linted with ignored by JSHint.
/* jshint ignore:end */
