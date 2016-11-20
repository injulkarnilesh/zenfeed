
var interval = undefined;

function startCleaningFacebookFeed() {
	var facebookCleaner = new FacebookCleaner();
	interval = setInterval(facebookCleaner.clean, 2500);
}

function stopCleaningFacebookFeed() {
	if(interval) {
		clearInterval(interval);
	}
}

chrome.storage.local.get('zenFeedEnabled', function(storage) {
	var isEnabled = storage.zenFeedEnabled;
	console.log('ZenFeed is enabled ?', isEnabled);

	if (isEnabled) {
		startCleaningFacebookFeed();
	};
});


chrome.storage.onChanged.addListener(function(changes, namespace) {
	var statusChanged = changes['zenFeedEnabled'];
	if(statusChanged.newValue) {
		startCleaningFacebookFeed();
	} else {
		stopCleaningFacebookFeed();
	}
});
