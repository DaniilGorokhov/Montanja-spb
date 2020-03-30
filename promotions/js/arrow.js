var opacity = false;

if (screen.width < 991.99) {
    document.getElementById("arrow_upward").style.display = "none";
}

arrow_opacity = setInterval(function () {
    if (pageYOffset == 0 && opacity) {
        document.getElementById("arrow_upward").className = "arrow-to-top opacityZero";
        document.getElementById("arrow_upward").style.cursor = 'default';
        document.getElementById("arrow_upward").style.opacity = 0;
    } else if (pageYOffset > 0) {
        document.getElementById("arrow_upward").className = "arrow-to-top opacityOne";
        document.getElementById("arrow_upward").style.cursor = 'pointer';
        document.getElementById("arrow_upward").style.opacity = 1;
        opacity = true;
    }
},10)

function scrollToTop () {
    var n = Math.floor(pageYOffset/2);
    var i = n
    var k = 1.05;
    var x = 1.5;
    m0 = setInterval(function () {
        if (n<0) {
            x *= k;
            n -= x;
            scrollTo(0,n+i);
            m1 = setInterval(function () {
                if (i<0) {
                    clearInterval(m1)
                } else {
                    x /= k;
                    i -= x;
                    scrollTo (0,i);
                }
            },10)
            clearInterval(m0)
        } else {
            x *= k;
            n -= x;
            scrollTo(0,n+i);
        }
    },10)
}