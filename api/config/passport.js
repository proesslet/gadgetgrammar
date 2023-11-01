module.exports = function (passport, user) {
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;
  var bcrypt = require("bcryptjs");

  passport.serializeUser((user, done) => {
    console.log(user.id);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    let user = User.findAll({
      where: {
        id: id,
      },
      raw: true,
    }).then((user) => {
      done(null, user);
    });
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },
      function (req, email, password, done) {
        var User = user;
        var isValidPassword = async function (enteredPass, hash) {
          const valid = await bcrypt.compare(enteredPass, hash);
        };
        User.findOne({
          where: {
            email: email,
          },
        })
          .then(function (user) {
            if (!user) {
              return done(null, false, {
                message: "Email does not exist",
              });
            }
            if (!isValidPassword(password, user.password)) {
              return done(null, false, {
                message: "Incorrect password.",
              });
            }
            return done(null, user);
          })
          .catch(function (err) {
            console.log("Error:", err);
            return done(null, false, {
              message: "Something went wrong with your Signin man",
            });
          });
      }
    )
  );
};
