// banner
var box=document.querySelector(".bannertu-box");//获取图和点的大盒子
var btns=document.querySelectorAll(".bannertu-box .dian li");//获取每一个点
var cons=document.querySelectorAll(".bannertu-ul li");//获取每一张图
var nowbtn=btns[0];
var nowcon=cons[0];
var num=0;
Array.from(btns).forEach(function (ele,index) {
    ele.onmouseover=function () {
        num=index;
        for(var i=0;i<btns.length;i++){
            nowbtn.style.background="#fff";//其他每一个点的颜色
            cons[i].style.opacity=0;//其他图片的不透明度
            cons[i].style.zIndex=1;
        }
        this.style.background="#db192a";
        cons[index].style.opacity=1;
        cons[index].style.zIndex=5;
    };
});
var t=setInterval(move,2000);
var num=0;
function move() {
    num++;
    if(num==btns.length){
        num=0;
    }
    for(var i=0;i<btns.length;i++){
        btns[i].style.background="#fff";//其他每一个点的颜色
        cons[i].style.opacity=0;//其他图片的不透明度
        cons[i].style.zIndex=1;
    }
    btns[num].style.background="#db192a";//当前的背景颜色
    cons[num].style.opacity=1;
    cons[num].style.zIndex=5;
}
box.onmouseover=function () {
    clearInterval(t)
};
box.onmouseout=function () {
    t=setInterval(move,2000);
};
//左边导航
var leftul = document.querySelector(".celan");
var floorbtns = document.querySelectorAll(".celan ul .celan-li");//侧栏的li
var leftbar = document.querySelectorAll(".leftbar");//每个内容部分
var totop = document.querySelector(".totop");//回到顶部
var topbar = document.querySelector(".top");

window.onscroll = function () {
    var st = document.body.scrollTop;
    if (st > 800) {
        /*leftul.style.width = "34px";
        leftul.style.height = "540px";*/
        leftul.style.opacity=1;
    } else {
        /*leftul.style.width = "0";
        leftul.style.height = "0";*/
        leftul.style.opacity=0;
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
totop.onclick = function () {
    animate(document.body, {scrollTop: 0}, 500)
};

// input
var input=document.querySelector(".input-top");
input.onfocus=function () {
    if(this.value=="199减100"){
        this.value="";
    }
};
input.onblur=function () {
    if(this.value==""){
        this.value="199减100";
    }
};
