$(function(){
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var mainWidth = $("#main").width();
    $("#main,.site-content,.bg").css("width",mainWidth * 4);
    if($("#wpadminbar").length){
        var wpbar = $("#wpadminbar").height();
        
        windowHeight = windowHeight - wpbar;
        $("#main").css("height",windowHeight);
    }else{
        $("#main").css("height",windowHeight);
    }
    
    $(".page").css("width",windowWidth);

    var speed = 50;
    var conoff = $("#content").offset();
    var conmove = conoff.left;
    var i = 0;
    //マウスホイールで横移動
    $('html').mousewheel(function(event, mov) {
        conmove = conmove +  (conoff.left + (mov * speed));
        if(conmove <= 0){
            $("#bg").css({"left":conmove/25});
            $("#bg1").css({"left":conmove/20});
            $("#bg2").css({"left":conmove/15});
            $("#bg3").css({"left":conmove/10});
            $("#bg4").css({"left":conmove/5});
            $("#bg5").css({"left":conmove/1});
        }else{
            conmove = 0;
        }
        //ie firefox
        $(this).scrollLeft($(this).scrollLeft() - mov * speed);
        //webkit
        $('body').scrollLeft($('body').scrollLeft() - mov * speed);
        return false;   //縦スクロール不可
    });
})