$(document).ready(function() {
  $('.button-collapse').sideNav();
  $('.modal-trigger').leanModal();
  $('.collapsible').collapsible({
    accordion : true
  });

  if ($('div.message')) {
    function fadeMessage() {
      $('div.message').fadeOut(2000)
    }

    window.setTimeout(fadeMessage, 2000);
  }
});
