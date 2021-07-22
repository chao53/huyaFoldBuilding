"use strict";
cc._RF.push(module, '94032hOeHhD/KJDGlLPBcCb', 'floorScript');
// scripts/floorScript.js

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
        lastfloor: {
            default: null,
            type: cc.Node
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
        world: {
            default: null,
            type: cc.Node
        },
        state: 0, //1-4正常 5销毁 6直线下坠 7向左滚
        target: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.accelerate = 5000;
        this.speed = 0;
        this.angleSpeed = 0;
        this.barycenter1 = this.node.x;
        this.barycenter2 = this.node.x;
    },


    bindnode: function bindnode(node1, node2) {
        this.lastfloor = node1;
        this.world = node2;
    },

    changeState: function changeState() {
        if (this.state < 4) {
            this.state += 1;
            this.lastfloor.getComponent('floorScript').changeState();
        } else if (this.state == 4) {
            this.node.active = false;
        }
    },

    changeState2: function changeState2(i) {
        this.state = i;
    },

    getbarycenter: function getbarycenter() {
        //返回重心
        return this.barycenter1;
    },

    getLastpos1: function getLastpos1() {
        //返回下层坐标
        return this.lastfloor.x;
    },

    getLastpos2: function getLastpos2() {
        //返回下下层坐标
        return this.lastfloor.getComponent("floorScript").getLastpos1();
    },

    changeSprite: function changeSprite(id) {
        var self = this;
        var spriteFrame;
        switch (id) {
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
    },

    start: function start() {},
    update: function update(dt) {
        if (this.state == 0) {
            if (this.node.y > 2740) {
                this.speed += this.accelerate * dt;
                this.node.y -= this.speed * dt;
            } else {
                if (Math.abs(this.lastfloor.x - this.node.x) >= 500) {
                    //判断是否落空
                    this.state = 6;
                } else if (this.lastfloor.x - this.node.x > 250) {
                    //向左滚
                    this.state = 7;
                    this.node.anchorX = (this.lastfloor.x - this.node.x) / 500;
                    this.node.anchorY = 0; //重新设置锚点，基于锚点旋转
                    this.node.x += 500 * this.node.anchorX - 250;
                    this.node.y -= 150;
                } else if (this.lastfloor.x - this.node.x < -250) {
                    //向右滚
                    this.state = 8;
                    this.node.anchorX = 1 + (this.lastfloor.x - this.node.x) / 500;
                    this.node.anchorY = 0; //重新设置锚点，基于锚点旋转
                    this.node.x += 500 * this.node.anchorX - 250;
                    this.node.y -= 150;
                } else {
                    this.barycenter1 = (this.node.x + this.lastfloor.x) / 2;
                    this.barycenter2 = (this.node.x + 2 * this.lastfloor.getComponent("floorScript").getbarycenter()) / 3;
                    if (this.getLastpos2() - this.barycenter1 > 250 || this.lastfloor.getComponent("floorScript").getLastpos2() - this.barycenter2 > 250) {
                        this.world.getComponent('eventSystem').falldown(1);
                    } else if (this.getLastpos2() - this.barycenter1 < -250 || this.lastfloor.getComponent("floorScript").getLastpos2() - this.barycenter2 < -250) {
                        this.world.getComponent('eventSystem').falldown(-1);
                    } else {
                        this.node.y = 2740;
                    }
                    if (Math.abs(this.lastfloor.x - this.node.x) <= 30) {
                        this.world.getComponent('eventSystem').VeryPerfect();
                    }
                }
            }
        } else if (this.state == 1) {
            if (this.node.y > 2440) {
                this.node.y -= 428.57 * dt;
            } else {
                this.node.y = 2440;
            }
        } else if (this.state == 2) {
            if (this.node.y > 2140) {
                this.node.y -= 428.57 * dt;
            } else {
                this.node.y = 2140;
            }
        } else if (this.state == 3) {
            if (this.node.y > 1840) {
                this.node.y -= 428.57 * dt;
            } else {
                this.node.y = 1840;
            }
        } else if (this.state == 4) {
            if (this.node.y > 1540) {
                this.node.y -= 428.57 * dt;
            } else {
                this.node.y = 1540;
            }
        } else if (this.state == 5) {} else if (this.state == 6) {
            this.world.getComponent('eventSystem').gameOver();
            if (this.node.y > 1540) {
                this.speed += this.accelerate * dt;
                this.node.y -= this.speed * dt;
            } else {
                this.node.y = 1540;
            }
        } else if (this.state == 7) {
            if (this.node.angle < 90) {
                this.angleSpeed += 1000 * dt;
                this.node.angle += this.angleSpeed * dt;
            } else {
                this.state = 6;
            }
        } else if (this.state == 8) {
            if (this.node.angle > -90) {
                this.angleSpeed += 1000 * dt;
                this.node.angle -= this.angleSpeed * dt;
            } else {
                this.state = 6;
            }
        }
    }
});

cc._RF.pop();