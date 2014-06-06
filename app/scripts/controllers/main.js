'use strict';

angular.module('fiddleRipOffApp').controller('MainCtrl', function ($scope) {
        $scope.html = '';
        $scope.htmlRender = '';
        $scope.css = '';
        $scope.test = 'test';
        $scope.render = function () {
            $scope.cssRender = $scope.css;
            $scope.htmlRender = $scope.html;
          };
      }
);
