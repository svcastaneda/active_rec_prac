$(document).ready(function() {

	$(".gaStuff, #gaAccountInfo, .adobeStuff, #hasAdobeAccess, .tagManager, .GTM, .DTM, #enhancedEcommerce, #benefits, #hasTnO, #hasVOC, #isVOCpossible, #callTrackingBenefits, #hasGoogleAccess, [name^=GoogleHasGoals], [name^=GoogleHasFilters], [name^=GoogleHasEvents], [name^=AdobeHasGoals], [name^=AdobeHasFilters], [name^=AdobeHasEvents]").hide();


	$("[name^=trackingType]").change(function() {
		if (this.id == "noTrackingTypes" | this.id == "otherTrackingType") {
			$(".gaStuff, .adobeStuff, .tagManager").fadeOut("slow");
		}
		else if (this.id == "otherTrackingType") {
			$(".tagManager").fadeIn("slow");
		}
		else if (this.id != "noTrackingTypes" || this.id != "otherTrackingType") {
			$(".tagManager").fadeIn("slow");

			if (this.id == "GoogleAnalytics") {
				$(".gaStuff, .GTM").fadeIn("slow");
				$(".adobeStuff, .DTM").hide("slow");
			}
			else if (this.id == "AdobeAnalytics") {
				$(".adobeStuff, .DTM").fadeIn("slow");
				$(".gaStuff, .GTM").hide("slow");
			}
			else if (this.id == "bothTrackingTypes") {
				$(".gaStuff, .adobeStuff, .GTM, .DTM").fadeIn("slow");
			};
		};
	});
	
	$("#otherTrackingTypeInput").focus(function() {
		$("[name^=trackingType]:focus").val("other");
		$("#otherTrackingType").attr('checked',true);
		$(".gaStuff, .adobeStuff").fadeOut("slow");
	});


	$("[name^=ecommerce]").change(function() {
		if (this.value == "true") {
			$("#enhancedEcommerce").fadeIn("slow");
		}
		else {
			$("#enhancedEcommerce").fadeOut("slow");
		};
	});

	$("[name^=efforts]").change(function() {
		if (this.value == "TnO") {
			$("#hasTnO").fadeIn("slow");
			$("#hasVOC").hide("slow");
			$("#isVOCpossible").fadeIn("slow");
		}
		else if (this.value == "VOC") {
			$("#hasVOC").fadeIn("slow");
			$("#hasTnO").hide("slow");
			$("#isVOCpossible").hide("slow");
		}
		else if (this.value == "both") {
			$("#hasTnO, #hasVOC").fadeIn("slow");
			$("#isVOCpossible").hide("slow");
		}
		else {
			$("#isVOCpossible").fadeIn("slow");
			$("#hasTnO, #hasVOC").fadeOut("slow");
		};
	});

	$("[name^=callTracking]").change(function() {
		if (this.value == "yes") {
			$("#callTrackingBenefits").fadeIn("slow");
		}
		else {
			$("#callTrackingBenefits").fadeOut("slow");
		};
	});

	$("[name^=GoogleAccess]").change(function() {
		if (this.value == "yes") {
			$("#hasGoogleAccess").fadeIn("slow");
		}
		else {
			$("#hasGoogleAccess").fadeOut("slow");
		};
	});

	$("[name^=GoogleGoals]").change(function() {
		if (this.value == "yes") {
			$("[name^=GoogleHasGoals]").fadeIn("slow");
		}
		else {
			$("[name^=GoogleHasGoals]").fadeOut("slow");
		};
	});

	$("[name^=GoogleFilters]").change(function() {
		if (this.value == "yes") {
			$("[name^=GoogleHasFilters]").fadeIn("slow");
		}
		else {
			$("[name^=GoogleHasFilters]").fadeOut("slow");
		};
	});

	$("[name^=GoogleEvents]").change(function() {
		if (this.value == "yes") {
			$("[name^=GoogleHasEvents]").fadeIn("slow");
		}
		else {
			$("[name^=GoogleHasEvents]").fadeOut("slow");
		};
	});


	$("[name^=AdobeAccess]").change(function() {
		if (this.value == "yes") {
			$("#hasAdobeAccess").fadeIn("slow");
		}
		else {
			$("#hasAdobeAccess").fadeOut("slow");
		};
	});

	$("[name^=AdobeGoals]").change(function() {
		if (this.value == "yes") {
			$("[name^=AdobeHasGoals]").fadeIn("slow");
		}
		else {
			$("[name^=AdobeHasGoals]").fadeOut("slow");
		};
	});

	$("[name^=AdobeFilters]").change(function() {
		if (this.value == "yes") {
			$("[name^=AdobeHasFilters]").fadeIn("slow");
		}
		else {
			$("[name^=AdobeHasFilters]").fadeOut("slow");
		};
	});

	$("[name^=AdobeEvents]").change(function() {
		if (this.value == "yes") {
			$("[name^=AdobeHasEvents]").fadeIn("slow");
		}
		else {
			$("[name^=AdobeHasEvents]").fadeOut("slow");
		};
	});

});