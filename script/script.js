$(function(){

    // GNB 메뉴 시작
    $(".mainLi").mouseover(function(){
        $(".subMenu").stop().slideDown(800);
    });

    $(".mainLi").mouseout(function(){
        $(".subMenu").stop().slideUp(300);
    });
    // GNB 메뉴 끝

    // Slideshow 시작
    setInterval(fnSlide,  3000);
    function fnSlide() { 
        $("#shuttleFrame").animate({
                "margin-top": "-300px"
            },
            1000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                    .insertAfter("#shuttleFrame>a:nth-child(3)");
                $("#shuttleFrame").css({
                    "margin-top": "0"
                });
            });
    }
    // Slideshow 끝

    // 멀티탭 시작
        // 탭버튼/탭콘텐츠 시작
    $("#bbs button").click(function(){
        $("#bbs button").removeClass("selected");
        $(this).addClass("selected");

        var dataLink = $(this).attr("data-link");
        $("#bbs .tabContents").css({"display" : "none"});
        $("#" + dataLink).css({"display" : "block"});
    });
        // 탭버튼/탭콘텐츠 끝
    // 멀티탭 끝

    // 레이어 팝업 시작
    $("tr#popupPoint").click(function(){
        $("div#layerBG").css({"display" : "block"});
    }); // 레이어 팝업 나타나기 (실행)
    
    $("div#closeBtnArea>button").click(function(){
        $("div#layerBG").css({"display" : "none"});
    });
    // 레이어 팝업 끝

});