const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const config = require('../mconfig');

function styles() {
  // Basic styles task - do nothing since dist/ already has files
  return Promise.resolve();
}

module.exports = styles;