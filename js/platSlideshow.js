//Contains the Javascript necessary to make the slideshow operate (Side note: Finally, single line comments!!)
//The best part is this code does not rely on jQuery being installed
//Code from http://themarklee.com/2013/12/26/simple-diy-responsive-slideshow-made-html5-css3-javascript/

(function(document){ //Apply the slideshow functions to the document itself
 
var counter = 0, //Keeps track of which slide you are on
$items = document.querySelectorAll('.platSlides figure'),
numItems = $items.length; //# of images to display
 
var showCurrent = function(){
var itemToShow = Math.abs(counter%numItems); //Determines the slide that should be shown currently
 
[].forEach.call( $items, function(el){ //Iterates through all the slides and removes "show"
el.classList.remove('show'); //Essentially hides all images from view
});
 
$items[itemToShow].classList.add('show'); //Displays the current slide
};
 
document.querySelector('.next').addEventListener('click', function() {
counter++; //The "next" arrows increment the slide number
showCurrent(); //Now show that slide
}, false);
 
document.querySelector('.prev').addEventListener('click', function() {
counter--; //The "previous" arrows decrement the slide number
showCurrent(); //Now show that slide
}, false);
 
})(document);