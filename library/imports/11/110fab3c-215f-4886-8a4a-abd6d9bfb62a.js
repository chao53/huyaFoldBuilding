"use strict";
cc._RF.push(module, '110fas8IV9IhopKq9bZv7Yq', 'fakefloorScript');
// scripts/fakefloorScript.js

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
        spriteFrame1: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame2: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame3: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame4: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame5: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame6: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame7: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame8: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame9: {
            default: null,
            type: cc.SpriteFrame
        },
        spriteFrame10: {
            default: null,
            type: cc.SpriteFrame
        },
        id: 2
    },

    // LIFE-CYCLE CALLBACKS:
    changeTexture: function changeTexture(i) {
        console.debug(i);
        var self = this;
        var spriteFrame;
        switch (i) {
            case 1:
                spriteFrame = this.spriteFrame1;
                self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                break;
            case 2:
                this.id = Math.floor(Math.random() * (12 - 3)) + 2;
                console.debug(this.id);
                switch (this.id) {
                    case 2:
                        spriteFrame = this.spriteFrame2;
                        break;
                    case 3:
                        spriteFrame = this.spriteFrame3;
                        break;
                    case 4:
                        spriteFrame = this.spriteFrame4;
                        break;
                    case 5:
                        spriteFrame = this.spriteFrame5;
                        break;
                    case 6:
                        spriteFrame = this.spriteFrame6;
                        break;
                    case 7:
                        spriteFrame = this.spriteFrame7;
                        break;
                    case 8:
                        spriteFrame = this.spriteFrame8;
                        break;
                    case 9:
                        spriteFrame = this.spriteFrame9;
                        break;
                    case 10:
                        spriteFrame = this.spriteFrame10;
                        break;
                    default:
                        break;
                }
                self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                break;
            default:
                break;
        }
    },

    getId: function getId() {
        return this.id;
    },

    start: function start() {},
    update: function update(dt) {}
});

cc._RF.pop();