$(function() {

  let next = $('.js-next');
  let prev = $('.js-prev');
  let slider = $('.js-slider');
  let images = $('.js-images');
  let img = $('.js-img');
  let activeImg = $('.js-img.is-active');
  let dot = $('.js-dot');
  
  next.on('click', function() {
    for (let i = 0; i < img.length; i++) {
      if (img.eq(i).hasClass('is-active')) {
        if (i === img.length - 1) {
          img.eq(i).removeClass('is-active');
          img.eq(0).addClass('is-active');
          break;
        } else {
          img.eq(i).removeClass('is-active');
          img.eq(i).next().addClass('is-active');
          break;
        }
      }
    }
  });

  prev.on('click', function() {
    for (let i = img.length - 1; i >= 0; i--) {
      if (img.eq(i).hasClass('is-active')) {
        if (i === 0) {
          img.eq(i).removeClass('is-active');
          img.eq(img.length - 1).addClass('is-active');
          break;
        } else {
          img.eq(i).removeClass('is-active');
          img.eq(i).prev().addClass('is-active');
          break;
        }
      }
    }
  });


  //dotをクリックしたらimgを表示
  dot.on('click', function() {
    let dotIndex = $(this).data('num');
    img.removeClass('is-active');
    img.each(function(i, e) {
      //押したdotと同じデータ属性を持つimg要素にis-activeをつける
      if(dotIndex === $(e).data('num')) {
        $(e).addClass('is-active');
      }
    })
  });

});
