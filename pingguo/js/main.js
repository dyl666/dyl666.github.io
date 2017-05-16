var lunbo = document.querySelectorAll("ul.lunbo li");
var bannertu = document.querySelectorAll(".banner-img li");
var banner = document.querySelector(".banner");
var num = 0;
var nowlunbo = lunbo[0];
var nowbannertu = bannertu[0];
var t = setInterval(move, 2000);
Array.from(lunbo).forEach(function (ele, index) {
    hover(ele, function () {
        clearTimeout(t);
        t = setTimeout(function () {
            num = index;
            nowlunbo.style.background = "#333";
            lunbo[index].style.background = "#000";
            nowlunbo = lunbo[index];
            nowbannertu.style.opacity = 0;
            nowbannertu.style.zIndex = 1;
            bannertu[index].style.zIndex = 2;
            bannertu[index].style.opacity = 1;
            nowbannertu = bannertu[index];
        }, 300)
    }, function () {
    })

});
function move() {
    num++;
    if (num == lunbo.length) {
        num = 0;
    }
    if (num == -1) {
        num = lunbo.length - 1;
    }
    nowlunbo.style.background = "";
    lunbo[num].style.background = "#333";
    nowlunbo = lunbo[num];
    nowbannertu.style.opacity = 0;
    nowbannertu.style.zIndex = 1;
    bannertu[num].style.zIndex = 2;
    bannertu[num].style.opacity = 1;
    nowbannertu = bannertu[num];
}
banner.onmouseover = function () {
    clearInterval(t);
};
banner.onmouseout = function () {
    t = setInterval(move, 2000);
};
var zuojian = document.querySelector(".banner-left-btn");
var youjian = document.querySelector(".banner-right-btn");
zuojian.onclick = function () {
    num -= 2;
    move();
};
youjian.onclick = function () {
    move();
}