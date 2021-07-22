(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/pendulumScript.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '48f73+RfzlDAofK8Q3RZ22G', 'pendulumScript', __filename);
// scripts/pendulumScript.js

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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=pendulumScript.js.map
        