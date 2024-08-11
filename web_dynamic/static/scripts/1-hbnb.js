$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const checkedList = {};
    $('input[type=checkbox]:checked').each(function () {
      const key = $(this).attr('data-id');
      const value = $(this).attr('data-name');
      checkedList[key] = value;
      $('.amenities h4').text(Object.values(checkedList).join(', '));
    });
  });
});
