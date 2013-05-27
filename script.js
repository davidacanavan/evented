
var offset = parseFloat($('#for-users').css('margin-top'));

$('.navbar li a').click(function(event) 
{
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});