$(document).ready(function() {
	$('.edit.btn').on('click', function() {
		var thisid = $(this).attr('id');
		$('#' + thisid + '.edit').hide();
		$('#' + thisid + '.cancel').show();
	});
	$('.cancel.btn').on('click', function() {
		var thisid = $(this).attr('id');
		$('#' + thisid + '.cancel.text').val('');
		$('#' + thisid + '.cancel').hide();
		$('#' + thisid + '.edit').show();
	});
});
