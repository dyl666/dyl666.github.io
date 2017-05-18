/*
 var
 var masks=document.querySelectorAll(".mask");
 Array.from(masks).forEach(function(v,i){
 v.onmouseover=function(){
 this.style.display="block";
 }
 v.onmouseout=function(){
 this.style.display="none";
 }
 })*/
var lists=document.querySelectorAll(".banner-box-left li");
var list_mores=document.querySelectorAll(".banner_more");
Array.from(lists).forEach(function(v,i){
    v.onmouseover=function(){
        list_mores[i].style.display="block";
        list_mores[i].style.top=-30*i-15+"px";
    }
    v.onmouseout=function(){
        list_mores[i].style.display="none";
    }
})




//banner
$(".dot li").mouseover(function () {
    var btns = $(".dot li");
    var index = btns.index(this);
    num=index;
    btns.filter(".dot-active").removeClass("dot-active").end().filter(this).addClass("dot-active");
    $(".banner-box-middle-top li").filter(".banner-active").removeClass("banner-active").end().eq(index).addClass("banner-active");
})

var banner_t = setInterval(banner_move, 2000);
var num = 0;
function banner_move() {
    num++;
    if (num == $(".dot li").length) {
        num = 0;
    }
    if (num < 0) {
        num = $(".dot li").length - 1;
    }
    $(".dot li").filter(".dot-active").removeClass("dot-active").end().eq(num).addClass("dot-active");
    $(".banner-box-middle-top li").filter(".banner-active").removeClass("banner-active").end().eq(num).addClass("banner-active");
}

$(".banner-box-middle-box").mouseover(function () {
    clearInterval(banner_t);
})

$(".banner-leftbtn").click(function () {
    num -= 2;
    banner_move();
})

$(".banner-rightbtn").click(function () {
    banner_move();
})

//倒计时
function setTime() {
    var nowdate = new Date();
    var targettime = new Date(2017, 4, 20, 0, 0, 0);
    var cha = targettime.getTime() - nowdate.getTime();
    var hours = Math.floor(cha / (1000 * 60 * 60));
    var minutes = Math.floor(cha / (1000 * 60) % 60);
    var seconds = Math.floor(cha / 1000 % 60);
    $(".time-hour").html(hours<10?"0"+hours:hours);
    $(".time-minute").html(minutes<10?"0"+minutes:minutes);
    $(".time-second").html(seconds<10?"0"+seconds:seconds);
}

setTime();
setInterval(setTime, 1000);

//fixtop

$(window).scroll(function () {
    var st = $(this).scrollTop();
    if (st > 600) {
        $(".fixtop").css("top", 0);
    } else {
        $(".fixtop").css("top", -50);
    }
})

// 发现好货 优质专辑 排行榜
$(".content2-bottom-dot li").mouseover(function(){
    var content2tns=$(".content2-bottom-dot li");
    var content2index=content2tns.index(this);
    content2num=content2index;
    content2tns.filter(".content2-bottom-dot-active").removeClass("content2-bottom-dot-active").end().filter(this).addClass("content2-bottom-dot-active");
    $(".content2-middle-bottom-move").filter(".content2-middle-bottom-active").removeClass("content2-middle-bottom-active").end().eq(content2index).addClass("content2-middle-bottom-active");
})


var content2=setInterval(content2_move,2000);
var content2num=0;
function content2_move(){
    content2num++;
    if(content2num==$(".content2-bottom-dot li").length){
        content2num=0;
    }
    if(content2num<0){
        num=$(".content2-bottom-dot li").length-1;
    }
    $(".content2-bottom-dot li").filter(".content2-bottom-dot-active").removeClass("content2-bottom-dot-active").end().eq(content2num).addClass("content2-bottom-dot-active");
    $(".content2-middle-bottom-move").filter(".content2-middle-bottom-active").removeClass("content2-middle-bottom-active").end().eq(content2num).addClass("content2-middle-bottom-active");
}

$(".content2-middle-bottom").mouseover(function(){
    clearInterval(content2);
})

$(".content2-leftbtn").click(function(){
    content2num-=2;
    content2_move();
})

$(".content2-rightbtn").click(function(){
    content2_move();
})

//享品质  京东直播
$(".content5-dot li").mouseover(function(){
    var content5_btns=$(".content5-dot li");
    var content5_index=content5_btns.index(this);
    content5num=content5_index;
    content5_btns.filter(".content5-active").removeClass("content5-active").end().filter(this).addClass("content5-active");
    $(".content5-content").filter(".content5-cactive").removeClass("content5-cactive").end().eq(content5_index).addClass("content5-cactive");
})

var content5=setInterval(content5_move,2000);
var content5num=0;
function content5_move(){
    content5num++;
    if(content5num==$(".content5-dot li").length){
        content5num=0;
    }
    if(content5num<0){
        $(".content5-dot li").length-1;
    }
    $(".content5-dot li").filter(".content5-active").removeClass("content5-active").end().eq(content5num).addClass("content5-active");
    $(".content5-content").filter(".content5-cactive").removeClass("content5-cactive").end().eq(content5num).addClass("content5-cactive");
}

