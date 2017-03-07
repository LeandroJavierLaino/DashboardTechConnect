$("#slideshow > div:gt(0)").hide();

setInterval(function(){
	$('#slideshow > div:first')
		.fadeOut(1000)
		.next()
		.fadeIn(3000)
		.appendTo('#slideshow');
}, 120000);  