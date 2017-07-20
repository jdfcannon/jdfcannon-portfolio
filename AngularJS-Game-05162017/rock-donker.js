angular.module("adventureGameApp")
    .factory("rockDonkerService", ["moveService", "boardService", "globalSettings", rockDonkerService])

function rockDonkerService(moveService, boardService, globalSettings) {
    "use strict";

    var factory = {
        moveRockDonker: moveRockDonker
    };
    return factory;

    ////////////////////////////

    var enemy;
    var diffX;
    var diffY;
    var direction;
    var enemyList;
    var newList;
    var rockList;

    function moveRockDonker() {
        var playerLocation = boardService.getLocation("player")[0];

        enemyList = boardService.getLocation("rock-donker");
        for (var i = 0; i < enemyList.length; i++) {
            enemy = boardService.getSquare(enemyList[i].y, enemyList[i].x);
            diffX = Math.abs(playerLocation.x - enemy.x);
            diffY = Math.abs(playerLocation.y - enemy.y);

            // Test if one donk eats another
            newList = boardService.getLocation("rock-donker");
            if (newList.length < enemyList.length) {
                var poop = "RD Down";
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
            } else if (enemyLoc.isBlocked) {
                enemyLoc = enemy;
            } else {
                boardService.checkBlood(enemy);
                enemyLoc.content = "rock-donker";
                enemyLoc.isCovered = false;
                enemyLoc.isEnemy = true;
                enemyLoc.isBlocked = true;
                enemy.isEnemy = false;
                enemy.content = "rock";
                enemy.isBlocked = true;
                enemy.timer = 15;
                enemy = enemyLoc;
            }

            // Test if one mage eats another
            newList = boardService.getLocation("rock-donker");
            if (newList.length < enemyList.length) {
                var poop = "BM Down";
            }
        }

        rockList = boardService.getLocation("rock")
        for (var j = 0; j < rockList.length; j++) {
            var rock = boardService.getSquare(rockList[j].y, rockList[j].x);
            if (rock.timer > 0) {
                rock.timer--;
            } else if (rock.timer == 0) {
                boardService.checkBlood(rock);
            }
        }
    }
}