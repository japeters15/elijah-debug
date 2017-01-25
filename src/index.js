/* eslint linebreak-style: ["error", "windows"] */
/* eslint no-console: ["error", { allow: ["log", "error"] }] */
/* eslint no-undef: "error"*/
/* eslint-env es6*/
// --------|
//  LOG JS |
// --------|

/* Versioning Function*/
function _bump(currentSemVersion, typeofIncrement){

  //Major [0]
  //Minor [1]
  //Patch [2]
  const aryVersions = currentSemVersion.split('.');

  for(let versionIndex in aryVersions){
    aryVersions[versionIndex] = parseInt(aryVersions[versionIndex]);
  }

  if(typesofIncrement === 'patch'){
    aryVersions[2] += 1; //patch
  } else if(typesofIncrement === 'minor'){
    aryVersions[2] = 0; //patch
    aryVersions[1] += 1; //minor
  } else if(typesofIncrement === 'major'){
    aryVersions[2] = 0; //patch
    aryVersions[1] = 0; //minor
    aryVersions[0] += 1; //minor
  }

  return aryVersions.join('.');
}

/*
FILE DESCRIPTION: This file will catch and handle the logging
and creation of our log files for the application while debug
mode is activated.
*/


/* -*- IMPORT MODULES -*- */

// USING THE FILE SYSTEM MODULE FOR CREATING FILES
const fs = require('fs');

// CACHE LOG OBJECT FOR LATER EXPORTING
const log = {};

// CONFIGURE LOGGING OBJECT
log.debug = (debugState) => {
  // CHECK PROCCESS VARAIBLE
  if (debugState) {
    // RESER CONSOLE.LOG FUNCTION TO CUSTOM FUNCTION
    console.log = function myLog(message) {
      // USE THE FILE SYSTEM MODULE TO CREATE AND OR ADD TO A LOG FILE
      fs.appendFile('./logs/logs.md', message, (err) => {
        // CHECK FOR ERRORS
        if (err) throw err;
        // RETURN TRUE FOR TESTING
        return true;
      });
    };
  }
};

// FUNCTION FOR UNIT TESTING
log.test = (debugState) => {

    // CHECK FOR DEBUG STATE
    if (debugState) {

        return true;

    } else {

        return false;

    };

};

// EXPORT TE MODULE
module.exports = log;
