const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  degree: {
    type: String,
    require: true
  },
  telephone: {
    type: String,
    require: true
  },
  social: {
    email: {
      type: String
    },
    facebook: {
      type: String
    }
  },
  personalTable: [{
    halfYear: {
      type: String,

    },
    trainningForm: {
      type: String,
    },
    faculty: {
      type: String,
    },
    disciplinesName: {
      type: String,
    },
    term: {
      type: String,
    },
    сourse: {
      type: String,
    },
    groupNumber: {
      type: String,
    },
    secondTeacher: {
      type: String,
      default: "-"
    },
    lectionsNumb: {
      type: String
    },
    labsNumb: {
      type: String
    },
    consultaionsNumb: {
      type: String
    },
    practicalNumb: {
      type: String
    },
    ModularContNumb: {
      type: String
    },
    ExamsNumb: {
      type: String
    },
  }]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);