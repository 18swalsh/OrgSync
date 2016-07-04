
//tester.js
/*
1.0.1 Bug Fixes:
- z-index on mousover images increased to 1 to bring forward and transform: translate to relocate on page
1.1.0 Bug Fixes/Functionality:
- only matches *://orgsync.com/*
- Notes section and checklist in local storage for each unique page
1.1.0 Bug Fixes:
- filter out unwanted elements from main page
*/

/*log responses to the console
var aryResponses = [];
for(var i = 0; i < $('div.response').children('p').length; i++ ){
    aryResponses[i] = $('div.response').children('p').not('a')[i].innerHTML;
    aryResponses[i] = aryResponses[i].replace("↵","").trim()

    if (aryResponses[i].charAt(0) === '<'){
		var first = aryResponses[i].search('>') + 1;
        var last = aryResponses[i].search('</a>')
        aryResponses[i] = aryResponses[i].slice(first,last)
    }
    console.log(i + ": " + aryResponses[i]); //to get list for development purposes
}
//console.log(aryResponses);
*/


//jQuery
//$('[myc="blue"][myid="1"][myid="3"]'); AND EXAMPLE
//$('[myc="blue"],[myid="1"],[myid="3"]'); OR EXAMPLE

//innocent until proven guilty
$('div.response').addClass('good');

$('div.response:contains("No Answer Submitted")').addClass('neutral');


//Administrator Use Only
$('div[id^=review]:has(div.admin-use-only)').addClass('admin');
$('div[id^=review]:has(div.admin-use-only)').find('div.response').addClass('NaQ');
$('div[id^=review]:has(div.admin-use-only)').find('div.response > p').addClass('strike');

//general formatting
//Student Group Name
$('div.row.form_element.question.response.good .top .question-text:contains("Student Group Name")').parent().parent().addClass('bumpDown') //Add a little space after the last admin only div
$('.top').addClass('qTitle'); //fix question titles turned green by '.good'


$('div.row.form_element.question.response.good:contains("Student Group Name")')
//Random**************

//No inventory
$('div.response:contains("No, my student group does not currently hold items that were purchased using the Student Activities Fee.")').addClass('bad');

//Admission charge without justification
$('#review-question-2383092-response > div.row.form_element.question.response:has(div.response:has(p:not(:contains("$0.00"))))').addClass('chargeAdmission')
$('#review-question-2383092-response > div.row.form_element.question.response > div.response:has(p:not(:contains("n/a")))').removeClass('chargeAdmission');
$('#review-question-2383092-response > div.row.form_element.question.response > div.response:has(p:not(:contains("N/A")))').removeClass('chargeAdmission');


$('#review-question-2383092-response > div.row.form_element.question.response.good.chargeAdmission > div.response.good.chargeAdmission').append("<div>Heads up: There's an admission charge.</div>").addClass('alert-box notice');

//add onMouseover to each link
//BUG:not every link works for some reason
//add onMouseover to the links at the top of the page
$('.simple-box.attachments a:contains(".jpeg")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-1').src='" + this.href + "'");
	$(this).append('<img src="/theme/img/linkpeek-transparent-pixel-placeholder.png" id="place-holder-1" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%); " />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-1').src='/theme/img/linkpeek-transparent-pixel-placeholder.png';");
});

$('.simple-box.attachments a:contains(".JPG")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-1').src='" + this.href + "'");
	$(this).append('<img src="/theme/img/linkpeek-transparent-pixel-placeholder.png" id="place-holder-1" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%); " />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-1').src='/theme/img/linkpeek-transparent-pixel-placeholder.png';");
});

$('.simple-box.attachments a:contains(".jpg")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-1').src='" + this.href + "'");
	$(this).append('<img src="/theme/img/linkpeek-transparent-pixel-placeholder.png" id="place-holder-1" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%); " />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-1').src='/theme/img/linkpeek-transparent-pixel-placeholder.png';");
});

$('.simple-box.attachments a:contains(".png")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-1').src='" + this.href + "'");
	$(this).append('<img src="/theme/img/linkpeek-transparent-pixel-placeholder.png" id="place-holder-1" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%); " />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-1').src='/theme/img/linkpeek-transparent-pixel-placeholder.png';");
});

$('.simple-box.attachments a:contains(".PNG")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-1').src='" + this.href + "'");
	$(this).append('<img src="/theme/img/linkpeek-transparent-pixel-placeholder.png" id="place-holder-1" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%); " />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-1').src='/theme/img/linkpeek-transparent-pixel-placeholder.png';");
});



