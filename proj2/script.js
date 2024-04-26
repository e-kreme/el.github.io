//called when clicked
function displayed(n){
    show(slideIndex = n);
}
//displaying current slide       
function show(n){
    //var i;
    var slide = document.getElementsByClassName("slide");
    var small = document.getElementsByClassName("small-img");
    //check out of range
    if (n > slide.length){
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slide.length;
    }

    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    for (var i = 0; i < small.length; i++) {
        small[i].className = small[i].className.replace("opacity", "");
    }
    slide[slideIndex-1].style.display = "block";
    small[slideIndex-1].className += "opacity";
}