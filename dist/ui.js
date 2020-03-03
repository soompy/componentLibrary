$(document).ready(function(){
    swipeTab();
    rollingBanner();
})

$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

function swipeTab(){
    $('.tab-menu li').click(function(){
        var activeTab;
        if($(this).parent().hasClass('tab-swipe')){
            if($(this).index() == 0){
                $(this).parent('.tab-menu').css('transform','translateX(0)');
            } else if($(this).index() == 1) {
                $(this).parent('.tab-menu').css('transform','translateX(-6vw)');
            } else if($(this).index() == 2) {
                $(this).parent('.tab-menu').css('transform','translateX(-12vw)');
            } else if($(this).index() == 3) {
                $(this).parent('.tab-menu').css('transform','translateX(-18vw)');
            } else if($(this).index() == 4) {
                $(this).parent('.tab-menu').css('transform','translateX(-24vw)');
            } else if($(this).index() == 5) {
                $(this).parent('.tab-menu').css('transform','translateX(-30vw)');
            }
        }

        if(!$(this).hasClass('active')){
            $(this).siblings().removeClass('active');
            activeTab = $(this).attr('class');
            $(this).addClass('active');
            $(this).parent().nextAll('.tab-con').removeClass('active');
            $('.tab-con.'+activeTab).addClass('active');
        }

        if($('._setPosition'.length)){
            $('._setPosition').slick('setPosition');
        }

    })
}




function rollingBanner(){
    var last = $("#rolling li").last();
    $(".banner").prepend(last);
    $(".banner").css("left","-=1000px");

    var first = "";
    var timer = setInterval(roll, 2000);
    function roll(){
        $(".banner").animate({left:"-=1000px"},400,function(e){
            first = $(".banner li").first();
            $(".banner").append(first);
            $(".banner").css("left","-1000px");

        })
    } 
}

