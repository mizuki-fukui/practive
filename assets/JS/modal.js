$(function () {
  modalOpen('js-modal', 'js-modal-button', 'js-modal-bg', 'js-modal-close', 'js-modal-content')
});

  /**
   * モーダル関数
   * 
   * 第1引数　モーダル 全体の親要素
   * @param {String} [modal]
   * 
   * 第2引数　モーダル ボタン
   * @param {String} [button]
   * 
   * 第3引数　モーダル　モーダルの背景
   * @param {String} [modalBg]
   * 
   * 第4引数　モーダル　クローズボタン
   * @param {String} [modalClose]
   * 
   * 第5引数　モーダル　の中のコンテンツ
   * @param {String} [modalContents] - 省略可能
   * 
   */
function modalOpen (modal, button, modalBg, modalClose, modalContents = null) {
  /**
   * 起点となるモーダルの親要素
   * modal
   */
  const modalObj = '.' + modal.trim();

  /** モーダルのボタン
   * button
   */
  const buttonObj = '.' + button.trim();
  /**
   * モーダルの背景
   * modalBg
   */
  const modalBgObj = '.' + modalBg.trim();

  /**
   * モーダルのクローズボタン
   * modalClose
   */
  const modalCloseObj = '.' + modalClose.trim();

  /**モーダルのコンテンツエリア
   * contents
   */

  // 三項演算子
  // 条件文 ? true : false;
  modalContents === null ?  modalContents : modalContents.trim();
  if (modalContents) {
    contentsObj = '.' + modalContents.trim()
  } else {
    contentsObj = null;
  }

  // const contentsObj = '.' + modalContents || null;
  // const contentsObj = modalContents || '';  //未定義値またはnullの場合は、空の文字列を設定

  /**
   * モーダル　オープン時の状態クラス
   */
  const openClass = 'is-open';

  /**
   * ボタンがクリックされるとモーダルの背景にオープンクラスが追加される
  */
  $(buttonObj).on('click', function () {
    $(this)
      .parents(modalObj)
      .find(modalBgObj)
      .addClass(openClass);
  });
  /**
   * クローズボタンがクリックされるとモーダルの背景のオープンクラスが削除される
  */
  $(modalCloseObj).on('click', function (e) {
    if($(modalBgObj).hasClass(openClass)) {
      $(modalBgObj).removeClass(openClass);
    }
  });
  /**
   * クローズボタンに内包されたコンテンツをクリックされてもモーダルが消されないようにする
  */
   if (contentsObj) {
    $(contentsObj).on('click', function(e) {
      e.stopPropagation();
    });
   }


}


