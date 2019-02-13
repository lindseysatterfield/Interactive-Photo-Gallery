// LIGHTBOX FUNCTION
lightbox.option({
  'wrapAround': false
});

// SEARCH FILTER
$('#search').on('keyup', function() {
  const $input = $('#search').val().toLowerCase();

  for (let i = 0; i < 12; i++) {
    let $image = $('.photos').eq(i);
    let $text = $image.attr('data-title');
    if ($text.indexOf($input) > -1) {
      $image.css('display', '');
    } else {
      $image.css('display', 'none');
    }
  }
});