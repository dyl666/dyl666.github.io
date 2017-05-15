$(".btnbox li").click(function () {
    //轮播图
    /*$("btnbox li").removeClass("active");
     $(this).addClass("active");*/

    /*$("btnbox li").removeClass("active").filter(this).addClass("active");*/

    /*$(this).addClass("active");
     $("btnbox li").not(this).removeClass("active");*/
    //给所有添加，查找到其他的移除
    // $(this).addClass("active").siblings().removeClass("active");

    /*$("btnbox li").filter(".active").removeClass("active");
     $(this).addClass("active")*/

    /*$("btnbox li").filter(".active").removeClass("active").end().filter(this).addClass("active");*/

    /*   $("btnbox li").filter(".active").removeClass("active").siblings().addBack().filter(this).addClass("active");*/
    var btns = $(".btns li")
    var index = $(this).index();
    num = index;
    btns.filter("active").removeClass("active").end().filter(this.addClass("active")
    $("btns").filter("active").removeClass("active").end().eq(index).addClass("active");

    //顶部
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 500) {
            $(".top").css("top", 0)
        } else {
            $(".top").css("top", -30)
        }
    });

    //返回顶部
    $(".item").click(function () {
        $(window).scrollTop(0);
        $("html,body").animate({
            scrollTop: 0
        }, 500, "linear");
    });

    //楼层跳转
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        var flag1 = true;
        var flag2 = false;
        if (st > 300) {
            if (flag1) {
                flag2 = teue;
                flage1 = false;
                $(".leftbar").animate({width: 30, height: 150}).css("display", "block")
            } else {
                if (flag2) {
                    flag2 = false;
                    flage1 = true;
                    $(".leftbar").animate({width: 0, height: 0}, function () {
                        $(this).css("display", "none");
                    })
                }
            }
        }
        var to;
        $(window).scroll(function () {
            var st = $(window).scrollTop();
            clearTimeout(to);
            to = setTimeout(function () {
                $(".floor").each(function (index, ele) {
                    if (st > $(ele).offset().top) {//如果有父容器的话setoffTop就是父元素的高
                        $("btn").eq(index).addClass("active").siblings().removeClass("active")
                    }
                })
            }, 500);
            $(".leftbar btn").click(function () {
                var index = $(this).index()-1;
                var ot = $(".floor").eq(index).offset().top;//如果有父容器的话setoffTop就是父元素的高
                $("html,body").animate({
                    scrollTop: ot
                });
            }).hover(function () {
                var index = $(this).index()-1;
                $(this).css("background", colorarr[index]);
            }, function () {
                $(this).css("background", "")
            });


        })
    })
});