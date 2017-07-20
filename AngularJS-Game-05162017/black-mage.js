angular.module("adventureGameApp")
    .factory("blackMageService", ["moveService", "boardService", "globalSettings", blackMageService])

function blackMageService(moveService, boardService, globalSettings) {
    "use strict";

    var factory = {
        moveBlackMage: moveBlackMage
    };
    return factory;

    ////////////////////////////

    var enemy;
    var diffX;
    var diffY;
    var direction;
    var enemyList;
    var newList;

    function moveBlackMage() {
        var playerLocation = boardService.getLocation("player")[0];

        enemyList = boardService.getLocation("black-mage");
        for (var i = 0; i < enemyList.length; i++) {
            enemy = boardService.getSquare(enemyList[i].y, enemyList[i].x);
            diffX = Math.abs(playerLocation.x - enemy.x);
            diffY = Math.abs(playerLocation.y - enemy.y);

            // Test if one mage eats another
            newList = boardService.getLocation("black-mage");
            if (newList.length < enemyList.length) {
                var poop = "BM Down";
            }

            if (diffX < 3 && diffY < 3) {
                if (diffX > diffY) {
                    if (playerLocation.x > enemy.x) {
                        direction = 3; //right
                    } else {
                        direction = 1; //left
                    }
                } else if (diffX < diffY) {
                    if (playerLocation.y > enemy.y) {
                        direction = 4; //down
                    } else {
                        direction = 2; //up
                    }
                }
            } else {
                direction = Math.floor((Math.random() * 5) + 1);
            }


            var enemyLoc = enemy;
            enemyLoc = moveService.moveCharacter(direction, enemyLoc);
            if (enemyLoc.content == "player") {
                boardService.checkBlood(enemy);
                enemyLoc.isBloody = true;
                enemyLoc.isEnemy = false;
                enemy = enemyLoc;
            } else if (((enemyLoc.isEnemy || enemyLoc.isItem) && direction != 5) || (direction == 5)) {
                direction = 5;
                enemyLoc = enemy;
            } else {
                boardService.checkBlood(enemy);
                enemyLoc.content = "black-mage";
                enemyLoc.isCovered = false;
                enemyLoc.isEnemy = true;
                enemy.isEnemy = false;
                enemy = enemyLoc;
            }

            // Test if one mage eats another
            newList = boardService.getLocation("black-mage");
            if (newList.length < enemyList.length) {
                var poop = "BM Down";
            }
        }
    }
}