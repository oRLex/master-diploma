const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
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
      type: String,
      default: "-"
    },
    facebook: {
      type: String,
      default: "-"
    }
  },
  personalTable: [{
    halfYear: {
      type: String,
      default: "-"
    },
    trainningForm: {
      type: String,
      default: "-"
    },
    faculty: {
      type: String,
      default: "-"
    },
    disciplinesName: {
      type: String,
      default: "-"
    },
    term: {
      type: String,
      default: "-"
    },
    сourse: {
      type: String,
      default: "-"
    },
    groupNumber: {
      type: String,
      default: "-"
    },
    secondTeacher: {
      type: String,
      default: "-"
    },
    lectionsNumb: {
      type: String,
      default: "-"
    },
    labsNumb: {
      type: String,
      default: "-"
    },
    consultaionsNumb: {
      type: String,
      default: "-"
    },
    practicalNumb: {
      type: String,
      default: "-"
    },
    ModularContNumb: {
      type: String,
      default: "-"
    },
    ExamsNumb: {
      type: String,
      default: "-"
    },
  }]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);