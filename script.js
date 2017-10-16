
var Main = {};


Main.Driver = function(firstName, lastName, number, track)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Number = number;
	this.Track = track

	this.SetFirstName = function(name)
	{
		this.FirstName = name;
	}
}


Main.Dale = new Main.Driver("Dale", "Earnhardt JR", 88, "Daytona");
Main.Ryan = new Main.Driver("Ryan", "Blaney", 21, "Pocono");
Main.Chase = new Main.Driver("Chase", "Elliot", 24, "Atlanta");
Main.Jeff = new Main.Driver("Jeff", "Gordon", 24, "Martinsville");
Main.Brad = new Main.Driver("Brad", "Keselowski", 2, "Talladega");
Main.Kevin = new Main.Driver("Kevin", "Harvick",4, "Phoenix");


Main.Driver.prototype.GetFullInfo = function()
{
	return this.FirstName + " " + 
	this.LastName + " " +
	this.Number + " " +
	this.Track;
}


document.body.innerHTML = Main.Dale.GetFullInfo();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Chase.GetFullInfo();

/////////////////////////////////////////////////////////////////////