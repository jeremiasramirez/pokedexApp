pokedexApp.controller("mainPokedex", ["$scope", "$http", function($scope, $http){

    $scope.titleMenu = "Pokemons";

    $scope.overOnPoster = function(data){
        $scope.titleMenu = data;
    };

    $scope.overOnLeave = function(data){
        $scope.titleMenu = "Pokemons";
    };


    $scope.pokemonAll = {};


    /*
    * request
    * */
    $http({

        method: "GET",
        url: "pokedexData/data.json"

    }).then((res)=>{

        $scope.pokemonAll = res.data;
        // console.log($scope.pokemonAll)

    });




}]);