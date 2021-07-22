// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        flag: 1,
        waveAngle: 30,
        waveSpeed: 1
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.angleTimer = 0;
        this.Anglespeed = 0;
    },

    changeSpeed: function(s) {
        this.waveSpeed = s;
    },


    update(dt) {
        this.angleTimer += this.waveSpeed * dt;
        this.Anglespeed = Math.cos(this.angleTimer);
        this.node.angle += this.Anglespeed * this.waveAngle * this.flag * this.waveSpeed * dt;

    },
});