// banner
var bannertu = document.querySelectorAll(".banner-image-screenshots a img");
var num = 0;
var now = bannertu[0];
setInterval(function () {
    num++;
    if (num > bannertu.length - 1) {
        num = 0;
    }
    now.classList.add("active");
    bannertu[num].classList.remove("active");
    now = bannertu[num];
}, 3000);

//热门设备推荐
var btn = document.querySelectorAll(".devices-rank-list> li");
var con = document.querySelectorAll(".rank-item-content");
var nowbtn=btn[0];
Array.from(btn).forEach(function (ele,i) {
    ele.onmouseover=function () {
        nowbtn.classList.remove("active");
        btn[i].classList.add("active");
        nowbtn=btn[i];
    }
});

//安卓电视
var mask=document.querySelectorAll(".app-block-over");
var main_li=document.querySelectorAll(".dianshi li");

Array.from(main_li).forEach(function (ele,index) {
   ele.onmouseover=function () {
       mask[index].style.opacity=1;
   }
    ele.onmouseout=function () {
        mask[index].style.opacity=0;
    }
});

//导航
var navbar_nav_li=document.querySelectorAll(".navbar-nav > li.xiala");
var dropdown_menu=document.querySelectorAll(".navbar-nav > li .dropdown-menu");
Array.from(navbar_nav_li).forEach(function (ele,index) {
    ele.onmouseover=function () {
        dropdown_menu[index].style.display="block";
    };
    ele.onmouseout=function () {
        dropdown_menu[index].style.display="none";
    }
});
var navbar_toggle=document.querySelector(".navbar-toggle");
var dropdown_menu2=document.querySelector("nav.nav-bar-element .navbar-collapse");
navbar_toggle.onclick=function () {
    dropdown_menu2.style.display="block";
};


