var app = angular.module('emailSubscriptionTestApp', []);

app.directive('emailSubscription', function () {

    var emailSuscriptionDirective = {
        restrict: 'E',
        scope: {
            email: "="
        },

        controller: function ($scope) {
            $scope.hasSubscribed = false;

            $scope.subscribe = function () {
                $scope.hasSubscribed = true;
                console.log("Thank you for subscribing, we will send email to " + $scope.email);
            };
        },

        template: '<input id="txtEmail" type="text" ng-model="email" /> ' +
        '<input id="btnSubscribe" type="button" ng-click="subscribe()" />'
    };

    return emailSuscriptionDirective;
});




