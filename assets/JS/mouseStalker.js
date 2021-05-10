$(function () {
  stolker('js-cursor', 'js-follower');
});

/**
 * マウスストーカー関数
 * 
 * 第1引数　カーソル
 * @type {HTMLElement}
 * cursor
 * 
 * 第2引数　フォロー
 * @type {HTMLElement}
 * follower
 */

function stolker(cursor, follower) {
  //JSDog @の後に必要な情報を記載
  /**
   * カーソル
   * @type {HTMLElement}
   */
  const cursorObj = '.' + cursor;
  /**
   * フォロー
   * @type {HTMLElement}
   */
  const followerObj = '.' + follower;

    // var cursor = $('.js-cursor');
  // var follower = $('.js-follower');
  
  var cWidth = 10; //カーソルの大きさ
  var fWidth = 30; //フォロワーの大きさ

  $(window).on('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;

    cursorX = x - cWidth / 2;
    cursorY = y - cWidth / 2;
    $(cursorObj).css({
      'top': cursorY + 'px',
      'left': cursorX + 'px',
    });
		//ちょっと遅れて要素のcssを書き換え
		// setTimeout(function(){
      followX = x - fWidth / 2;
      followY = y - fWidth / 2;
			$(followerObj).css({
        // 'top': y + 'px',
        // 'left': x + 'px'
				"transform":"translate3d(" + followX + "px," + followY + "px, 0)"
			});
		// },100);
  });

  $('a').on({
    'mouseenter': function () {
      cursorObj.addClass('is-active');
      followerObj.addClass('is-active');
    },
    'mouseleave': function() {
      cursor.removeClass('is-active');
      followerObj.removeClass('is-active');
    }
  })
}


