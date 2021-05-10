$(function() {
  if (windowFuncSp()) {
    console.log(windowFuncSp());
    fadeFunc('js-fade', 50);
  } else {
    console.log(windowFuncSp());
    fadeFunc('js-fade', 200);
  }
});
function windowFuncSp () {
  let flag = false;
  $(window).on('resize load', function() {
  })
  return window.innerWidth <= 768 ? true : false;
}
/**
 * フェードイン関数
 * 
 * 第1引数　フェードをかけたい要素
 * @param {CSS ClassName} [fade]
 * 
 * 第2引数　オブジェクトの表示位置調整
 * @param {number} [appearPos]
 */
function fadeFunc (fade, appearPos = 0) {
  /**
   * フェードをかけたい要素
   * fade
   */
  const fadeObj = '.' + fade;
  /**
   * スクロールイベントオブジェクトの位置によってクラスを追加
   * fade
   */
  
  $(window).on('scroll', function () {
    $(fadeObj).each(function(i, e){
      var targetElementOffset = $(e).offset().top;
      var scrollVal = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scrollVal > targetElementOffset - windowHeight + Number(appearPos)) {
        $(e).addClass('active');
      }
    });
  });
}

//scrollTop(); 画面のブラウザをスクロールした時の位置（スクロール量）