angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('QRCodeCtrl', function($scope, $stateParams) {
  $scope.qr_data = 'hey AMG and Amanda!';
})

.controller('GraphsCtrl', function($scope, $stateParams, $ionicPosition, $location, $ionicScrollDelegate) {

  $scope.scrollMe = function(anchor) {
    $location.hash(anchor);
    $ionicScrollDelegate.anchorScroll(true);
  };

  $scope.headBarHeight = $ionicPosition.position(document.getElementsByTagName("ion-header-bar")).height;
  $scope.sideBarHeight = 150;
  console.log($scope.headBarHeight);
  $scope.lineChart = {
     labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
     datasets : [
         {
             fillColor : "rgba(151,187,205,0)",
             strokeColor : "#e67e22",
             pointColor : "rgba(151,187,205,0)",
             pointStrokeColor : "#e67e22",
             data : [4, 3, 5, 4, 6]
         },
         {
             fillColor : "rgba(151,187,205,0)",
             strokeColor : "#f1c40f",
             pointColor : "rgba(151,187,205,0)",
             pointStrokeColor : "#f1c40f",
             data : [8, 3, 2, 5, 4]
         }
     ],
  };
  $scope.scatterChart = {
      labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets : [
          {
              fillColor : "rgba(151,187,205,0)",
              strokeColor : "rgba(151,187,205,0)",
              pointColor : "rgba(151,187,205,0)",
              pointStrokeColor : "#e67e22",
              data : [4, 3, 5, 4, 6]
          },
          {
              fillColor : "rgba(151,187,205,0)",
              strokeColor : "rgba(151,187,205,0)",
              pointColor : "rgba(151,187,205,0)",
              pointStrokeColor : "#f1c40f",
              data : [8, 3, 2, 5, 4]
          }
      ],
  };

  $scope.pieData = [
      {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
      },
      {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
      },
      {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
      }
  ];

    $scope.myChartOptions = {
        // Boolean - Whether to animate the chart
        animation: true,

        // Number - Number of animation steps
        animationSteps: 60,

        // String - Animation easing effect
        animationEasing: "easeOutQuart",

        // Boolean - If we should show the scale at all
        showScale: true,

        // Boolean - If we want to override with a hard coded scale
        scaleOverride: false,

        // ** Required if scaleOverride is true **
        // Number - The number of steps in a hard coded scale
        scaleSteps: null,
        // Number - The value jump in the hard coded scale
        scaleStepWidth: null,
        // Number - The scale starting value
        scaleStartValue: null,

        // String - Colour of the scale line
        scaleLineColor: "rgba(0,0,0,.1)",

        // Number - Pixel width of the scale line
        scaleLineWidth: 1,

        // Boolean - Whether to show labels on the scale
        scaleShowLabels: true,

        // Interpolated JS string - can access value
        scaleLabel: "<%=value%>",

        // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
        scaleIntegersOnly: true,

        // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: false,

        // String - Scale label font declaration for the scale label
        scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Scale label font size in pixels
        scaleFontSize: 12,

        // String - Scale label font weight style
        scaleFontStyle: "normal",

        // String - Scale label font colour
        scaleFontColor: "#666",

        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: false,

        // Boolean - Determines whether to draw tooltips on the canvas or not
        showTooltips: true,

        // Array - Array of string names to attach tooltip events
        tooltipEvents: ["mousemove", "touchstart", "touchmove"],

        // String - Tooltip background colour
        tooltipFillColor: "rgba(0,0,0,0.8)",

        // String - Tooltip label font declaration for the scale label
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip label font size in pixels
        tooltipFontSize: 14,

        // String - Tooltip font weight style
        tooltipFontStyle: "normal",

        // String - Tooltip label font colour
        tooltipFontColor: "#fff",

        // String - Tooltip title font declaration for the scale label
        tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

        // Number - Tooltip title font size in pixels
        tooltipTitleFontSize: 14,

        // String - Tooltip title font weight style
        tooltipTitleFontStyle: "bold",

        // String - Tooltip title font colour
        tooltipTitleFontColor: "#fff",

        // Number - pixel width of padding around tooltip text
        tooltipYPadding: 6,

        // Number - pixel width of padding around tooltip text
        tooltipXPadding: 6,

        // Number - Size of the caret on the tooltip
        tooltipCaretSize: 8,

        // Number - Pixel radius of the tooltip border
        tooltipCornerRadius: 6,

        // Number - Pixel offset from point x to tooltip edge
        tooltipXOffset: 10,

        // String - Template string for single tooltips
        tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

        // String - Template string for single tooltips
        multiTooltipTemplate: "<%= value %>",

        // Function - Will fire on animation progression.
        onAnimationProgress: function(){},

        // Function - Will fire on animation completion.
        onAnimationComplete: function(){}
    };

})

.controller('ScannerCtrl', function($scope, $cordovaBarcodeScanner) {

//  document.addEventListener("deviceready", function () {
  $scope.scanBarcode = function() {
    $cordovaBarcodeScanner
      .scan()
      .then(function(barcodeData) {
        // Success! Barcode data is here
      }, function(error) {
        // An error occurred
      });


    // NOTE: encoding not functioning yet
    $cordovaBarcodeScanner
      .encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
      .then(function(success) {
        // Success!
      }, function(error) {
        // An error occurred
      });

  };
});

//.controller('ScannerCtrl', ['$scope', '$cordovaBarcodeScanner', function($scope, $cordovaBarcodeScanner) {
//  $scope.scanBarcode = function() {
//      $cordovaBarcodeScanner.scan().then(function(imageData) {
//          alert(imageData.text);
//          console.log("Barcode Format -> " + imageData.format);
//          console.log("Cancelled -> " + imageData.cancelled);
//      }, function(error) {
//          console.log("An error happened -> " + error);
//      });
//  };
//}]);