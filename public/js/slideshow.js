//referencing https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }  

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 6 }
    if (n < 1) { slideIndex = 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Swipe gestures

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = 0;
var yDown = 0;

function getTouches(evt) {
    return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart (evt) {
    const initialPos = getTouches(evt)[0];
    xDown =  initialPos.clientX;
    yDown = initialPos.clientY;
}

function handleTouchMove (evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            plusSlides(1);
        } else {
            plusSlides(-1);
        }                       
    } 
    /* reset values */
    xDown = null;
    yDown = null;   
}