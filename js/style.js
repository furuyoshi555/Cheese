



    $('.furueru').on('click',function(){
         $('h1').css("color","red");
        $('.sekaiwokaeru').css("animation","hurueru 2s infinite");
    });

/*about*/

// $(function(){
    $('#about-top').on('click', function(){
        var targetTop = $('#about').offset().top;
        $('#target_top span').html(targetTop);
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
// });

/*course*/

// $(function(){
    $('#course-top').on('click', function(){
        var targetTop = $('#course').offset().top;
        $('#target_top span').html(targetTop);
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
// });

/*news*/

// $(function(){
    $('#news-top').on('click', function(){
        var targetTop = $('#news').offset().top;
        $('#target_top span').html(targetTop);
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
// });

/*access*/

// $(function(){
    $('#access-top').on('click', function(){
        var targetTop = $('#access').offset().top;
        $('#target_top span').html(targetTop);
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
// });

/*contact*/

// $(function(){
    $('#contact-top').on('click', function(){
        var targetTop = $('#contact').offset().top;
        $('#target_top span').html(targetTop);
        $('html,body').animate({
            scrollTop: targetTop
        }, 500);
        return false;
    });
// });



/*ページトップボタン*/

$(function() {
    var topBtn = $('#page-top');    
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});




/*スクロール*/

$(function() {
    var slide = $('#slide');
    var contents = $('#slide-contents');
    var contents = $('#slide-contents-1');
    //開くボタン
    var openBtn = $('#open-btn img');
    var btnOpenFlag = false;
    var openFlag = false;
    var panelSwitch = function() {
        //閉じる
        if (openFlag == true ) {
            slide.stop().animate({'width' : '200px','height' : '30px'}, 500); 
            openBtn.show();     //開くボタンにする
        }
        //開く
        else if (openFlag == false) {
            slide.stop().animate({'width' : '500px','height' : '170px'}, 500); 
            openBtn.hide();     //閉じるボタンにする
        }
    };
    $('#open-btn').click(function(){
        panelSwitch();
        openFlag = !openFlag;
        btnOpenFlag = true;
    });
    var bottomPos = $(document).height() - $(window).height() - 500;
    $(window).scroll(function () {
        if (!btnOpenFlag) {
            if ($(this).scrollTop() >= bottomPos) {
                if (openFlag == false) {
                    panelSwitch();
                    openFlag = true;
                }
            } else {
                if (openFlag) {
                    panelSwitch();
                    openFlag = false;
                }
            }
        }
    });
});