$(function () {
  accordion('js-accordion', 'js-accordion-button', 'js-accordion-block')
});

/**
 * アコーディオン関数
 *
 * 第1引数 アコーディオンの ラッパー引数
 * @type {CSS ClassName}
 * acdBox 
 * 
 * 第2引数 アコーディオンの ボタン引数
 * @type {CSS ClassName}
 * button 
 * 
 * 第3引数 アコーディオンの オープンブロック引数
 * @type {CSS ClassName}
 * openBlock 
 */

function accordion(acdBox, button, openBlock) {
  // JSDoc @の後に必要な情報を記述
  /**
   * アコーディオン のラッパー
   * @type {HTMLElement}
   */
  const acdBoxObj = '.' + acdBox;

  /**
   * アコーディオン のボタン
   * @type {HTMLElement}
   */
  const buttonObj = '.' + button;

  /**
   * アコーディオン オープンブロック
   * @type {HTMLElement}
   */
  const openBlockObj = '.' + openBlock;

  /**
   * アコーディオン オープン時の状態管理クラス
   * @type {CSS}
   */
  const openClass = 'is-open';

  $(buttonObj).on('click', function () {
    $(this).toggleClass(openClass);
    $(this).parents(acdBoxObj).toggleClass(openClass);
    $(this).parents(acdBoxObj).find(openBlockObj).toggleClass(openClass);

    $(this).parents(acdBoxObj).find(openBlockObj).slideToggle();
  })
}