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



$(document).ready(function(){

	$('.about-container').fadeIn(2000);

	setTimeout(function(){

		$('.about-desc').css({'transform': 'none'}).animate({ opacity: 1 },{ queue: false, duration: 2000 });
	}, 500);

	$('#about').css ('background-color', 'black');
	$('.project-wrapper').fadeOut(1);
	$('#projects').css ('background-color', 'rgba(0,0,0,0.0');
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



	// Listener when you click on the 'about' link 
	$('#about').click(function(e){
		e.preventDefault();
		$('.project-container').fadeOut(500)
		$('.contact-container').fadeOut(500)
		// about.classList.remove('hidden')

		setTimeout(function(){
			$('.about-container').fadeIn(1000)
			$('.about-desc').fadeIn(2000)
			$('#about').css ('background-color', 'black')

			$('.project-wrapper').fadeOut(1)
			$('#projects').css ('background-color', 'rgba(0,0,0,0.0')

			$('.contact-desc').fadeOut(1)
			$('#contacts').css ('background-color', 'rgba(0,0,0,0.0')
		},500);
	});

	// Listener when you click on the 'projects' link
	$('#projects').click(function(e){
		e.preventDefault();
		$('.about-container').fadeOut(500)
		$('.contact-container').fadeOut(500)

		setTimeout(function(){
			$('.project-wrapper').hide();
			$('.project-container').fadeIn(500)

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

			$('.about-desc').fadeOut(1)
			$('#about').css ('background-color', 'rgba(0,0,0,0.0')

			$('.contact-desc').fadeOut(1)
			$('#contacts').css ('background-color', 'rgba(0,0,0,0.0')
		}, 500)
	});

	// Listener when you click on the 'contacts' link
	$('#contacts').click(function(e){
		e.preventDefault();
		$('.about-container').fadeOut(500)
		$('.project-container').fadeOut(500)
		
		setTimeout(function(){

			$('.contact-desc').hide();
			$('.contact-container').fadeIn(500)

			$('.contact-desc').fadeIn(2000)
			$('#contacts').css ('background-color', 'black')

			$('.project-wrapper').fadeOut(1)
			$('#projects').css ('background-color', 'rgba(0,0,0,0.0')

			$('.about-desc').fadeOut(1)
			$('#about').css ('background-color', 'rgba(0,0,0,0.0')
		},500);
	});

})