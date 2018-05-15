$(document).ready(function () {
  $('.btn').on('click',function(){
    var username = $('#username').val();
    var pass = $('#password').val();
    $.ajax({
        url: 'http://188.166.237.168/api/user/auth/',
        dataType: 'json',
        type: 'POST',
        data: {username: username, password: pass},
        success: function (data) {
          console.log(data);
        }
    });
  });
  $('.btnRegis').on('click',function(){
    $.ajax({
        url: 'http://188.166.237.168/api/user',
        dataType: 'json',
        type: 'POST',
        data: $('#regis').serialize(),
        success: function (data) {
          alert('success');
          window.location.href = "index.html"
        }

    });
  });
});
