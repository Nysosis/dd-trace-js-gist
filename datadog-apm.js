const Datadog = require('dd-trace');

const tracer = Datadog.init({
	debug: false,
	enabled: false,
	plugins: false,
	service: 'my-service'
}).use('http');

module.exports = {
	Tracer() {
		return tracer;
	}
}
