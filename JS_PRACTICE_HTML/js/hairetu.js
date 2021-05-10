$(function() {
/**
 * 0. 各アイテムは独立したオブジェクトとして扱う（今後拡張した時を考慮して）
 * 1. チェックボタンを押すとチェックされたアイテムが新規の配列に保存される
 * 2. buttonを押すと配列に一致するフルーツが出現する
 * 3. eatを押すと犬の顔が食べてる風のアニメーションになる
 * 4. はらぺこゲージがmaxになる
 * 5. checkを押すと選んだものにより金額が加算される
 * 
 */
  let menu = $('.js-menu');
  let input = $('.js-input');
  let orderButton = $('.js-order');
  let anime = $('.js-anime');
  let dog = $('.js-dog');
  let meter = $('.js-meter');
  let eatButton = $('.js-eat');
  let checkButton = $('.js-check');
  let num = $('.js-num');
  let images = $('.js-fluetsImg');



 let plate = [];
 
 input.on('click', function(e){
    //空の配列の中にinputがcheckedになっているものを格納する関数
    input.each(function (i, e) {
      if($(e).prop('checked')){
        plate.push($(e).data('fluets'))
      }
    });
  });
    
  //オーダーボタンを押すとお皿の絵が変わる
  orderButton.on('click', function() {
    // 画像の初期化
    $('.js-plateImg').removeClass('is-active');
    $('.js-plateImg').eq(0).addClass('is-active');
    // plateの初期化
    plate = [];
    //空の配列の中にinputがcheckedになっているものを格納する関数
    input.each(function (i, e) {
      if($(e).prop('checked')){
        plate.push($(e).data('fluets'));
      }
    });
    //配列に入っているデータ属性と同じデータ属性を持つ要素にis-activeをつける
    console.log(plate);
 
    images.each(function(i, e) {
      // if (plate == $(e).data('fluets')) {
      if (plate == $(e).data('fluets')) {
        $(e).addClass('is-active');
      } else {
        $(e).removeClass('is-active');
      }
    })
  });
  //eatボタンを押すと犬がご飯を食べてゲージが上がる
  eatButton.on('click', function() {
    //犬の表情が変わっていく
    dog.addClass('is-animation');
    //メーターが徐々に上がっていく
    meter.addClass('is-animation');
    images.removeClass('is-active');
  })

  checkButton.on('click', function() {
    $(this).addClass('is-active');
    input.each(function(i, e) {
      const foodValue = [];
      if($(e).prop('checked')) {
        foodValue.push($(e).data('value'));
        console.log(foodValue);
        num.text(foodValue);
      }
    })
  });

  let after = $('.js-after');
  let afterButton = $('.js-afterButton');
  let error = $('.js-error');
  let error2 = $('.js-error2');

  afterButton.on('click', function() {
    if(!dog.hasClass('is-animation')) {
      error.addClass('is-active');
      console.log('エラー');
    } else if (!checkButton.hasClass('is-active')) {
      error2.addClass('is-active');
      console.log('エラー２');
    } else {
      after.addClass('is-active');
      console.log('おけ');
    }
  })




});