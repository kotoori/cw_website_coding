$(function(){
    /***************************************
     * ハンバーガーメニュークリックで
     * .humburgerとnavのactiveクラスを切り替え 
    /***************************************/
    $('.humburger').on('click', function () {
        $(this).toggleClass('active');   /* activeクラスのON/OFF切り替え */ 
        $('#header nav').toggleClass('active');   /* activeクラスのON/OFF切り替え */ 
        return false;
    });

    /***************************************
     * ハンバーガーメニュー内のナビメニュークリックで
     * .humburgerとnavのactiveクラスをOFF(navを閉じる)
    /***************************************/
    $('#header nav ul li a').on('click', function () {
        $('.humburger').removeClass('active');   /* activeクラスのON/OFF切り替え */ 
        $('#header nav').removeClass('active');   /* activeクラスのON/OFF切り替え */ 
        return false;
    });

    /*************************************/
    /* mainvisualの画像をスライドショーで表示 */
    /*************************************/
    $('.slideshow').slick({
        dots: true,             /* ドットインジケーター表示 */
        speed: 1000,            /* アニメーション速度 1000ms */
        autoplay: true,         /* 自動再生 */
        centerMode: true,       /* 前後の画像を両端に表示 */
        centerPadding: '10%',   /* 両端の見切れる幅 */

        responsive: [{          /* レスポンシブ対応 */
            breakpoint: 769,    /* ブレイクポイント:768px(769pxより小さくなったとき) */
            settings: {
                centerMode: false,  /* 前後のスライドを両端に表示しない */
                centerPadding: '0', /* 両端の見切れる幅0 */
            },
        },],
    });
});
