pokedexApp.config(function($routeProvider){

    $routeProvider

        .when("/", {
            templateUrl: "partial/partial-main.html",
            controller: "mainPokedex"
        })
        .when("/:pokemonName", {
            templateUrl: "partial/partial-pokemon.html",
            controller: "onlyPokemon"
        })
        .otherwise({
            redirectTo: "/"
        })


});