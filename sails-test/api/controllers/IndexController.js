/*---------------------
	:: Index 
	-> controller
---------------------*/
var IndexController = {

	// To trigger this action locally, visit: `http://localhost:port/index/index`
	index: function (req,res) {

		// This will render the view: /home/sadasant/code/github/escuelaweb/webrtc/sails-test/views/index/index.ejs
		res.view();

	}

};
module.exports = IndexController;