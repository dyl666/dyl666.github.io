//banner图
//原生的办法
var btns = document.querySelectorAll(".dian li");
var cons = document.querySelectorAll(".banner-tu li");
var bigbox = document.querySelector(".banner");
var btnnow = btns[0];
var connow = cons[0];
var num = 0;
var bgcolor = ["#E8E8E8", "#9AD6FA", "#FCFCFC", "#D50334", "#9A00DB", "#FCFCFC"];
var tb;
Array.from(btns).forEach(function (ele, index) {
    hover(ele, function () {
        clearTimeout(tb);
        tb = setTimeout(function () {
            num = index;
            btnnow.style.background = "rgba(0,0,0,0.5)";
            btns[index].style.background = "rgba(255,255,255,0.5)";
            btnnow = btns[index];
            connow.style.opacity = 0;
            connow.style.zIndex = 1;
            cons[index].style.zIndex = 2;
            cons[index].style.opacity = 1;
            connow = cons[index];
            bigbox.style.background = bgcolor[index];
        }, 300);
    }, function () {
    });
});
var t = setInterval(move, 3000);
function move() {
    num++;
    if (num == btns.length) {
        num = 0;
    }
    if (num == -1) {
        num = btns.length - 1;
    }
    btnnow.style.background = "rgba(0,0,0,0.5)";
    btns[num].style.background = "rgba(255,255,255,0.5)";
    btnnow = btns[num];
    connow.style.opacity = 0;
    connow.style.zIndex = 1;
    cons[num].style.zIndex = 2;
    cons[num].style.opacity = 1;
    connow = cons[num];
    bigbox.style.background = bgcolor[num];
}
bigbox.onmouseover = function () {
    clearInterval(t);
};
bigbox.onmouseout = function () {
    t = setInterval(move, 3000);
};

//banner用JQuery写
/*JQuery
var btns = $(".dian li");
var cons = $(".banner-tu li");
var bigbox = $(".banner");
var bgcolor = ["#E8E8E8", "#9AD6FA", "#FCFCFC", "#D50334", "#9A00DB", "#FCFCFC"];
btns.click(function () {
    var index = $(this).index();
    num = index;
    btns.filter(".active").removeClass("active").end().filter(this).addClass("active");
    cons.filter(".active").removeClass("active").end().eq(index).addClass("active");
});
var t = setInterval(movebener, 2000);
var num = 0;
function movebener() {
    num++;
    if (num == btns.length) {
        num = 0;
    }
    if (num == -1) {
        num = btns.length - 1;
    }
    btns.filter(".active").removeClass("active").end().eq(num).addClass("active");
    cons.filter(".active").removeClass("active").end().eq(num).addClass("active");
}
bigbox.hover(function () {
    clearInterval(t)
}, function () {
    t = setInterval(movebener, 2000);
});*/


//banner下面
var btns2 = document.querySelectorAll(".left-center-ul li");
var cons2 = document.querySelectorAll(".left-top-ul li");
var rights = document.querySelectorAll(".content1-right ul li");
var masks = document.querySelectorAll(".mask");
var mask1 = document.querySelectorAll(".lunbotu .mask1");
var imgs = document.querySelectorAll(".wait-play-img");

Array.from(btns2).forEach(function (ele, index) {
    ele.onmouseover = function () {
        for (var i = 0; i < btns2.length; i++) {
            cons2[i].style.display = "none";
            mask1[i].style.display = "none";
        }
        cons2[index].style.display = "block";
        mask1[index].style.display = "block";
    };
});
Array.from(rights).forEach(function (ele, index) {
    ele.onmouseover = function () {
        masks[index].style.display = "block";
    };
    ele.onmouseout = function () {
        masks[index].style.display = "none";
    }
});

var inner = document.querySelector(".left-center-ul");
var leftj = document.querySelector(".zuojiantou");
var rightj = document.querySelector(".youjiantou");
var num2 = 0;
function moves() {
    num2++;
    if (num2 == 2) {
        num2 = 0;
    }
    inner.style.marginLeft = -488 * num2 + "px";
}
leftj.style.display = "none";
leftj.onclick = function () {
    num2 -= 2;
    moves();
    leftj.style.display = "none";
    rightj.style.display = "block";
};
rightj.onclick = function () {
    moves();
    rightj.style.display = "none";
    leftj.style.display = "block";
};

//猫
var catbtn = document.querySelectorAll(".nav li");
var catcon = document.querySelectorAll(".cat");
Array.from(catbtn).forEach(function (ele, index) {
    ele.onmouseover = function () {
        catcon[index].style.opacity = 1;
    };
    ele.onmouseout = function () {
        catcon[index].style.opacity = 0;
    }
});

var inner2 = document.querySelector(".inner-txt");
var num4 = 0;
setInterval(function () {
    if (num4 == 0) {
        inner2.style.transition = "all 1s";
    }
    num4++;
    if (num4 == 4) {
        num4 = 0;
    }
    inner2.style.marginTop = -40 * num4 + "px";
}, 2000); //setInterval的时间必须得比inner的时间长

