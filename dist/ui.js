$(document).ready(function(){
    swipeTab();
    contentTab();
    rollingBanner();
    accordion();
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

function contentTab(){
    $('.tab2-list').click(function(){
        var activeTab = $(this).attr('data-tab');
        $('.tab2-list').removeClass('active');
        $('.tab-con2').removeClass('active');
        $(this).addClass('active');
        $('#'+ activeTab).addClass('active');
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


function accordion(){
    $('.dropdown').each(function(){
        if (!$(this).hasClass('up')) {
            $(this).next('dropdown-body').show();
        }
    })

    var dd = $('.dropdown');
    dd.on('click', function () {
        var $dd_body = $(this).next('.dropdown-body');
        if ($(this).hasClass('up')) {
            $('.dropdown-body').slideUp(200);
            dd.removeClass('up').addClass('down');
            // $(this).removeClass('up').addClass('down');
            // $(this).next('.dropdown-body').slideUp(200);

        } else {
            // $('.dropdown-body').slideUp(200);
            $('.dropdown-body').not($dd_body).slideUp(200);
            dd.removeClass('up').addClass('down');

            $(this).removeClass('down').addClass('up');
            $(this).next('.dropdown-body').slideDown(200);
        }
    });
}



