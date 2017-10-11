	new WOW().init();

	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});

		toastr.options = {
			"closeButton": true,
			"debug": false,
			"newestOnTop": true,
			"progressBar": true,
			"positionClass": "toast-bottom-right",
			"preventDuplicates": true,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "10000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}

		var $contactForm = $('#contact-form');
		$contactForm.submit(function(e) {
			e.preventDefault();
			$.ajax({
				url: '//formspree.io/debora@liguesemparar.com.br',
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json',
				success: function(data) {
					toastr.clear()
					toastr["success"]("Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.")
				},
				error: function(err) {
					toastr.clear()
					toastr["error"]("Não conseguimos enviar sua mensagem, tente novamente!")
				}
			});
		});

	});

	$(function() {
		var pull 		= $('#pull');
		menu 		= $('nav ul');
		menuHeight	= menu.height();
		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});
		$(window).resize(function(){
			var w = $(window).width();
			if(w > 320 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
	});

	var typed = new Typed('.typed', {
		strings: ["de qualidade", "digital"],
		typeSpeed: 60,
		backSpeed: 50,
		backDelay: 2000,
		loop: true,
		autoInsertCss: true
	});