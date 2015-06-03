$(document).ready(function(){


	var $mybutton = $("#play-button");
	var loading = 

	$mybutton.on ('click', addLoading);

	function addLoading(e){
		$mybutton.html("Loading...");

	}

	setTimeout(function() {
		$mybutton.html("Loading...");
	},4000)



	var routerConfig = {
		routes: {
			"gamescreen": "foo",
			"leaderboard": "bar",
			"settings": "baz",
		},

		foo: function(){
			console.log("foo");
			$(".page").hide();
			$("#a").show();
		},

		bar: function(){
			console.log("bar");
			$(".page").hide();
			$("#b").show();
		},	

		baz: function(){
			console.log("baz");
			$(".page").hide();
			$("#c").show();
		},

	}

	var app = Backbone.Router.extend(routerConfig);

	var myRouter = new app();
	Backbone.history.start();

	$("#play-button").click(function(e) {
		var option = {trigger: true};
		var settings = $("#settings").val();
		myRouter.navigate("settings/"+settings, option);
	});



});

