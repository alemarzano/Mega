jQuery('.mm-prev-btn').hide();

var x;
var count;
var current;
var percent;
var z = [];

init();
getCurrentSlide();
goToNext();
goToPrev();
getCount();
// checkStatus();
// buttonConfig();
buildStatus();
deliverStatus();
submitData();
goBack();

function init() {

	jQuery('.mm-survey-container .mm-survey-page').each(function () {

		var item;
		var page;

		item = jQuery(this);
		page = item.data('page');

		item.addClass('mm-page-' + page);
		//item.html(page);

	});

}

function getCount() {

	count = jQuery('.mm-survey-page').length;
	return count;

}

function goToNext() {

	jQuery('.mm-next-btn').on('click', function () {
		goToSlide(x);
		getCount();
		current = x + 1;
		var g = current / count;
		buildProgress(g);
		var y = (count + 1);
		getButtons();
		jQuery('.mm-survey-page').removeClass('active');
		jQuery('.mm-page-' + current).addClass('active');
		getCurrentSlide();
		checkStatus();
		if (jQuery('.mm-page-' + count).hasClass('active')) {
			if (jQuery('.mm-page-' + count).hasClass('pass')) {
				jQuery('.mm-finish-btn').addClass('active');
			} else {
				jQuery('.mm-page-' + count + ' .mm-survery-content .mm-survey-item').on('click', function () {
					jQuery('.mm-finish-btn').addClass('active');
				});
			}
		} else {
			jQuery('.mm-finish-btn').removeClass('active');
			if (jQuery('.mm-page-' + current).hasClass('pass')) {
				jQuery('.mm-survey-container').addClass('good');
				jQuery('.mm-survey').addClass('okay');
			} else {
				jQuery('.mm-survey-container').removeClass('good');
				jQuery('.mm-survey').removeClass('okay');
			}
		}
		buttonConfig();
	});

}

function goToPrev() {

	jQuery('.mm-prev-btn').on('click', function () {
		goToSlide(x);
		getCount();
		current = (x - 1);
		var g = current / count;
		buildProgress(g);
		var y = count;
		getButtons();
		jQuery('.mm-survey-page').removeClass('active');
		jQuery('.mm-page-' + current).addClass('active');
		getCurrentSlide();
		checkStatus();
		jQuery('.mm-finish-btn').removeClass('active');
		if (jQuery('.mm-page-' + current).hasClass('pass')) {
			jQuery('.mm-survey-container').addClass('good');
			jQuery('.mm-survey').addClass('okay');
		} else {
			jQuery('.mm-survey-container').removeClass('good');
			jQuery('.mm-survey').removeClass('okay');
		}
		buttonConfig();
	});

}

function buildProgress(g) {

	if (g > 1) {
		g = g - 1;
	} else if (g === 0) {
		g = 1;
	}
	g = g * 100;
	jQuery('.mm-survey-progress-bar').css({
		'width': g + '%'
	});

}

function goToSlide(x) {

	return x;

}

function getCurrentSlide() {

	jQuery('.mm-survey-page').each(function () {

		var item;

		item = jQuery(this);

		if (jQuery(item).hasClass('active')) {
			x = item.data('page');
		} else {

		}

		return x;

	});

}

function getButtons() {

	if (current === 0) {
		current = y;
	}
	if (current === count) {
		jQuery('.mm-next-btn').hide();
	} else if (current === 1) {
		jQuery('.mm-prev-btn').hide();
	} else {
		jQuery('.mm-next-btn').show();
		jQuery('.mm-prev-btn').show();
	}

}

jQuery('.mm-survey-q li input').each(function () {

	var item;
	item = jQuery(this);

	jQuery(item).on('click', function () {
		if (jQuery('input:checked').length > 0) {
			// console.log(item.val());
			jQuery('label').parent().removeClass('active');
			item.closest('li').addClass('active');
		} else {
			//
		}
	});

});

percent = (x / count) * 100;
jQuery('.mm-survey-progress-bar').css({
	'width': percent + '%'
});

function checkStatus() {
	jQuery('.mm-survery-content .mm-survey-item').on('click', function () {
		var item;
		item = jQuery(this);
		item.closest('.mm-survey-page').addClass('pass');
	});
}

function buildStatus() {
	jQuery('.mm-survery-content .mm-survey-item').on('click', function () {
		var item;
		item = jQuery(this);
		item.addClass('bingo');
		item.closest('.mm-survey-page').addClass('pass');
		jQuery('.mm-survey-container').addClass('good');
	});
}

function deliverStatus() {
	jQuery('.mm-survey-item').on('click', function () {
		if (jQuery('.mm-survey-container').hasClass('good')) {
			jQuery('.mm-survey').addClass('okay');
		} else {
			jQuery('.mm-survey').removeClass('okay');
		}
		buttonConfig();
	});
}

function lastPage() {
	if (jQuery('.mm-next-btn').hasClass('cool')) {
		alert('cool');
	}
}

function buttonConfig() {
	if (jQuery('.mm-survey').hasClass('okay')) {
		jQuery('.mm-next-btn button').prop('disabled', false);
	} else {
		jQuery('.mm-next-btn button').prop('disabled', true);
	}
}

function submitData() {
	jQuery('.mm-finish-btn').on('click', function () {

		jQuery('.mm-survey-bottom').slideUp();
		jQuery('.mm-survey-results').slideDown();
	});
}


function goBack() {
	jQuery('.mm-back-btn').on('click', function () {
		jQuery('.mm-survey-bottom').slideDown();
		jQuery('.mm-survey-results').slideUp();
	});
}

/** desafio sorpresa **/

$("div.condicional").hide();
$("input[name$='radio1']").click(function () {
	var test = $(this).val();

	$("div.condicional").hide();
	$("#condicional" + test).show();
});

/** desafio sorpresa gt **/

$("div.condicional").hide();
$("input[name$='radio6']").click(function () {
	var test = $(this).val();

	$("div.condicional").hide();
	$("#condicional" + test).show();
});

/** */

$('#tw-area').on('keyup', function () {
	tmpval = $(this).val();
	button = $('#tw-button');
	if (tmpval == '') {
		$(this).removeClass('not-empty');
		button.removeClass('btw-active');
	} else {
		$(this).addClass('not-empty');
		button.addClass('btw-active');
	}
});