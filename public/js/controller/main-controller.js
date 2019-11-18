pokedexApp.controller("mainPokedex", ["$scope", "$timeout", "$http", function($scope, $timeout, $http){

    $scope.titleMenu = "";

    floatNotificationError("Cargando..");

    $scope.overOnPoster = function(data){
        $scope.titleMenu = data;
    };

    $scope.overOnLeave = function(data){
        $scope.titleMenu = "";
    };


    $scope.pokemonAll = [];


    /*
    * request
    * */
    $http({

        method: "GET",
        url: "pokedexData/data.json"

    }).then((res)=>{

        $scope.pokemonAll = res.data;

    });




}]);
