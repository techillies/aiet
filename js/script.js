$(document).ready(function() {
	$('.menu').accordion({
		collapsible : true
	});

	$(function() {
		$("#tabs").tabs();
	});

	$(".navItems").hover(function() {
		$(this).css("background", "#5F3A08");
		$(this).find('a').css("color", "white");
	}, function() {
		$(this).css("background", "#d89b4b");
		$(this).find('a').css("color", "rgba(61, 42, 17, 1)");
	});
	
		$('.itemList').click(function() {
			$(this).addClass("itemListClick");
		});
	$('#acordionDecoration h3').click(function()
	{
		$(this).css("border","2px solid #690a1a")
	});
	$("").hover(function() {
		$(this).findattr('scrollamount','0');
	}, function() {
		$(this).attr('scrollamount','6');
	});

});
