
$(function() {
  //Math.random(); = 0 ~ 1未満のランダムな数字を生成
  //Math.floor(); = 整数にしてくれる

  let button = $('.js-button');

  //配列を使ったやり方
  button.on('click', function() {
    const result = ['大吉', '中吉', '小吉', '凶']
    const n = Math.floor(Math.random() * result.length);
    $(this).text(result[n]);
  })

});

  //::::::::    switch文での書き方    ::::::::::::
  // button.on('click', function() {
  //   const n = Math.floor(Math.random() * 3);
  //   $(this).text(n);
  //   switch (n) {
  //     case 0 :
  //       $(this).text('大吉');
  //       break;
  //     case 1 :
  //       $(this).text('中吉');
  //       break;
  //     case 2 :
  //       $(this).text('小吉');
  //       break;
  //   }
  // })

  //::::::::::   Javascript    :::::::::::::::
  // let button = document.getElementsByClassName('.js-button');
  // button.addEventListener('click', () => {
  //   button.textContent = 'push'; 
  // })

  // //::::::::::　　確率を変更    ::::::::::::
  // button.on('click', function() {
  //   const n = Math.random();
  //   if(n < 0.05) {
  //     button.text('大吉'); //5%
  //   } else if(n < 0.2) {
  //     button.text('中吉');  //15%
  //   } else {
  //     button.text('小吉');  //80%
  //   }

  // })
