$(function() {
    $("body").on("click", "a", function() {
        var changeView = $(this).attr("data-to");
        if(!changeView) return;  // 若沒有設定指定頁面 則return

        // 若是上方切換[登入/註冊]按鈕，即有focus效果
        if($(this).parent('div').hasClass('switch_btn')) {
            $('.switch_btn a').removeClass('active');
            $(this).addClass('active');
        }

        //  目標畫面
        var targetView = $("[data-view="+ changeView +"]");

        // 切換不同登入步驟
        $('.view').removeClass('active');
        targetView.addClass('active');

        // 判斷是否要顯示上方切換[登入/註冊]按鈕
        var showSwitch =targetView.attr("data-switch-show");
        $('.switch_btn').css({'display': !!showSwitch ? 'inline-block': 'none' });
    });

});
