const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const mongoose = require('mongoose');
const User = require('./model/User').user;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require('./keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);

module.exports = passport.use(
  new GoogleStrategy(
    {
      clientID: key.GOOGLE_CLIENT_ID,
      clientSecret: key.GOOGLE_CLIENT_SECRET,
      callbackURL: key.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
      User.find({ googleId: profile.email }, function(err, user) {
        if (err) return cb(err);
        if (!user) {
          const GoogleUser = new User({
            username: profile.displayName,
            email: profile.emails[0].value,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            img: profile.photos[0].value
          });
          GoogleUser.save(function(err) {
            if (err) return cb(err);
            return cb(err, GoogleUser);
          });
        } else {
          return cb(err, user);
        }
      });
    }
  )
);
