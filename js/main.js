var first = false;
var second = false;
var third = false;
var h = screen.height;
$(function(){
    $('#phoneFrom').mask("+7(999) 999-99-99");
});
var calendar = document.getElementById("calendar");
var year = new Date().getFullYear();
var month = new Date().getMonth()+1;
if (month<10) {
    month = "0" + month
}
var day = new Date().getDate();
if (day<10) {
    day = "0" + day
}
calendar.min = "" + year;
calendar.min += "-" + month + "-";
calendar.min += day + "";
calendar.max = "" + (year+1);
calendar.max += "-" + month + "-";
calendar.max += day + "";

if (screen.width > 991.98) {
    document.getElementById("card1").style.minHeight = $('#card2').height() + "px";
    document.getElementById("card3").style.minHeight = $('#card2').height() + "px";
    document.getElementById("card5").style.minHeight = $('#card4').height() + "px";
    document.getElementById("card6").style.minHeight = $('#card4').height() + "px";
    document.getElementById("plus1").style.minHeight = $('#plus0').height() - 24 + "px";
    document.getElementById("plus2").style.minHeight = $('#plus0').height() - 24 + "px";
    document.getElementById("plus3").style.minHeight = $('#plus5').height() - 24 + "px";
    document.getElementById("plus4").style.minHeight = $('#plus5').height() - 24 + "px";
    document.getElementById('lite').innerHTML = "Новинка - модульные кухни Lite!";
} else {
    h-=500;
}

wow0 = setInterval(function () {
    if (pageYOffset >= document.getElementById("promotions").offsetTop - h + $('#promotions').height() - $('#titleOfPromotion').height() - 5 && !first) {
        first = true;
        el = document.getElementById("OurPromotionsButton");
        el.className += " animationForButton"
    }
    if (pageYOffset >= document.getElementById("projects").offsetTop - h + $('#project-block').height() && !second) {
        second = true;
        el = document.getElementById("OurProjectsButton");
        el.className += " animationForButton"
    }
    if (pageYOffset >= document.getElementById("advantages-block").offsetTop - h + $('#advantages').height() && !third) {
        third = true;
        el = document.getElementById("aboutUsButton");
        el.className += " animationForButton"
    }
}, 10);
