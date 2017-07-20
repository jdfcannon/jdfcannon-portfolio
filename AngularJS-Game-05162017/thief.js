angular.module("adventureGameApp")
    .factory("thiefService", ["moveService", "boardService", "globalSettings", thiefService])

function thiefService(moveService, boardService, globalSettings) {
    "use strict";

    var factory = {
        moveThief: moveThief
    };
    return factory;

    ////////////////////////////

    var enemy;
    var item;
    var diffX;
    var diffY;
    var direction;
    var enemyList;
    var itemList;
    var newList;

    function moveThief() {
        // var itemLocation = boardService.getLocation("item")[0];

        enemyList = boardService.getLocation("thief");
        itemList = boardService.getLocation("isItem");

        for (var i = 0; i < enemyList.length; i++) {
            enemy = boardService.getSquare(enemyList[i].y, enemyList[i].x);
            direction = Math.floor((Math.random() * 5) + 1);
            if (enemy.isNearItem) {
                for (var a = 0; a < 4; a++) {
                    if (direction != 5) {
                        direction = Math.floor((Math.random() * 5) + 1);
                    }
                }
            }
            enemy.isNearItem = false;

            var newLoc = enemy;
            newLoc = moveService.moveCharacter(direction, newLoc);

            if (newLoc.content == "player") {
                boardService.checkBlood(enemy);
                newLoc.isBloody = true;
                newLoc.isEnemy = false;
                enemy.isEnemy = false;
                enemy = newLoc;
            } else if ((newLoc.isEnemy && direction != 5) || (newLoc.isItem && direction != 5) || (direction == 5)) {
                direction = 5;
                newLoc = enemy;
            } else {
                boardService.checkBlood(enemy);
                newLoc.content = "thief";
                newLoc.isEnemy = true;
                newLoc.isCovered = false;
                enemy.isEnemy = false;
                enemy = newLoc;
            }

            for (var j = 0; j < itemList.length; j++) {
                item = boardService.getSquare(itemList[j].y, itemList[j].x);
                item.content = "item";
                item.isPoison = false;

                diffX = Math.abs(item.x - enemy.x);
                diffY = Math.abs(item.y - enemy.y);

                if (diffX < 2 && diffY < 2) {
                    item.content = "poison";
                    item.isPoison = true;
                    enemy.isNearItem = true;
                    itemList.splice(j, 1);
                }

                // Test if one thief eats another
                newList = boardService.getLocation("thief");
                if (newList.length < enemyList.length) {
                    var poop = "Thief Down";
                }

            }
        }
    }
}