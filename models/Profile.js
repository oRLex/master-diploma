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
      default: "0"
    },
    trainningForm: {
      type: String,
      default: "0"
    },
    faculty: {
      type: String,
      default: "0"
    },
    disciplinesName: {
      type: String,
      default: "0"
    },
    term: {
      type: String,
      default: "0"
    },
    сourse: {
      type: String,
      default: "0"
    },
    groupNumber: {
      type: String,
      default: "0"
    },
    secondTeacher: {
      type: String,
      default: "0"
    },
    lectionsNumb: {
      type: String,
      default: "0"
    },
    labsNumb: {
      type: String,
      default: "0"
    },
    consultaionsNumb: {
      type: String,
      default: "0"
    },
    practicalNumb: {
      type: String,
      default: "0"
    },
    ModularContNumb: {
      type: String,
      default: "0"
    },
    ExamsNumb: {
      type: String,
      default: "0"
    },
  }]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);