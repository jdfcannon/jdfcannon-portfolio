angular.module("adventureGameApp")
    .factory("enemiesService", ["moveService", "boardService", "globalSettings", "blackMageService", 
    "thiefService", "rockDonkerService", enemiesService])

function enemiesService(moveService, boardService, globalSettings, blackMageService, thiefService, rockDonkerService) {
    "use strict";

    var factory = {
        // enemy: enemy,
        createEnemy: createEnemy,
        placeEnemy: placeEnemy,
        moveEnemy: moveEnemy
    };
    return factory;

    ////////////////////////////

    var enemy;
    var diffX;
    var diffY;
    var direction;
    var enemyList;
    var newList;

    function createEnemy() {
        var newEnemy = {
            x: Math.round(Math.random() * (globalSettings.gameBoardWidth - 1)),
            y: Math.round(Math.random() * (globalSettings.gameBoardHeight - 1)),
            direction: "none"
        }
        return newEnemy;
    }

    function placeEnemy(enemyName) {
        enemy = createEnemy();
        var enemySquare = boardService.getSquare(enemy.y, enemy.x);
        if (!enemySquare.isBlocked) {
            enemySquare.content = enemyName;
            enemySquare.isCovered = false;
            enemySquare.isBlocked = true;
            enemySquare.isEnemy = true;
        } else {
            placeEnemy(enemyName);
        }
    }

    function moveEnemy(enemyName) {
        switch (enemyName) {
            case "black-mage":
                blackMageService.moveBlackMage();
                break;

                case "thief":
                thiefService.moveThief();
                break;

                case "rock-donker":
                rockDonkerService.moveRockDonker();

            default:
                return "poop";
        }
    }
}

