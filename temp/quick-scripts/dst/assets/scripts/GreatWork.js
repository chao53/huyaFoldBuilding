
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GreatWork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb297yYSFpMc4WB/wk+MSXB', 'GreatWork');
// scripts/GreatWork.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    Particle: {
      "default": null,
      type: cc.Prefab
    },
    target: {
      "default": null,
      type: cc.Node
    },
    speed: 0,
    deviation: 0,
    num: 0,
    mula: 0,
    length: 0,
    first: null
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  phy: function phy() {
    this.px = 0;
    this.py = 0;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.particle = null;
    this.next = null;

    this.move = function () {
      this.px += this.vx;
      this.py += this.vy;
      this.particle.x = this.px;
      this.particle.y = this.py;
    };

    this.changespeed = function (target, mula) {
      var targetx = target.x;
      var targety = target.y; //console.debug(targetx);
      //console.debug(this.px);
      //console.debug(targetx-this.px);

      var dx = targetx - this.px;
      var dy = targety - this.py; //console.debug(dx*dx+dy*dy);
      //console.debug(dx*dx/(dx*dx+dy*dy));
      //console.debug(dx*dx/(dx*dx+dy*dy)*mula);

      this.ax = dx * dx / (dx * dx + dy * dy) * mula;
      this.ay = dy * dy / (dx * dx + dy * dy) * mula; //console.debug(this.ax,this.ay);

      this.vx += this.ax;
      this.vy += this.ay;
    };

    this.init = function (particle, midx, speed) {
      console.debug("init");
      this.particle = particle;
      this.px = particle.x;
      this.py = particle.y;
      this.vx = (this.px - midx) * Math.random() * speed;
      this.vy = this.vy * Math.random() * speed * -1;
    };
  },
  start: function start() {
    this.first = new this.phy(this.Particle);
    console.debug("start");
  },
  createOne: function createOne(particle) {
    console.debug("createOne");
    var newpar = new this.phy();
    newpar.init(particle, 0, this.speed);
    newpar.next = this.first.next;
    this.first.next = newpar;
  },
  create: function create() {
    for (var i = 0; i < this.num; i++) {
      console.debug("create");
      var newpar = cc.instantiate(this.Particle);
      this.scheduleOnce(function () {//newpar.destroy();
      }, 0.1);
      var x = (Math.random() - Math.random() / 2) * 2 * this.length;
      newpar.setPosition(cc.v2(x, 2590, 0));
      this.node.addChild(newpar);
      this.createOne(newpar);
    }
  },
  update: function update(dt) {
    var poi = this.first.next;

    while (poi != null) {
      poi.changespeed(this.target, this.mula);
      poi.move();
      poi = poi.next;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JlYXRXb3JrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiUGFydGljbGUiLCJ0eXBlIiwiUHJlZmFiIiwidGFyZ2V0IiwiTm9kZSIsInNwZWVkIiwiZGV2aWF0aW9uIiwibnVtIiwibXVsYSIsImxlbmd0aCIsImZpcnN0IiwicGh5IiwicHgiLCJweSIsInZ4IiwidnkiLCJheCIsImF5IiwicGFydGljbGUiLCJuZXh0IiwibW92ZSIsIngiLCJ5IiwiY2hhbmdlc3BlZWQiLCJ0YXJnZXR4IiwidGFyZ2V0eSIsImR4IiwiZHkiLCJpbml0IiwibWlkeCIsImNvbnNvbGUiLCJkZWJ1ZyIsIk1hdGgiLCJyYW5kb20iLCJzdGFydCIsImNyZWF0ZU9uZSIsIm5ld3BhciIsImNyZWF0ZSIsImkiLCJpbnN0YW50aWF0ZSIsInNjaGVkdWxlT25jZSIsInNldFBvc2l0aW9uIiwidjIiLCJub2RlIiwiYWRkQ2hpbGQiLCJ1cGRhdGUiLCJkdCIsInBvaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkgsS0FERjtBQUtSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBUyxJQURMO0FBRUpGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZMLEtBTEE7QUFTUkMsSUFBQUEsS0FBSyxFQUFFLENBVEM7QUFVUkMsSUFBQUEsU0FBUyxFQUFFLENBVkg7QUFXUkMsSUFBQUEsR0FBRyxFQUFFLENBWEc7QUFZUkMsSUFBQUEsSUFBSSxFQUFFLENBWkU7QUFhUkMsSUFBQUEsTUFBTSxFQUFFLENBYkE7QUFjUkMsSUFB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Q0o7QUF2R0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBQYXJ0aWNsZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwZWVkOiAwLFxyXG4gICAgICAgIGRldmlhdGlvbjogMCxcclxuICAgICAgICBudW06IDAsXHJcbiAgICAgICAgbXVsYTogMCxcclxuICAgICAgICBsZW5ndGg6IDAsXHJcbiAgICAgICAgZmlyc3Q6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG4gICAgcGh5OiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5weCA9IDA7XHJcbiAgICAgICAgdGhpcy5weSA9IDA7XHJcbiAgICAgICAgdGhpcy52eCA9IDA7XHJcbiAgICAgICAgdGhpcy52eSA9IDA7XHJcbiAgICAgICAgdGhpcy5heCA9IDA7XHJcbiAgICAgICAgdGhpcy5heSA9IDA7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5weCArPSB0aGlzLnZ4O1xyXG4gICAgICAgICAgICB0aGlzLnB5ICs9IHRoaXMudnk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlLnggPSB0aGlzLnB4O1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlLnkgPSB0aGlzLnB5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZXNwZWVkID0gZnVuY3Rpb24odGFyZ2V0LCBtdWxhKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXR4ID0gdGFyZ2V0Lng7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXR5ID0gdGFyZ2V0Lnk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zyh0YXJnZXR4KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRoaXMucHgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcodGFyZ2V0eC10aGlzLnB4KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkeCA9IHRhcmdldHggLSB0aGlzLnB4O1xyXG4gICAgICAgICAgICBsZXQgZHkgPSB0YXJnZXR5IC0gdGhpcy5weTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKGR4KmR4K2R5KmR5KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKGR4KmR4LyhkeCpkeCtkeSpkeSkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoZHgqZHgvKGR4KmR4K2R5KmR5KSptdWxhKTtcclxuICAgICAgICAgICAgdGhpcy5heCA9IGR4ICogZHggLyAoZHggKiBkeCArIGR5ICogZHkpICogbXVsYTtcclxuICAgICAgICAgICAgdGhpcy5heSA9IGR5ICogZHkgLyAoZHggKiBkeCArIGR5ICogZHkpICogbXVsYTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRoaXMuYXgsdGhpcy5heSk7XHJcbiAgICAgICAgICAgIHRoaXMudnggKz0gdGhpcy5heDtcclxuICAgICAgICAgICAgdGhpcy52eSArPSB0aGlzLmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXQgPSBmdW5jdGlvbihwYXJ0aWNsZSwgbWlkeCwgc3BlZWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcImluaXRcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGUgPSBwYXJ0aWNsZTtcclxuICAgICAgICAgICAgdGhpcy5weCA9IHBhcnRpY2xlLng7XHJcbiAgICAgICAgICAgIHRoaXMucHkgPSBwYXJ0aWNsZS55O1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gKHRoaXMucHggLSBtaWR4KSAqIE1hdGgucmFuZG9tKCkgKiBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy52eSA9IHRoaXMudnkgKiBNYXRoLnJhbmRvbSgpICogc3BlZWQgKiAoLTEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdCA9IG5ldyB0aGlzLnBoeSh0aGlzLlBhcnRpY2xlKTtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwic3RhcnRcIik7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZU9uZTogZnVuY3Rpb24ocGFydGljbGUpIHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKFwiY3JlYXRlT25lXCIpO1xyXG4gICAgICAgIHZhciBuZXdwYXIgPSBuZXcgdGhpcy5waHkoKTtcclxuICAgICAgICBuZXdwYXIuaW5pdChwYXJ0aWNsZSwgMCwgdGhpcy5zcGVlZCk7XHJcbiAgICAgICAgbmV3cGFyLm5leHQgPSB0aGlzLmZpcnN0Lm5leHQ7XHJcbiAgICAgICAgdGhpcy5maXJzdC5uZXh0ID0gbmV3cGFyO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW07IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiY3JlYXRlXCIpO1xyXG4gICAgICAgICAgICBsZXQgbmV3cGFyID0gY2MuaW5zdGFudGlhdGUodGhpcy5QYXJ0aWNsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy9uZXdwYXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IChNYXRoLnJhbmRvbSgpIC0gTWF0aC5yYW5kb20oKSAvIDIpICogMiAqIHRoaXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBuZXdwYXIuc2V0UG9zaXRpb24oY2MudjIoeCwgMjU5MCwgMCkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3cGFyKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVPbmUobmV3cGFyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IHBvaSA9IHRoaXMuZmlyc3QubmV4dDtcclxuICAgICAgICB3aGlsZSAocG9pICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcG9pLmNoYW5nZXNwZWVkKHRoaXMudGFyZ2V0LCB0aGlzLm11bGEpO1xyXG4gICAgICAgICAgICBwb2kubW92ZSgpO1xyXG4gICAgICAgICAgICBwb2kgPSBwb2kubmV4dDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTsiXX0=