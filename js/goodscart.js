/**
 * Created by Administrator on 2017/3/24.
 */


$('.dropdown[hover="1"]').mouseover(function() {
    $(this).addClass('open');
}).mouseout(function() {
    $(this).removeClass('open');
});

$('.show_right[hover="1"]').mouseover(function() {
    $(this).addClass('open');
}).mouseout(function() {
    $(this).removeClass('open');
});



/*添加减少商品*/
$('.cart_goods_list .add').on('click',function () {
    /*对应商品总数量及总价格*/
   var count= $(this).prev().val();
    count++;
    $(this).prev().val(count);
    var price =(parseFloat($(this).parent().prev().children(0).children(0).text()));
    var total= (count*price).toFixed(2);
    $(this).parent().next().children(0).children(0).html(total);

    /*总数量*/
   var total_count= $('.total_count').text();
    total_count++;
    $('.total_count').text(total_count);

    /*总价格*/
    var total_money=parseFloat($('.total_money').text());
    total_money=(price+total_money).toFixed(2);
   $('.total_money').text(total_money);

    var pay_total_money=(parseFloat($('.ship').text())+parseFloat(total_money)).toFixed(2);
    $('.pay_total_money').text(pay_total_money);

})
$('.cart_goods_list .reduce').on('click',function () {
    /*对应商品总数量及总价格*/
    var count= $(this).next().val();
    count--;
    if (count<=0) {
        count=0;
        $(this).parent().parent().remove();
       /* console.log($(this).parent().parent());*/
    }
    $(this).next().val(count);
    var price =(parseFloat($(this).parent().prev().children(0).children(0).text()));
    var total= (count*price).toFixed(2);
    $(this).parent().next().children(0).children(0).html(total);
    console.log(count)

    /*总数量*/
    var total_count= $('.total_count').text();
    total_count--;
    $('.total_count').text(total_count);

    /*总价格*/
    var total_money=parseFloat($('.total_money').text());
    total_money=(total_money-price).toFixed(2);
    $('.total_money').text(total_money);

    var pay_total_money=(parseFloat($('.ship').text())+parseFloat(total_money)).toFixed(2);
    $('.pay_total_money').text(pay_total_money);

    console.log($('.cart_goods_list .reduce').length);
    if($('.cart_goods_list .reduce').length=='0'){
        $('.cart_goods_list .goods').remove();
        $('.cart_goods_list .total-money').remove();
    }
})