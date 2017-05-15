var conbanners = document.querySelectorAll(".banner-tu li");
var btndians = document.querySelectorAll(".dian li");
var bannerbox = document.querySelector(".banner-box");
var btnzuo = document.querySelector(".zuo");
var btnyou = document.querySelector(".you");
var btndiannow = btndians[0];
var conbannernow = conbanners[0];
var num = 0;
Array.from(btndians).forEach(function (ele, index) {
    ele.onmouseover = function () {
        clearTimeout(t);
        num = index;
        t=setTimeout(function () {
            btndiannow.style.background = "#dddddd";
            btndians[index].style.background = "#A10000";//鼠标点击过后每个点的颜色
            btndiannow = btndians[index];
            conbannernow.style.opacity = 0;
            conbannernow.style.zIndex = 1;
            conbanners[index].style.opacity = 1;
            conbanners[index].style.zIndex = 2;
            conbannernow = conbanners[index];
        },200);
        
    }
});
var t = setInterval(move, 2000);
function move() {
    num++;
    if (num == btndians.length) {
        num = 0;
    }
    if (num == -1) {
        num = btndians.length - 1;
    }
    btndiannow.style.background = "#dddddd";
    btndians[num].style.background = "#A10000";//鼠标点击过后每个点的颜色
    btndiannow = btndians[num];
    conbannernow.style.opacity = 0;
    conbannernow.style.zIndex = 1;
    conbanners[num].style.opacity = 1;
    conbanners[num].style.zIndex = 2;
    conbannernow = conbanners[num];
}
bannerbox.onmouseover = function () {
    clearInterval(t);
};
bannerbox.onmouseout = function () {
    t = setInterval(move, 2000);
};
btnzuo.onclick = function () {
    num -= 2;
    move();
};
btnyou.onclick = function () {
    move();
};

//导航开始
var lists = document.querySelectorAll(".lists>li");
var seclists = document.querySelectorAll(".seclists");
var arr = [];
Array.from(seclists).forEach(function (ul) {
    var lis = ul.querySelectorAll("li");
    var height = lis.length * 30 - 20;
    arr.push(height);
});
Array.from(lists).forEach(function (li, index) {
    li.onmouseover = function () {
        seclists[index].style.height = arr[index] + "px";
    };
    li.onmouseout = function () {
        seclists[index].style.height = 0;
    }
});

//input
var input = document.querySelector(".input-sousuo");
input.onfocus = function () {
    if (this.value == "搜“衬衫”，体验与众不同") {
        this.value = "";
    }
};
input.onblur = function () {
    if (this.value == "") {
        this.value = "搜“衬衫”，体验与众不同";
    }
};

//微信二维码
var wxbtn = document.querySelector(".weixin");
var wxcon = document.querySelector(".wxewm");
wxbtn.onmouseover = function () {
    wxcon.style.display = "block";
};
wxbtn.onmouseout = function () {
    wxcon.style.display = "none";
};

//回到顶部
var totop = document.querySelector(".dingbu .totop");
totop.onclick = function () {
    animate(document.body, {scrollTop: 0}, 500);
};
