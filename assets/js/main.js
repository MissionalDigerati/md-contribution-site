$(function() {
  $('.scroll-to').click(function() {
      var sectionTo = $(this).attr('href');
      $('.sidebar .nav-link').each(function() {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
      $('html, body').animate({
        scrollTop: $(sectionTo).offset().top - 80
      }, 1500);
  });
  $('.sidebar .nav-link').each(function() {
    $(this).removeClass('active');
  });
  $('.sidebar .nav-link').eq(0).addClass('active');
});
