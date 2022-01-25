
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pendulumScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGVuZHVsdW1TY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmbGFnIiwid2F2ZUFuZ2xlIiwid2F2ZVNwZWVkIiwib25Mb2FkIiwiYW5nbGVUaW1lciIsIkFuZ2xlc3BlZWQiLCJjaGFuZ2VTcGVlZCIsInMiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJjb3MiLCJub2RlIiwiYW5nbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUUsQ0FERTtBQUVSQyxJQUFBQSxTQUFTLEVBQUUsRUFGSDtBQUdSQyxJQUFBQSxTQUFTLEVBQUU7QUFISCxHQUhQO0FBU0w7QUFFQUMsRUFBQUEsTUFYSyxvQkFXSTtBQUNMLFNBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsV0FBVyxFQUFFLHFCQUFTQyxDQUFULEVBQVk7QUFDckIsU0FBS0wsU0FBTCxHQUFpQkssQ0FBakI7QUFDSCxHQWxCSTtBQXFCTEMsRUFBQUEsTUFyQkssa0JBcUJFQyxFQXJCRixFQXFCTTtBQUNQLFNBQUtMLFVBQUwsSUFBbUIsS0FBS0YsU0FBTCxHQUFpQk8sRUFBcEM7QUFDQSxTQUFLSixVQUFMLEdBQWtCSyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxLQUFLUCxVQUFkLENBQWxCO0FBQ0EsU0FBS1EsSUFBTCxDQUFVQyxLQUFWLElBQW1CLEtBQUtSLFVBQUwsR0FBa0IsS0FBS0osU0FBdkIsR0FBbUMsS0FBS0QsSUFBeEMsR0FBK0MsS0FBS0UsU0FBcEQsR0FBZ0VPLEVBQW5GO0FBRUg7QUExQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGZsYWc6IDEsXHJcbiAgICAgICAgd2F2ZUFuZ2xlOiAzMCxcclxuICAgICAgICB3YXZlU3BlZWQ6IDFcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYW5nbGVUaW1lciA9IDA7XHJcbiAgICAgICAgdGhpcy5BbmdsZXNwZWVkID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgY2hhbmdlU3BlZWQ6IGZ1bmN0aW9uKHMpIHtcclxuICAgICAgICB0aGlzLndhdmVTcGVlZCA9IHM7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLmFuZ2xlVGltZXIgKz0gdGhpcy53YXZlU3BlZWQgKiBkdDtcclxuICAgICAgICB0aGlzLkFuZ2xlc3BlZWQgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlVGltZXIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSArPSB0aGlzLkFuZ2xlc3BlZWQgKiB0aGlzLndhdmVBbmdsZSAqIHRoaXMuZmxhZyAqIHRoaXMud2F2ZVNwZWVkICogZHQ7XHJcblxyXG4gICAgfSxcclxufSk7Il19