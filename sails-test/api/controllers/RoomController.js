/*---------------------
	:: Room 
	-> controller
---------------------*/
var RoomController = {

	// To trigger this action locally, visit: `http://localhost:port/room/sala`
	sala: function (req,res) {

		// This will render the view: /home/sadasant/code/github/escuelaweb/webrtc/sails-test/views/room/sala.ejs
		res.view();

	}

};
module.exports = RoomController;