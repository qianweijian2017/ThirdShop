/*大图*/
$('.sm_img img').eq(0).css('opacity', 1);
$('.sm_img img').mouseenter(function () {
    var img_src=$(this).attr('src');
    for(var i=0;i<$('.sm_img img').length;i++){
        $('.sm_img img').eq(i).css('opacity', 0.6);
    }
    $(this).css('opacity', 1);
    $('.lg_img img').attr('src',img_src);
})
//手风琴
$('[data-toggle="collapse"]').click(function () {
    if($(this).attr('aria-expanded')=='true'){
        $(this).find('.change_icon').text("+");
    }else {
        $(this).find('.change_icon').text("-");
    }
})
//产品数量
var num_value=1;
$('.reduce').click(function () {
    num_value=Number($('.num_value').val());
    if(num_value>1){
        $('.num_value').val(num_value-1)
    }else {
        $('.num_value').val(1)
    }
})
$('.plus').click(function () {
    num_value=Number($('.num_value').val());
    $('.num_value').val(num_value+1)
})