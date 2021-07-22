"use strict";
cc._RF.push(module, '4d11dEr5CZBBYqnAFGsWkLQ', 'midwayEvent');
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