/**
 * Created by kwelch on 6/3/15.
 */

$('#firstSkill').on('mouseover', function() {
    $('#task1').removeClass('hide');
    $('#task2').removeClass('hide');
    $('#task3').removeClass('hide');
    $('.shadow').addClass('hide');
});

$('#firstSkill').on('mouseout', function() {
    $('#task1').addClass('hide');
    $('#task2').addClass('hide');
    $('#task3').addClass('hide');
    $('.shadow').removeClass('hide');
});
