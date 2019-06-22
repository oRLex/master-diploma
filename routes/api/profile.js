const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const {check, validationResult} = require('express-validator/check')

const Profile = require('../../models/Profile')
const User = require('../../models/User')

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({user: req.user.id}).populate('user',
     ['name', 'avatar']);

    if(!profile){
      return res.status(400).json({msg: 'There is no profile to this user'})
    }

    res.json(profile)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

// @route   POST api/profile
// @desc    Create or update user profile
// @access  Private

router.post('/', 
  [
    auth,
    [
      check('degree', 'degree is reuired')
      .not()
      .isEmpty(),
      check('telephone', 'telephone is reuired')
      .not()
      .isEmpty()
    ] 
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()})
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
    if(degree) profileFields.degree = degree;
    if(telephone) profileFields.telephone = telephone;

    // Build social object
    profileFields.social = {}
    if (email) profileFields.social.email = email
    if (facebook) profileFields.social.facebook = facebook
    
    // Build personalTable object
    // profileFields.persontalTable = {}
    // if (halfYear) profileFields.persontalTable.halfYear = halfYear
    // if (trainningForm) profileFields.persontalTable.trainningForm = trainningForm
    // if (faculty) profileFields.persontalTable.faculty = faculty
    // if (disciplinesName) profileFields.persontalTable.disciplinesName = disciplinesName
    // if (term) profileFields.persontalTable.term = term
    // if (сourse) profileFields.persontalTable.сourse = сourse
    // if (groupNumber) profileFields.persontalTable.groupNumber = groupNumber
    // if (secondTeacher) profileFields.persontalTable.secondTeacher = secondTeacher
    // if (lectionsNumb) profileFields.persontalTable.lectionsNumb = lectionsNumb
    // if (labsNumb) profileFields.persontalTable.labsNumb = labsNumb
    // if (consultaionsNumb) profileFields.persontalTable.consultaionsNumb = consultaionsNumb
    // if (practicalNumb) profileFields.persontalTable.practicalNumb = practicalNumb
    // if (ModularContNumb) profileFields.persontalTable.ModularContNumb = ModularContNumb
    // if (ExamsNumb) profileFields.persontalTable.ExamsNumb = ExamsNumb

    try {
      let profile = await Profile.findOne({user: req.user.id});

      if (profile) {
        // Update
        profile = await Profile.findByIdAndUpdate({user: req.user.id}, {$set: profileFields}, {new: true})
      return res.json(profile)
      };

      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  } 
);


// @route   GET api/profile
// @desc    Get all profiles
// @access  Public

router.get('/', async (req, res) =>{
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar'])
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
})

// @route   GET api/profile/user/:user_id
// @desc    Get Profile by user ID
// @access  Public

router.get('/user/:user_id', async (req, res) =>{
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id})
      .populate('user', ['name', 'avatar']);

    if(!profile) return res.status(400).json({msg: 'There is no profile'});

    res.json(profile);
  } catch (err) {
    if (err.kind == 'ObjectId') {
      return res.status(400).json({msg: 'Profile not found'});
    }
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

// @route   PUT api/profile/
// @desc    Add personalTable
// @access  Private

router.put('/', [
  auth,
  [
    check('halfYear', 'halfYear is reuired')
    .not()
    .isEmpty(),
    check('faculty', 'faculty is reuired')
    .not()
    .isEmpty()
  ] 
], async (req, res)=> {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})   
  }

  const {
    halfYear,
    trainningForm,
    faculty,
    disciplinesName,
    term,
    сourse,
    groupNumber,
    secondTeacher,
    lectionsNumb,
    labsNumb,
    consultaionsNumb,
    practicalNumb,
    ModularContNumb,
    ExamsNumb
  } = req.body;

  const newTable = {
    halfYear,
    trainningForm,
    faculty,
    disciplinesName,
    term,
    сourse,
    groupNumber,
    secondTeacher,
    lectionsNumb,
    labsNumb,
    consultaionsNumb,
    practicalNumb,
    ModularContNumb,
    ExamsNumb
  }

  // MongoDB 
  try {
    const profile = await Profile.findOne({user: req.user.id});
    
    profile.personalTable.unshift(newTable);

    await profile.save()

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error')
  }
});

module.exports = router;