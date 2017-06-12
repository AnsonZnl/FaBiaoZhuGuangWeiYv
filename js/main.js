//百度分享
//baner轮播
//首页产品展示的选项卡
$(function () {
    $('a[data-toggle="tab"]').on('shown.bs.tab.', function (e) {
        //获取已激活标签名称
        var activeTab = $(e.target).text();
        //获取上一个激活标签
        var previousTab = $(e.relatedTarget).text();
        $(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);
    });
});
