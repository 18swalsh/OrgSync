/*
$('#review-question-2383102-response > div.row.form_element.question.response.not-submitted.good.neutral.NaQ > div.top.qTitle > div.small > p > a').each(function() {
        var temp = this.href
        newHref = temp.replace('http','https')
        $(this).attr('href', newHref);
    });
*/

//#submission-info > div.content-pane.ptCheck > iframe

str = $('#pjax-container > div:nth-child(3) > div.main.mobile-flush > div.bottom-margin.orgsync-component').html()

String.prototype.replaceAlli = function(target, replacement) {
  return this.split(target).join(replacement);
};

newStr = str.replaceAlli("http","https");
$('#pjax-container > div:nth-child(3) > div.main.mobile-flush > div.bottom-margin.orgsync-component').html(newStr);

#pjax-container > div:nth-child(3) > div.main.mobile-flush > div.bottom-margin.orgsync-component

document.onclick = function (e) {
  e = e ||  window.event;
  var element = e.target || e.srcElement;

  if (element.tagName == 'A') {
    replaceAlli(element.href,);
    return false; // prevent default action and stop event propagation
  }
};

$('#pjax-container div:nth-child(3) div.main.mobile-flush a')
$('#pjax-container a')
$('#os_content a')




///////////////////////////////////////////


os_content

//works
$('#os_content a').each(function(){
	var str = $(this).attr('href');
	newStr = str.replace('http','https');
	$('#os_content a').attr('href',newStr);
});

$('a').each(function(){
	var str = $(this).attr('href');
	newStr = str.replace('http','https');
	$(this).attr('href',newStr);
});



$('#pjax-container a').each(function(){
	var str = $(this).attr('href');
	newStr = str.replace('http','https');
	$('#pjax-container a').attr('href',newStr);
});

$('#pjax-container a').each(function(){
$('#pjax-container a').attr('href',$(this).attr('href').replace('http','https'));
});

$('#pjax-container a').each(function(){
$(this).attr('href', "$(this).attr('href').replace('http','https')");
});
var orgName = $('.bumpDown p').html()
$('.osw-portals-list-item-info:contains(orgName)').parent().attr('href')


//returns "https://blahblahblah"
var txt1 = "http://blahblahblah"

var txt2 = txt1.slice(0,4) + "s" + txt1.slice(4);
confirm(txt2)

//We want each $('.response > p:contains("http") a').attr('href')

//changes the href and text of all http to https: Works on submissions page but not browse

$('.response > p:contains("http:") a').each(function(){
  var ref = $(this).attr('href');
  var newRef = ref.slice(0,4) + "s" + ref.slice(4);
  $(this).attr('href',newRef);

  var str = $(this).text();
  var newStr = str.slice(0,4) + "s" + str.slice(4);
  $(this).text(newStr);
});






var aryResponses = [];
for(var i = 0; i < $('div.response').length; i++ ){
    aryResponses[i] = $('div.response')[i].innerHTML;
    aryResponses[i] = aryResponses[i].replace("↵","").trim()

    if (aryResponses[i].charAt(0) === '<'){
    var first = aryResponses[i].search('>') + 1;
        var last = aryResponses[i].search('</a>')
        aryResponses[i] = aryResponses[i].slice(first,last)
    }
    console.log(i + ": " + aryResponses[i]); //to get list for development purposes
}

//LI1 is #65
//Confirmation is #87
//number of divs is consistent, so they can be used to find data
//the number of divs could change when the programs run because some could be added
//2 possible solutions:
//1. Find aryResponses at the beginning of the program
//2. Assign a class to all of the original divs at the beginning