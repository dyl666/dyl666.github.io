// header
var shop = document.querySelector(".shop");
var shopseclis = document.querySelector(".shop-seclis");
shop.onmouseover = function () {
    shopseclis.style.display = "block";
};
shop.onmouseout = function () {
    shopseclis.style.display = "none";
};
//banner开始
var btns = document.querySelectorAll(".dian>li");
var cons = document.querySelectorAll(".banner-tu>li");
var bannerbox = document.querySelector(".banner-box");
var jiantoubox = document.querySelector(".jiantou");
var zuojian = document.querySelector(".zuojian");
var youjian = document.querySelector(".youjian");
var btnnow = btns[0];
var connow = cons[0];
var num = 0;
var bgcolor = ["#FFE4ED", "#EBE7EA", "#FECE57", "#F4CFD7", "#D6A9EA", "#7688CF"];
Array.from(btns).forEach(function (ele, index) {
    ele.onmouseover = function () {
        clearTimeout(t);
        num = index;
        t = setTimeout(function () {
            btnnow.style.background = "rgba(0,0,0,0.5)";
            btns[index].style.background = "rgba(255,255,255,0.5)";
            btnnow = btns[index];
            connow.style.opacity = 0;
            connow.style.zIndex = 1;
            cons[index].style.zIndex = 2;
            cons[index].style.opacity = 1;
            connow = cons[index];
        }, 300)

    }
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
    // bigbox.style.background = bgcolor[num];
}
bannerbox.onmouseover = function () {
    clearInterval(t);
};
bannerbox.onmouseout = function () {
    t = setInterval(move, 2000);
};
zuojian.onmouseover = function () {
    zuojian.style.background = "rgba(0,0,0,0.1)";
};
zuojian.onmouseout = function () {
    zuojian.style.background = "";
};
zuojian.onclick = function () {
    num -= 2;
    move();
};
youjian.onmouseover = function () {
    youjian.style.background = "rgba(0,0,0,0.1)";
};
youjian.onmouseout = function () {
    youjian.style.background = "";
};
youjian.onclick = function () {
    move();
};

//banner左侧栏
var asidelists = document.querySelectorAll(".aside>ul>li");
var asidesec = document.querySelectorAll(".aside-sec");
Array.from(asidelists).forEach(function (ele, i) {
    ele.onmouseover = function (e) {
        asidesec[i].style.display = "block";
        e.stopPropagation();
    };
    ele.onmouseout = function () {
        asidesec[i].style.display = "none"
    }
});

//nav开始
var navli = document.querySelectorAll(".nav-main-li");
var navsecond = document.querySelectorAll(".nav-second");
Array.from(navli).forEach(function (ele, i) {
    ele.onmouseover = function (e) {
        navsecond[i].style.display = "block";
        e.stopPropagation();
    };
    ele.onmouseout = function () {
        navsecond[i].style.display = "none";
    }
});

//input
var daohanginput1 = document.querySelector(".daohang-input1");
var daohanginput2 = document.querySelector(".daohang-input2")
var secinput = document.querySelector(".secinput");
var daohanginputcon = document.querySelector(".daohang-input-con");
daohanginput1.onclick = function (e) {
    secinput.style.display = "block";
    daohanginput1.style.border = "1px solid #ff6700";
    daohanginput2.style.border = "1px solid #ff6700";
    daohanginput2.style.borderLeft = "0";
    daohanginputcon.style.display = "none";
    e.stopPropagation();
};
document.body.onclick = function () {
    secinput.style.display = "none";
    daohanginput1.style.border = "1px solid #e0e0e0";
    daohanginput2.style.border = "1px solid #e0e0e0";
    daohanginput2.style.borderLeft = "0";
    daohanginputcon.style.display = "block";
};
//明星单品和为你推荐
var inner2 = document.querySelector(".content3 .inner-mxdp");
var inner3 = document.querySelector(".content3 .content3-tj");
var zuojiantou = document.querySelector(".content2-2");
var youjiantou = document.querySelector(".content2-3");
var zuojiantou2 = document.querySelector(".content2-2.tjz");
var youjiantou2 = document.querySelector(".content2-3.tjy");

var num2 = 0;
var t2 = setInterval(move2, 3000);
function move2() {
    num2++;
    if (num2 == 2) {
        num2 = 0;
    }
    if (num2 == 1) {
        zuojiantou.style.color = "#999";
        youjiantou.style.color = "#ccc";
        zuojiantou2.style.color = "#999";
        youjiantou2.style.color = "#ccc";
    }
    if (num2 == 0) {
        zuojiantou.style.color = "#ccc";
        youjiantou.style.color = "#999";
        zuojiantou2.style.color = "#ccc";
        youjiantou2.style.color = "#999";
    }
    inner2.style.marginLeft = -1226 * num2 + "px";
    inner3.style.marginLeft = -1226 * num2 + "px";
}
//明星单品箭头
zuojiantou.onmouseover = function () {
    zuojiantou.style.color = "red";
    clearInterval(t2);
};
zuojiantou.onmouseout = function () {
    zuojiantou.style.color = "";
    t2 = setInterval(move2, 3000);
};
youjiantou.onmouseover = function () {
    youjiantou.style.color = "red";
    clearInterval(t2);
};
youjiantou.onmouseout = function () {
    youjiantou.style.color = "";
    t2 = setInterval(move2, 3000);
};
zuojiantou.onclick = function () {
    inner2.style.marginLeft = 0;
};
youjiantou.onclick = function () {
    inner2.style.marginLeft = -1226 + "px";
};
inner2.onmouseover = function () {
    clearInterval(t2);
};
inner2.onmouseout = function () {
    t2 = setInterval(move2, 3000);
};
//为你推荐箭头(自动播放在上面函数)
zuojiantou2.onmouseover = function () {
    zuojiantou2.style.color = "red";
    clearInterval(t2);
};
zuojiantou2.onmouseout = function () {
    zuojiantou2.style.color = "";
    t2 = setInterval(move2, 3000);
};
youjiantou2.onmouseover = function () {
    youjiantou2.style.color = "red";
    clearInterval(t2);
};
youjiantou2.onmouseout = function () {
    youjiantou2.style.color = "";
    t2 = setInterval(move2, 3000);
};
zuojiantou2.onclick = function () {
    inner3.style.marginLeft = 0;
};
youjiantou2.onclick = function () {
    inner3.style.marginLeft = -1226 + "px";
};
inner3.onmouseover = function () {
    clearInterval(t2);
};
inner3.onmouseout = function () {
    t2 = setInterval(move2, 3000);
};


var btns_1 = document.querySelectorAll(".content-dian1 li");
var cons_1 = document.querySelectorAll(".neirong .ul1>li");
var btns_2 = document.querySelectorAll(".content-dian2 li");
var cons_2 = document.querySelectorAll(".neirong .ul2>li");
var btns_3 = document.querySelectorAll(".content-dian3 li");
var cons_3 = document.querySelectorAll(".neirong .ul3>li");
var btns_4 = document.querySelectorAll(".content-dian4 li");
var cons_4 = document.querySelectorAll(".neirong .ul4>li");

var zuo1 = document.querySelector(".zuo1");
var you1 = document.querySelector(".you1");
var zuo2 = document.querySelector(".zuo2");
var you2 = document.querySelector(".you2");
var zuo3 = document.querySelector(".zuo3");
var you3 = document.querySelector(".you3");
var zuo4 = document.querySelector(".zuo4");
var you4 = document.querySelector(".you4");

var bigbox2_1 = document.querySelector(".neirong .ul1");
var bigbox2_2 = document.querySelector(".neirong .ul2");
var bigbox2_3 = document.querySelector(".neirong .ul3");
var bigbox2_4 = document.querySelector(".neirong .ul4");

function aaa(btns2, cons2, zuo, you, bigbox2) {
    var btnnow2 = btns2[0];
    var connow2 = cons2[0];
    var num2 = 0;
    var tb2;
    Array.from(btns2).forEach(function (ele, index) {
        ele.onclick = function () {
            num2 = index;
            btnnow2.style.background = "#B0B0B0";
            btns2[index].style.background = "#fff";
            btnnow2.style.border = "2px solid #fff";
            btns2[index].style.border = "2px solid #ff6700";
            btnnow2 = btns2[index];

            connow2.style.display = "none";
            connow2.style.zIndex = 1;
            cons2[index].style.zIndex = 2;
            cons2[index].style.display = "block";
            connow2 = cons2[index];
        }
    });
    var t2 = setInterval(move2, 3000);

    function move2() {
        num2++;
        if (num2 == btns2.length) {
            num2 = 0;
        }
        if (num2 == -1) {
            num2 = btns2.length - 1;
        }
        btnnow2.style.background = "#B0B0B0";
        btns2[num2].style.background = "#fff";
        btnnow2.style.border = "2px solid #fff";
        btns2[num2].style.border = "2px solid #ff6700";
        btnnow2 = btns2[num2];

        connow2.style.display = "none";
        connow2.style.zIndex = 1;
        cons2[num2].style.zIndex = 2;
        cons2[num2].style.display = "block";
        connow2 = cons2[num2];
    }

    bigbox2.onmouseover = function () {
        clearInterval(t2);
    };
    bigbox2.onmouseout = function () {
        t2 = setInterval(move2, 3000);
    };
    zuo.onclick = function () {
        num2 -= 2;
        move2();
    };
    you.onclick = function () {
        move2();
    };
}
aaa(btns_1, cons_1, zuo1, you1, bigbox2_1);
aaa(btns_2, cons_2, zuo2, you2, bigbox2_2);
aaa(btns_3, cons_3, zuo3, you3, bigbox2_3);
aaa(btns_4, cons_4, zuo4, you4, bigbox2_4);

