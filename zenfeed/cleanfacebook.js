function FacebookCleaner() {

	var feed_att = 'data-testid';
	var feed_att_val = 'fbfeed_story';
	var feedPostSelector = "div[" + feed_att + "='" + feed_att_val + "']";

	var words_dont_care_about = [ 'liked', 'likes', 'commented', 'like', 'reacted' ];
	var annonyingFeedSelector = words_dont_care_about.reduce(function(selector, word, index) {
		if(index) {
			selector = selector + ', '
		}
		selector = selector + 'h5:contains("'+ word +'")';
		return selector;
	}, '');

	this.clean = function() {
		var cleanedFeedCount = 0;
		var feedPosts = jQuery(feedPostSelector);
		
		feedPosts.each(function(index, element) {
			var annoyingFeedSelectorFound = $(this).find(annonyingFeedSelector);
			if(annoyingFeedSelectorFound.length) {
				$(this).css('border', 'solid 1px red');
				$(this).remove();
				cleanedFeedCount++;
			}
		});

		console.log('Number of posts cleaned by ZenFeed', cleanedFeedCount);	
	}
}

