exports.routes = function (map) {

    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    // map.all(':controller/:action');
    //map.all(':controller/:action/:id');

    map.namespace('admin', function (admin) {
    	// admin.resources('users'); // this is if you choose to have another folder inside this admin folder
    	
	});

	map.get('/venkat', 'admin/posts#profile'); 
	map.root('posts#landing');  
    map.get('/post-articles','articles#posts');
};
