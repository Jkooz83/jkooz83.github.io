function MouseOverListItem(li)

{

	li.className = "list-item-highlight";

}

function MouseOutListItem(li)

{

	li.className = "";

}

function myFunction() {
    var mtjWins, wins;
    mtjWins = document.getElementById("mtjWins").value;
    wins = (mtjWins > 4) ? "Wow! You saw his success coming this year!":"You thought wrong, but then again no one saw his success coming!";
    document.getElementById("demo").innerHTML = wins;
}


function myFunctionforTime()
{
document.getElementById("time").innerHTML = Date();

}

function button()
{
document.getElementById("raceWinner").innerHTML="Kevin Harvick!">;
}
