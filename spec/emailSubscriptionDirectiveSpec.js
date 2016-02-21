describe("myDirective", function () {

    it('user click subscribe, then scope.hasSubscribed changed to true', function () {

        var el = null;
        var scope = null;

        angular.mock.module('emailSubscriptionTestApp');
        angular.mock.inject(function ($compile, $rootScope) {

            $rootScope.email = null;
            var htmlElement = angular.element('<email-subscription email="email"></email-subscription>');
            el = $compile(htmlElement)($rootScope);
            $rootScope.$digest();

            scope = el.isolateScope();
        });

        var emailTextInput = el.find("#txtEmail");
        emailTextInput.val("admin@codesanook.com");
        emailTextInput.trigger('input');

        var button = el.find("#btnSubscribe");
        button.trigger("click");
        expect(scope.hasSubscribed).toBe(true);
    });


    it('user click subscribe, scope email set correctly', function () {

        var el = null;
        var scope = null;

        angular.mock.module('emailSubscriptionTestApp');
        angular.mock.inject(function ($compile, $rootScope) {

            $rootScope.email = null;
            var htmlElement = angular.element('<email-subscription email="email"></email-subscription>');
            el = $compile(htmlElement)($rootScope);
            $rootScope.$digest();

            scope = el.isolateScope();
        });

        var emailTextInput = el.find("#txtEmail");
        var email = "admin@codesanook.com";
        emailTextInput.val(email);
        emailTextInput.trigger('input');

        var button = el.find("#btnSubscribe");
        button.trigger("click");
        expect(scope.email).toBe(email);
    });

});








