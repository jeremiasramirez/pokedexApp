pokedexApp.controller("onlyPokemon", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
    //starting controller
    $scope.backPage = function(){
        history.back()
    };

    $scope.onlyPokemon = [];


    $scope.nameUrlPokemon = $routeParams.pokemonName;

    $scope.findedPokemon = 0;

//    request

    $http({
        method: "get",
        url: "pokedexData/dataPokemon.json"

    }).then((res)=>{

        $scope.positionPokemon  =null;

       for(let i=0; i<res.data.length; i++){

           if(res.data[i].name === $scope.nameUrlPokemon){
               $scope.findedPokemon = 1;
               $scope.positionPokemon = i;
           }
       }

       if($scope.findedPokemon === 1){
           $scope.onlyPokemon = res.data[$scope.positionPokemon];
       }
       else{
           setTimeout(()=>{
               $scope.backPage();
               $scope.$apply();

           },800)
       }
       console.log($scope.onlyPokemon)



    })





}]);