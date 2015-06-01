$(document).ready(function(){
	var routerConfig = {
		routes: {
			"gameScreen": "foo",
			"leaderboard": "bar",
			"setting": "baz",
		},

		foo: function(){
			console.log("foo");
			$(".page").hide();
			$("#a").show();
		},

		bar: function(){
			console.log("bar");
			$(".page"),hide();
			$("#b").show();
		},	

		baz: function(){
			console.log("baz");
			$(".page").hide();
			$("#c").show();
		},

		var app = Backbone.Router.extend(routerConfig);

		var myRouter = new app();
		Backbone.history.start();

	$("#play-button").click(function(e) {
		var option = {trigger; true};
		var settings = $("#settings").val();
		myrouter.navigate("settings/"+settings, option);
	});

});


	}
}