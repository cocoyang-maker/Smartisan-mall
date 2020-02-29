$("section>.home-wrap>.pointer2>span").click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $("section>.home-wrap>.pointer1>img").removeClass('show').eq($(this).index())
     .addClass('show') 

        });

        // $('section>.home-wrap>.pointer2>span') = function(){
        //     $('div').fadeToggle()
        // }
            
          

        let timer = setInterval(function(){
    let i = 0;
   if(i>=4){
        i = 0;
    }else{
        i ++;
    }
    $('section>.home-wrap>.pointer2>span').eq(i).addClass('active').siblings().removeClass('active')
    $("section>.home-wrap>.pointer1>img").eq(i).addClass('show').siblings().removeClass('show')
    },1000);
 


