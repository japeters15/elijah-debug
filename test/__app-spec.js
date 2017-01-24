/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-console: ["error", { allow: ["log", "error"] }] */
//
//
// IMPORT CHAI FOR ASSERTION LANGUAGE
const expect = require('chai').expect;
// DEVELOPMENT STATE MODULE
const log = require('../index');


// MAIN TEST WRAPPER
describe('Master Application Tests', () => {

  it('Should return true for the debug module', () => {

    expect(log.debug(true)).to.equal(true);

  });

});
