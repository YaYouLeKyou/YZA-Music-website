const gulp = require('gulp');
const config = require('../mconfig');

function buildStyles() {
  // Basic build styles task - do nothing
  return Promise.resolve();
}

function buildScripts() {
  // Basic build scripts task - do nothing
  return Promise.resolve();
}

module.exports = { buildStyles, buildScripts };