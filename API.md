# API Documentation

No delete API -> don't want malicious users deleting data accidentally.

`GET /api/helloworld`

returns `"Hello world"` to ensure that API is up and running

------

`GET /api/user`

returns `""` if not logged in, otherwise `"asdf"` if logged in as asdf

------

`POST /api/login`

requires two parameters, `user` and `pass`

returns `"No headers"` if post parameters not included

returns `"Unauthorized"` if user parameter does not much pass parameter in the database

returns `"Sent OK"` if user not found in database and new user pass combination is added successfully, or if user matches database password

------

`POST /api/update`

requires two parameters, `user` and `score`

returns `"Score updated"` on successful score modification. Basically this route adds the `score` parameter to a user's score in the database

------

`GET /api/highscore`

gets a user's score from the database (utilizes cookies to determine user)

------

`GET /api/scores`

returns user data sorted by highScore descending. Here's sample data returned below

```
[
   {
      "highScore":1500,
      "name":"",
      "user":"jason",
      "joined":"2020-11-24T01:12:06.282Z"
   },
   {
      "highScore":1380,
      "name":"",
      "user":"rogern",
      "joined":"2020-11-24T01:59:50.126Z"
   },
   {
      "highScore":390,
      "name":"",
      "user":"asdf",
      "joined":"2020-11-24T01:10:06.044Z"
   },
   {
      "highScore":0,
      "name":"",
      "user":"testuser",
      "joined":"2020-11-22T00:16:48.881Z"
   }
]
```