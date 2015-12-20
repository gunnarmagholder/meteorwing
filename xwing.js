Router.route('/', function() {
	this.render("home");
});
if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
