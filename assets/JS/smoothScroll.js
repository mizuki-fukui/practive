$(function() {
  smsScroll('js-smoothScroll', 300);
});

/**
 * スムーススクロール関数
 * 
 * 第1引数　スクロールのボタン
 * @type {CSS ClassName}
 * button
 *
 * 第2引数　スクロールのスピード
 * @type {CSS ClassName}
 * speed
 */
  function smsScroll (button, speed) {
    //JSDoc @の後に必要な情報を記載
    /**
     * スクロールのボタン
     * @type {HTMLElement}
     */
    const buttonObj = '.' + button;
    /**
     * スクロールのスピード
     * @type {HTMLElement}
     */
    const speedObj = speed;
    /**
     * 
     * ボティ・HTML
     * @type {HTMLElement}
     */
     const body = $('html, body');

    $(buttonObj).on('click', function(e) {
      e.preventDefault();

      const TARGET_HREF = $(this).attr('href') || null;
      let position = 0;

      if (TARGET_HREF === null) {
        return;
      } else if(TARGET_HREF !== '#top'){
        position = $(TARGET_HREF).offset().top;
      }

      body.animate({
        scrollTop: position
      }, speedObj);
    })
  }

