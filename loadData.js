$(document).ready(function () {
  // user.html?id=27
  var url = new URL(window.location.href);
  var x = url.searchParams.get("id")
  $.ajax({
      url: 'http://188.166.237.168/api/user/'+x,
      dataType: 'json',
      type: 'GET',
      success: function (data) {
        console.log(data);
        $('#prefix').prop('disabled', true);
        $('#prefix').val(data[0].prefix);
        $('#first_name').val(data[0].first_name);
        $('#last_name').val(data[0].last_name);
        $('#email').val(data[0].email);
        $('#username').val(data[0].username);
      }
  });
});
