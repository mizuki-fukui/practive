$(function() {

  //カーソル要素
  var cursor = $(".cursor");
  var follower = $('.follower');
  var cWidth = 8; //カーソルの大きさ
  var fWidth = 30; //フォロワーの大きさ
  var delay = 10; //数字を大きくするとフォロワーがより遅れて来る
  var mouseX = 0; //マウスのX座標
  var mouseY = 0; //マウスのY座標
  var posX = 0; //フォロワーのX座標
  var posY = 0; //フォロワーのX座標
    

    //ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;
    
    TweenMax.set(follower, {
        css: {    
          left: posX - (fWidth / 2),
          top: posY - (fWidth / 2)
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
    });
  }
});

    //mousemoveイベントでカーソル要素を移動
    $(window).on("mousemove" ,function(e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

  $("a").hover(
    function () {
      cursor.addClass('is-active');
      follower.addClass('is-active');
    },
    function () {
      cursor.removeClass('is-active');
      follower.removeClass('is-active');
    }
  );

})