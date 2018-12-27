$(function() {
    $('.totop').click(
        function() {

            $('html').animate({ "scrollTop": 0 }, 300)
        }
    )
    
   
    var length = $('.contianer-mainLeft ul li').length
    $('.contianer-mainLeft ul li').click(
        function() {
            var index = $(this).index()

            console.log(length)
            $(this).addClass('active direct').siblings().removeClass()
            $(".contianer-main .title").eq(index).show().siblings('.title').hide()
            $(this).children('p').removeClass().addClass('gpic' + index)
            for (i = 0; i < length; i++) {
                if (i == index) {
                    continue;
                }
                $(".contianer-mainLeft ul li ").eq(i).children('p').removeClass().addClass('pic' + i)
            }


        }
    )
    $("ul li div div:not('.no1') p").hover(function(){
        
        var Index=$(this).parent().parent().parent().index()
      
        $(this).parent().parent().prev().children().show()
    },function(){
        $("ul li p a").hide()
    })
    
})