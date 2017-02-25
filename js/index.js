var about = document.getElementsByClassName('about-container')[0];
var projects = document.getElementsByClassName('project-container')[0];
var contacts = document.getElementsByClassName('contact-container')[0];


$('#about').click(function(e){
	e.preventDefault();
	about.classList.remove('hidden')
	$('.about-desc').fadeIn(1000)
	$('#about').css ('background-color', 'black')
	projects.classList.remove('hidden')
	projects.classList.add('hidden')
	$('.projects-desc').fadeOut(1)
	$('#projects').css ('background-color', 'rgba(0,0,0,0.0')
	contacts.classList.remove('hidden');
	contacts.classList.add('hidden')
	$('.contact-desc').fadeOut(1)
	$('#contacts').css ('background-color', 'rgba(0,0,0,0.0')
});

$('#projects').click(function(e){
	e.preventDefault();
	projects.classList.remove('hidden')
	$('.projects-desc').fadeIn(1000)
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
	$('.projects-desc').fadeOut(1)
	$('#projects').css ('background-color', 'rgba(0,0,0,0.0')
	about.classList.remove('hidden');
	about.classList.add('hidden')
	$('.about-desc').fadeOut(1)
	$('#about').css ('background-color', 'rgba(0,0,0,0.0')
});


$(document).ready(function(){
	$('.about-desc').fadeOut(1)
	about.classList.remove('hidden');
	$('.about-desc').css('opacity', 0).slideDown('slow').animate({ opacity: 1 },{ queue: false, duration: 'slow' });
	$('#about').css ('background-color', 'black');
	projects.classList.remove('hidden');
	projects.classList.add('hidden');
	$('.projects-desc').fadeOut(1);
	$('#projects').css ('background-color', 'rgba(0,0,0,0.0');
	contacts.classList.remove('hidden');
	contacts.classList.add('hidden');
	$('.contact-desc').fadeOut(1);
	$('#contacts').css ('background-color', 'rgba(0,0,0,0.0');
})