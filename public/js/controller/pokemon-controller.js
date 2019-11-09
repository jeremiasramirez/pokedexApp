pokedexApp.controller("onlyPokemon", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
    //starting controller


    //back page function
    $scope.backPage = function(){

        setTimeout(()=>{
            history.back();
        },400);

    };


    //main data
    $scope.onlyPokemon = [];

    //url data
    $scope.nameUrlPokemon = $routeParams.pokemonName;

    //bool element find
    $scope.findedPokemon = 0;

//    request

    $http({
        method: "get",
        url: "pokedexData/dataPokemon.json"

    }).then((res)=>{

        $scope.positionPokemon  =null;

       for(let i=0; i<res.data.length; i++){

           //verifying if the url name is finded
           if(res.data[i].name === $scope.nameUrlPokemon){

               $scope.findedPokemon = 1;
               $scope.positionPokemon = i;

           }
       }
       //if url name is fined ? show data
       if($scope.findedPokemon === 1){
           $scope.onlyPokemon = res.data[$scope.positionPokemon];
       }
       else{
           //if not find return back page
           $scope.backPage();
           setTimeout(()=>{

               //function back page
               $scope.backPage();
               //updating scope
               $scope.$apply();

               if(window.screenY >=10){
                   floatNotificationError("Url no encontrada")
               }
               else if (window.screenY < 10){
                   windowError("Url invalida", "Url no encontrada");
               }

           //timing execute
           },800)


       }

    })





}]);