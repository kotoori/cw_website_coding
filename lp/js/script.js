$(function(){

    //ハンバーガーメニュークリックでnavの表示を切り替え
    $('.humburger').on('click', function () {
        $(this).toggleClass('active');   /* activeクラスのON/OFF切り替え */ 
//        console.log('active='+$(this).hasClass('active'));
        if($(this).hasClass('active')){ /* activeクラスON */
            $('nav').css({
                'visibility': 'visible', /* nav要素をを可視＆クリック可能にする */
                'opacity': 1             /* nav要素を不透明にする(transitionで徐々に不透明にできる) */
            });
        } else {    /* activeクラスOFF */
            $('nav').css({
                'visibility': 'hidden', /* nav要素を不可視＆クリック不可能にする */
                'opacity': 0            /* nav要素を透明にする(transitionで徐々に透明にできる) */
            });
        }
        return false;
    });

});