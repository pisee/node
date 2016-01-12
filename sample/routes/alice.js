/*
 * GET users listing.
 */

exports.list = function(req, res) {
//	var nano = require('nano')('http://localhost:5984');
	var couchdb = require('../lib/couchdb');

	// clean up the database we created previously
	couchdb.db.destroy('alice', function() {
		// create a new database
		couchdb.db.create('alice', function() {
			// specify the database we are going to use
			var alice = couchdb.use('alice');
			// and insert a document in it
			alice.insert({
				crazy : true
			}, 'rabbit5', function(err, body, header) {
				if (err) {
					console.log('[alice.insert] ', err.message);
					return;
				}
				console.log('you have inserted the rabbit.')
				console.log(body);
			});
		});
	});
	res.send("create!");
};