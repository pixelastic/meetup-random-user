var _ = require('lodash');
var request = require('request');
var cheerio = require('cheerio');

module.exports = function(context, mainReq, mainRes) {
  mainRes.writeHead(200, { 'Content-Type': 'text/json' });

  var url = context.data.url;
  if (!url) {
    mainRes(JSON.stringify({"error": "No url specified"}));
    return false;
  }
  
  request.get(url, function(_error, subRes, body) {
    var $ = cheerio.load(body);
    var attendees = $('#rsvp-list li');
    var max = attendees.length;
    var pick = $(_.sample(attendees));
    var record = {
      id: pick.attr('data-memberid'),
      url: pick.find('a.mem-photo-small').attr('href'),
      picture: pick.find('a.mem-photo-small').attr('data-src'),
      name: pick.find('.member-name a').text()
    }
    mainRes.end(JSON.stringify(record));
  })

}


