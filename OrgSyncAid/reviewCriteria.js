$(document).ready(function () {
    var ckbox = $('.checkbox');

    $('input').on('click',function () {
        if (ckbox.is(':checked')) {
            	$('body').removeClass('bad')
							$('body').addClass('good')
        } else {
           		$('body').removeClass('good')
							$('body').addClass('bad')
        }
    });
});