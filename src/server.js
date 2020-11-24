// Mongoose pre-requisites
let username, password, sessionSecret;
try {
  let secretModule = require("./secret");
  username = secretModule.username;
  password = secretModule.password;
  sessionSecret = secretModule.sessionSecret;
} catch (error) {
  username = process.env.username;
  password = process.env.password;
  sessionSecret = process.env.sessionSecret;
}
let mongoose = require("mongoose");
let User = require("./models/users");
var favicon = require("serve-favicon");

// Mongoose connection
let dbConn = `mongodb+srv://${username}:${password}@cluster0.af7g6.mongodb.net/<dbname>?retryWrites=true&w=majority`;
mongoose.connect(dbConn, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let check = mongoose.connection;
check.on("error", () => console.log(`Connection error. 
  Is connection string still correct? 
  Is user/pass correct?
  Is IP whitelisted?`));
check.once("open", () => console.log("Connection successful"));

// Backend/routing prereqs
let express = require("express");
let cors = require("cors");

// Serving backend
let clientUrl = process.env.clientUrl || "http://localhost:3000";
const serverPort = process.env.PORT || 5000;
const app = express();
app.use(cors({
  credentials: true,
  origin: clientUrl 
}));
var path = require('path');
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

// Cookies
app.set('trust proxy', true);
let session = require("cookie-session");
app.use(session({
  name: 'session',
  keys: [sessionSecret],
  cookie: {
    path: '/',
    secure: false
  }
}));

// Test route /api/helloworld
app.get("/api/helloworld", (req, res) => {
  res.send("Hello world");
});

// Salting hashing function
let crypto = require("crypto");
function getHash(salt, plain)  {
  return crypto.pbkdf2Sync(plain, salt, 50000, 64, "sha256").toString("hex");
}

// Get user
app.get("/api/user", (req, res) => {
  res.send(req.session.user || "");
});

// Login route /api/login
let sanitize = require("mongo-sanitize");
app.post("/api/login", (req, res) => {
  let userParam = sanitize(req.body.user);
  let passParam = sanitize(req.body.pass);

  if (!userParam.length || !passParam.length) {
    res.send("No headers");
  }

  User.findOne({
    user: userParam
  }, function (err, user) {
    if (err) {
      res.send(err);
    } else if (user) {
      // Check whether salted password is the same as user's in the database
      if (getHash(user.salt, passParam) !== user.pass) {
        res.send("Unauthorized");
      } else {
        req.session.user = userParam;
        req.session.save();
        res.send("Sent OK");
      }
    } else {
      let salt = crypto.randomBytes(20).toString("hex");
      let err = "";

      // Create a new user
      new User({
        user: userParam,
        salt: salt,
        pass: getHash(salt, passParam)
      }).save(
        err => {
          if (err) {
            err = err;
          }
        }
      );

      if (!err.length) {
        req.session.user = userParam;
        req.session.save();
        res.send("Sent OK");
      } else {
        res.send("Unauthorized");
      }
    }
  });
});

<<<<<<< HEAD


































// Update score route /api/update
router.post("/update", (req, res) => {
  let userParam = sanitize(req.body.user);
  let scoreParam = sanitize(req.body.score);
  const filter = {user: userParam};
  const update = {highScore: scoreParam};
  User.findOneAndUpdate(filter, update);
  req.session.save();
  res.send("Score updated");
});

// Get usernames and scores route /api/scores
router.get("/scores", (req, res) => {
  User.find({}).sort('-highScore').exec(function(err, docs) { 
    if (err) {
      err = err;
      console.log(err);
    }
    docs = docs.map(p => p.toObject());
    res.send(docs);
  });
=======
// Churn react app into static site, and push it
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
  });
}

app.listen(serverPort, () => {
  console.log("Server runs on port %d", serverPort);
>>>>>>> main
});
