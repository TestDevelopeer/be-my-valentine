$(document).ready(function () {
	$('.ico').click(function () {
		$('.container').addClass('open');
	});


	$('.close').click(function () {
		$('.container').removeClass('open');
	});

	let intervalId = null;
	let index = 1;

	let showYes = () => {
		$('.yes-' + index).removeClass('op-0');
		index++;
		if (index > 15) {
			clearInterval(intervalId);
		}
		console.log('test');
	}

	$(document).on('click', '.no', function () {
		$('.end-img').attr('src', '/img/sob_sticker.gif');
		$('.foryou').html('Подумай еще раз')
		intervalId = setInterval(showYes, 500);
		$(this).addClass('op-0')
	});

	$(document).on('click', '.yes, .yyes', function () {
		$('.end-img').attr('src', '/img/kissing_heart_sticker.gif');
		$('.endtext-container').remove();
		$('.yestext').removeClass('op-0');
	})
});