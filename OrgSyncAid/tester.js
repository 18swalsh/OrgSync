

//02035
//tester.js
/*
1.0.1 Bug Fixes:
- z-index on mousover images increased to 1 to bring forward and transform: translate to relocate on page
1.1.0 Bug Fixes/Functionality:
- only matches *://orgsync.com/*
- Notes section in local storage for each unique page
1.1.0 Bug Fixes:
- filter out unwanted elements from main page
1.1.1
- tooltip popups to replace all confirm messages
	(ie. Open All URLs button, save button)
1.1.2
- Checklist saved in local storage 
1.1.3
-Make notes box smaller to reveal save button without having to zoom out (must be at 75% zoom)
-Chnge browser_action tooltip from "Test" to "Cofa yourself"
-All changes made to the checklist and notes will be saved on chrome.storage.sync
and will be synced to the user's Google account rather than on local storage. 
If the user is not logged in to their Google account, local storage will be used

//BUGPOT
//BUGPOT15428: If the number of items in the checklist changes, this will mess up formatting. Location: reviewCriteria.js


*/

/*DEBUG: log responses to the console
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


$('#togButton').on({
  "click": function() {
    $(this).tooltip({ items: "#togButton", content: "Some of the links have unsecure addresses and cannot be opened."});
    $(this).tooltip("open");
  },
  "mouseout": function() {      
     $(this).tooltip("disable");   
  }
});




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
		&& $(this).text().search('pre-engineering') === -1
		&& $(this).text().search('rei.com') === -1
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
	
	}else if (errSent === false){ //which it will be always since I commented these out
		//confirm("Some of the links have unsecure addresses and cannot be opened.");
		//errSent = true;

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

appenderNotice("Funding Applications are not reviewed unless submitted under the name of a Treasurer or President of an SGA recognized student group. The submitting officer must have been certified at a Budget Training Workshop that occurred in the current fiscal year (school year) (DG: 0001-00201301).",23)



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
37. Location of Program
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
var totalReq = 0;
var str = "";
//filter
for (var j = 0; j < aryResponses.length; j++){
	//line item types
	if (aryResponses[j] === "3311 In-State Conference" || aryResponses[j] === "3321 Out-of-State Conference" ){
			Conference(aryResponses[j],aryResponses[j+6],j+6); //line item type and requested amount
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3724 Advertising"){
			Advertising(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3950 Audio/Visual Equipment"){
			AV(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3620 Bus Rental"){
			Bus(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3752 Contractual Services"){
			Contractual(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "4930 Dues and Fees"){
			Dues(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3717 Equipment Rental"){
			eRental(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3716 Equipment Repair"){
			eRepair(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3746 Food"){
			Food(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3952 Miscellaneous Supplies"){
			Misc(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3916 Office Supplies"){
			oSupplies(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3210 Postage"){
			Postage(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3718 Printing and Copying"){
			Printing(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "4970 Space Rental"){
			Space(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3220 Telephone"){
			Telephone(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3925 Wearing Apparel"){
			Wearing(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	}else if(aryResponses[j] === "3953 Office Equipment"){
			oEquipment(aryResponses[j],aryResponses[j+6],j+6);
			sumReq(aryResponses[j+6])
	
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
	

	//finalize sum of requests
	} else if (j === aryResponses.length - 1) {
		sumReq(0,"go")
	}

	//highlight all of the errors
	$('.error').siblings().addClass('bad')
};

//Check Dates
function checkDate(reqCheck){ //BUG7516
	var progDate = $('.response:contains("If funds are needed for certain transactions BEFORE the date of program") .response p').text().trim();
	var deadline = "Apr 4, 2016"
	var days = dateDifference(deadline,progDate);
	days = Math.floor(days);
	appenderNotice("The date of program is " + days + " days after the sumbission deadline of " + deadline,45);
	if (reqCheck > 0){
		//Implement 30/60 Rule
		if (days < 30) {
			appenderError("The date of program is less than 30 days away (DG: 0001-09201401).",45 )
		}else{
			if (days < 60) {
				if (reqCheck > 1500) {
					appenderError("The date of program is less than 60 days away, and the requested amount is over $1,500 (DG: 0001-09201401). Note: An Application will be considered for funding for a Program that exceeds $1,500 AND will occur between 30-60 days before the Date of Program IF an Application has already been submitted during the current school year, AND is for the same Program, containing the same specific item(s), AND the Date of Program is still at least 30 days after the deadline (DG: 0001-03201502).",45 )
				}
			//Implement 5 month rule
			} else if ((days/30) > 5){
				appenderError("The date of program is more than 5 months away (DG: 0001-09201402).", 45)
			}
		}

	}

};


//Add up all requested amounts BUG7516
function sumReq(req,call){
	if(call === "go"){
		checkDate(totalReq);
	}
	str = req.toString();
	req = str.replace('$','').trim();
	req = parseFloat(req);
	totalReq += req;
	
}





//3311 In-State Conference / 3321 Out-of-State Conference
function Conference(LI, reqAmt, l){
	var cap = 50 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('Conference Fees are capped at $50 per quantity of anticipated attendance (DG: 3311-10201401). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt);
	reqAmt = (reqAmt.replace('$',''));
	if (cap !== 0){
		appender(msg, l);
		capCheck(cap, reqAmt,l);	
	}
	var string = "A conference is one of the line items, so the group must provide a number for anticipated attendance"
	$('<div class="alert-box notice">' + string + '</div>').insertAfter($('div.response:contains("Anticipated Attendance is needed for General Operations if the line item has a cap which is applied to the number of attendees (i.e. contractual services)") .response'))
}

//3724 Advertising
function Advertising(LI, reqAmt, l){
	var cap = parseInt(ant)
	var capAmt =  toCurrency(ant);
	var msg = ('Advertising is capped at $1 per quantity of anticipated attendance (DG: 3724-00201322). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt)
	reqAmt = (reqAmt.replace('$',''));
	if (cap !== 0){
		appender(msg, l);
		capCheck(cap, reqAmt,l);	
	}
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
	if (cap !== 0){
		appender(msg, l);
		capCheck(cap, reqAmt,l);	
	}
	
}


//3752 Contractual Services
function Contractual(LI, reqAmt, l){
	var cap = 10 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('Contractual services are capped at $10 per quantity of anticipated attendance per day of the program (DG: 3752-00201328). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt + ". Note:  The $10 cap per Anticipated Attendance for one-on-one training will be lifted only when demonstrated to benefit the entire group (DG 3752-10201302)")
	reqAmt = (reqAmt.replace('$',''));
	if (cap !== 0){
		appender(msg, l);
		capCheck(cap, reqAmt,l);	
	}
	
}


//4930 Dues & Fees
function Dues(LI, reqAmt, l){
	var cap = 10 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('Non-conference, event-based fees are capped at $10 per quantity of anticipated attendance (DG: 0002-00201316). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt)
	reqAmt = (reqAmt.replace('$',''));
	if (cap !== 0){
		appender(msg, l);
		capCheck(cap, reqAmt,l);	
	}
	
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
	appenderNotice("Food is only funded for a group for which food is absolutely essential to its mission statement and Program purpose (DG: 3746-00201331).",l-6)
	var string = "Food is one of the line items, so the group must provide a number for anticipated attendance"
	$('<div class="alert-box notice">' + string + '</div>').insertAfter($('div.response:contains("Anticipated Attendance is needed for General Operations if the line item has a cap which is applied to the number of attendees (i.e. contractual services)") .response'))
}


//3952 Miscellaneous Supplies
function Misc(LI, reqAmt, l){
	var cap = 1 * parseInt(ant);
	var capAmt =  toCurrency(cap);
	var msg = ('Funding for decorations is capped at $1 per quantity of anticipated attendance (DG: 3952-00201332). The anticipated attendance is ' + ant + ', so the cap is ' + capAmt + ' if the group is seeking funding for decorations')
	reqAmt = (reqAmt.replace('$',''));
	appenderNotice("Check to make sure the group has an inventory record and/or secure, on-campus storage", l)
	if (cap !== 0){
		appender(msg, l);
		capCheck(cap, reqAmt,l,"misc");	
	}
	
}


//3916 Office Supplies
function oSupplies(LI, reqAmt, l){
	appenderNotice("The only acceptable documentation is a copy of the Guy Brown order form found at SORC", l+4)
}


//3210 Postage
function Postage(LI, reqAmt, l){
	appenderNotice("Must demonstrate why email is insufficient (DG: 3210-00201335)", l-4)
}


//3718 Printing and Copying
function Printing(LI, reqAmt, l){
	appenderNotice("Color paper/ink must be justified (DG: 3718-00201337) as well as higher quality stock (DG: 3718-00201338).", l-4)
}


//4970 Space Rental
function Space(LI, reqAmt, l){
	appenderNotice(" Venue capacity must be more than Anticipated Attendance (DG 4970-00201340)",l)
	var string = "Space Rental is one of the line items, so the group must provide a number for anticipated attendance"
	$('<div class="alert-box notice">' + string + '</div>').insertAfter($('div.response:contains("Anticipated Attendance is needed for General Operations if the line item has a cap which is applied to the number of attendees (i.e. contractual services)") .response'))
}


//3220 Telephone
function Telephone(LI, reqAmt, l){
	appenderNotice("Must demonstrate a compelling need for office phones (DG 3220-00201343)",l-4)
}


//3925 Wearing Apparel
function Wearing(LI, reqAmt, l){
	var msg = 'Ensure that the group has secure, on-campus storage (DG: 0002-10201502) and that the items will be passed on to future members of the group (DG: 3925-00201344).'
	appender(msg,l)
}


//3953 Office Equipment
function oEquipment(LI, reqAmt, l){
	var msg = 'Ensure that the group has secure, on-campus storage (DG: 0002-10201502).'
	appender(msg,l)
}

//appender appends warnings by default
function appender(str, loc){
	$('<div class="alert-box warning">' + str + '</div>').insertAfter($('div.response')[loc]);
}

function appenderNotice(str, loc){
	$('<div class="alert-box notice">' + str + '</div>').insertAfter($('div.response')[loc]);
}

function appenderError(str, loc){
	$('<div class="alert-box error">' + str + '</div>').insertAfter($('div.response')[loc]);
}

function capCheck(cap, reqAmt, loc, type){
	if(cap < reqAmt){
		var alert = "The requested amount seems to be over the cap.";
		if(cap % 57.64 === 0){ //if it is a bus rental
			alert = alert + " Note: This cap is applied for each round trip individually."	
		}

		if(type === "misc"){
			alert = alert + " However, this cap only applies to decorations."
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
$(".item-info-group").filter(":visible").append(checklist); //bug15426 problem area
$('#review').load(chrome.extension.getURL("reviewCriteria.html"));
checklist.width = "100%";
checklist.height = "300px";

$(".item-info-group").append('<h3 class="noteHead">Notes:</h3>');


var Notes = document.createElement ("textArea");
Notes.id = 'sideNote'
$(".item-info-group").append(Notes);




var saveButton = document.createElement ("button");
saveButton.id = 'save'
$(".item-info-group").append(saveButton);
$('#save').text("Save All")

$('#save').on({
  "click": function() {
    $(this).tooltip({ items: "#save", content: "Notes and checklist have been saved."});
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

function dateDifference(date1, date2){
	return ( new Date(date2).getTime() - new Date(date1).getTime() ) / 86400000;
};


//Save notes and checklist in chrome.storage

$( document ).ready(function(){
	//bug 15426: checkboxes were inserted twice 
	



	//initialize value for notes
	var value = $('#sideNote')
	var nSub = "key" + (window.location.pathname).slice((window.location.pathname).lastIndexOf('/')+1)
	var saver = {}
	
	//initialize values for checklist
	var aryChecks = [];
    	for(var i = 0; i < $('.checkbox').length; i++){
        	if ($('.checkbox')[i].checked === true){
            	aryChecks[i] = "1";
        	}else{
            	aryChecks[i] = "0";
        	}
    	
		};

	var cSub = nSub + "a" //arbitrary letter
	saver[nSub] = value.val()
	saver[cSub] = aryChecks
	
	//for entering notes once they have been retrieved
	function valueChanged(newValue) {
		value.val(newValue)
	}

	saveButton.addEventListener('click',function(){
		//save the notes
		var value = $('#sideNote')
		var nSub = "key" + (window.location.pathname).slice((window.location.pathname).lastIndexOf('/')+1) 
		console.log(nSub)
		saver[nSub] = value.val();

		chrome.storage.sync.set(saver, function(){
			if(chrome.runtime.error) {
				console.log("Runtime error.")
			}
		});
		console.log("Notes for " + nSub + " have been saved.")

		//flash green to indicate to the user that the save was completed
		$('#sideNote').toggle("highlight", {color: '#CEFFCF'}, 10 );
		$('#sideNote').toggle("highlight", {color: '#CEFFCF'}, 100 );

		//record the checklist in an array to save in localStorage
		var aryChecks = [];
    	for(var i = 0; i < $('.checkbox').length; i++){
        	if ($('.checkbox')[i].checked === true){
            	aryChecks[i] = "1";
        	}else{
            	aryChecks[i] = "0";
        	}
    	
		};
		console.log(aryChecks);
		saver[cSub] = aryChecks
		chrome.storage.sync.set(saver, function(){
			if(chrome.runtime.error) {
				console.log("Runtime error.");
			}
		});

		//flash green
		$('#review').toggle("highlight", {color: '#CEFFCF'}, 10 );
		$('#review').toggle("highlight", {color: '#CEFFCF'}, 400 );
		$('#rev').toggle("highlight", {color: '#CEFFCF'}, 10 );
		$('#rev').toggle("highlight", {color: '#CEFFCF'}, 400 );
	});

	//send the retrieved notes to be added into the notes section
	//valueChanged(chrome.storage.sync.get({nSub}));
	
	chrome.storage.sync.get(nSub, function(items) {
		if(!chrome.runtime.error) {
			console.log(items[nSub]);
			valueChanged(items[nSub]);
		}
	})


	//retrieve checkbox array
	chrome.storage.sync.get(cSub, function(items) {
		if(!chrome.runtime.error) {
			var aryChecks = items[cSub];
			console.log(aryChecks)
				//load saved checklist
			document.querySelectorAll('input[type="checkbox"]:checked').length = 0;
			for(var i = 0; i < $('.checkbox').length; i++){
        		if (aryChecks[i] === "1"){
            		$('.checkbox')[i].checked = true;
        		}else{
            		$('.checkbox')[i].checked = false;
        		}
    		//checklist color won't load. copy from reviewCriteria.js WORKS NOW
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


			};
		}
	})
	
});







//Insert notes into the form submission list page

/*Notes:

Each submission is a <tr class="list-item">
These are the only elements on this page with that class

*/


//get all of the notes from chrome.storage and insert them into the table
$('div > div.media-body > h4 > a').each(function(){
	var str = $(this).attr('href')
	var key = "key" + str.slice(str.lastIndexOf('/')+1, str.lastIndexOf('?'))
	key = key.toString();
	console.log(key)

	chrome.storage.sync.get(key, function(items) {
			if(!chrome.runtime.error) {
				console.log(items[key]);
				var searchKey = key.slice(3);
				var newRow = $('<tr class="tableNote"><td class="alert-box success tableNote">' + items[key] + '</td><</tr>')
				if(typeof(items[key]) !== "undefined"){
					newRow.insertAfter($('tr a[href*=' + searchKey + ']' ))
				};
			}
	})
})








