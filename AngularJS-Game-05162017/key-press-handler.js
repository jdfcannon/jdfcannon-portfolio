angular.module("adventureGameApp")
    .factory("keyPressHandlerService", keyPressHandlerService)

function keyPressHandlerService() {
    "use strict";
    var factory = {
        processKeyCode: processKeyCode
    };

    return factory;

    //////////////

    function processKeyCode(keyCode) {
        switch (keyCode) {
            case 37: //left
                return 1;

            case 38: //up
                return 2;

            case 39: //right
                return 3;

            case 40: //down
                return 4;

            case 32: //stay
                return 5;

            default:
                return "none";
        }
    }

    // function processKeyCode(keyCode) {
    //     switch (keyCode) {
    //         case 37: //left
    //             return characterDirection.left;

    //         case 38: //up
    //             return characterDirection.up;

    //         case 39: //right
    //             return characterDirection.right;

    //         case 40: //down
    //             return characterDirection.down;

    //         default:
    //             return characterDirection.none;
    //     }
    // }
};