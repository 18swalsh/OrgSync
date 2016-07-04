//02035
//This is buggy on turning 'good.' Workaround commented on below
$(document).ready(function () {
    var ckbox = $('.checkbox');

    $('input').on('click',function () {
        if (ckbox.is(':checked')) {
            	$('#rev').removeClass('bad')
                $('#rev').removeClass('good')
				$('#rev').addClass('neutral')
                $("#review").css("border-color","#D79100")
            //if (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length) {
            if (document.querySelectorAll('input[type="checkbox"]:checked').length > 8) { //wasn't getting the right number until th epage was refreshed twice. This is a weak workaround for 9 checkboxes
                $('#rev').removeClass('neutral')
                $('#rev').removeClass('bad')
                $('#rev').addClass('good')
                $("#review").css("border-color","#008000")
            }    

        } else {
           		$('#rev').removeClass('good')
                $('#rev').removeClass('neutral')
				$('#rev').addClass('bad')
                $("#review").css("border-color","#9C0000")
        }
    });
});