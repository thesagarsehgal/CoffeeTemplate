$(document).ready(function(){
	$(".modal").modal();
	$(".parallax").parallax();
	$(".sidenav").sidenav();
	$('.carousel').carousel({numVisible: 6});
	$(".slider").slider({full_width: true});
});

function toggleModal(){
	var instance = M.Modal.getInstance($("#modal3"));
	instance.open();
}