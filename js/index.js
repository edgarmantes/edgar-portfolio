var about = document.getElementsByClassName('about-container')[0];
var projects = document.getElementsByClassName('project-container')[0];
var contacts = document.getElementsByClassName('contact-container')[0];


/*Overlay variables*/ 
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");



/*Overlay flashlight*/
		$overlay.append($image); //An image to overlay

		$overlay.append($caption); //A caption to overlay

		$("body").append($overlay); //Add overlay

			
		$(".project-list a:nth-child(2)").click(function(event){ //Capture the click event on a link to an image
		  event.preventDefault();
		  var imageLocation = $(this).attr("href"); // "href" on the image refers to the location of the .gif file
		 
		  $image.attr("src", imageLocation); //Update overlay with the image linked in the link
		  $image.attr("class", "gif-image")

		  $overlay.fadeIn(1000); //Show the overlay.
		  
		  var captionText = $(this).children("img").attr("alt"); //Get child's alt attribute and set caption
		  $caption.text(captionText);
		});


		$overlay.click(function(){ //When overlay is clicked
		  
		  $overlay.fadeOut(1000); //Hide the overlay
		});


/* end - Overlay flashlight*/





var stateManager = (function () {
  	// State of viewport windown (mobile or desktop)
  	var state = null;

  	var resizePage = function () {
	    if ($('body').width() < 1000) { // constantly checks width of window
	      	if (state !== "mobile") { 
	      		displayMobile(); // when screen resizes and state is still or becomes 'mobile' this function will be envoked
	      	}

	    }
	    else {
	      	if (state !== "desktop") { 
	      		displayDesktop(); 
	      	}

	    }
	}; 

  	var displayMobile = function () {
		state = "mobile";
		console.log("enter mobile");
		// enter code for mobile view
		var navMove = $('.nav-container')
		TweenLite.to(navMove, 2.5, { ease: Power4.easeOut, x: 0 });

		$(document).ready(function(){

			$('#about').off('click');


			$('.menu-icon').off('click')

			$('.nav-hover').on('click', function(event){	// Opens the nav menu for mobile
				event.preventDefault();

				$('.about-container').fadeOut();		// hides about container
				$('.project-container').fadeOut();		// hides project container
				$('.contact-container').fadeOut();		// hides contact container
				$('.nav-container').fadeIn();			// unhides the nav container
				$('.nav-container').css('position', 'fixed'); //
			});

			$('#about').on('click', function(event){ // Hide all container except the about container
				event.preventDefault();
				event.stopPropagation();
				$('.nav-container').fadeOut();
				$('.project-container').fadeOut();
				$('.about-container').fadeIn(2000);
			})

			$('#projects').on('click', function(event){ // // Hide all container except the projects container
				event.preventDefault();
				event.stopPropagation();
				$('.nav-container').fadeOut();
				$('.about-container').fadeOut();
				$('.project-container').fadeIn(2000);
			})

			$('#contacts').on('click', function(event){ // Hide all container except the contacts container
				event.preventDefault();
				event.stopPropagation();
				$('.nav-container').fadeOut();
				$('.about-container').fadeOut();
				$('.contact-container').fadeIn(2000);
			})

			// bouncing hidden, when scroll reaches 10px more than screen height
			$('.project-container').scroll(function() {

			   if($('.project-container').scrollTop() + $(window).height() > $('.project-list').height() + 100) {
			        $('.arrow-down').fadeOut(2000);
			   } else {
			   		$('.arrow-down').fadeIn(2000);
			   }
			});

		});

 	};




  	var displayDesktop = function () {
		state = "desktop";
		console.log("enter desktop");
		// enter code for desktop view
		$(document).ready(function(){

			$('.about-container').fadeIn(2000); // When entering site About container is shown first

			setTimeout(function(){		// About me description loads by fading in from the right

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


			setTimeout(function(){
				$('.menu-icon').on('click', function(e){
					e.preventDefault();

					var navMove = $('.nav-container')
					TweenLite.to(navMove, 2.5, { ease: Power4.easeOut, x: -215 });

				})
			},500)

		})


  	};


  	// var resizeMobile = function () {
   //  	console.log("resizing mobile");
  	// };
  	// var resizeDesktop = function () {
   //  	console.log("resizing desktop");
  	// };
  	
  	return {
	    init: function () {
	      resizePage();
	      $(window).on('resize', resizePage);
	    }
  	};

} ());

stateManager.init();