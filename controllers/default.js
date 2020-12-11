exports.install = function() {
	ROUTE('GET /');
	ROUTE('SOCKET /', socket);
};

function socket() {

	var self = this;
	var messages = 0;
	var interval;

	self.autodestroy(function() {
		clearInterval(interval);
	});

	self.on('open', function(client) {
		// do something
	});

	self.on('close', function(client) {
		// do something
	});

	self.on('message', function(client, message) {
		console.log('Message:', message);
	});

	// Sends date to all clients
	interval = setInterval(function() {
		messages++;
		self.send({ date: new Date(), messages: messages });
	}, 1000);

}