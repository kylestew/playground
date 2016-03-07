if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(function () {
    React.render(<Profile />, document.getElementById("render-target"));
    // React.render(<Playground />, document.getElementById("render-target"));
  });
}
