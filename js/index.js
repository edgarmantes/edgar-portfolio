var about = document.getElementsByClassName('about-container')[0];
var projects = document.getElementsByClassName('project-container')[0];
var contacts = document.getElementsByClassName('contact-container')[0];

// Functions for overlay
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image); //An image to overlay

$overlay.append($caption); //A caption to overlay

$("body").append($overlay); //Add overlay



$('#about').click(function(e){
	e.preventDefault();
	about.classList.remove('hidden')
	$('.about-desc').fadeIn(1000)
	$('#about').css ('background-color', 'black')
	projects.classList.remove('hidden')
	projects.classList.add('hidden')
	$('.project-wrapper').fadeOut(1)
	$('#projects').css ('background-color', 'rgba(0,0,0,0.0')
	contacts.classList.remove('hidden');
	contacts.classList.add('hidden')
	$('.contact-desc').fadeOut(1)
	$('#contacts').css ('background-color', 'rgba(0,0,0,0.0')
});

$('#projects').click(function(e){
	e.preventDefault();
	$('.project-wrapper').hide();
	projects.classList.remove('hidden')
	setTimeout(function(){
		$('.scrum').fadeIn(2000)
	},100);
	setTimeout(function(){
		$('.beer').fadeIn(2000)
	},600);
	setTimeout(function(){
		$('.timer').fadeIn(2000)
	},1000);
	setTimeout(function(){
		$('.log').fadeIn(2000)
	},1500);

	$('#projects').css ('background-color', 'black')
	about.classList.remove('hidden')
	about.classList.add('hidden')
	$('.about-desc').fadeOut(1)
	$('#about').css ('background-color', 'rgba(0,0,0,0.0')
	contacts.classList.remove('hidden');
	contacts.classList.add('hidden')
	$('.contact-desc').fadeOut(1)
	$('#contacts').css ('background-color', 'rgba(0,0,0,0.0')
});

$('#contacts').click(function(e){
	e.preventDefault();
	contacts.classList.remove('hidden')
	$('.contact-desc').fadeIn(1000)
	$('#contacts').css ('background-color', 'black')
	projects.classList.remove('hidden')
	projects.classList.add('hidden')
	$('.project-wrapper').fadeOut(1)
	$('#projects').css ('background-color', 'rgba(0,0,0,0.0')
	about.classList.remove('hidden');
	about.classList.add('hidden')
	$('.about-desc').fadeOut(1)
	$('#about').css ('background-color', 'rgba(0,0,0,0.0')
});



$(document).ready(function(){


	about.classList.remove('hidden');
	setTimeout(function(){
		$('.about-desc').css({'transform': 'none'}).animate({ opacity: 1 },{ queue: false, duration: 2000 });
	}, 500);

	$('#about').css ('background-color', 'black');
	projects.classList.remove('hidden');
	projects.classList.add('hidden');
	$('.project-wrapper').fadeOut(1);
	$('#projects').css ('background-color', 'rgba(0,0,0,0.0');
	contacts.classList.remove('hidden');
	contacts.classList.add('hidden');
	$('.contact-desc').fadeOut(1);
	$('#contacts').css ('background-color', 'rgba(0,0,0,0.0');


	/*Overlay flashlight*/	
	$(".project-list a").click(function(event){ //Capture the click event on a link to an image
	  event.preventDefault();
	  var imageLocation = $(this).attr("href");
	 
	  $image.attr("src", imageLocation); //Update overlay with the image linked in the link
	  	  
	  $overlay.show(); //Show the overlay.
	  
	  var captionText = $(this).children("img").attr("alt"); //Get child's alt attribute and set caption
	  $caption.text(captionText);
	});

	
	$overlay.click(function(){ //When overlay is clicked
	  
	  $overlay.hide(); //Hide the overlay
	});
	/* end - Overlay flashlight*/

})