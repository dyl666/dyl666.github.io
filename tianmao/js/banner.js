var bannerbox = document.querySelector(".banner-box");
var pictures = document.querySelectorAll(".banner-tu li");
var dots = document.querySelectorAll(".dian li");
dots.forEach(function (ele, index) {
    ele.onmouseover = function () {
        num = index;
        for (var i = 0; i < dots.length; i++) {
             dots[i].style.background = "rgba(0,0,0,0.5)";
            pictures[i].style.opacity = 0.5;
            pictures[i].style.zIndex = 2;
        }
        this.style.background = "rgba(255,255,255,0.5)";
        pictures[index].style.opacity = 1;
        pictures[index].style.zIndex = 18;
    }
});
var t=setInterval(move,2000);
var num=0;
function move() {
    num++;
    if(num==dots.length){
        num=0;
    }
    for(var i=0;i<dots.length;i++){
        dots[i].style.background="rgba(0,0,0,0.5)";
        pictures[i].style.zIndex=2;
        pictures[i].style.opacity=0.5;
    }
    dots[num].style.background="rgba(255,255,255,0.5)";
    pictures[num].style.opacity=1;
    pictures[num].style.zIndex=18;
}
bannerbox.onmouseover=function () {
    clearInterval(t);
};
bannerbox.onmouseout=function () {
    t=setInterval(move,2000);
};
