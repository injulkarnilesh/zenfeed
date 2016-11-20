
function setPopUpEnabledStatus(isEnabled) {
	document.getElementById("zenFeedEnabled").checked = isEnabled;
}

function saveZenFeedEnabledStatus(isEnabled) {
	chrome.storage.local.set({'zenFeedEnabled' : isEnabled}, function() {
 	 	console.log('ZenFeed enabled status saved to', isEnabled);
 	 });
}

chrome.storage.local.get('zenFeedEnabled', function(storage) {
	var isEnabled = storage.zenFeedEnabled;
	console.log("ZenFeed popup read status as = ", isEnabled);
	
	if (isEnabled === undefined) {
		isEnabled = true;
		saveZenFeedEnabledStatus(true);
	};
	
	setPopUpEnabledStatus(isEnabled);
});

function toggleZenFeed() {
	var isEnabled = document.getElementById("zenFeedEnabled").checked;
	saveZenFeedEnabledStatus(isEnabled);
}

document.getElementById('zenFeedEnabled').addEventListener('click', toggleZenFeed);

