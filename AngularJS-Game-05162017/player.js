angular.module("adventureGameApp")
    .factory("playerService", ["moveService", "boardService", "globalSettings", playerService])

function playerService(moveService, boardService, globalSettings) {
    "use strict";

    var factory = {
        player: player,
        createPlayer: createPlayer,
        placePlayer: placePlayer,
        movePlayer: movePlayer
    };
    return factory;

    ////////////////////////////

    var player;
    var newLoc;

    function createPlayer() {
        var newPlayer = {
            x: Math.round(Math.random() * (globalSettings.gameBoardWidth - 1)),
            y: Math.round(Math.random() * (globalSettings.gameBoardHeight - 1)),
            direction: 5
        }
        return newPlayer;
    }

    function placePlayer() {
        player = createPlayer();
        newLoc = boardService.getSquare(player.y, player.x);
        newLoc.content = "player";
        newLoc.isCovered = false;
        player = newLoc;
        return player;
    }

    function movePlayer(direction) {
        newLoc = player;
        boardService.checkBlood(newLoc);

        newLoc = moveService.moveCharacter(direction, newLoc)

        if (newLoc.isEnemy) {
            newLoc.isBloody = true;
            newLoc.isEnemy = false;
        }
        newLoc.content = "player";
        newLoc.isCovered = false;
        player = newLoc;

        return player;
    }
}