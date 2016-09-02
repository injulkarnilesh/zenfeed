function FacebookCleaner() {
	var feed_att = 'data-testid';
	var feed_att_val = 'fbfeed_story';

	this.clean = function() {
		var url = $(location). attr("href");
		jQuery("div[data-testid='fbfeed_story']").css('border', 'solid 1px red');	
		console.log("Using jQuery", url);
	}
}

