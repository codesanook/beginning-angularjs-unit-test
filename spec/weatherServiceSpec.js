describe('weatherService', function () {

    it('getWeathers should return 4 cities', function () {

        //load module
        angular.mock.module('weatherApp');

        //get service
        var service = null;
        angular.mock.inject(function (weatherService) { //match argument to existing service in module
            service = weatherService;
        });

        expect(service.getWeathers().length).toBe(4);
    });

});
