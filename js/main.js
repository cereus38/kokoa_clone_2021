$(function(){
    $('.index__envelope > img').click(function(){ 
      $('.index-cover').fadeOut(1200);
      $('.welcome-header__cover-text').hide();
      $('.welcome-header__text').show();
    });

        $('.gryffindor > img').click(function(){
          $(this).toggleClass("on");
          $('.gryffindor > h5').animate({opacity:1});
          $('.ravenclaw > img').removeClass('on');
          $('.ravenclaw > h5').animate({opacity:0});
          $('.hufflepuff > img').removeClass('on');
          $('.hufflepuff > h5').animate({opacity:0});
          $('.slytherin > img').removeClass('on');
          $('.slytherin > h5').animate({opacity:0});

          $('.login-form__submit').animate({backgroundColor:'#7f0909'});
          
        });
        $('.ravenclaw > img').click(function(){
          $(this).toggleClass("on");
          $('.ravenclaw > h5').animate({opacity:1});
          $('.gryffindor > img').removeClass('on');
          $('.gryffindor > h5').animate({opacity:0});
          $('.hufflepuff > img').removeClass('on');
          $('.hufflepuff > h5').animate({opacity:0});
          $('.slytherin > img').removeClass('on');
          $('.slytherin > h5').animate({opacity:0});

          $('.login-form__submit').animate({backgroundColor:'#000a90'});
          
        });
        $('.hufflepuff > img').click(function(){
          $(this).toggleClass("on");
          $('.hufflepuff > h5').animate({opacity:1});
          $('.gryffindor > img').removeClass('on');
          $('.gryffindor > h5').animate({opacity:0});
          $('.ravenclaw > img').removeClass('on');
          $('.ravenclaw > h5').animate({opacity:0});
          $('.slytherin > img').removeClass('on');
          $('.slytherin > h5').animate({opacity:0});
 
          $('.login-form__submit').animate({backgroundColor:'#eee117'});

        });

        $('.slytherin > img').click(function(){
          $(this).toggleClass("on");
          $('.slytherin > h5').animate({opacity:1});        
          $('.gryffindor > img').removeClass('on');
          $('.gryffindor > h5').animate({opacity:0});
          $('.ravenclaw > img').removeClass('on');
          $('.ravenclaw > h5').animate({opacity:0});
          $('.hufflepuff > img').removeClass('on');
          $('.hufflepuff > h5').animate({opacity:0});

          $('.login-form__submit').animate({backgroundColor:'#0d6217'});

        });
        $('.open-post:nth-child(2) .open-post__heart-count').click(function(){
          $('.open-post:nth-child(2) i').animate({color:'#FF6347'});
          $('.open-post:nth-child(2) .number').text('324');
        });

        $('.open-post:last-child .open-post__heart-count').click(function(){
          $('.open-post:last-child i').animate({color:'#FF6347'});
          $('.open-post:last-child .number').text('128');
        });


});