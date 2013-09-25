var NOW = new Date().getFullYear();

var app = angular.module('hoitmc', []);

app.controller('hoitmcController', function($scope) {
    $scope.showSearch = true;
    $scope.showResults = false;
    $scope.year = NOW;

    $scope.SearchCars = function () {
        if($scope.carNumber < 1000){
            $scope.yearsOld = "Undefined";
            $scope.carBuilder = "";
            $scope.datesBuilt = "";
        }
        // 1000 series
        if($scope.carNumber > 999 && $scope.carNumber < 2000) {
            $scope.yearsOld = NOW - 1976;
            $scope.carBuilder = "Rohr Industries, Winder, Georgia, USA";
            $scope.datesBuilt = "1973–1976";
        }
        // 2000 series
        if($scope.carNumber > 1999 && $scope.carNumber < 3000) {
            $scope.yearsOld = NOW - 1983;
            $scope.carBuilder = "Breda Costruzioni Ferroviarie, Pistoia, Italy";
            $scope.datesBuilt = "1981–1983";
        }
        // 3000 series
        if($scope.carNumber > 2999 && $scope.carNumber < 4000) {
            $scope.yearsOld = NOW - 1988;
            $scope.carBuilder = "Breda Costruzioni Ferroviarie, Pistoia, Italy";
            $scope.datesBuilt = "1984–1988";
        }
        // 4000 series
        if($scope.carNumber > 3999 && $scope.carNumber < 5000) {
            $scope.yearsOld = NOW - 1993;
            $scope.carBuilder = "Breda Costruzioni Ferroviarie, Pistoia, Italy";
            $scope.datesBuilt = "1991–1993";
        }
        // 5000 series
        if($scope.carNumber > 4999 && $scope.carNumber < 6000) {
            $scope.yearsOld = NOW - 2004;
            $scope.carBuilder = "CAF/AAI, Zaragoza and Bessain, Spain and Hunt Valley, Maryland, USA";
            $scope.datesBuilt = "2001–2004";
        }
        // 6000 series
        if($scope.carNumber > 5999 && $scope.carNumber < 7000) {
            $scope.yearsOld = NOW - 2008;
            $scope.carBuilder = "Alstom Transportation, Barcelona, Spain and Hornell, New York, USA";
            $scope.datesBuilt = "2005–2008";
        }
        if($scope.carNumber > 6999){
            $scope.yearsOld = "Undefined";
            $scope.carBuilder = "";
            $scope.datesBuilt = "";
        }

        $scope.noteToTweet = "This Metro Car (No. " + $scope.carNumber + ") is at least " + $scope.yearsOld.toString() + " years old! How old is yours? www.HowOldIsThisMetroCar.com";
        $scope.showSearch = false;
        $scope.showResults = true;
    };

    $scope.ResetSearch = function () {
        $scope.carNumber = '';
        $scope.showSearch = true;
        $scope.showResults = false;
    };
});