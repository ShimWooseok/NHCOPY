$(document).ready(function(){


    $(".global-menu").click(function(){

        $(".global-menu").toggleClass("active")



     
    })

    $(".btn-top").click(function(){
        // $("html , body").scrollTop(800)
        $("html , body").animate({
          "scrollTop": 0 ,
        },300)
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