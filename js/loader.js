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

function coffeeMode(){
	body=$("body");
	btn=$(".togglebtn");
	if(body.hasClass("coffee")===true){
		body.removeClass("coffee");
		body.addClass("casual");
		btn.text("Coffee Mode");
		btn.css("padding","2px");
	}
	else if(body.hasClass("casual")===true){
		body.removeClass("casual");
		body.addClass("coffee");
		btn.text("Normal Mode");
		btn.css("padding","0px");
	}
}