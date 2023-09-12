$(function(){
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    let nowWidth = windowWidth;
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

    var speed = 200;
    var conoff = $("#content").offset();
    var conmove = 0;
    var conright = mainWidth;
    var i = 0;
    //マウスホイールで横移動
    /*
    $('html').mousewheel(function(event, mov) {
        conmove = conmove +  (conoff.left + (mov * speed));
        if(conmove <= 0 && conmove >= (conright * -4)){
            $("#bg").css({"left":conmove/50});
            $("#bg1").css({"left":conmove/45});
            $("#bg2").css({"left":conmove/40});
            $("#bg3").css({"left":conmove/35});
            $("#bg4").css({"left":conmove/30});
            $("#bg5").css({"left":conmove/5});
        }else if(conmove < (conright * -4)){
            conmove = conright * -4;
        }else if(conmove > 0){
            conmove = 0;
        }
        //ie firefox
        $(this).scrollLeft($(this).scrollLeft() - mov * speed);
        //webkit
        $('body').scrollLeft($('body').scrollLeft() - mov * speed);
    });*/
    
    $(window).resize(function(){
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var mainWidth = $("#main").width();
        
        if($("#wpadminbar").length){
            var wpbar = $("#wpadminbar").height();
            
            windowHeight = windowHeight - wpbar;
            $("#main").css("height",windowHeight);
        }else{
            $("#main").css("height",windowHeight);
        }
        $("#main,.site-content,.bg").css("width",windowWidth * 4);
        $(".page").css("width",windowWidth);
        nowWidth = windowWidth;
    })

    $("a[href^='#']").click(function(){
        var speed = 5;
        if(nowWidth <= 1920){
            speed = 3;
            console.log(5)
        }else if(nowWidth >= 1920){
            speed = 10;
            console.log(10)
        }
        var target = $(this.hash);
        var position = $(target).offset().left;
        $('html,body').animate({scrollLeft: position}, 400);
        $("#bg").animate({left:-position/50},400);
        $("#bg1").animate({left:-position/45},400);
        $("#bg2").animate({left:-position/40},400);
        $("#bg3").animate({left:-position/35},400);
        $("#bg4").animate({left:-position/30},400);
        $("#bg5").animate({left:-position/speed},400);
        return false;
      });
})