/*****下拉菜单*******/
$('.dropdown[hover="1"]').on('mouseenter',function(){
$(this).addClass('open');
})
$('.dropdown').on('mouseleave',function(){
    $(this).removeClass('open');
})

/*******显示购物车*********/
for(var i=0;i<$('.goods_hover').length;i++){
    $('.hover_display>.cart').eq(i).attr({'data-toggle':"tooltip",'title':"不登录也能加入购物车",'data-placement':'bottom'})
}
$('.goods_hover').mouseenter( function () {
    $(this).find('.hover_display').show('fast');
}).mouseleave(function () {
    $(this).find('.hover_display').hide('fast');
})
/*****提示框******/
$(function () {
    $("[data-toggle='tooltip']").tooltip();
});