$('.content-pane a:contains(".jpeg")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-2').src='" + this.href + "'");
	$(this).append('<img src="http://i.imgur.com/te9xqzy.gif" id="place-holder-2" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%, -30%); ;" />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-2').src='http://i.imgur.com/te9xqzy.gif';");
});

$('.content-pane a:contains(".JPG")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-2').src='" + this.href + "'");
	$(this).append('<img src="http://i.imgur.com/te9xqzy.gif" id="place-holder-2" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%, -30%); " />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-2').src='http://i.imgur.com/te9xqzy.gif';");
});

$('.content-pane a:contains(".jpg")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-2').src='" + this.href + "'");
	$(this).append('<img src="http://i.imgur.com/te9xqzy.gif" id="place-holder-2" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%, -30%); " />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-2').src='http://i.imgur.com/te9xqzy.gif';");
});

$('.content-pane a:contains(".png")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-2').src='" + this.href + "'");
	$(this).append('<img src="http://i.imgur.com/te9xqzy.gif" id="place-holder-2" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%, -30%); " />');
	$(this).attr('onMouseout', "document.getElementById('place-holder-2').src='http://i.imgur.com/te9xqzy.gif';");
});

$('.content-pane a:contains(".PNG")').each(function(){
	$(this).attr('onMouseover', "document.getElementById('place-holder-2').src='" + this.href + "'");
	$(this).append('<img src="http://i.imgur.com/te9xqzy.gif" id="place-holder-2" style="z-index: 100; position: absolute; left: 50%; transform: translate(-50%, -30%); left: 50%; transform: translate(-50%, -30%);"/>');
	$(this).attr('onMouseout', "document.getElementById('place-holder-2').src='http://i.imgur.com/te9xqzy.gif';");
});


//set all http to https
$('.response > p:contains("http:") a').each(function(){
  	if($(this).text().slice(0,5) !== "https"){
  				
  				var ref = $(this).attr('href');
  				var newRef = ref.slice(0,4) + "s" + ref.slice(4);
  				$(this).attr('href',newRef);		

  				var str = $(this).text();
  				var newStr = str.slice(0,4) + "s" + str.slice(4);
  				$(this).text(newStr);
	}
});
//toggle the links into iframes
var button  = document.createElement ("button")
button.id = 'togButton'
$(".item-info-group").append(button);
button.style.width = '75%';
button.style.height = '50px';
$('#togButton').addClass('depth')


$('.content-pane a:contains("www.")').attr("toggled", "false");
button.innerHTML = 'Open All URLs'
button.addEventListener('click',function(){

var errSent = false;
//add iframe for all links except for the known problem links
$('.content-pane a:contains("www.")').each(function(){
	if ($(this).attr('href') !== "http://www.umdsgafinance.weebly.com"
		&& $(this).text().search('amazon') === -1
		&& $(this).text().search('homedepot') === -1
		&& $(this).text().search('sears') === -1
		&& $(this).text().search('lowes') === -1
		&& $(this).text().search('mouser') === -1
		&& $(this).text().search('uscomposites') === -1
		&& $(this).text().search('harborfreight') === -1
		&& $(this).text().search('peapod') === -1
  		&& $(this).text().search('dbs.umd.edu') === -1){
			
			if ($(this).attr('toggled') === "false"){	
				//only https will load -- use class=box to create a white backgorund for iframe injects with a transparent background
				$(this).append('<div class="box"><iframe class="checker" src=' + this.href + ' width = "100%" height = "800px"></iframe></div>');
				$(this).attr("toggled", "true");
				button.innerHTML = 'Close All URLs'
				$('#togButton').removeClass('closed')
				$('#togButton').addClass('opened')

			} else if ($(this).attr('toggled') === "true"){
				$('.box').remove();
				$(this).attr("toggled", "false");
				button.innerHTML = 'Open All URLs'
				$('#togButton').removeClass('opened')
				$('#togButton').addClass('closed')
			}
	
	}else if (errSent === false){
		confirm("Some of the links have unsecure addresses and cannot be opened.");
		errSent = true;
	}
});
});


//DGs iframe
var iframe  = document.createElement ("iframe");
iframe.src  = chrome.extension.getURL ("DG.html");
$(".attachments").append(iframe);
iframe.width = "100%";
iframe.height = "500px";

//Pres/Tres Check
	//identify place to insert with class 'ptCheck'
