/*
$(function () {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
//            'sectionsColor': ['', '', '', '',''],//每屏颜色
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],  //保存地址栏历史记录
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['HEADER', 'SELF-INTRODUCTION', 'MY-SKILL', 'SHOWCASE', 'Footer'], //提示文字
        // 'fixedElements':".banner-main" //固定导航栏
        /!*'controlArrows': true,//slide箭头
         'scrollingSpeed': 1000,//滚动时间
         'loopTop': true,//滚动完最后一屏可以直接回到第一屏
         'continuousVertical': true,//
         'menu': '#menu',
         'navigation': true,*!/
        //两边飞进来的动画
        afterLoad: function (an, index) {
            if (index == 2) { //索引值从1开始
                $(".index2 .left").animate({left: 100});
                $(".index2 .right").animate({left: 100});
            } else if (index == 5) {
                $(".next").css("transform", "rotate(-90deg)")
            }
        },
        //飞出去的动画
        onLeave: function (index) {
            if (index == 2) { //索引值从1开始
                $(".index2 .left").animate({left: -300});
                $(".index2 .right").animate({left: -300});
            } else if (index == 5) {
                $(".next").css("transform", "rotate(90deg)")
            }
        },
//next下一个
/!*$(".next").click(function () {
 $.fn.fullpage.moveSectionDown())
 })*!/*/
