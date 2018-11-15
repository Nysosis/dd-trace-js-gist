require('./datadog-apm');
const axios = require('axios');

process.on('unhandledRejection', (error) => console.error(error));

(async () => {
	const data = await axios.get('https://httpstat.us/200').then(({ data }) => data)

	console.log(data);
	console.log('done');
})();
