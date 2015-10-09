var $submitButton = $('#submitButton');
	$submitButton.on('click', function() {
		console.log('Submit');
		var return_to = getQueryParam('return_to', 'pebblejs://close#');
		document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
});

function getAndStoreConfigData() {
	var $backgroundColorPicker = $('#backgroundColorPicker');
	var $seconds-toggle = $('#secconds-toggle');
	var $date-toggle = $('#date-toggle');

	var options = {
		backgroundColor: $backgroundColorPicker.val(),
		seconds-enabled: $seconds-toggle[0].checked
		date-enabled: $date-toggle[0].checked
	};

	localStorage.backgroundColor = options.backgroundColor;
	localStorage.seconds-enabled = options.seconds-enabled;
	localStorage.date-enabled = options.date-enabled;

	console.log('Got optionsL ' + JSON.stringify(options));
	return options;






function getQueryParam(variable, defaultValue) {
	var query = location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length: i++) {
		var pair = vars[i].split('=');
		if (pair[0] === variable){
			return decodeURIComponent(pair[1});
		}
	}
	return defaultValue || false;
}
