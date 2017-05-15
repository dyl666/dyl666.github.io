//banner
var imgs = document.querySelectorAll(".banner-container li");//获取每一张图片
var box = document.querySelector(".banner-middle");
var btns = document.querySelectorAll(".dian li");
var nextbtn=document.querySelector(".next");
var prevbtn=document.querySelector(".prev");
var now = 0;//要飞出去的那个img的下标
var z = 10;
var flag=true;
//左
var t = setInterval(move, 3000);
function move() {
    imgs[now].classList.add("leftOut");
    btns[now].classList.remove("active");
    now++;
    if (now == imgs.length) {
        now = 0;
    }
    imgs[now].classList.add("leftIn");
    btns[now].classList.add("active");
    imgs[now].style.zIndex = z++;

}
imgs.forEach(function (img) {
    img.addEventListener("animationend", function () {
        img.className = "";
        flag=true;
    })
});
box.onmouseover = function () {
    clearInterval(t);
};
box.onmouseout = function () {
    t = setInterval(move, 3000);
};
btns.forEach(function (btn, index) {
    btn.onclick = function () {
        if (now == index) {
            return;
        }
        if (now < index) {
            imgs[now].classList.add("leftOut");
            imgs[index].classList.add("leftIn");
        } else {
            imgs[now].classList.add("rightOut");
            imgs[index].classList.add("rightIn");
        }
        btns[now].classList.remove("active");
        btn.classList.add("active");
        imgs[index].style.zIndex = z++;
        now = index;
    }
});
nextbtn.onclick=function () {
    if(flag){
        move();
        flag=false;
    }
};
prevbtn.onclick=function () {
    if(flag){
        imgs[now].classList.add("rightOut");
        btns[now].classList.remove("active");
        now--;
        if(now==-1){
            now=imgs.length-1;
        }
        imgs[now].classList.add("rightIn");
        btns[now].classList.add("active");
        imgs[now].style.zIndex=z++;
        flag=false;
    }
};

//input
var input=document.querySelector(".input-sousuo1");
var input2=document.querySelector(".input");
input.onfocus=function () {
    if(this.value=="包月流量包"){
        this.value="";
    }
};
input.onblur=function () {
    if(this.value==""){
        this.value="包月流量包"
    }
};
input2.onfocus=function () {
    if(this.value=="请输入手机号码"){
        this.value="";
    }
};
input2.onblur=function () {
    if(this.value==""){
        this.value="请输入手机号码"
    }
};

//banner下面模块
var box2=document.querySelector(".yhcx");
var inner2 = document.querySelector(".yh-container ul");
var prevbtn2=document.querySelector(".yhzj");
var nextbtn2=document.querySelector(".yhyj");
let num2 = 4;
var t2=setInterval(move2,3000);
function move2() {
    num2++;
    inner2.style.transition="all 1s";
    inner2.style.marginLeft=-295*num2+"px";
}
box2.onmouseover=function () {
    clearInterval(t2);
};
box2.onmouseout=function () {
    t2=setInterval(move2,3000);
};
inner2.addEventListener("transitionend",function () {
    if(num2==12){
        inner2.style.transition="none";
        num2=4;
        inner2.style.marginLeft=-295*num2+"px";
    }else if(num2==0){
        inner2.style.transition="none";
        num=8;
        inner2.style.marginLeft=-295*num2+"px";
    }
    flag2=true;
});
let flag2=true;
nextbtn2.onclick=function () {
    if(flag2){
        move2();
        flag2=false;
    }
};
prevbtn2.onclick=function () {
    if(flag2){
        flag2=false;
        num2-=2;
        move2();
    }
};

//头部
var lists=document.querySelectorAll(".header-ul-li");
var seclists=document.querySelectorAll(".header-seclist");
Array.from(lists).forEach(function (ele,index) {
    ele.onmouseover=function () {
        seclists[index].style.display="block";
    };
    ele.onmouseout=function () {
        seclists[index].style.display="none";
    }
});

//晋中
var diqu=document.querySelector(".diqu");
var diqulist=document.querySelector(".diqu ul");
diqu.onclick=function (e) {
    diqulist.style.display="block";
    e.stopPropagation();
};
document.body.onclick=function () {
    diqulist.style.display="none";
};

//导航
var navlis=document.querySelectorAll(".nav-list-li");
var navseclis=document.querySelectorAll(".nav-seclist");
var sanjiao=document.querySelectorAll("ins");
Array.from(navlis).forEach(function (ele,index) {
    ele.onmouseover=function () {
        navseclis[index].style.display="block";
        sanjiao[index].style.display="block";
    };
    ele.onmouseout=function () {
        navseclis[index].style.display="none";
        sanjiao[index].style.display="none";
    }
});

//公告
var gonggaos=document.querySelectorAll(".gonggao-ul li");
var gg=document.querySelector(".gonggao-ul");
var jtz=document.querySelector(".left");
var jty=document.querySelector(".right");
function move3(){
    var str=gonggaos[0].innerHTML;
    for(var i=0;i<gonggaos.length-1;i++){
        gonggaos[i].innerHTML=gonggaos[i+1].innerHTML;
    }
    gonggaos[gonggaos.length-1].innerHTML=str;
}

function move4(){
    var str1=gonggaos[gonggaos.length-1].innerHTML;
    for(var i=gonggaos.length-1;i>0;i--){
        gonggaos[i].innerHTML=gonggaos[i-1].innerHTML;
    }
    gonggaos[0].innerHTML=str1;

}

var t5=setInterval(move3,5000);
gg.onmouseover=function(){
    clearInterval(t5);
};
gg.onmouseout=function(){
    t5=setInterval(move3,5000);
};
jtz.onclick=function () {
    move4()
};
jty.onclick=function () {
    move3()
};
