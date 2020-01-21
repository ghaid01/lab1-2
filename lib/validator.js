'use strict';

// const validator = {};

// validator.all

// const personRules = {
//     fields: {
//       id: {type: 'string', required: true},
//       name: {type: 'string', required: true},
//       age: {type: 'number', required: true},
//       children: { type: 'array', valueType: 'string' },
//     },
//   };

const personRules = {};
personRules.idInput = function(input){
    if (!Array.isArray(input)) { return false }
    return input.every(value => typeof value === 'string');
}


personRules.nameInput = function(input){
    if (!Array.isArray(input)) { return false }
    return input.every(value => typeof value === 'string');
}

personRules.ageInput = function(input){
    if (!Array.isArray(input)) { return false }
    return input.every(value => typeof value === 'number');
}


personRules.childrenInput = function(input){
    if (!Array.isArray(input)) { return true }
    return input.every(value => typeof value === 'array');
}

module.exports = validator;