# meetup-random-user

This website lets you pick a random attendee in any meetup. Useful for
organizers that wants to give goodies to a random attendee.

Paste the url of the event in the field and submit the form. One of the random
users will be displayed.

![Screecast of the random selector][1]

## How it works

When you submit the form, a request is made to a custom server-side script
(hosted on webtask.io). This script will receive the meetup.com url, download
it, parse its HTML, and return a JSON object of a random attendee.

The initial webpage will then display the results.

## What is Webtask.io?

[Webtask.io][2] is an awesome service provided by the equally awesome people at
[Auth0][3]. It lets you upload server-side JavaScript snippets to their hosted
platform. You can then request those snippets through a custom url, and have
your code executed server-side.

I'm using it here to do the download + parsing of the meetup.com page, as
I cannot do it in the browser directly, because of CORS issues.

The script is available in `./webtask/meetup-random-user.js`, and accessible at
`https://wt-a2f9d5672798ac7ef42b871652a58fb0-0.run.webtask.io/meetup-random-user`.
You won't have the rights to edit it as it was created under my account, but
feel free to push your own copy of it to your own account if you'd like to add
any changes to it.


[1]: ./screencast.gif
[2]: https://webtask.io/
[3]: https://auth0.com/
