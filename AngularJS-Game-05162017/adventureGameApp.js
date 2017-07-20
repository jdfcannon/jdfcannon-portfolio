angular.module("adventureGameApp", [])
    .controller("AppController", ["keyPressHandlerService", "gameService", AppController]);

function AppController(keyPressHandlerService, gameService) {
    "use strict";
    var vm = this;
    vm.playerImg = gameService.initPlayerImg();
    vm.board = gameService.createBoard();
    vm.score = gameService.getScore();
    vm.hp = gameService.getHp();
    // vm.playerImg = gameService.getPlayerImg();
    vm.gameOver = false;

    vm.keyDown = function (keyEvent) {
        if (!vm.instructionsDisplayed) {
            vm.instructionsDisplayed = true;
            return;
        }

        vm.keyChode = keyEvent.keyCode;

        if (vm.hp.length == 0) {
            vm.gameOver = true;
        }

        if (vm.gameOver == true) {
            vm.playerImg = "img/fighter-dead.png";
            return;
        }

        gameService.activateMove(keyEvent.keyCode);
        vm.score = gameService.getScore();
        vm.hp = gameService.getHp();
        vm.playerImg = gameService.getPlayerImg();
    }
};

