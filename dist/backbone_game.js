$(document).ready(function(){

	// var $mybutton = $("#play-button");
	// var loading = 

	// $mybutton.on ('click', addLoading);

	// function addLoading(e){
	// 	$mybutton.html("Loading...");

	// }

	
	var routerConfig = {
		routes: {
			"":"home",
			"home": "home",
			"gamescreen": "foo",
			"leaderboard": "bar",
			"settings": "baz",
		},

		home: function(){
			$("nav a").show();
			$(".page").hide();
			$(".loading").show();
		},

		foo: function(){
			console.log("foo");
			$(".page").hide();
			$("#screen").show();

			$("nav a").hide();
			$("#play-button").hide();

			// $("#gamescreen").show();

			setTimeout(function() {
				$("#play-button").show();
				$(".loading").hide();
			},4000)

		},

		bar: function(){
			console.log("bar");
			$("nav a").hide();
			$(".page").hide();
			$("#board").show();
		},	

		baz: function(){
			console.log("baz");
			$("nav a").hide();
			$(".page").hide();
			$("#sets").show();
		},

	}

		var app = Backbone.Router.extend(routerConfig);

		var myRouter = new app();
		Backbone.history.start();

		// $("#play-button").click(function(e) {
		// 	var option = {trigger: true};
		// 	var settings = $("#settings").val();
		// 	myRouter.navigate("settings/"+settings, option);
		// });


});
