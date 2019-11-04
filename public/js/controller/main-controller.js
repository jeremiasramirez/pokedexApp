pokedexApp.controller("mainPokedex", ["$scope", "$http", function($scope, $http){


    /*
    * request
    * */
    $http({

        method: "GET",
        url: "pokedexData/data.json"

    }).then((res)=>{


        console.log(res)


    })





}]);