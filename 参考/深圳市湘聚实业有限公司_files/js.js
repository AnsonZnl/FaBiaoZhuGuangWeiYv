$(function () {
	//鼠标经过产品图时上浮一下
   $(".frist_tu li").live({
        mouseenter:
            function () {
                $(this).stop(true, true).animate({"margin-top": "-5px"});
				$(this).find(".tu_h").stop(true, true).fadeIn();
            },
        mouseleave:
            function () {
                $(this).stop(true, true).animate({"margin-top": "0px"});
				$(this).find(".tu_h").stop(true, true).fadeOut();
            }			
    });
	//主页产品点击跳转
	$(".second_top a").click(function(){
        var index = $(this).index();
        $(".second_top a").removeClass("hover").eq(index).addClass("hover");
		$(".in_cont").hide().eq(index).show();
    });
	//主页产品
    $(".zy_pro li").hover(function () {
        $(this).find(".cover").stop(true, true).animate({"opacity": "1"},500);
        $(this).find(".cover img").stop(true, true).animate({"margin-top": "95px"},600);
        $(this).find(".cover p").stop(true, true).animate({"margin-top": "5px"},500);
    },function(){
        $(this).find(".cover").stop(true, true).animate({"opacity": "0"},600);
        $(this).find(".cover img").stop(true, true).animate({"margin-top": "-60px"},1000);
        $(this).find(".cover p").stop(true, true).animate({"margin-top": "-50px"},7000);
    });
	
	//下拉导航
    $(".navigation li").hover(function () {
        $(".dropMenus").stop(true, true).animate({"opacity": "1"},500);
	});
	$(".navigation li.a").hover(function () {
		$(".dropMenus").stop(true, true).fadeToggle();
		$(".dropMenus").stop(true, true).animate({"opacity": "0"},600);
    });
	$(".header,.navigation").hover(function(){},function(){
		$(".dropMenus").stop(true, true).animate({"opacity": "0"},600);
	})

//鼠标经过添加样式
$(function () {
    $(".items li").hover(function () {
        var index = $(this).index();
        $(".items li img").removeClass("hover").eq(index).addClass("hover");
    });
});

	//左菜单点击跳转
	$(".zong_left ul li").click(function(){
        var index = $(this).index();
        $(".zong_left ul li").removeClass("hover").eq(index).addClass("hover");
	//s	$(".zong_right").hide().eq(index).show();
    });
	
	//内页二级菜单
$(".zong_left ul li").hover(function () {
		var index = $(this).index();
        $(".left_hide").hide();
		$(this).find(".left_hide").css({"display":"block"});
	
    });
	
	//产品中心点击跳转
	$(".pro_top a").click(function(){
        var index = $(this).index();
        $(".pro_top a").removeClass("hover").eq(index).addClass("hover");
		$(".in_conts").hide().eq(index).show();
    });	
	//产品列表页左菜单点击跳转
	$(".products_top a").click(function(){
        var index = $(this).index();
        $(".products_top a").removeClass("hover").eq(index).addClass("hover");
		$(".pro_s").hide().eq(index).show();
    });	
	
	
	
	

	
	


	
	//客服
    $(".qqkefu .top").click(function(){
        $("html,body").animate({"scrollTop":0}, 1000);
    })
    $(window).scroll(function () {
        var scrollTop = document.body.scrollTop;
//        if(scrollTop>78){
//            $(".top").css({"opacity":"0.95","filter":"alpha(opacity=95)"})
//        }else{
//            $(".top").css({"opacity":"1","filter":"alpha(opacity=100)"})
//        }
    })

    //QQ
    $(".qq_czaa").hover(function(){
        var idw=this.id;
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0")
        {
            $(this).stop(true,false).animate({width:idw,"left":"-85px"}, 300);
        } else{
            $(this).stop(true,false).animate({"width":"160px"}, 300);
        }
    },function(){
        if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0")
        {
            $(this).stop(true,false).animate({"width":"45px","left":"0"}, 300);
        } else{
            $(this).stop(true,false).animate({"width":"45px"}, 300);
        }
    })
    
    $(".qq_czb").hover(function(){
        $(".erweima").show(50)
    },function(){
        $(".erweima").hide(50)
    })

});



	
	