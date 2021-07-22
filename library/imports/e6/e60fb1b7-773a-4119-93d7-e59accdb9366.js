"use strict";
cc._RF.push(module, 'e60fbG3dzpBGZPX5ZrM25Nm', 'item');
// scripts/item.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab: {
            default: null,
            type: cc.Prefab
        },
        back: {
            default: null,
            type: cc.Node
        },
        up: 0,
        down: 0,
        x: 0,
        y: 0,
        animname: ""
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},

    Test: function Test(inf, offset) {
        console.debug(inf);
        if (this.down <= inf && inf <= this.up) {
            console.debug("itemOut");
            this.Out(offset);
        }
    },
    Out: function Out(offset) {

        var curitem = cc.instantiate(this.itemPrefab);
        this.scheduleOnce(function () {
            curitem.active = false;
        }, 10);
        this.back.addChild(curitem);
        console.debug(curitem.children[0].name);
        curitem.zindex = 1000;
        curitem.setPosition(this.x, offset + this.y);
        var itemanim = curitem.children[0].getComponent(cc.Animation);
        itemanim.play(this.animname);
    }

    // update (dt) {},
});

cc._RF.pop();