const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/social');
const validateExperienceInput = require('../../validation/load');

// Load Profile Model
const Profile = require('../../models/Profile')
// Load User Model
const User = require('../../models/User')

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({
  msg: 'Profile Works'
}));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    const errors = {};

    Profile.findOne({
        user: req.user.id
      })
      .populate('user', ['name', 'avatar'])
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private

router.post(
  '/',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    const {
      errors,
      isValid
    } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const {
      degree,
      telephone,
      email,
      facebook
    } = req.body

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.degree = req.body.degree;
    profileFields.telephone = req.body.telephone;

    // Build social object
    profileFields.social = {}
    if (email) profileFields.social.email = req.body.email
    if (facebook) profileFields.social.facebook = req.body.facebook

    Profile.findOne({
      user: req.user.id
    }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate({
          user: req.user.id
        }, {
          $set: profileFields
        }, {
          new: true
        }).then(profile => res.json(profile));
      } else {
        // Create
        new Profile(profileFields).save().then(profile => res.json(profile));
      }
    });
  }
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get('/all', (req, res) => {
  const errors = {};

  Profile.find()
    .populate('user', ['name', 'avatar'])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = 'There are no profiles';
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({
      profile: 'There are no profiles'
    }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get('/handle/:handle', (req, res) => {
  const errors = {};

  Profile.findOne({
      handle: req.params.handle
    })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
  const errors = {};

  Profile.findOne({
      user: req.params.user_id
    })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({
        profile: 'There is no profile for this user'
      })
    );
});

// @route   PUT api/profile/experience
// @desc    Create NEW PROFILE
// @access  Private

router.put('/experience',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    const personalData = req.body.personalTable
    Profile.findOne({
      user: req.body.user._id
    }).then(profile => {
      if (profile) {
        Profile.findOneAndUpdate({
          user: req.body.user._id
        }, {
          $set: {
            personalTable: personalData
          }
        }, {
          new: true
        }, (err, doc) => {
          if (err) {
            console.log("Something wrong when updating data!");
          }
          console.log("Update success")
        })
      }
    })
  }
);

// @route   POST api/profile/experience/new
// @desc    Add experience to profile
// @access  Private
router.post(
  '/experience/new',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    // const {
    //   errors,
    //   isValid
    // } = validateExperienceInput(req.body);

    // // Check Validation
    // if (!isValid) {
    //   // Return any errors with 400 status
    //   return res.status(400).json(errors);
    // }

    Profile.findOne({
      user: req.user._id
    }).then(profile => {
      const newTable = {
        halfYear: req.body.halfYear,
        trainningForm: req.body.trainningForm,
        faculty: req.body.faculty,
        disciplinesName: req.body.disciplinesName,
        term: req.body.term,
        сourse: req.body.сourse,
        groupNumber: req.body.groupNumber,
        secondTeacher: req.body.secondTeacher,
        lectionsNumb: req.body.lectionsNumb,
        labsNumb: req.body.labsNumb,
        consultaionsNumb: req.body.consultaionsNumb,
        practicalNumb: req.body.practicalNumb,
        ModularContNumb: req.body.ModularContNumb,
        ExamsNumb: req.body.ExamsNumb
      };
      // Add to exp array
      profile.personalTable.unshift(newTable);

      profile.save().then(profile => res.json(profile));
      console.log("new table created")

    });
  }
);


// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  '/',
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    Profile.findOneAndRemove({
      user: req.user.id
    }).then(() => {
      User.findOneAndRemove({
        _id: req.user.id
      }).then(() =>
        res.json({
          success: true
        })
      );
    });
  }
);


module.exports = router;