$(document).ready(function(){

  $('.slider').slick({
    autoplay : true ,
    autoplaySpeed : 3000 ,
  });


    $(".global-menu").click(function(){

        $(".global-menu").toggleClass("active")
        $(".global-menu > li > .cell-r").toggleClass("active")

    })

    $(".btn-top").click(function(){
        // $("html , body").scrollTop(800)
        $("html , body").animate({
          "scrollTop": 0 ,
        },300)
      })

      $(".prev-btn").click(function(){
        $(".slider").slick("slickPrev")
      })
      $(".next-btn").click(function(){
        $(".slider").slick("slickNext")
      })

      $(".play").click(function(){
        $(".play").removeClass("active")
        $(".pause").addClass("active")
        $(".slider").slick("slickPlay")
      })
      $(".pause").click(function(){
        $(".play").addClass("active")
        $(".pause").removeClass("active")
        $(".slider").slick("slickPause")
      })
      $(".dot").click(function(){
        let num = $(this).index()

        $(".slider").slick('slickGoTo' , num)
      })

      $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        console.log("비포체인지");
          $(".dots > .dot").eq(nextSlide).addClass("active")    
          $(".dots > .dot").eq(nextSlide).siblings().removeClass("active")
      })

      

      $(".big-bg > .main-content > .inside-slide > .list-box > ul > li").mouseover(function(){

        $(this).addClass("active")
    
      })

      $(".big-bg > .main-content > .inside-slide > .list-box > ul > li").mouseleave(function(){

        $(this).removeClass("active")
      })




  
      









      $(".big-bg2 > .content-box > ul > .a").click(function(){

        $(".big-bg2 > .content-box > ul > .a").addClass("active")
        $(".big-bg2 > .content-box > ul > .b").removeClass("active")
        $(".big-bg2 > .content-box > ul > .c").removeClass("active")

        $(".big-bg2 > .content-box > .tab-box > .total-box").addClass("active")
        $(".big-bg2 > .content-box > .tab-box > .event-box").removeClass("active")
        $(".big-bg2 > .content-box > .tab-box > .product-box").removeClass("active")


        // $(".big-bg2").css({

        //   "height" : 1350 ,


        // })
      })

      $(".big-bg2 > .content-box > ul > .b").click(function(){

        $(".big-bg2 > .content-box > ul > .a").removeClass("active")
        $(".big-bg2 > .content-box > ul > .b").addClass("active")
        $(".big-bg2 > .content-box > ul > .c").removeClass("active")

        $(".big-bg2 > .content-box > .tab-box > .total-box").removeClass("active")
        $(".big-bg2 > .content-box > .tab-box > .event-box").addClass("active")
        $(".big-bg2 > .content-box > .tab-box > .product-box").removeClass("active")

        // $(".big-bg2").css({

        //   "height" : 1600 ,


        // })

      })

      $(".big-bg2 > .content-box > ul > .c").click(function(){

        $(".big-bg2 > .content-box > ul > .a").removeClass("active")
        $(".big-bg2 > .content-box > ul > .b").removeClass("active")
        $(".big-bg2 > .content-box > ul > .c").addClass("active")

        $(".big-bg2 > .content-box > .tab-box > .total-box").removeClass("active")
        $(".big-bg2 > .content-box > .tab-box > .event-box").removeClass("active")
        $(".big-bg2 > .content-box > .tab-box > .product-box").addClass("active")

        // $(".big-bg2").css({

        //   "height" : 1100 ,


        // })

      })



      $(".footer > .footer-center > .right-box > .mix-box > ul > li  > .site-box").click(function(){
        let has = $(".site-box > .one").hasClass("active")

        if(has == true){
          $(".site-box > .one").removeClass("active")
          
          $(".site-box > .two").addClass("active")

          $(".footer > .footer-center > .right-box > .mix-box > ul > li > ul").addClass("active")
        }else if(has ==false){
          $(".site-box > .one").addClass("active")
          
          $(".footer > .footer-center > .right-box > .mix-box > ul > li > ul").removeClass("active")
          $(".site-box > .two").removeClass("active")
        }
       

      })








    // 끝
})





$(window).scroll(function(){
    let scrollTop = $(this).scrollTop()
    
    console.log(scrollTop)
    if(scrollTop>=200){
      $(".btn-top").addClass("active")
    }
  })