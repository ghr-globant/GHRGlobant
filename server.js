var express = require('express'),
	app = express(),
	port = process.env.PORT || 3006,
	cron = require('node-cron'),
	fs = require('fs');

cron.schedule('* * * * *', function() {
	console.log('job exceuted At: ' + new Date());
});

app.listen(port);

console.log('Weather Cron Job Started successfully. Listening: ' + port + ' At: ' + new Date());