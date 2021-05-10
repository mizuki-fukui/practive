$(function() {
  openSpmenu('js-header', 'js-icon', 'js-menu', 'js-mask');
});

  /**
   * // 初期は表示エリアにメニューはいない
   * 1. ボタンをクリックするとマスクがアニメーション
   * 2. マスクのアニメーションが消えるとマスクが消える
   *   ※マスクはメニューエリア上のレイヤーでアニメーションする
   * 　2-1. ラインが中央上から下に降りてくる
   * 　2-2. 中央から左右に端いっぱいまで広がる
   * 　2-3. ふわっと消える
   * 3. メニューエリアが出現する
   * 　※マスクが端いっぱいに広がったタイミングでメニューが出現している
   */

// let header = $('.js-header');
// let icon = $('.js-icon');
// let menu = $('.js-menu');
// let mask = $('.js-mask');


  /**
   * spアニメーション　関数
   * 第1引数
   * @param {CSS ClassName} [header]
   * 
   * 第2引数
   * @param {CSS ClassName} [icon]
   * 
   * 第3引数
   * @param {CSS ClassName} [menu]
   * 
   * 第4引数
   * @param {CSS ClassName} [mask]
   */

function openSpmenu (header, icon, menu, mask) {

  /**
   * 起点となるheaderの親要素
   * header
   * @type {CSS ClassName}
   */
  const headerObj = '.' + header;
  /**
   * headerのicon
   * @type {CSS ClassName}
   */
  const iconObj = '.' + icon;
  /**
   * headerのspmenu
   * @type {CSS ClassName}
   */
  const menuObj = '.' + menu;
  /**
   * headerのマスク
   * @type {CSS ClassName}
   */
  const maskObj = '.' + mask;
  /**
   * headerオープン時の状態クラス
   */
  const openClass = 'is-open'
  /**
   * headerオープン時のアニメーションクラス
   */
  const animClass = 'is-anim';


  $(iconObj).on('click', function() {
    /**
     * 1. ボタンがクリックされた時
     */
    $(this).toggleClass(openClass);
    $(this).parents(headerObj).find(menuObj).toggleClass(openClass);
  
    /**
     * 2. マスクのアニメーション
     * // 中央にラインが入ってそれが広がる
     * // クラスにアニメーションを持たせる(jsでのアニメーション操作はなし)
     * // 動作は2-1 ~ 2-3参照
     */
    $(this).parents(headerObj).find(maskObj).toggleClass(animClass);
  headerObj
    /**
     * 3. メニューエリアが出現
     * // マスクが端いっぱいに広がったタイミングでメニューが出現している
     */
  })

}
