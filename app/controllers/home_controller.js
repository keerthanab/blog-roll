action('indexPage', function () {
	
	console.log("Hey I am in controller");
	render('indexPage', {title: 'My Blog'} );

});