//顶部
var lists = document.querySelectorAll(".list .list-li");
var seclists = document.querySelectorAll(".seclist");
Array.from(lists).forEach(function (ele, index) {
    ele.onmouseover = function () {
        seclists[index].style.display = "block";
    };
    ele.onmouseout = function () {
        seclists[index].style.display = "none";
    }
});

//左边导航
var leftul = document.querySelector(".celan");
 var floorbtns = document.querySelectorAll(".celan ul .celan-li");//侧栏的li
 var leftbar = document.querySelectorAll(".content .leftbar");//每个内容部分
 var totop = document.querySelector(".totop");//回到顶部
 var totop2 = document.querySelector(".totop2");
 var topbar = document.querySelector(".top");
 window.onscroll = function () {
 var st = document.body.scrollTop;
 if (st > 800) {
 leftul.style.width = "35px";
 leftul.style.height = "332px";
 } else {
 leftul.style.width = "0";
 leftul.style.height = "0";
 }
 //顶部
 var obj = document.body;
 var str = obj.scrollTop;
 if (str > 300) {
 topbar.style.top = 0;
 } else {
 topbar.style.top = "-50px";
 }
 };
 Array.from(floorbtns).forEach(function (ele, index) {
 ele.onclick = function () {
 animate(document.body, {scrollTop: leftbar[index].offsetTop}, 500)
 };
 });
/* totop.onclick = function () {
 animate(document.body, {scrollTop: 0}, 500)
 };*/
 totop2.onclick = function () {
 animate(document.body, {scrollTop: 0}, 500)
 };
//顶部固定
/*btn.scrollTop=100;
 btn.onclick=function () {
 animate(document.body,{scrollTop:0},500);
 };*/
//左边侧栏jquery
var to;
$(window).scroll(function () {
    var st = $(window).scrollTop();
    var flag1 = true;
    var flag2 = true;
    if (st > 500) {
        if(flag1){
            flag1=false;
            flag2=true;
            $(".celan").animate({width:36,height:333}).css("display","block");
        }else{
            if(flag2){
                flag1=true;
                flag2=false;
                $(".celan").animate({width:0,height:0},function () {
                    $(this).css("display","none");
                });
            }
        }
    }
    clearTimeout(to);
    to=setTimeout(function () {
        $(".leftbar").each(function (index,ele) {
            if(st>$(ele).offset().top){
                $(".celan-li").eq(index).addClass("active").siblings().removeClass("active");
            }
        })

    })
});
var colorarr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#000"];
$(".celan-li").click(function () {
    var index=$(this).index()-1;
    var ot=$(".leftbar").eq(index).offset().top;
    $("html,body").animate({scrollTop:ot});
}).hover(function () {
    var index=$(this).index()-1;
    $(this).css("background",colorarr[index]);
},function () {
    $(this).css("background","")
});
$(".totop").click(function () {
    $(window).scrollTop(0);
    $("html,body").animate({
        scrollTop: 0
    }, 1500);
});
//问题：1.返回顶部的时候没有动画效果 2.楼层跳转的时候点击事件的颜色变化不对 3.楼层动画完之后不会隐藏
//左侧栏结束

//顶部显示隐藏
$(window).scroll(function () {
    var st=$(this).scrollTop();
    if(st>300){
        $(".top").css("top",0);
    }else{
        $(".top").css("top",-50);
    }
});
//input搜索
var input2 = document.querySelector(".sousuo-input1");
input2.onfocus = function () {
    if (this.value == "牛仔依然很忙") {
        this.value = "";
    }
};
input2.onblur = function () {
    if (this.value == "") {
        this.value = "牛仔依然很忙";
    }
};

//右侧
var boxs = document.querySelectorAll(".box");
var tips = document.querySelectorAll(".tip");
var t;
Array.from(boxs).forEach(function (box, index) {
    hover(box,
        function () {
            clearTimeout(t);
            t = setTimeout(function () {
                tips[index].classList.add("show");
            }, 200);
        },
        function () {
            clearTimeout(t);
            if (tips[index].classList.contains("show")) {
                tips[index].classList.remove("show");
                tips[index].classList.add("hide");
            }
        });
});

Array.from(tips).forEach(function (tip) {
    tip.addEventListener("animationend", function () {
        if (tip.classList.contains("hide")) {
            tip.classList.remove("hide");
        }
    }, 200);
});

//显示隐藏app
var btnapp = document.querySelector(".app");
var xianshi = document.querySelector(".xianshi");
xianshi.onmouseover = function () {
    btnapp.style.display = "block";
};
xianshi.onmouseout = function () {
    btnapp.style.display = "none";
};

//banner左侧
var bannerleftlis = document.querySelectorAll(".banner-left-listli");
var bannerleftseclis = document.querySelectorAll(".banner-left-right-js");
Array.from(bannerleftlis).forEach(function (ele, index) {

    ele.onmouseover = function () {
        bannerleftseclis[index].style.display = "block";
        bannerleftseclis[index].style.top = -31.19 * index + "px";
        // e.stopPropagation();
    };
    ele.onmouseout = function () {
        bannerleftseclis[index].style.display = "none";
    }
});
