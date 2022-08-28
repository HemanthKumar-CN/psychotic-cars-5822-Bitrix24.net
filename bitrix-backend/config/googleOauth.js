require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://stormy-caverns-19491.herokuapp.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    // console.log(profile)
    const user_g_profile= {username: profile._json.given_name, email: profile._json.email}
    // console.log(user_g_profile)
    // res.send(user_g_profile)
    return cb(null, user_g_profile)
  }
));

passport.serializeUser(function (user,done) {
  done(null,user);
})

passport.deserializeUser(function (user,done) {
  done(null,user);
})



module.exports = passport;