"use strict";
cc._RF.push(module, '4a0b1pMSU1IN6jaTCgGK1Eb', 'test1');
// scripts/test1.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        texture: {
            default: null,
            type: cc.Texture2D
        },
        spriteFrame: {
            default: null,
            type: cc.SpriteFrame
        }
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function onLoad() {
        var spriteFrame = this.spriteFrame;
        var texture = this.texture;
        //spriteFrame.setTexture(texture);
    },

    start: function start() {},
    update: function update(dt) {
        console.debug(this.node.convertToWorldSpaceAR(cc.v2(-540, -1200)));
    }
});

cc._RF.pop();