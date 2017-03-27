/**
 * Created by Administrator on 2017/3/27.
 */

$('#grid').click(function () {
   $(this).attr('selected');
    $('#list').removeAttr('selected');
    $('.grid_all').show();
    $('.list_all').hide();
})
$('#list').click(function () {
    $(this).attr('selected');
    $('#grid').removeAttr('selected');
    $('.grid_all').hide();
    $('.list_all').show();
})