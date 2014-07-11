angular.module('rt.userselect', []).factory('userSelect', function () {
  var els = [];
  var keys = [
      'user-select',
      '-moz-user-select',
      '-webkit-user-select',
      '-ms-user-select'
    ];
  var enable = {};
  var disable = {};
  for (var j = 0; j < keys.length; j++) {
    var key = keys[j];
    enable[key] = '';
    disable[key] = 'none';
  }
  function apply(style) {
    return function () {
      for (var k = 0; k < els.length; k++) {
        els[k].css(style);
      }
    };
  }
  return {
    _add: function (el) {
      els.push(el);
    },
    _remove: function (el) {
      var index = els.indexOf(el);
      if (index > -1) {
        els.splice(index, 1);
      }
    },
    enable: apply(enable),
    disable: apply(disable)
  };
}).directive('userSelect', [
  'userSelect',
  function (userSelect) {
    return {
      restrict: 'A',
      link: function (scope, el) {
        userSelect._add(el);
        scope.$watch('$destroy', function () {
          userSelect._remove(el);
        });
      }
    };
  }
]);