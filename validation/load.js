const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.halfYear = !isEmpty(data.halfYear) ? data.halfYear : '';
  data.trainningForm = !isEmpty(data.trainningForm) ? data.trainningForm : '';
  data.faculty = !isEmpty(data.faculty) ? data.faculty : '';
  data.disciplinesName = !isEmpty(data.disciplinesName) ? data.disciplinesName : '';
  data.term = !isEmpty(data.term) ? data.term : '';
  data.сourse = !isEmpty(data.сourse) ? data.сourse : '';
  data.groupNumber = !isEmpty(data.groupNumber) ? data.groupNumber : '';
  data.secondTeacher = !isEmpty(data.secondTeacher) ? data.secondTeacher : '';
  data.lectionsNumb = !isEmpty(data.faculty) ? data.lectionsNumb : '';
  data.labsNumb = !isEmpty(data.labsNumb) ? data.labsNumb : '';
  data.practicalNumb = !isEmpty(data.practicalNumb) ? data.practicalNumb : '';
  data.ModularContNumb = !isEmpty(data.ModularContNumb) ? data.ModularContNumb : '';
  data.ExamsNumb = !isEmpty(data.ExamsNumb) ? data.ExamsNumb : '';

  if (Validator.isEmpty(data.halfYear)) {
    errors.halfYear = 'Job title field is required';
  }

  if (Validator.isEmpty(data.trainningForm)) {
    errors.trainningForm = 'trainningForm field is required';
  }

  if (Validator.isEmpty(data.faculty)) {
    errors.faculty = 'faculty date field is required';
  }

  if (Validator.isEmpty(data.disciplinesName)) {
    errors.disciplinesName = 'disciplinesName date field is required';
  }

  if (Validator.isEmpty(data.term)) {
    errors.term = 'term date field is required';
  }

  if (Validator.isEmpty(data.сourse)) {
    errors.сourse = 'сourse date field is required';
  }

  if (Validator.isEmpty(data.groupNumber)) {
    errors.groupNumber = 'groupNumber date field is required';
  }

  if (Validator.isEmpty(data.secondTeacher)) {
    errors.secondTeacher = 'secondTeacher date field is required';
  }

  if (Validator.isEmpty(data.lectionsNumb)) {
    errors.lectionsNumb = 'lectionsNumb date field is required';
  }

  if (Validator.isEmpty(data.labsNumb)) {
    errors.labsNumb = 'labsNumb date field is required';
  }

  if (Validator.isEmpty(data.ModularContNumb)) {
    errors.ModularContNumb = 'ModularContNumb date field is required';
  }
  if (Validator.isEmpty(data.practicalNumb)) {
    errors.practicalNumb = 'practicalNumb date field is required';
  }
  if (Validator.isEmpty(data.ExamsNumb)) {
    errors.ExamsNumb = 'ExamsNumb date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};