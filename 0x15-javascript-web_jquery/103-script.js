$(document).ready(function() {
  $('#language_code').keypress(function(event) {
    if (event.which === 13) {
      const langCode = $(this).val();
      $.get('https://www.fourtonfish.com/hellosalut/hello/?lang=' + langCode, function(data) {
        $('#hello').text(data.hello);
      });
    }
  });

  $('#btn_translate').click(function() {
    const langCode = $('#language_code').val();
    $.get('https://www.fourtonfish.com/hellosalut/hello/?lang=' + langCode, function(data) {
      $('#hello').text(data.hello);
    });
  });
});

