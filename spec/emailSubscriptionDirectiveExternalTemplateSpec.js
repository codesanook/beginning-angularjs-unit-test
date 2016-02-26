describe("emailSubscriptionDirectiveExternalTemplate", function () {

    it('input elements should be defined', function () {
        var el = null;
        var scope = null;

        angular.mock.module('emailSubscriptionExternalTemplateTestApp','ngTemplates');
        angular.mock.inject(function ($compile, $rootScope) {

            $rootScope.email = null;
            var htmlElement = angular.element(
                '<email-subscription-external-template email="email"></email-subscription>');

            el = $compile(htmlElement)($rootScope);
            $rootScope.$digest();

            scope = el.isolateScope();
        });

        var emailTextInput = el.find("#txtEmail");
        expect(emailTextInput).toBeDefined();
        expect(emailTextInput.attr('id')).toBe("txtEmail");

        var button = el.find("#btnSubscribe");
        expect(button).toBeDefined();
    });
});








