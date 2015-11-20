function submitForm() {
	var trackingType, tagManager, gaID, aaID, GAType, enhancedEcommerce, notes, efforts, callTracking, importantTC, TnOplatform, VOCplatform, loadTime, status301, status302, status404, status500, accountSetup, goals, goalDescription, goalRecs, filterDescription, filterRecs, eventDescription, eventRecs, websiteURL, accountRecs;
	

	if ($("[name^=trackingType]:checked").val() == "other") {
		trackingType = $("[name^=otherTrackingType]:input").val();
	}
	else {
		trackingType = $("[name^=trackingType]:checked").val();
	};


	if ($("[name^=tagManager]:checked").val() == "other") {
		tagManager = $("[name^=otherTagManager]:input").val();
	}
	else {
		tagManager = $("[name^=tagManager]:checked").val();
	};

				
	websiteURL = $("[id^=websiteURL]:input").val();
	gaID = $("#gaID:input").val();
	aaID = $("#aaID:input").val();
	GAType = $("[name^=GAType]:checked").val();
	enhancedEcommerce = $("[name^=enhancedEcommerce]:checked").val();
	GoogleNotes = $("#GoogleNotes:input").val();
	AdobeNotes = $("#AdobeNotes:input").val();
	GoogleAccountRecs = $("#GoogleAccountRecs:input").val();
	AdobeAccountRecs = $("#AdobeAccountRecs:input").val();
	efforts = $("[name^=efforts]:checked").val();
	callTracking = $("[name^=callTracking]:checked").val();
	importantTC = $("#importantTC:input").val().replace(/\r\n|\r|\n/g,"<br>");
	TnOplatform = $("#TnOplatform:input").val();
	VOCplatform = $("#VOCplatform:input").val();
	isVOCpossible = $("[name^=isVOCpossible]:checked").val();
	loadTime = $("#loadTime:input").val();
	status301 = $("#status301:input").val();
	status302 = $("#status302:input").val();
	status404 = $("#status404:input").val();
	status500 = $("#status500:input").val();
	hasGAaccess = $("[name^=GoogleAccess]:checked").val();
	hasAdobeaccess = $("[name^=AdobeAccess]:checked").val();
	GoogleAccountSetup = $("#GoogleAccountSetup:input").val()
	AdobeAccountSetup = $("#AdobeAccountSetup:input").val()
	GoogleGoals = $("[name^=GoogleGoals]:checked").val();
	AdobeGoals = $("[name^=AdobeGoals]:checked").val();
	GoogleGoalDescription = $("#GoogleGoalDescription:input").val();
	AdobeGoalDescription = $("#AdobeGoalDescription:input").val()
	GoogleGoalRecs = $("#GoogleGoalRecs:input").val();
	AdobeGoalRecs = $("#AdobeGoalRecs:input").val();
	GoogleFilters = $("[name^=GoogleFilters]:checked").val();
	AdobeFilters = $("[name^=AdobeFilters]:checked").val();
	GoogleFilterDescription = $("#GoogleFilterDescription:input").val();
	AdobeFilterDescription = $("#AdobeFilterDescription:input").val();
	GoogleFilterRecs = $("#GoogleFilterRecs:input").val();
	AdobeFilterRecs = $("#AdobeFilterRecs:input").val();
	GoogleEvents = $("[name^=GoogleEvents]:checked").val();
	AdobeEvents = $("[name^=AdobeEvents]:checked").val();
	GoogleEventDescription = $("#GoogleEventDescription:input").val();
	AdobeEventDescription = $("#AdobeEventDescription:input").val();
	GoogleEventRecs = $("#GoogleEventRecs:input").val();
	AdobeEventRecs = $("#AdobeEventRecs:input").val();
				
	
	// To check if input is being passed in
	var results = [websiteURL, trackingType, tagManager, gaID, aaID, GAType, notes, efforts, callTracking, importantTC, TnOplatform, VOCplatform, isVOCpossible, loadTime, status301, status302, status404, status500, accountSetup, goalDescription, goalRecs, filterDescription, filterRecs, eventDescription, eventRecs, accountRecs, output, hasGAaccess];
	var google = [gaID, GAType, notes, efforts, hasGAaccess, accountSetup, goalDescription, goalRecs, filterDescription, filterRecs, eventDescription, eventRecs, accountRecs];
	var Adobe = [aaID];
	var other = [websiteURL, trackingType, tagManager, callTracking, importantTC, TnOplatform, VOCplatform, isVOCpossible, loadTime, status301, status302, status404, status500,];

	//	@@ 		@@ 				   @@
	//	@@ 		@@ 				   @@
	//	@@@@@@@ @@ @@  @@  @@ @@@  @@@@@@@ @@@@@@@
	//	@@ 	 @@ @@ @@  @@  @@@  @@ @@ 	@@ @@
	//	@@   @@ @@ @@  @@  @@ 	   @@   @@ @@@@@@@
	//	@@   @@ @@ @@  @@  @@  	   @@   @@ 		@@
	//	@@@@@@@ @@ @@@@@@  @@ 	   @@@@@@@ @@@@@@@

	var gtmBenefitsBlurb = "<h4>Google Tag Manager</h4><p>The website does not show existence of any tag management system. There is an opportunity to implement Universal Analytics through Google Tag Manager.</p><p>There are several benefits of using Google Tag Manager we can take advantage of:</p><ul><li>Allows you to quickly and easily add, delete and update a wide range of analytics, remarketing and 3rd party tags</li><li>Data is dependable since error checking is easy and accurate</li><li>Compatible with mobile apps</li><li>Allows multi-account support and user permissions</li></ul>"
	var uaBenefitsBlurb = "<h4>Universal Analytics</h4><ul><li>The website is running on classic ga.js and should be upgraded to analytics.js</li><li>Upgrading to UA has unique benefits like seamless offline integration, cross device tracking, session timeout handling and using custom dimensions to track relevant data.</li><li>Google is also in the process of deprecating classic ga.js at the end of this year.</li></ul>"
	var enhancedEcommerceBlurb = "<h4>Enhanced Ecommerce</h4><ul><li>One of the main benefits for an ecommerce website upgrading to Universal Analytics is Enhanced Ecommerce.</li><li>Enhanced Ecommerce allows you to see when customers added items to their shopping cards, started the checkout process, and completed a purchase. You can also use Enhanced Ecommerce to identify segments of customers who are falling out of the shopping funnel.</li></ul>"
	var TnOblurb = "<h4>Testing and Optimization</h4><p>The website does not have any Conversion Rate Optimization (CRO) tools. CRO has several benefits:</p><ul><li>Understanding the client's site visitors' behavior quantitatively and qualitatively in order to develop hypotheses for the website experience and test these experiences prior to investing the development time and resources in hardcoding.</li><li>Optimize any webpage against the client's KPIs (engagement ecommerce, lead generation).</li><li>It is crucial to optimize existing traffic to the site. Oftentimes, clients focus their budgets on paid media to push more traffic to the site, but conversion rate remains stagnant. Optimizing the site for existing traffic followed by optimizing traffic from new media efforts is necessary to achieve optimal conversion rates.</li></ul>";
	var VOCblurb = "<h4>Voice of Customer</h4><p>The website does not have any Voice of Customer (VOC) tools. VOC has several benefits:</p><ul><li>Allows you to understand visitors' perceptions of your website, brand, and competitors via quantitative and qualitative survey questions.</li><li>Gives you insight into visitor obstacles and areas of opportunity for your marketing efforts and your company at large.</li></ul>";
	var callTrackingBlurb = "<h4>Call Tracking</h4><p>There is an opportunity to provide a call tracking system to evaluate and track calls coming to your call center with metrics including the types of campaigns, ad group, keywords. This will provide insight on the types of calls the call center will be receiving based on campaigns that are running and lead to optimizing performance.</p>"

	
	////////////////////////////////////////////////////////////////////////////////
	//																			  //
	//  @@@@@@@@@@  @@@	   @@@  @@@@@@@@@@@  @@@@@@@@@@  @@@    @@@  @@@@@@@@@@@  //
	//  @@@@@@@@@@  @@@    @@@  @@@@@@@@@@@  @@@@@@@@@@  @@@    @@@  @@@@@@@@@@@  //
	//  @@@    @@@  @@@    @@@      @@@      @@@    @@@  @@@    @@@      @@@	  //
	//  @@@    @@@  @@@    @@@      @@@      @@@@@@@@@@  @@@    @@@      @@@	  //
	//  @@@    @@@  @@@    @@@      @@@      @@@@@@@@@@  @@@    @@@      @@@	  //
	//  @@@@@@@@@@  @@@@@@@@@@      @@@      @@@         @@@@@@@@@@      @@@	  //
	//  @@@@@@@@@@  @@@@@@@@@@      @@@      @@@         @@@@@@@@@@      @@@	  //
	//																			  //
	////////////////////////////////////////////////////////////////////////////////
	
	document.getElementById("output").innerHTML = "<br>";

	var output = [];
	
	output.push("<h4 class='websiteURL'>Web report for: </h4><a href='" + websiteURL + "' target='_blank'>" + websiteURL + "</a>");
	// GA ACCOUNT STRUCTURE
	if (trackingType == "Google Analytics" | trackingType == "Google Analytics and Adobe Analytics") {
		output.push("<h4>Current GA account structure setup</h4>", "The primary GA property is " + gaID + ".");
		
		if (GoogleNotes.length > 0) {
			GoogleNotes = GoogleNotes.split("\n");

			output.push("<ul>");
			$(GoogleNotes).each( function( index ) {
				output.push("<li>" + GoogleNotes[index] + "</li>");
			});
			output.push("</ul>");
		};
		if (GoogleAccountRecs.length > 0) {
			GoogleAccountRecs = GoogleAccountRecs.split("\n");

			output.push("<p>Recommendations:</p>", "<ul>");
			$(GoogleAccountRecs).each( function( index ) {
				output.push("<li>" + GoogleAccountRecs[index] + "</li>");
			});
			output.push("</ul>");
		};
	};

	// Adobe ANALYTICS STRUCTURE
	if (trackingType == "Adobe Analytics" | trackingType == "Google Analytics and Adobe Analytics") {
		output.push("<h4>Current Adobe Analytics account structure setup</h4>", "The primary Adobe Analytics property ID is " + aaID + ".");
		
		if (AdobeNotes.length > 0) {
			AdobeNotes = AdobeNotes.split("\n");

			output.push("<ul>");
			$(AdobeNotes).each( function( index ) {
				output.push("<li>" + AdobeNotes[index] + "</li>");
			});
			output.push("</ul>");
		};
		if (AdobeAccountRecs.length > 0) {
			AdobeAccountRecs = AdobeAccountRecs.split("\n");

			output.push("<p>Recommendations:</p>", "<ul>");
			$(AdobeAccountRecs).each( function( index ) {
				output.push("<li>" + AdobeAccountRecs[index] + "</li>");
			});
			output.push("</ul>");
		};
	};


	// GOOGLE ANALYTICS TYPE
	if (GAType == "classic") {
		output.push(uaBenefitsBlurb);		
	};

	if (tagManager == 'no tag manager' && (trackingType == 'Google Analytics' | trackingType == 'Google Analytics and Adobe Analytics')) {
		output.push(gtmBenefitsBlurb);
	};

	if (enhancedEcommerce == "yes") {
		output.push(enhancedEcommerceBlurb);
	};


	// TESTING AND OPTIMIZATION and VOC
	if (efforts == "none") {
		output.push(TnOblurb, VOCblurb);
	}
	else if (efforts == "VOC") {
		output.push(TnOblurb);
	}
	else if (efforts == "TnO" & isVOCpossible == "yes") {
		output.push(VOCblurb);
	};
	
	// CALLTRACKING
	if (callTracking == "yes") {
		output.push(callTrackingBlurb);
	};

	// PAGE LOAD TIME
	output.push("<h4>Page Load Time</h4><p>The average page load time is " + loadTime + " seconds.");
	if (loadTime > 3) {
		output.push("<br>This is not ideal for good visitor experience. The website should be optimized for decreasing average page load time to 3 seconds or less.");
	};
	output.push("</p>");
	
	var block = [];
	var GoogleBlock = [];
	var AdobeBlock = [];
	
	output.push("<h3>Current Web Analytics Tracking Setup</h3>");
	$('#output').append(output.join(''));

	if (trackingType == "Google Analytics" | trackingType == "Google Analytics and Adobe Analytics") {
		if (hasGAaccess == "yes") {
			GoogleBlock.push("<blockquote>");
			// GOALS
			GoogleBlock.push("<h4>Current Goals</h4>");
			if (GoogleGoals == "yes" & GoogleGoalDescription.length > 0) {
				GoogleGoalDescription = GoogleGoalDescription.split("\n");

				GoogleBlock.push("<ul>");
				$(GoogleGoalDescription).each( function( index ) {
					GoogleBlock.push("<li>" + GoogleGoalDescription[index] + "</li>");
				});
				GoogleBlock.push("</ul>");
			}
			else {
				GoogleBlock.push("<p>No events are set up.</p>");
			};

			if (GoogleGoalRecs.length > 0) {
				GoogleGoalRecs = GoogleGoalRecs.split("\n");

				GoogleBlock.push("<h4>Recommended Goals</h4>", "<ul>");
				$(GoogleGoalRecs).each( function( index ) {
					GoogleBlock.push("<li>" + GoogleGoalRecs[index] + "</li>");
				});
				GoogleBlock.push("</ul>");
			};
			GoogleBlock.push("<hr>");

			// FILTERS
			GoogleBlock.push("<h4>Current Filters</h4>");
				if (GoogleFilters == "yes" & GoogleFilterDescription.length > 0) {
					GoogleFilterDescription = GoogleFilterDescription.split("\n");

					GoogleBlock.push("<ul>");
					$(GoogleFilterDescription).each( function( index ) {
						GoogleBlock.push("<li>" + GoogleFilterDescription[index] + "</li>");
					});
					GoogleBlock.push("</ul>");
				}
				else {
					GoogleBlock.push("<p>No filters are set up.</p>");
				};
			if (GoogleFilterRecs.length > 0) {
				GoogleFilterRecs = GoogleFilterRecs.split("\n");
				var list = [];

				GoogleBlock.push("<h4>Recommended Filters</h4>", "<ul>");
				$(GoogleFilterRecs).each( function( index ) {
					GoogleBlock.push("<li>" + GoogleFilterRecs[index] + "</li>");
				});
				GoogleBlock.push("</ul>");
			};
			GoogleBlock.push("<hr>");

			// EVENTS
			GoogleBlock.push("<h4>Current Events</h4>");
			if (GoogleEvents == "yes" & GoogleEventDescription.length > 0) {
				GoogleEventDescription = GoogleEventDescription.split("\n");

				GoogleBlock.push("<ul>");
				$(GoogleEventDescription).each( function( index ) {
					GoogleBlock.push("<li>" + GoogleEventDescription[index] + "</li>");
				});
				GoogleBlock.push("</ul>");
			}
			else {
				GoogleBlock.push("<p>No events are set up.</p>");
			};
			if (GoogleEventRecs.length > 0) {
				GoogleEventRecs = GoogleEventRecs.split("\n");

				GoogleBlock.push("<h4>Recommended Events</h4>", "<ul>")
				$(GoogleEventRecs).each( function( index ) {
					GoogleBlock.push("<li>" + GoogleEventRecs[index] + "</li>");
				});
				GoogleBlock.push("</ul>");
			};	
		}

		else {
			GoogleBlock.push("<p>We don't have access to the Google Analytics account. We need to have access in order to be able to analyze its structure.</p>");
		};
		GoogleBlock.push("</blockquote>");
		block.push(GoogleBlock);
	};
	if (trackingType == "Adobe Analytics" | trackingType == "Google Analytics and Adobe Analytics") {
		AdobeBlock.push("<blockquote>");
		if (hasAdobeaccess == "yes") {	
			// GOALS
			AdobeBlock.push("<h4>Current Goals</h4>");
			if (goals == "yes" & AdobeGoalDescription.length > 0) {
				AdobeGoalDescription = AdobeGoalDescription.split("\n");

				AdobeBlock.push("<ul>");
				$(AdobeGoalDescription).each( function( index ) {
					AdobeBlock.push("<li>" + AdobeGoalDescription[index] + "</li>");
				});
				AdobeBlock.push("</ul>");
			}
			else {
				AdobeBlock.push("<p>No events are set up.</p>");
			};

			if (AdobeGoalRecs.length > 0) {
				AdobeGoalRecs = AdobeGoalRecs.split("\n");

				AdobeBlock.push("<h4>Recommended Goals</h4>", "<ul>");
				$(AdobeGoalRecs).each( function( index ) {
					AdobeBlock.push("<li>" + AdobeGoalRecs[index] + "</li>");
				});
				AdobeBlock.push("</ul>");
			};
			AdobeBlock.push("<hr>");

			// FILTERS
			AdobeBlock.push("<h4>Current Filters</h4>");
				if (AdobeFilters == "yes" & AdobeFilterDescription.length > 0) {
					AdobeFilterDescription = AdobeFilterDescription.split("\n");

					AdobeBlock.push("<ul>");
					$(AdobeFilterDescription).each( function( index ) {
						AdobeBlock.push("<li>" + AdobeFilterDescription[index] + "</li>");
					});
					AdobeBlock.push("</ul>");
				}
				else {
					AdobeBlock.push("<p>No filters are set up.</p>");
				};
			if (AdobeFilterRecs.length > 0) {
				AdobeFilterRecs = AdobeFilterRecs.split("\n");
				var list = [];

				AdobeBlock.push("<h4>Recommended Filters</h4>", "<ul>");
				$(AdobeFilterRecs).each( function( index ) {
					AdobeBlock.push("<li>" + AdobeFilterRecs[index] + "</li>");
				});
				AdobeBlock.push("</ul>");
			};
			AdobeBlock.push("<hr>");

			// EVENTS
			AdobeBlock.push("<h4>Current Events</h4>");
			if (AdobeEvents == "yes" & AdobeEventDescription.length > 0) {
				AdobeEventDescription = AdobeEventDescription.split("\n");

				AdobeBlock.push("<ul>");
				$(AdobeEventDescription).each( function( index ) {
					AdobeBlock.push("<li>" + AdobeEventDescription[index] + "</li>");
				});
				AdobeBlock.push("</ul>");
			}
			else {
				AdobeBlock.push("<p>No events are set up.</p>");
			};
			if (AdobeEventRecs.length > 0) {
				AdobeEventRecs = AdobeEventRecs.split("\n");

				AdobeBlock.push("<h4>Recommended Events</h4>", "<ul>")
				$(AdobeEventRecs).each( function( index ) {
					AdobeBlock.push("<li>" + AdobeEventRecs[index] + "</li>");
				});
				AdobeBlock.push("</ul>");
			};	
		}

		else {
			AdobeBlock.push("<p>We don't have access to the Adobe Analytics account. We need to have access in order to be able to analyze its structure.</p>");
		};
		AdobeBlock.push("</blockquote>");
		block.push(AdobeBlock);
	};
	

	// STATUS CODES
	var statuses = []
	if (status301>0 | status302>0 | status404>0 | status500>0) {
		statuses.push("<h4>Status Codes</h4><ul>");
	
		if (status301>0) {
			if (status301 == 1) {
				statuses.push("<li>1 page had 301 as its status code. This means that there is 1 page that has been assigned a new permanent URL. The browser tries to load the page again with an alternate URL. This slashes the tracking code, which means that Google Analytics is no longer able to track the session.</li>");
			}
			else {
				statuses.push("<li>" + status301 + " pages had 301 as their status code. This means that there are " + status301 + " pages that have been moved to a new permanent URL. The browser tries to load the page again with an alternate URL. This slashes the tracking code, which means that Google Analytics is no longer able to track the session.</li>");
			};
		};
		if (status302>0) {
			if (status302 == 1) {
				statuses.push("<li>1 page had 302 as its status code. This means that there is 1 page with a temporary page redirect. This slashes the tracking code, which means that Google Analytics loses session tracking.</li>");
			}
			else{
				statuses.push("<li>" + status302 + " pages had 302 as their status code. This means that there are " + status302 + " pages with temporary page redirects. This slashes the tracking code, which means that Google Analytics loses session tracking.</li>");
			};
		};
		if (status404>0) {
			if (status404 == 1) {
				statuses.push("<li>1 page had 404 as its status code. This means that there is 1 page that was not found. This slashes the tracking code. Plus, it is not good to have nonexistent pages in terms of provided good visitor experience.</li>");
			}
			else {
				statuses.push("<li>" + status404 + " pages had 404 as their status code. This means that there are " + status404 + "  pages that were not found. This slashes the tracking code. Plus, it is not good to have nonexistent pages in terms of provided good visitor experience.</li>");
			};
		};
		if (status500>0) {
			if (status500 == 1) {
				statuses.push("<li>1 page had 500 as its status code. This means that there is 1 page that caused an internal server error.</li>");
			}
			else {
				statuses.push("<li>" + status500 + " pages had 500 as their status code. This means that there are " + status500 + " pages that caused internal server errors.</li>");
			};
		};
		
		statuses.push("</ul>")
	};
	
	
	$('#output').append(GoogleBlock.join(''), AdobeBlock.join(''), statuses.join(''));
};