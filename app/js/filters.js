'use strict';

/* Filters */

angular.module('shopCartApp.filters', [])

   .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])

    .filter('reverse', function() {
        return function(text) {
            return text.split('').reverse().join('');
        }
    })

    .filter('money', function() {
        return function(value) {
            return value.formatMoney(2,'.',',');
        }
    })

    .filter('anchor', function() {
        return function(value) {
            return value.replace(/[^\s\w]/g,'').replace(/\s+/g,'-');
        }
    })
;
