$(document).ready(function () {

    var textbox = $(".player-number-textbox-input");
    var button = $(".player-number-button");
    var output = $(".output");


    //This is where gathering the info for the players happens on a server
    button.click(function () {
        $.ajax({
            url: "Home/GetPlayerInformation", //This is the server
            data: { PlayerNumber: textbox.val() },
            success: function (stringResponse) {
                response = JSON.parse(stringResponse);
                output.html(response.PlayerName);
            }
        });
    });
});