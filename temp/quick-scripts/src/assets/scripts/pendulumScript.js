"use strict";
cc._RF.push(module, '48f73+RfzlDAofK8Q3RZ22G', 'pendulumScript');
// scripts/pendulumScript.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    flag: 1,
    waveAngle: 30,
    waveSpeed: 1
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.angleTimer = 0;
    this.Anglespeed = 0;
  },
  changeSpeed: function changeSpeed(s) {
    this.waveSpeed = s;
  },
  update: function update(dt) {
    this.angleTimer += this.waveSpeed * dt;
    this.Anglespeed = Math.cos(this.angleTimer);
    this.node.angle += this.Anglespeed * this.waveAngle * this.flag * this.waveSpeed * dt;
  }
});

cc._RF.pop();