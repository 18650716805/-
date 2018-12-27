$(function() {
    $('.totop').click(
        function() {

            $('html').animate({ "scrollTop": 0 }, 300)
        }
    )

    $('.contianer-mainLeft ul li').click(
        function() {
            var index = $(this).index()

            console.log(index)
            $(this).addClass('active').siblings().removeClass()
            $(".contianer-main .title").eq(index).show().siblings('.title').hide()
            $(".contianer-mainLeft ul li h3:first-child").eq(index).addClass('direct')
            $(".contianer-mainLeft ul li h3:first-child").eq(index).parent().siblings().children().removeClass()

        }
    )
})