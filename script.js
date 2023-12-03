let slideIndex = 0;
showSlides();



function showSlides() {

    let m;

    let slides = document.getElementsByClassName("mySlides");

    
    for(m = 0; m < slides.length;m++) {
        slides[m].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);//Change image every 2 seconds
}