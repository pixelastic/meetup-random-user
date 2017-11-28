const pickOne = require('./webtask/meetup-random-user');

function mainRes(){}

mainRes.prototype.writeHead = () => {}
mainRes.prototype.end = (data) => console.log(data)

pickOne({ data: { url: 'https://www.meetup.com/fr-FR/Paris-js/events/244179664/' }}, undefined, new mainRes())
