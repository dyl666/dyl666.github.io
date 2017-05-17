/*

var btns = $(".dian li");
var cons = $(".bannertu li");
var bigbox = $(".banner");
btns.click(function () {
    var index = $(this).index();
    num = index;
    btns.filter(".active").removeClass("active").end().filter(this).addClass("active");
    cons.filter(".active").removeClass("active").end().eq(index).addClass("active");
});
var t = setInterval(movebener, 3000);
var num = 0;
function movebener() {
    num++;
    console.log(num)
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
    t = setInterval(movebener, 3000);
});
*/
