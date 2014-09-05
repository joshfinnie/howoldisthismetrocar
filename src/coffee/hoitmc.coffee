NOW = new Date().getFullYear()
app = angular.module("hoitmc", [])
app.controller "hoitmcController", ($scope) ->
  $scope.showSearch = true
  $scope.showResults = false
  $scope.year = NOW
  $scope.SearchCars = ->
    
    # No three digit series numbers
    if $scope.carNumber < 1000
      $scope.yearsOld = "Undefined"
      $scope.carBuilder = ""
      $scope.datesBuilt = ""
    
    # 1000 series
    if $scope.carNumber > 999 and $scope.carNumber < 2000
      $scope.yearsOld = NOW - 1976
      $scope.carBuilder = "Rohr Industries"
      $scope.datesBuilt = "1973-1976"
    
    # 2000 series
    if $scope.carNumber > 1999 and $scope.carNumber < 3000
      $scope.yearsOld = NOW - 1983
      $scope.carBuilder = "Breda Costruzioni Ferroviarie"
      $scope.datesBuilt = "1981-1983"
    
    # 3000 series
    if $scope.carNumber > 2999 and $scope.carNumber < 4000
      $scope.yearsOld = NOW - 1988
      $scope.carBuilder = "Breda Costruzioni Ferroviarie"
      $scope.datesBuilt = "1984-1988"
    
    # 4000 series
    if $scope.carNumber > 3999 and $scope.carNumber < 5000
      $scope.yearsOld = NOW - 1993
      $scope.carBuilder = "Breda Costruzioni Ferroviarie"
      $scope.datesBuilt = "1991-1993"
    
    # 5000 series
    if $scope.carNumber > 4999 and $scope.carNumber < 6000
      $scope.yearsOld = NOW - 2004
      $scope.carBuilder = "CAF/AAI"
      $scope.datesBuilt = "2001-2004"
    
    # 6000 series
    if $scope.carNumber > 5999 and $scope.carNumber < 7000
      $scope.yearsOld = NOW - 2008
      $scope.carBuilder = "Alstom Transportation"
      $scope.datesBuilt = "2005-2008"
    
    # 7000 series
    if $scope.carNumber > 6999 and $scope.carNumber < 8000
      $scope.yearsOld = NOW - 2012
      $scope.carBuilder = "Kawasaki Rail Car"
      $scope.datesBuilt = "2012-2017"
      
    # Non-existent models
    if $scope.carNumber > 7999
      $scope.yearsOld = "Undefined"
      $scope.carBuilder = ""
      $scope.datesBuilt = ""
      
    $scope.noteToTweet = "This Metro Car (No. " + $scope.carNumber + ") is at least " + $scope.yearsOld.toString() + " years old! How old is yours? www.HowOldIsThisMetroCar.com"
    $scope.showSearch = false
    $scope.showResults = true
    return

  $scope.ResetSearch = ->
    $scope.carNumber = ""
    $scope.showSearch = true
    $scope.showResults = false
    return

  return
