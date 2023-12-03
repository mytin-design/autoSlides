# Bug 100
Js does not hide the images after next or prev buttons

//From inspect, it seems that once the style for display block is set, it is not removed when the next image is displayed;

//Question is 
How do we remove the display block style from an image 

//Okay, to know how to remove,
//We need to know how it is set;


# solution for bug 100 found
A for loop was missing in the showSlides() function, - necesarry for hiding and displaying slides


# bug 200
The indicators do not run as expected;




