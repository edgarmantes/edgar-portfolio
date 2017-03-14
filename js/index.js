var about = document.getElementsByClassName('about-container')[0];
var projects = document.getElementsByClassName('project-container')[0];
var contacts = document.getElementsByClassName('contact-container')[0];

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");



/*Overlay flashlight*/
		$overlay.append($image); //An image to overlay

		$overlay.append($caption); //A caption to overlay

		$("body").append($overlay); //Add overlay

			
		$(".project-list a:nth-child(2)").click(function(event){ //Capture the click event on a link to an image
		  event.preventDefault();
		  var imageLocation = $(this).attr("href");
		 
		  $image.attr("src", imageLocation); //Update overlay with the image linked in the link
		  	  
		  $overlay.fadeIn(1000); //Show the overlay.
		  
		  var captionText = $(this).children("img").attr("alt"); //Get child's alt attribute and set caption
		  $caption.text(captionText);
		});


		$overlay.click(function(){ //When overlay is clicked
		  
		  $overlay.fadeOut(1000); //Hide the overlay
		});
/* end - Overlay flashlight*/

var  mobile = window.matchMedia("(max-width: 1000px)")

if (mobile.matches) {


	$(document).ready(function(){

		$('.nav-hover').on('click', function(event){
			console.log('menu btn test')
			event.preventDefault();

			$('.about-container').fadeOut();
			$('.project-container').fadeOut();
			$('.contact-container').fadeOut();
			$('.nav-container').fadeIn();
			$('.nav-container').css('position', 'fixed');
		});

		$('#about').on('click', function(event){

			event.stopPropagation();
			$('.nav-container').fadeOut();
			$('.project-container').fadeOut();
			$('.about-container').fadeIn(2000);
		})

		$('#projects').on('click', function(event){

			event.stopPropagation();
			$('.nav-container').fadeOut();
			$('.about-container').fadeOut();
			$('.project-container').fadeIn(2000);
		})

		$('#contacts').on('click', function(event){

			event.stopPropagation();
			$('.nav-container').fadeOut();
			$('.about-container').fadeOut();
			$('.contact-container').fadeIn(2000);
		})

		// bouncing hidden, when scroll reaches bottom
		$('.project-container').scroll(function() {
			console.log($('.project-container').scrollTop() + $(window).height(), $('.project-container').height() + 10)
		   if($('.project-container').scrollTop() + $(window).height() > $('.project-list').height() + 100) {
		        $('.arrow-down').fadeOut(2000);
		   } else {
		   		$('.arrow-down').fadeIn(2000);
		   }
		});

		$('.aside-nav').hover(function(){return})


	});




} else {



	// Functions for overlay

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


		// Listener when you click on the 'about' link 
		$('#about').click(function(e){
			e.preventDefault();

				var navMove = $('.nav-container')
				TweenLite.to(navMove, 2.5, { ease: Power4.easeOut, x: 0 });

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

				var navMove = $('.nav-container')
				TweenLite.to(navMove, 2.5, { ease: Power4.easeOut, x: 0 });

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

				var navMove = $('.nav-container')
				TweenLite.to(navMove, 2.5, { ease: Power4.easeOut, x: 0 });

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

		$('.menu-btn').on('click', function(){
			var navMove = $('.nav-container')
			TweenLite.to(navMove, 2.5, { ease: Power4.easeOut, x: -215 });
		})



		$('.nav-hover').hover(

			function(){
				var navMove = $('.nav-container')

				TweenLite.to(navMove, 2.5, { ease: Power4.easeOut, x: -215 });
			},

			function(){
				var navMove = $('.nav-container')

				TweenLite.to(navMove, 2.5, { ease: Power4.easeOut, x: 0 });
			}
		)

				// Projects 
		// $('.btn-info').on('click',
		// 	function(){
		// 		console.log('testing')
		// 		$('.flip3D .front').addClass('transform', 'perspective( 600px ) rotateY( -180deg )')
		// 	}
		// )

		// $('.btn-info').on('click',
		// 	function(){
		// 		$('.flip3D .back').addClass('transform', 'perspective( 600px ) rotateY( 0deg )')
		// 	}
		// )

	})

}