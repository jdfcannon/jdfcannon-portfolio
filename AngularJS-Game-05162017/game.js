angular.module("adventureGameApp")
    .factory("gameService", ["globalSettings", "keyPressHandlerService", "playerService",
        "enemiesService", "moveService", "boardService", "itemsService", gameService])

function gameService(globalSettings, keyPressHandlerService, playerService, enemiesService,
    moveService, boardService, itemsService) {
    "use strict";

    var factory = {
        board: board,
        turnNum: turnNum,
        createBoard: createBoard,
        activateMove: activateMove,
        getScore: getScore,
        getHp: getHp,
        getAudio: getAudio,
        getPlayerImg: getPlayerImg,
        initPlayerImg: initPlayerImg
    };
    return factory;

    ///////////////////////////////

    var board;
    var turnNum;
    var score;
    var hp;
    var audio;
    var playerImg;
    var direction;

    function initPlayerImg() {
        playerImg = "img/fighter44.png";
        return playerImg;
    }

    function createBoard() {
        playerImg = "img/fighter44.png";
        audio = new Audio("aud/sword.mp3");
        board = boardService.createBoard();
        direction = 5;

        playerService.placePlayer();
        enemiesService.placeEnemy("black-mage");

        turnNum = initCounter(turnNum) + 1;
        score = initCounter(score);
        hp = initCounter(hp);
        hp = 5;
        return board;
    }

    function activateMove(keycode) {
        direction = keyPressHandlerService.processKeyCode(keycode);

        if (direction != "none") {
            var playerSquare = playerService.movePlayer(direction);
            playerImg = "img/fighter44.png";

            if (playerSquare.isBloody) {
                collision();
                return;
            } else if (playerSquare.isItem) {
                if (playerSquare.isPoison) {
                    hp--;
                } else {
                    hp++;
                }
                playerSquare.isItem = false;
                return;
            }

            enemiesService.moveEnemy("rock-donker");
            if (playerSquare.isBloody) {
                collision();
                return;
            }

            enemiesService.moveEnemy("black-mage");
            if (playerSquare.isBloody) {
                collision();
                return;
            }

            enemiesService.moveEnemy("thief");
            if (playerSquare.isBloody) {
                collision();
                return;
            }

            if (turnNum >= 100 && turnNum % 20 == 0) {
                enemiesService.placeEnemy("rock-donker");
            } else if (turnNum >= 60 && turnNum % 15 == 0) {
                enemiesService.placeEnemy("thief");
            } else if (turnNum % 10 == 0) {
                enemiesService.placeEnemy("black-mage");
            }

            if (turnNum % 12 == 0) {
                itemsService.placeItem();
            }
            turnNum++;
        }
    }

    function initCounter(num) {
        if (num > -1) {
            return num;
        }
        else {
            num = 0;
            return num;
        }
    }

    function collision() {
        playerImg = "img/fighter-sword.png";
        audio = new Audio("aud/sword.mp3");
        audio.play();
        score++;
        hp--;
    }

    function getScore() {
        return score;
    }

    function getHp() {
        var hpArray = [];
        for (var i = 0; i < hp; i++) {
            hpArray.push(i);
        }
        return hpArray;
    }

    function getAudio() {
        return audio;
    }

    function getPlayerImg() {
        return playerImg;
    }

    function getItem() {
        return item;
    }
}