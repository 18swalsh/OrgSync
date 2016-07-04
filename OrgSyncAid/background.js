chrome.browserAction.setBadgeText({text: "cofa"});
chrome.browserAction.setBadgeBackgroundColor({color: "black"});

chrome.browserAction.onClicked.addListener(function(activeTab){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	});
});

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		/*if(request.message === "search_org"){
			var searchName = request.name
			//open orgsync browse organizations 
			var newURL = "https://orgsync.com/browse_orgs/141";
 			chrome.tabs.create({ url: newURL });
  			sleep(7000);
  			
			//tell tab js to enter the group name and click "go"
      		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				var activeTab = tabs[0];
      			chrome.tabs.sendMessage(activeTab.id, {"message": "search", "searchName": searchName});
      		});
		}*/
	}
);







//universal functions
function sleep(miliseconds) {
   var currentTime = new Date().getTime();
   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}