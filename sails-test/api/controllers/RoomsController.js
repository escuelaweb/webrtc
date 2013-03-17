/*---------------------
	:: Rooms 
	-> controller
---------------------*/
var RoomsController = {

	// To trigger this action locally, visit: `http://localhost:port/rooms/index`
	index: function (req,res) {

		// This will render the view: /home/sadasant/code/github/escuelaweb/webrtc/sails-test/views/rooms/index.ejs
		res.view();

	},

	// To trigger this action locally, visit: `http://localhost:port/rooms/show`
	show: function (req,res) {

		// This will render the view: /home/sadasant/code/github/escuelaweb/webrtc/sails-test/views/rooms/show.ejs
		res.view();

	}

};
module.exports = RoomsController;