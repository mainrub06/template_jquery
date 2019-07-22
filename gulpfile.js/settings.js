'use strict';

const dirs = {
  src: './source/',
  dest: './build/'
};

module.exports = {
  paths: {
    src: {
      root: dirs.src,
      styles: dirs.src + 'styles/',
      scripts: dirs.src + 'js/',
      images: {
        all: dirs.src + 'img/',
        icons: dirs.src + 'img/icons/',
        content: dirs.src + 'img/content/'
      },
      fonts: dirs.src + 'fonts/'
    },
    dest: {
      root: dirs.dest,
      styles: dirs.dest + 'css/',
      scripts: dirs.dest + 'js/',
      images: {
        all: dirs.dest + 'img/',
        content: dirs.dest + 'img/content/'
      },
      fonts: dirs.dest + 'fonts/'
    },
    dist: './dist'
  },
  vendor: {
    scripts: [
      './node_modules/picturefill/dist/picturefill.min.js',
      './node_modules/svg4everybody/dist/svg4everybody.min.js',
      './node_modules/@babel/polyfill/dist/polyfill.min.js',
      './source/plugins/jquery-3.4.1.min.js',
      './source/plugins/jquery.fancybox.min.js',
      './source/plugins/owl.carousel.min.js',
      './source/plugins/jquery.form.min.js',
      './source/plugins/jquery.maskedinput.min.js'
    ],
    styles: [
      './source/custom-styles/fancybox.min.css',
      './source/custom-styles/owl.carousel.min.css',
      './source/custom-styles/normilize.min.css'
    ]
  }
};