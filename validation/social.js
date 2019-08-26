const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.facebook = !isEmpty(data.facebook) ? data.facebook : '';
  if (!isEmpty(data.email)) {
    if (!Validator.isURL(data.email)) {
      errors.email = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};