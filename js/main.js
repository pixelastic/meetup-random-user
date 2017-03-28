$('#form').on('submit', pickRandomAttendee);
function pickRandomAttendee(event) {
  event.preventDefault();
  var url = $('#url').val();

  if (url == '') {
    return false;
  }
  var webtask = 'https://wt-a2f9d5672798ac7ef42b871652a58fb0-0.run.webtask.io/meetup-random-user'
  var result = $('#result');
  var loader = $('#loader');

  loader.show();
  result.hide();

  $.get(webtask, { url: url }, function(data) {
    loader.hide();
    result.show();
    var img = result.find('img');
    var name = result.find('a');

    img.attr('src', data.picture);
    name.attr('href', data.url).text(data.name);
  });

}
