# OrgSync

OrgSyncAid
The purpose of this extension is to aid in the form submission review process done by the SGA Committee on Financial Affairs at UMD.

•	Functionality:

•	The Manual on Financial Affairs (Discretionary Guidelines) have been added at the top of the page in an iFrame. 

Note: This is not the live document. This is HTML saved to the extension and must be 	updated regularly. Live feed functionality could be added if the document was live 	somewhere  online, but as of now, it is only available for download.

•	OrgSync's "browse organizations" page has been added at the bottom of the Student Group Information section of the form submission. I contacted OrgSync and they changed all the href attributes on the page from http to https (they were happy I pointed this out). This allows the user to navigate the portal in the iFrame on each form submission to confirm the organization is SGA recognized, and that the president and treasurer match on OrgSync.

•	The "Open All URLs" button is meant create a live iFrame below any link submitted as a response. The main issues I encountered in adding this functionality were that many of the links were served over http, and many sites do not allow their pages to be pulled into an iFrame. In addition to these issues, many links submitted by student groups are http, but the sites allow for https. The best solution I could think of was to first change every href  that was submitted to https if it was http. Then, compile a blacklist of sites that do not work. Not a great workaround, but originally the live iFrames were created without the button, which led to some intrusive error-laden iFrames. The button is meant to allow the user the option to toggle this functionality, thus toggling the annoyance if the iFrames don't play nice. 

Note: The iFrames rarely play nice.

•	All images have a mouseover attribute that shows the image centered and resized in the window

•	The Checklist and Notes boxes are saved in localStorage, and are unique to each page. The Submission ID is used as the key for the Notes, and the Submission Key + "a" is used for the Checklist array.

Note: Don't forget to press the "Save All" button!	

•	Response reviewer logs all responses into an array.  All responses have a default color of green unless the response is "No Answer Submitted," in which case the default color is a neutral yellow. The main functionality here is checking if there is a relevant cap per quantity of anticipated attendance, multiplying it by the anticipated attendance submitted, and displaying the results under the Total Amount Requested response. If the anticipated attendance is not an integer greater than 0, none of this analysis is done. If it is, and the amount requested is higher than the calculated cap, a warning message appears below the Total Amount Requested response.
