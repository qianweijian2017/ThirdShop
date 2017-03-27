/**
 * Created by Administrator on 2017/3/27.
 */

$('#grid').click(function () {
   $(this).addClass('selected');
    $('#list').removeClass('selected');
    $('.grid_all').show();
    $('.list_all').hide();
})
$('#list').click(function () {
    $(this).addClass('selected');
    $('#grid').removeClass('selected');
    $('.grid_all').hide();
    $('.list_all').show();
})