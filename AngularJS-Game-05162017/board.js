angular.module("adventureGameApp")
    .factory("boardService", ["globalSettings", boardService])

function boardService(globalSettings) {
    "use strict";

    var factory = {
        getSquare: getSquare,
        getLocation: getLocation,
        getBoard: getBoard,
        createBoard: createBoard,
        checkBlood: checkBlood
    };
    return factory;

    ////////////////////////////

    var square;
    var board;
    var charList;

    function getSquare(row, column) {
        square = board.rows[row].squares[column];
        square.y = row;
        square.x = column;
        return square;
    }

    function getLocation(character) {
        charList = [];
        for (var i = 0; i < globalSettings.gameBoardWidth; i++) {
            for (var j = 0; j < globalSettings.gameBoardHeight; j++) {
                var square = getSquare(i, j)
                if (square.content == character) {
                    charList.push(square);
                } else if (square[character]) {
                    charList.push(square);
                }
            }
        }
        return charList;
    }

    function getBoard() {
        return board;
    }

    function createBoard() {
        var newBoard = {};
        newBoard.rows = [];

        for (var i = 0; i < globalSettings.gameBoardWidth; i++) {
            var row = {};
            row.squares = [];

            for (var j = 0; j < globalSettings.gameBoardHeight; j++) {
                var square = {};
                square.isCovered = true;
                square.isBloody = false;
                square.content = "empty";
                row.squares.push(square);
            }

            newBoard.rows.push(row);
        }

        board = newBoard;

        return newBoard;
    }

    function checkBlood(square) {
        if (square.isBloody || square.wasBloody) {
            square.content = "blood";
            square.isBloody = false;
            square.wasBloody = true;
            square.isBlocked = false;
        } else {
            square.content = "empty";
            square.isEnemy = false;
            square.isBlocked = false;
        }
        square.isCovered = false;
    }
}