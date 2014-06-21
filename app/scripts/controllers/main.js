'use strict';

angular.module('fiddleRipOffApp').controller('MainCtrl', function ($scope) {
        $scope.html = '<div class="red">hello there</div>';
        $scope.htmlRender = '';
        $scope.css = '.red { color:red }';
        $scope.js = 'console.log("testing");';
        $scope.test = 'test';
        $scope.render = function () {

            var inclusionScripts = '<script src="bower_components/jquery/jquery.js"><\/script>';
            var script = '<script>' +
                '$( document ).ready(function() {' +
                    $scope.js +
                '});' +
                '<\/script>';
            var html = $('#html').val();

            document.getElementById('rendered').contentWindow.document.open();
            document.getElementById('rendered').contentWindow.document.write('<html><head>' + inclusionScripts + '</head><body><style>' + $scope.css + '</style>' + $scope.html+script + '</body></html>');
            document.getElementById('rendered').contentWindow.document.close();
            //document.getElementById('rendered').contentDocument.location.reload(true);
            $scope.cssRender = $scope.css;
            $scope.htmlRender = $scope.html;
          };
      }
);
