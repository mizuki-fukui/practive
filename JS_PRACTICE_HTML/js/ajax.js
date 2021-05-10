$(function() {

  var btn = $('.btn')
  var error = $('.error');
  var postcode = $('#postcode');

  var postUrl = 'http://zipcloud.ibsnet.co.jp/api/search?zipcode=';



  btn.on('click', () => {
    // promise
    $.ajax({
      url: postUrl + postcode.val(),
      type:"GET",
      dataType: 'jsonp'
    })
      .done((data) => {
        console.log(data)
        if (data.status === 200) {
          // 成功
          console.log(data.results[0]);
          getData(data.results[0]);
        } else {
          // 失敗
          error.text(data.message);
        }
      })
      .fail((data) => {
        console.log(2)
        alert('通信に失敗しました');
      });
  });

  function getData(data) {
    $('#kana1').text(data.kana1);
    $('#kana2').text(data.kana2);
    $('#kana3').text(data.kana3);
    $('#address1').text(data.address1);
    $('#address2').text(data.address2);
    $('#address3').text(data.address3);
  };

    




})