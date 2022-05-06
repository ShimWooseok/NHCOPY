$(document).ready(function(){

  $('.slider').slick({
    autoplay : true ,
    autoplaySpeed : 1 ,
  });


    $(".global-menu").click(function(){

        $(".global-menu").toggleClass("active")

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

      $(".list-box > ul >li").mouseover(function(){
        $(this).addClass("active")
      })
      $(".list-box > ul >li").mouseleave(function(){
        $(".list-box > ul >li").removeClass("active")
      })

      $(".big-bg2 > .content-box > ul > li").click(function(){

        let thisNum = $(this).index();

        $(".big-bg2 > .content-box > ul > li").eq(thisNum).addClass("active")
        $(this).siblings().removeClass("active")

      })

      $(".big-bg2 > .content-box > ul > li").click(function(){
        $(this).removeClass("active")
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