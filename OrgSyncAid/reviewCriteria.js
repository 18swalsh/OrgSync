//02035
//This is buggy on turning 'good.' Workaround commented on below
$(document).ready(function () {
    //initialize class on page load
    
    if (document.querySelectorAll('input[type="checkbox"]:checked').length > 8) { //BUGPOT15428
                $('#rev').removeClass('neutral')
                $('#rev').removeClass('bad')
                $('#rev').addClass('good')
                $("#review").css("border-color","#008000")
    } else if (document.querySelectorAll('input[type="checkbox"]:checked').length > 0){
                $('#rev').removeClass('bad')
                $('#rev').removeClass('good')
                $('#rev').addClass('neutral')
                $("#review").css("border-color","#D79100")

    } 
   

    
    //changes made by the user
    var ckbox = $('.checkbox');

    $('input').on('click',function () {
        if (ckbox.is(':checked')) {
            	$('#rev').removeClass('bad')
                $('#rev').removeClass('good')
				$('#rev').addClass('neutral')
                $("#review").css("border-color","#D79100")
            //if (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length) {
            if (document.querySelectorAll('input[type="checkbox"]:checked').length > 8) { //BUGPOT15428
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

//pause script to wait for localStorage retrieval
function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) {
   }
};