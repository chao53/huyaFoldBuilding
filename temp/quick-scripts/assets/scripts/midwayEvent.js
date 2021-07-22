(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/midwayEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4d11dEr5CZBBYqnAFGsWkLQ', 'midwayEvent', __filename);
// scripts/midwayEvent.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        itemloader: {
            default: null,
            type: cc.Node
        },
        birdloader: {
            default: null,
            type: cc.Node
        },

        interval: 0
    },
    curinterval: 0,

    start: function start() {
        this.curinterval = this.interval + 1;
    },


    eventTrigger: function eventTrigger(inf, offset) {
        if (this.curinterval >= this.interval) {
            console.debug("about to out");
            var choice = Math.round(Math.random() * 2);
            switch (choice) {
                case 1:
                    this.itemloader.getComponent('item').Test(inf, offset);
                    break;
                case 2:
                    this.birdloader.getComponent('item').Test(inf, offset);
                    break;

            }

            this.curinterval = 0;
        }
        this.curinterval++;
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
        //# sourceMappingURL=midwayEvent.js.map
        