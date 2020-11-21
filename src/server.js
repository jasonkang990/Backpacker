// Mongoose pre-requisites
let {
  username, password
} = require("./secret");
let mongoose = require("mongoose");
let User = require("./models/users");

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
let router = express.Router();

// Serving backend
let clientUrl = "http://localhost:3000";
const serverPort = 5000;
const app = express();
app.use(cors({
  origin: clientUrl 
}));

// Backend routes always begin with /api
app.use("/api", router);
router.use(express.json());
app.listen(serverPort, () => {
  console.log("Server runs on port %d", serverPort);
});

// Test route /api/helloworld
router.get("/helloworld", (req, res) => {
  res.send("Hello world");
});

// Salting hashing function
let crypto = require("crypto");
function getHash(salt, plain)  {
  return crypto.pbkdf2Sync(plain, salt, 50000, 64, "sha256").toString("hex");
}

// Login route /api/login
let sanitize = require("mongo-sanitize");
router.post("/login", (req, res) => {
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
        res.send("Sent OK");
      } else {
        res.send("Unauthorized");
      }
    }
  });
});
