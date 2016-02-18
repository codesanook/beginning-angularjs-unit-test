describe('weatherController', function () {

    it('search bangkok should return Bangkok city', function () {

        //load module
        angular.mock.module('weatherApp');

        //get service
        var controllerService = null;
        angular.mock.inject(function ($controller) {
            controllerService = $controller;
        });
        var scope = {};
        var weatherController = controllerService('weatherController', {$scope: scope});
        var city = scope.search('bangkok');
        expect(city.name).toBe('Bangkok');
        expect(city.temp).toBe(32);
    });

});
