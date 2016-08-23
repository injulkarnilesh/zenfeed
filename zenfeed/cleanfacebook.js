function FacebookCleaner() {
	this.clean = function() {
		var url = $(location). attr("href");
		console.log("Using jQuery", url);
	}
}