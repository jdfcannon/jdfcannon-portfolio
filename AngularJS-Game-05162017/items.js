angular.module("adventureGameApp")
    .factory("itemsService", ["moveService", "boardService", "globalSettings", itemsService])

function itemsService(moveService, boardService, globalSettings) {
    "use strict";

    var factory = {
        createItem: createItem,
        placeItem: placeItem,
    };
    return factory;

    ////////////////////////////
    var item;

    function createItem() {
        var newItem = {
            x: Math.round(Math.random() * (globalSettings.gameBoardWidth - 1)),
            y: Math.round(Math.random() * (globalSettings.gameBoardHeight - 1)),
            direction: "none"
        }
        return newItem;
    }

    function placeItem() {
        item = createItem();
        var itemSquare = boardService.getSquare(item.y, item.x);
        if (!itemSquare.isBlocked) {
            itemSquare.content = "item";
            itemSquare.isItem = true;
            itemSquare.isCovered = false;
            itemSquare.isBlocked = true;
            item = itemSquare;
        } else {
            placeItem();
        }
    }
}