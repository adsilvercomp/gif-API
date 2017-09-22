// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    //Array of film dirctors 
    var directors = ["Woody Allen", "Martin Scorcese", "Alfred Hitchcock", "Stanley Kubrick", "David Lynch"]

    function displayDirectorGif(){

        var director = $(this).attr("data-name");
        queryURL=

    }

    // this function will create a button for each film director in the array
    function makeButtons() {
        //this prevents repeat buttons

        $("#bContainer").empty();

        //create a forloop that loops through the directors array and creates buttons that display in the div
        //#gifContainer
        for (var i = 0; i < directors.length; i++) {
            console.log("helloWorld");

            $("#bContainer").append("<button>" + directors[i] + "</button>");

        }

    }

    //this function handles events when the add director button is click

    $("#add-director").on("click", function(event) {
        //this prevents the form from submitting itself.
        event.preventDefault();

        //this line grabs the input from the textbox.

        var direct = $("#director-input").val().trim();

        //adding director from textbox to array
        directors.push(direct);

        //call make buttons so as to add the new button to the html.

        makeButtons();

    });

    makeButtons();


});