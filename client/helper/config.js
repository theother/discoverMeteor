'use strict';

Accounts.ui.config({
  requestPermissions: {
    // facebook: ['user_likes']
  },
  requestOfflineToken: {
    // google: true
  },
  passwordSignupFields: 'USERNAME_ONLY' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
});
