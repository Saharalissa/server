const express = require("express");
const bodyParser = require("body-parser");
// const dotenv = require('dotenv');
const app = express();
const db = require("./app/models/db");
// dotenv.config();
// const cookieParser = require("cookie-parser");
// const session = require("express-session");
// app.use(session({
//   key: "userId",
//   secret: "subscribe",
//   resave: false,
//   saveUninitialized: false,
//   cookie:{
//     expires: 60 * 60 * 24,
//   },
// })
// );
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//===================================
//importing auth route
// const authRoute = require("./app/routes/auth.routes");
//===================================
// simple route
app.get("/", (req, res) => {
  res.json({ message: "welcome to our deployed app." });
});

require("./app/routes/user.routes.js")(app);
//===================================
//Route middleware
// app.use('/api/user', authRoute);
//==================================

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
app.post("/SignUp1", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    MyDataBase.query(
      "INSERT INTO users (email, password) VALUES (?,?)",
      [email, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});