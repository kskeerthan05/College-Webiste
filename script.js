let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex, reset to 1 if needed
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Deactivate all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide and activate dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
