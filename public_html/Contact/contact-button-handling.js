/*
 * contact-button-handling.js
 * Jeff Bulick
 * 08.17.2016
 * Portfolio Contact page handles button clicking. 
*/

//$(document).ready(function() {
   // $("#pics-button").click(togglePics);
//});

//Toggles the visibility of the photograph columns
function togglePics() {
    $("#picsFTB").toggle(300);
    $("#right-column").toggle(300);
    $("html, body").animate({ scrollTop: "300px" });
    document.getElementById("pics-button").innerHTML = "Hide Photos";
    ////////////////NEED implement hide/show innerHTML correctly
}


