/*
 * navbar-menu.js
 * Jeff Bulick
 * 06.28.2016
 * Portfolio Landing page functionality with JS and JQuery. 
*/

$(document).ready(function() {
    currentPageLink();
});

//Drops the navigation menu from the navbar
function dropMenu() {
    $(".dropdown").toggle(300);    
    //toggles classes to match background of menu button to dropdown bar
    $("#menu-button").toggleClass("list");
    $("#menu-button").toggleClass("selected");
}

//Distinguishes link of current page
function currentPageLink(){
    var a = document.getElementsByTagName("a");
    for(var i=0;i<a.length;i++){
        if(a[i].href.split("#")[0] === window.location.href.split("#")[0]){
            a[i].className = "highlighted";
        }
    }
}
