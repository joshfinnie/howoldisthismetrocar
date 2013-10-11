describe('Testing HowOldIsThisMetroCar.', function(){

    beforeEach(angular.mock.module('hoitmc'));

    beforeEach(angular.mock.inject(function($rootScope, $controller){
        scope = $rootScope.$new();
        $controller('hoitmcController', {$scope: scope});
    }));

    it('should have properly set scope', function(){
        expect(scope.showSearch).toBe(true);
        expect(scope.showResults).toBe(false);
    });

    it('should display info for Undefined cars under 1000', function(){
        scope.carNumber = 0;
        scope.SearchCars();
        expect(scope.yearsOld).toBe("Undefined");
        expect(scope.carBuilder).toBe("");
        expect(scope.datesBuilt).toBe("");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should display info for 1000 series cars', function(){
        var NOW = new Date().getFullYear();
        scope.carNumber = 1000;
        scope.SearchCars();
        expect(scope.yearsOld).toBe(NOW - 1976);
        expect(scope.carBuilder).toBe("Rohr Industries");
        expect(scope.datesBuilt).toBe("1973-1976");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should display info for 2000 series cars', function(){
        var NOW = new Date().getFullYear();
        scope.carNumber = 2000;
        scope.SearchCars();
        expect(scope.yearsOld).toBe(NOW - 1983);
        expect(scope.carBuilder).toBe("Breda Costruzioni Ferroviarie");
        expect(scope.datesBuilt).toBe("1981-1983");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should display info for 3000 series cars', function(){
        var NOW = new Date().getFullYear();
        scope.carNumber = 3000;
        scope.SearchCars();
        expect(scope.yearsOld).toBe(NOW - 1988);
        expect(scope.carBuilder).toBe("Breda Costruzioni Ferroviarie");
        expect(scope.datesBuilt).toBe("1984-1988");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should display info for 4000 series cars', function(){
        var NOW = new Date().getFullYear();
        scope.carNumber = 4000;
        scope.SearchCars();
        expect(scope.yearsOld).toBe(NOW - 1993);
        expect(scope.carBuilder).toBe("Breda Costruzioni Ferroviarie");
        expect(scope.datesBuilt).toBe("1991-1993");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should display info for 5000 series cars', function(){
        var NOW = new Date().getFullYear();
        scope.carNumber = 5000;
        scope.SearchCars();
        expect(scope.yearsOld).toBe(NOW - 2004);
        expect(scope.carBuilder).toBe("CAF/AAI");
        expect(scope.datesBuilt).toBe("2001-2004");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should display info for 6000 series cars', function(){
        var NOW = new Date().getFullYear();
        scope.carNumber = 6000;
        scope.SearchCars();
        expect(scope.yearsOld).toBe(NOW - 2008);
        expect(scope.carBuilder).toBe("Alstom Transportation");
        expect(scope.datesBuilt).toBe("2005-2008");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should display info for 7000 series cars', function(){
        var NOW = new Date().getFullYear();
        scope.carNumber = 7000;
        scope.SearchCars();
        expect(scope.yearsOld).toBe(NOW - 2012);
        expect(scope.carBuilder).toBe("Kawasaki Rail Car");
        expect(scope.datesBuilt).toBe("2012-2017");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should display info for Undefined cars over 7999', function(){
        var NOW = new Date().getFullYear();
        scope.carNumber = 8000;
        scope.SearchCars();
        expect(scope.yearsOld).toBe("Undefined");
        expect(scope.carBuilder).toBe("");
        expect(scope.datesBuilt).toBe("");
        expect(scope.showSearch).toBe(false);
        expect(scope.showResults).toBe(true);
    });

    it('should reset the scope after hitting the back button', function(){
        scope.carNumber = 0;
        scope.ResetSearch();
        expect(scope.carNumber).toBe('');
        expect(scope.showSearch).toBe(true);
        expect(scope.showResults).toBe(false);
    });
});