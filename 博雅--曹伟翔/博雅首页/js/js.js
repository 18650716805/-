$(function() {
    var time = setInterval(run, 2000)
    var index = 0
    var iml = $(".Carousel ul li").length
    for (i = 0; i < iml; i++) {
        var sp = $("<span class='tod'></span>")
        $(".bigdot").append(sp)
    }
    $(".bigdot span").css('opacity', .5).eq(0).css('opacity', 1)
    $('.Carousel li').eq(0).show().siblings().hide()

    $(".Carousel").hover(function() {
        clearInterval(time)

    }, function() {
        time = setInterval(run, 2000)

    })
    $(".bigdot span").mouseover(
        function() {
            index = $(this).index()
            console.log(index)
            $(this).css("opacity", 1).siblings().css('opacity', .5)
            $(".Carousel li").eq(index).show().siblings().hide()
        }
    )

    function run() {
        index++
        if (index < 4) {
            $(".Carousel li").eq(index).show().siblings().hide()
            $(".bigdot span").eq(index).css("opacity", 1).siblings().css('opacity', .5)
        } else {
            $(".bigdot span").eq(0).css("opacity", 1).siblings().css('opacity', .5)
            $(".Carousel li").eq(0).show().siblings().hide()
            index = 0
        }
    }
    var main_bannerIndex = 1
    var imgAllWidth = $(".main-banner ul li").length
    $('.main-banner ul').width(imgAllWidth * 310)
    $(".main-bannerIndex span").eq(0).css("opacity", 1).siblings().css('opacity', .5)
    clearInterval(mainIMG)
    var mainIMG = setInterval(mainBannerImg, 2000)
    $(".main-banner").hover(function() {
        clearInterval(mainIMG)

    }, function() {
        mainIMG = setInterval(mainBannerImg, 2000)

    })

    function mainBannerImg() {

        if (main_bannerIndex == 1) {
            $('.main-bannerIndex span').eq(main_bannerIndex).css("opacity", 1).siblings().css('opacity',
                .5)
            $(".main-banner ul").stop().animate({
                "left": -imgAllWidth / 2 * 310 + "px"
            }, 1000)
            main_bannerIndex = 0
        } else {
            $('.main-bannerIndex span').eq(main_bannerIndex).css("opacity", 1).siblings().css('opacity',
                .5)


            $(".main-banner ul").stop().animate({
                "left": "0" + "px"
            }, 1000)
            main_bannerIndex++
        }

    }
    $(".main-bannerIndex span").mouseover(
        function() {
            main_bannerIndex = $(this).index()
            console.log(main_bannerIndex)
            if (main_bannerIndex == 0) {
                $(this).css("opacity", 1).siblings().css('opacity', .5)
                $(".main-banner ul").stop().animate({
                    "left": -(main_bannerIndex) * imgAllWidth / 2 * 310 + "px"
                }, 1000)
            } else {
                $(this).css("opacity", 1).siblings().css('opacity', .5)
                $(".main-banner ul").stop().animate({
                    "left": -imgAllWidth / 2 * 310 + "px"
                }, 1000)
            }

        }
    )
    $('.totop').click(
        function() {

            $('html').animate({ "scrollTop": 0 }, 300)
        }
    )

    var online1 = $("<span class='online1'></span>")
    var online2 = $("<span class='online2'></span>")
    var online3 = $("<span class='online3'></span>")
    var online4 = $("<span class='online4'></span>")
    var online5 = $("<span class='online5'></span>")
    $('.online').hover(
        function() {
            $('.online :first-child').remove()
            $(this).append(online5)
            $(this).attr('style', 'margin-bottom:00px').height(80 + 'px').append(online2, online3, online4)

        },
        function() {
            $(this).attr('style', 'margin-bottom:40px').height(40 + 'px')
            $('.online span').remove()
            $(this).append(online1)
        }
    )
})