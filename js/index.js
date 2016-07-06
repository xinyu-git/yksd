//Tab 切换
$(document).ready(function(){
//导航下拉
$(function() {
	$(".nav_btn").click(function(event) {
		$('.nav_list_xl').slideDown();
	});
	$(document).click(function(event) {
			
			if($(event.target).is(".nav_btn")) 
			{
				$('.nav_list_xl').slideDown();
			}
			if($(event.target).is(".nav_list_xl")) 
			{
				$('.nav_list_xl').show();
			}
			if($(event.target).is(".nav_list_xl a")) 
			{
				$('.nav_list_xl a').show();
			}
			else
			{
				$(".nav_list_xl").hide()
			}
		});
});
});
$(document).ready(function(){
	$('.tabBox .tabMenu li').live('mouseenter', function(){
		var tabMenu = $(this).closest('.tabMenu');
		var tabContent = $(this).closest('.tabBox').find('.tabContent');
		var index = $(this).index();
		tabMenu.find('li').removeClass('hover');
		tabMenu.find('li').eq(index).addClass('hover');
		tabContent.find('.tabContentC').removeClass('hover').hide();
		tabContent.find('.tabContentC').eq(index).addClass('hover').show();
		});
	});

