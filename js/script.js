


			
			


$(function () {

	$('.arrow').click(function() {
		$.scrollTo(document.getElementById('skills'), 800);
	});

});

$(function () {

	$('.mainLink').click(function() {
		$.scrollTo(document.getElementById('mainPage'), 800);
	});

});

$(function () {

	$('.skillsLink').click(function() {
		$.scrollTo(document.getElementById('skills'), 800);
	});

});

$(function () {

	$('.aboutLink').click(function() {
		$.scrollTo(document.getElementById('about'), 800);
	});

});

$(function () {

	$('.contactLink').click(function() {
		$.scrollTo(document.getElementById('contact'), 800);
	});

});



new TypeIt('#typedtext', {
	strings: ["Pomagamy odkrywać", "własne możliwości"],
	speed: 25,
	waitUntilVisible: true
  }).go();

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("active");
    } else {
       $("header").removeClass("active");
    }
});