$(".content5-bottom-right-right").mouseover(function(){
    clearInterval(content5);
})

$(".content5-leftbtn").click(function(){
    content5num-=2;
    content5_move();
})

$(".content5-rightbtn").click(function(){
    content5_move();
})

//左侧固定
$(".floor").click(function(){
    var fixleft_index=$(this).index();
    var fixleft_con=$(".conbox").eq(fixleft_index).offset().top;
    $("html,body").animate({scrollTop:(fixleft_con-50)},500);
})

$(".fixlefttop").click(function(){
    $("html,body").animate({scrollTop:0},500);
})

var fixleft;
$(window).scroll(function(){
    var wst=$(window).scrollTop();
    if(wst>=$(".cz").offset().top){
        $(".fixleft").addClass("fixleft-hidden");
    }else{
        $(".fixleft").removeClass("fixleft-hidden");
    }
    clearTimeout(fixleft);
    fixleft=setTimeout(function(){
        $(".conbox").each(function(i,v){
            var fixleft_ot=$(v).offset().top-50;
            if(wst>=fixleft_ot){
                $(".floor a").filter(".bgc").removeClass("bgc").end().eq(i).addClass("bgc");
            }
        })
    },200)
})

//右侧导航
var icon=document.querySelectorAll(".icon1");
var about=document.querySelectorAll(".yincang");
var tshow;
Array.from(icon).forEach(function(ele,index){
    ele.onmouseover=function(){
        ele.style.backgroundColor="#c81623";
        clearTimeout(tshow);
        tshow=setTimeout(function(){
            about[index].classList.add("show");
        },200)
    }
    ele.onmouseout=function(){
        clearTimeout(tshow);
        ele.style.backgroundColor="#7A6E6E";
        if(about[index].classList.contains("show")){

            about[index].classList.remove("show");
            about[index].classList.add("hide");
        }
    }
});

Array.from(about).forEach(function(move_box){
    move_box.addEventListener("animationend",function(){
        if(move_box.classList.contains("hide")){
            move_box.classList.remove("hide");
        }
    })
})

function content6_move(content6_leftbtn,content6_rightbtn,content6_js){
    content6_leftbtn.click(function(){
        content6_js.css("marginLeft",-570);
    })

    content6_rightbtn.click(function(){
        content6_js.css("marginLeft",0);
    })

}

function content6_move2(content6_leftbtn,content6_rightbtn,content6_js){
    content6_leftbtn.click(function(){
        content6_js.css("marginLeft",-1189);
    })

    content6_rightbtn.click(function(){
        content6_js.css("marginLeft",0);
    })

}

function content6_move3(content6_leftbtn,content6_rightbtn,content6_js){
    content6_leftbtn.click(function(){
        content6_js.css("marginLeft",-370);
    })

    content6_rightbtn.click(function(){
        content6_js.css("marginLeft",0);
    })

}

content6_move($(".content6-leftbtn1"),$(".content6-rightbtn1"),$(".content6-js1"));
content6_move($(".content6-leftbtn2"),$(".content6-rightbtn2"),$(".content6-js2"));
content6_move($(".content6-leftbtn3"),$(".content6-rightbtn3"),$(".content6-js3"));
content6_move($(".content6-leftbtn4"),$(".content6-rightbtn4"),$(".content6-js4"));
content6_move2($(".content6-leftbtn5"),$(".content6-rightbtn5"),$(".content6-js5"));
content6_move($(".content6-leftbtn6"),$(".content6-rightbtn6"),$(".content6-js6"));
content6_move($(".content6-leftbtn7"),$(".content6-rightbtn7"),$(".content6-js7"));
content6_move2($(".content6-leftbtn8"),$(".content6-rightbtn8"),$(".content6-js8"));
content6_move($(".content6-leftbtn9"),$(".content6-rightbtn9"),$(".content6-js9"));
content6_move($(".content6-leftbtn10"),$(".content6-rightbtn10"),$(".content6-js10"));
content6_move($(".content6-leftbtn11"),$(".content6-rightbtn11"),$(".content6-js11"));
content6_move($(".content6-leftbtn12"),$(".content6-rightbtn12"),$(".content6-js12"));
content6_move3($(".content6-leftbtn13"),$(".content6-rightbtn13"),$(".content6-js13"));
content6_move3($(".content6-leftbtn14"),$(".content6-rightbtn14"),$(".content6-js14"));
content6_move3($(".content6-leftbtn15"),$(".content6-rightbtn15"),$(".content6-js15"));


$(window).scroll(function(){
    var st=$(this).scrollTop();
    var ch=$(this).height();

        $("img").filter(function(){
            return $(this).attr("src")=="";
        }).each(function(){
            if((st+ch)>$(this).offset().top){
                $(this).attr("src",function(){
                    return $(this).attr("data-src");
                })
            }
        })

})