$("div.content-pane:contains('Did you thoroughly and completely read through the most recent Funding Guide, Manual on Financial Affairs, list of Discretionary Guidelines, and other relevant updates which can be found at www.umdsgafinance.weebly.com ?')").addClass('ptCheck')

var iframe2  = document.createElement ("iframe");
//iframe2.src  = "https://orgsync.com/browse_orgs/141";
iframe2.src  = "/browse_orgs/141";
$(".ptCheck").append(iframe2);
iframe2.width = "100%";
iframe2.height = "500px";




//browser_action

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		if(request.message === "clicked_browser_action"){
			//the code below will execute in the new tab
			//var orgName = $('.bumpDown p').html();
			//chrome.runtime.sendMessage({"message": "search_org", "name": orgName});
			//chrome.runtime.sendMessage({"message": "open_next", "url": nextPage.href});
		}
	}
);

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		if(request.message === "search"){
			//the code below will execute in the new tab	
			//Enter the organization name and search
			//var orgName = request.searchName;
			//var orgURL = $("div.osw-portals-list-item:contains(orgName) a").attr('href');
			//confirm(orgURL);
			//SEE BOTTOM
			//chrome.runtime.sendMessage({"message": "open_next", "url": nextPage.href});
		}
	}
);

/*Line Item Specific DGs
Codes:
ANT - number of anticipated attendees 
CAP - cap based on ANT
SOCS - secure on-campus storage
INV - inventory record

BuzzWords:
donation, fundraiser, food, lodging, general advertising, newspaper advertisement, off-campus, fuel, parking, tolls, giveaway, charity

Notes:
There are 17 line item types with specific DGs and 41 general/non-specific DGs

3321 Out-of-State Conference ex: https://orgsync.com/59742/forms/180261/submissions/17961789?ref=%2F59742%2Fforms%2F180261%2Fsubmissions%3F_pjax%3D%2523pjax-container%26page%3D1%26question%3D2383111%26utf8%3D%25E2%259C%2593%26_pjax%3D%2523pjax-container

*/

/*div.response INDEX --- Current for April Funding Application

5. Student Group Name
7. Mission Statement
9. Budget Trained?
11. Read DGs?
13. President Name
15. President Phone Number
17. President Email
19. Treasurer Name
21. Treasurer Phone Number
23. Treasurer Email
25. Do you have Inventory?
27. Inventory Upload
29. On-campus Storage jation
31. On-campus Storage Documentation
33. Name of Program
35. Program Objective / Purchase Description
37. jation of Program
39. Explain why program is Off-campus
41. Space Rental Justification
43. Space Rental Documentation
45. Date of Program
47. Other Dates
49. Admission Charge Documentation
51. Previous Submission?
53. All UMD Students?
55. Anticipated Attendance
57. Non-UMD Student Justification
59. Co-sponsor List
------------------------------------------
61. Line Item 1
63. LI1 Justification
65. Total Cost
67. Requested Amount
69. Breakdown
71. Documentation / Cost Quote
73. SD1
75. SD2
81. SD3
83. SD4
85. SD5
87. Confirmation
------------------------------------------
89. Line Item 2
91. LI2 Justification
93. Total Cost
95. Requested Amount
97. Breakdown
99. Documentation / Cost Quote
101. SD1
103. SD2
115. SD3
121. SD4
123. SD5
125. Confirmation
------------------------------------------
127. Line Item 3
129. LI3 Justification
131. Total Cost
133. Requested Amount
135. Breakdown
137. Documentation / Cost Quote
139. SD1
141. SD2
145. SD3
155. SD4
161. SD5
163. Confirmation
------------------------------------------
165. Line Item 4
167. LI4 Justification
169. Total Cost
171. Requested Amount
173. Breakdown
175. Documentation / Cost Quote
177. SD1
179. SD2
195. SD3
197. SD4
199. SD5
201. Confirmation
------------------------------------------
165. Line Item 4
167. LI4 Justification
169. Total Cost
171. Requested Amount
173. Breakdown
175. Documentation / Cost Quote
177. SD1
179. SD2
195. SD3
197. SD4
199. SD5
201. Confirmation
------------------------------------------
203. Line Item 5
205. LI5 Justification
207. Total Cost
209. Requested Amount
211. Breakdown
213. Documentation / Cost Quote
215. SD1
217. SD2
227. SD3
235. SD4
237. SD5
239. Confirmation
------------------------------------------
241. Line Item 6
243. LI6 Justification
245. Total Cost
247. Requested Amount
249. Breakdown
251. Documentation / Cost Quote
253. SD1
255. SD2
271. SD3
273. SD4
275. SD5
277. Confirmation
------------------------------------------
If the application is completed with X line items then:
Confirmation: "...complete the application with X Line Items.""
XConfirmationIndex + 2: Signature
XConfirmationIndex + 4: Date of Submission
*/



