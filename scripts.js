///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function displayTeam(team)
{
	alert("The following drivers race for Team" + " " + team.make);
	alert("They drive a 2017" + " " + team.model);

	for (var i=0; i<team.lineup.length; i++)
	{
		var player = team.lineup[i];
		alert(player.driver+ " " +player.carNumber);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

function createTeamAsCHEVY()
{
	return {

		"make" : "Chevrolet",
		"model" : "Camaro",
		"lineup" : [

			{
				"carNumber" : "88",
				"driver" : "Dale Earnhardt Jr",			
				},
				
			{	
				"carNumber" : "42",
				"driver" : "Kyle Larson",
				"carOwner" : "Chip Gannassi"
			},

			{
				"carNumber" : "27",
				"driver" : "Paul Menard",
				}
			
		]

	};
}

function createTeamAsFORD()
{
	return {

		"make" : "Ford",
		"model" : "Mustang",
		"lineup" : [

			{
				"carNumber" : "4",
				"driver" : "Kevin Harvick"
			},

			{
	            "carNumber" : "14",
				"driver" : "Clint Bowyer"
			},

			{
				"carNumber" : "2",
				"driver" : "Brad Keselowski"

			}

		]

	};
}

function createTeamAsTOYOTA()
{
	return {

		"make" : "Toyota",
		"model" : "Camry",
		"lineup" : [

			{
				"carNumber" : "11",
				"driver" : "Denny Hamlin"
			},

			{
	            "carNumber" : "18",
				"driver" : "Kyle Busch"
			},

			{
				"carNumber" : "19",
				"driver" : "Daniel Suarez"

			}

		]

	};
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function()
{
	$(".button").mouseover(function()
	{
		$(this).css("border", "6px solid red");
	});

	$(".button").mouseout(function()
	{
		$(this).css("border", "6px solid blue");
	});

	$(".button1").click(function()
	{
		var team = createTeamAsCHEVY();
		displayTeam(team);
	});
	
	$(".button2").click(function()
	{
		var team = createTeamAsFORD();
		displayTeam(team);
	});
	
	$(".button3").click(function()
	{
		var team = createTeamAsTOYOTA();
		displayTeam(team);
		});

});