pokedexApp.controller("mainPokedex", ["$scope", "$http", function($scope, $http){

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

    })





}]);