//LINE ITEM REVIEW

//General and Non-speific



//------------------------------------------
//Line Item Specific

//log responses into an array
var aryResponses = [];
for(var i = 0; i < $('div.response').length; i++ ){
    aryResponses[i] = $('div.response')[i].innerHTML;
    aryResponses[i] = aryResponses[i].replace("↵","");
    //aryResponses[i] = aryResponses[i].replace("</p","");
    

    if (aryResponses[i].charAt(0) === '<'){
    var first = aryResponses[i].search('>') + 1;
        var last = aryResponses[i].search('</p>')
        aryResponses[i] = aryResponses[i].slice(first,last).trim()
        aryResponses[i] = aryResponses[i].trim();
    }
    console.log(aryResponses[i]); //to get list for development purposes
}

var ant = 0; //Anticipated Attendance
//filter
for (var j = 0; j < aryResponses.length; j++){
	//line item types
	if (aryResponses[j] === "3311 In-State Conference" || aryResponses[j] === "3321 Out-of-State Conference" ){
			Conference(aryResponses[j],aryResponses[j+6],j+6); //line item type and requested amount
	}else if(aryResponses[j] === "3724 Advertising"){
			Advertising(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3950 Audio/Visual Equipment"){
			AV(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3620 Bus Rental"){
			Bus(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3752 Contractual Services"){
			Contractual(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "4930 Dues and Fees"){
			Dues(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3717 Equipment Rental"){
			eRental(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3716 Equipment Repair"){
			eRepair(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3746 Food"){
			Food(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3952 Miscellaneous Supplies"){
			Misc(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3916 Office Supplies"){
			oSupplies(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3210 Postage"){
			Postage(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3718 Printing and Copying"){
			Printing(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "4970 Space Rental"){
			Space(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3220 Telephone"){
			Telephone(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3925 Wearing Apparel"){
			Wearing(aryResponses[j],aryResponses[j+6],j+6);
	}else if(aryResponses[j] === "3953 Office Equipment"){
			oEquipment(aryResponses[j],aryResponses[j+6],j+6);
	
	//Anticipated Attendance
	}else if(aryResponses[j].search("Anticipated Attendance</div>") !== -1){
		if(isNaN(aryResponses[j+1])=== false){	
			ant = parseInt(aryResponses[j+1]);
			console.log(ant)
		}else{
			ant = 0;
			console.log(ant);
		};
	//
	}else if(aryResponses[j] === ""){
		console.log('next') //placeholder
	
	//Anticipated Attendance
	}

	//highlight all of the errors
	$('.error').siblings().addClass('bad')



};





//3311 In-State Conference / 3321 Out-of-State Conference
function Conference(LI, reqAmt, l){
	var cap = 50 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('Conference Fees are capped at $50 per quantity of anticipated attendance (DG: 3311-10201401). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt);
	reqAmt = (reqAmt.replace('$',''));
	appender(msg, l);
	capCheck(cap, reqAmt,l);
}

//3724 Advertising
function Advertising(LI, reqAmt, l){
	var cap = parseInt(ant)
	var capAmt =  toCurrency(ant);
	var msg = ('Advertising is capped at $1 per quantity of anticipated attendance (DG: 3724-00201322). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt)
	reqAmt = (reqAmt.replace('$',''));
	appender(msg, l);
	capCheck(cap, reqAmt,l);
}


//3950 	AV Equipment (Audio-Visual) 
function AV(LI, reqAmt, l){

	
}


//3620 Bus Rental
function Bus(LI, reqAmt, l){
	var cap = 57.64 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('All forms of transportation are capped at $57.64 per quantity of anticipated attendance (DG: 0001-11201403). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt)
	reqAmt = (reqAmt.replace('$',''));
	appender(msg, l);
	capCheck(cap, reqAmt,l);
	
}


//3752 Contractual Services
function Contractual(LI, reqAmt, l){
	var cap = 10 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('Contractual services are capped at $10 per quantity of anticipated attendance per day of the program (DG: 3752-00201328). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt)
	reqAmt = (reqAmt.replace('$',''));
	appender(msg, l);
	capCheck(cap, reqAmt,l);
	
}


//4930 Dues & Fees
function Dues(LI, reqAmt, l){
	var cap = 10 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('Non-conference, event-based fees are capped at $10 per quantity of anticipated attendance (DG: 0002-00201316). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt)
	reqAmt = (reqAmt.replace('$',''));
	appender(msg, l);
	capCheck(cap, reqAmt,l);
	
}


//3717 Equipment Rental
function eRental(LI, reqAmt, l){
	var msg = 'Ensure that the group has secure, on-campus storage (DG: 0002-10201502) or a "reasonable expectation of care during the rental period" (DG: 3717-00201330).'
	appender(msg,l)
	
}


//3716 Equipment Repair
function eRepair(LI, reqAmt, l){

	
}


//3746 Food
function Food(LI, reqAmt, l){

	
}


//3952 Miscellaneous Supplies
function Misc(LI, reqAmt, l){
	var cap = 1 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('Funding for decorations is capped at $1 per quantity of anticipated attendance (DG: 3952-00201332). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt + ' if the group is seeking funding for decorations')
	reqAmt = (reqAmt.replace('$',''));
	if (cap !== 0){
		appender(msg, l);
		capCheck(cap, reqAmt,l);	
	}
	
}


//3916 Office Supplies
function oSupplies(LI, reqAmt, l){

	
}


//3210 Postage
function Postage(LI, reqAmt, l){

	
}


//3718 Printing and Copying
function Printing(LI, reqAmt, l){

	
}


//4970 Space Rental
function Space(LI, reqAmt, l){

	
}


//3220 Telephone
function Telephone(LI, reqAmt, l){

	
}


//3925 Wearing Apparel
function Wearing(LI, reqAmt, l){
	var msg = 'Ensure that the group has secure, on-campus storage (DG: 0002-10201502) and that the items will be passed on to future members of the group (DG: 3925-00201344)."'
	appender(msg,l)
}


//3953 Office Equipment
function oEquipment(LI, reqAmt, l){
	var msg = 'Ensure that the group has secure, on-campus storage (DG: 0002-10201502).'
	appender(msg,l)
	
}


function appender(str, loc){
	$('<div class="alert-box warning">' + str + '</div>').insertAfter($('div.response')[loc]);
}

function capCheck(cap, reqAmt, loc){
	if(cap < reqAmt){
		var alert = "The requested amount seems to be over the cap.";
		if(cap % 57.64 === 0){ //if it is a bus rental
		alert = alert + " Note: This cap is applied for each round trip individually."	
		}
		$('<div class="alert-box error">'+ alert +'</div>').insertAfter($('div.response')[loc]);
	}
}

//2000 Security / Salaries -----------?
//Airfare-----------------------------?



//------------------------------------------

/*Chrome Storage
Allow the user to select problematic elements of the form submissions
by double-clicking on them 

(Potential feature: have the element be highlighted when double-clicked and 
then prompt the user with an appended button if they want to add to 
the "problematic table"). 

The problematic table will have  afixed position on the left side of 
the screen and log which elements have been flagged by the user. 

(Potential feature: allow the user to make a short note under each 
element in the problematic table)

The important part about this feature is that it must be saved on the
user's chrome.storage to ensure that the data can be retrieved at a
later point.

storage.sync must be used for Chrome sync
*/
/*
var iframe3  = document.createElement ("iframe");
iframe3.id = "review"
iframe3.src  = chrome.extension.getURL("reviewCriteria.html");
$(".item-info-group").append(iframe3);
iframe3.width = "100%";
iframe3.height = "350px";
//default class is 'bad'
//when all checkboxes are checked, this should be replaced with 'good'
//this will be done in reveiewCriteria.html itself
^^cannot get this to work a an iFrame. Converting to div^^
*/

$(".item-info-group").append('<h3 class="checkHead">Checklist:</h3>');

var checklist  = document.createElement ("div");
checklist.id = "review"
$(".item-info-group").append(checklist);
$('#review').load(chrome.extension.getURL("reviewCriteria.html"));
checklist.width = "100%";
checklist.height = "350px";

$(".item-info-group").append('<h3 class="noteHead">Notes:</h3>');


var Notes = document.createElement ("textArea");
Notes.id = 'sideNote'
$(".item-info-group").append(Notes);




var saveButton = document.createElement ("button");
saveButton.id = 'save'
$(".item-info-group").append(saveButton);
$('#save').text("Save Notes")

$('#save').on({
  "click": function() {
    $(this).tooltip({ items: "#save", content: "This does not save your checklist!"});
    $(this).tooltip("open");
  },
  "mouseout": function() {      
     $(this).tooltip("disable");   
  }
});






//hide unwanted elements on the main screen
if( $('.page-title').text() === "SGA Funding Application - April 2016" ){
	//$('#save').hide();
	//$('#review').hide();
	$('#togButton').hide();
	$('#review').hide();
	$('.review').hide();
	$('.checkHead').hide();
	$('.noteHead').hide()
	$('#sideNote').hide();
	$('#save').hide();
	$('#pjax-container > div.layout.with-sidebar > div.sidebar > ul:nth-child(6)').hide();
}


//idea: allow user to change div color on click



//universal functions

//pause script
function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) {
   }
};

//format as currency
function toCurrency(value){
	var num = '$' + value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	return num;
}




//Save notes and checklist in chrome.storage


	//Get the notes
	
	//Save it using the chrome extension storage API

	


/*
saveButton.addEventListener('click',function(){

var save = {};
var noteValue = $('#sideNote').val();
save["Notes"] = noteValue;

chrome.storage.sync.set($('#sideNote').val(), function() {
    console.log($('#sideNote').val());
});

});


window.onLoad(
	chrome.storage.sync.get($('#sideNote').val(), function() {
    	console.log($('#sideNote').val());
	})

)
*/

//currently cannot figure ou thow to save and retrieve values
/*
saveButton.addEventListener('click',function(){
	localStorage.notes = $('#sideNote').val();
    var notes = $('#sideNote').val();
                             //key    value   callback
    chrome.storage.sync.set({"userNotes": notes}, function() {
        console.log("The value stored was: " + notes);
    });
});


chrome.storage.sync.get(userNotes, function() {
        console.log("The value stored was: " + notes);
    });





window.onload($('#sideNote').val(localStorage.notes))
*/
//This stores one value across all pages for Notes
//I want to store a unique value for each page





/*
(function(){

var value = $('#sideNote')
var nSub = (window.location.pathname).slice((window.location.pathname).lastIndexOf('/')+1)

function valueChanged(newValue) {
	value.val(newValue)
}

saveButton.addEventListener('click',function(){
	var value = "Submission Notes for " + nSub + ": " + $('#sideNote').val()
	chrome.storage.sync.set({
		nSub: value,
		timestamp: Date.now()
	}, function() {
		console.log("Value set: " + value);
	});
});

	chrome.storage.onChanged.addListener(function(changes, namespace){
		if(changes.nSub){
			valueChanged(changes.nSub.newValue)
		}
	});

	chrome.storage.sync.get("myValue", function(result){
		valueChanged(result.myValue);
	})

})();



//This also saves 1 value on all pages. And I like the idea of chrome.storage better
(function(){
	var value = $('#sideNote')
	
	function valueChanged(newValue) {
		value.val(newValue)
	}

	saveButton.addEventListener('click',function(){
		var value = $('#sideNote').val()
		window.localStorage.notes = value
		console.log("Notes: " + window.localStorage.notes + " has been saved.")
	});

	valueChanged(window.localStorage.notes);

})();

*/
//This works
(function(){
	/* this works when run independently, but not here
		aryChecks = [];
	
    	for(var i = 0; i < $('.checkbox').length; i++){
        	if ($('.checkbox')[i].checked === true){
            	aryChecks[i] = 1;
        	}else{
            	aryChecks[i] = 0;
        	}
    	
		};

	console.log(aryChecks)

	*/
	var value = $('#sideNote')
	var nSub = (window.location.pathname).slice((window.location.pathname).lastIndexOf('/')+1)
	var cSub = nSub + "a" //arbitrary letter
	console.log(cSub)
	function valueChanged(newValue) {
		value.val(newValue)
	}

	saveButton.addEventListener('click',function(){
		var value = $('#sideNote').val()
		localStorage.setItem(nSub,value)
		console.log("Notes for " + nSub + " have been saved.")

		//localStorage.setItem(cSub, JSON.stringify(aryChecks))

		$('#sideNote').toggle("highlight", {color: '#CEFFCF'}, 10 );
		$('#sideNote').toggle("highlight", {color: '#CEFFCF'}, 100 );


		//these two won't work
		//$('#review').toggle("highlight", {color: '#CEFFCF'}, 10 );
		//$('#review').toggle("highlight", {color: '#CEFFCF'}, 100 );
	});

	valueChanged(localStorage.getItem(nSub,value));
	//var retrievedObject = localStorage.getItem(cSub, aryChecks);
	//aryChecks = JSON.parse(retrievedObject);
	//console.log(aryChecks);
})();



























