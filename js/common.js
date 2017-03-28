$('.dropdown[hover="1"]').mouseover(function() {   
     	$(this).addClass('open');    
 	}).mouseout(function() {        
 		$(this).removeClass('open');    
 	});

$(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
$(function  () {
	$('[data-toggle="tooltip"]').tooltip(); 
	$('[data-toggle="collapse"]').click(function  () {
		console.log($(this).attr('aria-expanded'));
		if ($(this).attr('aria-expanded')=='true') {
			$(this).html("+");
		}else{
			$(this).html("-");
		}
	})
	//取消底部的自动播放商标 
	$('#bottom_hook').carousel({
        pause: true,
        interval: false
    });
})