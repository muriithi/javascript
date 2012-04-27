/*

Solution to js question on http://www.computedstyle.com/2010/12/hiring-front-end-engineers.html
A div with an id of 'slideshow' contains five images, the first of which 
is shown and the others are hidden using a display style of none. 
Using Javascript, create a simple slideshow that cycles through the images, 
displaying each image for three seconds at a time, looping back to the first 
image when the end is reached. You cannot use jQuery or any other library.

*/


var img = document.getElementById('slideshow').getElementsByTagName('img');

var i = 0;

setInterval(function() {
        img[i].style.display = 'none';
        i = (i + 1 == img.length) ? 0 : i + 1; // Use the conditional operator to cycle back to first image
        img[i].style.display = '';
    }, 3000);