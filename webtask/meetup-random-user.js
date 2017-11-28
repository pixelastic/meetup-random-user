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

  if (!url.match(/\/attendees$/)) {
    url = url + (url.match(/\/$/) ? '' : '/' ) + 'attendees';
  }

  request.get(url, function(_error, subRes, body) {
    var $ = cheerio.load(body);
    var attendees = $('.attendees-list li');
    var max = attendees.length;
    var pick = $(_.sample(attendees));
    var url = pick.find('a.avatar').attr('href');
    var record = {
      id: url.match(/\/(\d+)/)[1],
      url: url,
      picture: pick.find('img.avatar-print').attr('src'),
      name: pick.find('h4').text()
    }
    mainRes.end(JSON.stringify(record));
  });
}


