function FacebookCleaner() {

	var feed_att = 'data-testid';
	var feed_att_val = 'fbfeed_story';
	var feedPostSelector = "div[" + feed_att + "='" + feed_att_val + "']";

	var wordsDontCareAbout = [ 'liked', 'likes', 'commented', 'like', 'reacted' ];
	var annonyingFeedSelector = wordsDontCareAbout.reduce(function(selector, word, index) {
		if(index) {
			selector = selector + ', '
		}
		selector = selector + 'h5:contains("'+ word +'")';
		return selector;
	}, '');
	var suggestedPost = 'Suggested Post';
	var suggestedPostSelector = 'span:contains("' + suggestedPost + '")';

	var selectorsForUnZenFeeds = [annonyingFeedSelector, suggestedPostSelector];

	var selectorToRemoveFeeds = selectorsForUnZenFeeds.join(', ');

	this.clean = function() {
		var cleanedFeedCount = 0;
		var feedPosts = jQuery(feedPostSelector);
		
		feedPosts.each(function(index, element) {
			var unZenFeedSelectorsFound = $(this).find(selectorToRemoveFeeds);
			if(unZenFeedSelectorsFound.length) {
				$(this).remove();
				cleanedFeedCount++;
			}
		});

		console.log('Number of posts cleaned by ZenFeed', cleanedFeedCount);	
	}
}

