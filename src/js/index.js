$(function(){
    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage','threePage','fourPage','fivePage'],//锚点
        navigation: true,
	    navigationPosition: 'right',
	    navigationTooltips: ['第一屏', '第二屏','第三屏','第四屏','第五屏'],
        scrollingSpeed: 1000,
        onLeave: function(prev,next){
           $('.section').eq(next.index).removeClass('current').siblings().addClass('current');
        },
    })
})