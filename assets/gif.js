// A $( document ).ready() block.
$(document).ready(function() {
    console.log("ready!");

    //Array of film dirctors 
    var directors = ["Woody Allen", "Martin Scorcese", "Alfred Hitchcock", "Stanley Kubrick", "David Lynch"]

    function displayDirectorGif() {

        var director = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+director+"api_key=7tGp5YYCPv9T3FNcTRLli4JLDAzbeJGJ&q=&limit=10&offset=0&rating=G&lang=en"

            //creating an AJAX call for the button being clicked

            .ajax({
                url: queryURL,
                method: get
            }).done(function(
                return) {
 


            });
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