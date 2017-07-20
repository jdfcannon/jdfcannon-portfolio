angular.module("adventureGameApp")
    .factory("moveService", ["globalSettings", "boardService", moveService])

function moveService(globalSettings, boardService) {
    "use strict";

    var factory = {
        moveCharacter: moveCharacter
    };
    return factory;

    ////////////////////////////
    var left;
    var up;
    var right;
    var down;
    var stay;

    function initCounter(num) {
        if (num > -1) {
            return num;
        }
        else {
            num = 0;
            return num;
        }
    }

    function moveCharacter(direction, character) {
        var square = boardService.getSquare(character.y, character.x);

        left = initCounter(left);
        up = initCounter(up);
        right = initCounter(right);
        down = initCounter(down);
        stay = initCounter(stay);

        if (direction < 1) {
            direction = 1;
        } else if (direction > 5) {
            direction = 5;
        }

        switch (direction) {
            case 1: //left
                if (character.x > globalSettings.gameBoardWidth - globalSettings.gameBoardWidth)
                    character.x -= 1;
                left++;
                break;

            case 2: //up
                if (character.y > globalSettings.gameBoardHeight - globalSettings.gameBoardHeight)
                    character.y -= 1;
                up++;
                break;

            case 3: //right
                if (character.x < globalSettings.gameBoardWidth - 1)
                    character.x += 1;
                right++;
                break;

            case 4: //down
                if (character.y < globalSettings.gameBoardHeight - 1)
                    character.y += 1;
                down++;
                break;

            case 5: //stay
                stay++;
                break;

            default:
                return "dangit";
        }

        var newSquare = boardService.getSquare(character.y, character.x);
        if ((newSquare.isBlocked && character.content == "player") || newSquare.content == "rock") {
            return square;
        }
        return newSquare;
    }
}