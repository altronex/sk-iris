$(function() {

  $('.top-line').after('<div class="mobile-menu d-lg-none">');
  $('.top-menu').clone().appendTo('.mobile-menu');
  $('.mobile-menu-button').click(function(){
    $('.mobile-menu').stop().slideToggle();
  });

  //E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

  $("body").prognroll({
  height: 4,
  color: '#69BD45',
  custom: false
  });



});
