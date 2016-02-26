var app = angular.module('emailSubscriptionExternalTemplateTestApp', []);

app.directive('emailSubscriptionExternalTemplate', function () {

    var emailSuscriptionDirectiveExternalTemplate = {
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

        templateUrl: 'emailSubscriptionTemplate.html'
    };

    return  emailSuscriptionDirectiveExternalTemplate;
});




