var validatejs = require('validate.js');

const validationDictionary = {
  username: {
    presence: {
      allowEmpty: false,
      message: '^Name must not empty.',
    },
    length: {
      minimum: 5,
      message: '^Your name must be at least 5 characters',
    },
  },

  email: {
    presence: {
      allowEmpty: false,
      message: '^Please enter an email address',
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },

  password: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a password',
    },
    length: {
      minimum: 6,
      message: '^Your password must be at least 6 characters',
    },
  },

  phone: {
    presence: {
      allowEmpty: false,
      message: '^Phone number must not empty.',
    },
    length: {
      minimum: 5,
      message: '^Your phone must be at least 5 characters',
    },
  },
};
export default function validateInput(type, value) {
  const result = validatejs(
    {
      [type]: value,
    },
    {
      [type]: validationDictionary[type],
    },
  );

  if (result) {
    return result[type][0];
  }

  return null;
}

export const isAllValid = (formValidFileds: {}): boolean => {
  var isValid = true;
  console.log('form fields ' + JSON.stringify(formValidFileds));
  for (var name in formValidFileds) {
    if (!formValidFileds[name]) {
      isValid = formValidFileds[name];
    }
  }
  return isValid;
};
