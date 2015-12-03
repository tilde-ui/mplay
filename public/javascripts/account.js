$(document).ready(function() {
	$('.accEditBtn').on('click', function() {
		var thisid = $(this).attr('id');
    var input = $('#' + thisid + 'Input');
    if (input.attr('readonly')) {
      input.attr('readonly', false);
      input.focus();
    } else {
      input.attr('readonly', true);
      input.unfocus();
    }
	});
});
