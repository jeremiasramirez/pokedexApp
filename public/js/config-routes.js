pokedexApp.config(function($routeProvider){

    $routeProvider

        .when("/", {
            templateUrl: "partial/partial-main.html",
            controller: "mainPokedex"
        })
        .otherwise({
            redirectTo: "/"
        })


});