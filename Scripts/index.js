var tScroll=0;
var abouth=0;

$(document).ready(function()
{
    
    $(window).scroll(function(){
        var temp = $(this).scrollTop();
        tScroll = temp;
    });

    abouth = $('#About').width();
    $('#About').css('height',abouth+'px');
});


$(window).resize(function(){
    abouth = $('#About').width();
    $('#About').css('height',abouth+'px');
});


$(document).on('mouseenter','td',function()
{
    var getpicid = $(this).attr('id');
    //alert(getpicid);
    
    if(getpicid!=null)
    {
        $('td#'+getpicid).css('cursor','pointer'); 
        $('#'+getpicid).css('color','orange');
        
        $('#'+getpicid).mouseenter(function()
        {
            $('#'+getpicid).css('color','orange');
        }).mouseleave(function(){
            $('#'+getpicid).css('color','white');
        });



        $('#'+getpicid).click(function()
        {
             $('#ShowPicture').css('display','block');
             $('#ShowPicture').css('top',tScroll+'px');
             $('#ShowPictureImage').css('background-image','url(media/'+getpicid+'.png)');
             $('body').css('overflow','hidden');
        });
    }
    
});

$(document).on('click','#ShowPictureClose',function()
{
    $('#ShowPicture').css('display','none');
    $('body').css('overflow','scroll');
});

$(document).on('mouseenter','#ShowPictureClose',function()
{
    $(this).css('color','orange');
}).on('mouseleave','#ShowPictureClose',function(){
    $(this).css('color','white');
});

