/*
 * contact-button-handling.js
 * Jeff Bulick
 * 08.17.2016
 * Portfolio Contact page handles button clicking. 
*/

//$(document).ready(function() {
   // $("#pics-button").click(togglePics);
//});



//Toggles the visibility of the photograph columns and the corresponding button text
function togglePics() {
    $("#picsFTB").toggle(300);
    $("#right-column").toggle(300);
    var buttonName = document.getElementById("pics-button").innerHTML;
    if(buttonName === "Show Photos"){    
        $("html, body").animate({ scrollTop: "300px" },"slow");
        document.getElementById("pics-button").innerHTML = "Hide Photos";
    }
    else {
        $("html, body").animate({ scrollTop: "0px" },"fast");
        document.getElementById("pics-button").innerHTML = "Show Photos";
    }
}


