$(function(){
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
})