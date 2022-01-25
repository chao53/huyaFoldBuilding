
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/test1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a0b1pMSU1IN6jaTCgGK1Eb', 'test1');
// scripts/test1.js

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
    texture: {
      "default": null,
      type: cc.Texture2D
    },
    spriteFrame: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var spriteFrame = this.spriteFrame;
    var texture = this.texture; //spriteFrame.setTexture(texture);
  },
  start: function start() {},
  update: function update(dt) {
    console.debug(this.node.convertToWorldSpaceAR(cc.v2(-540, -1200)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGVzdDEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0dXJlIiwidHlwZSIsIlRleHR1cmUyRCIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJvbkxvYWQiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiY29uc29sZSIsImRlYnVnIiwibm9kZSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsaUJBQVMsSUFESjtBQUVMQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSixLQUREO0FBS1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNRO0FBRkE7QUFMTCxHQUhQO0FBY0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFFBQUlGLFdBQVcsR0FBRyxLQUFLQSxXQUF2QjtBQUNBLFFBQUlILE9BQU8sR0FBRyxLQUFLQSxPQUFuQixDQUZnQixDQUdoQjtBQUNILEdBbkJJO0FBcUJMTSxFQUFBQSxLQXJCSyxtQkFxQkksQ0FFUixDQXZCSTtBQXlCTEMsRUFBQUEsTUF6Qkssa0JBeUJHQyxFQXpCSCxFQXlCTztBQUNSQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxLQUFLQyxJQUFMLENBQVVDLHFCQUFWLENBQWdDaEIsRUFBRSxDQUFDaUIsRUFBSCxDQUFNLENBQUMsR0FBUCxFQUFXLENBQUMsSUFBWixDQUFoQyxDQUFkO0FBQ0g7QUEzQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHR1cmU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuVGV4dHVyZTJELFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3ByaXRlRnJhbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgIHZhciB0ZXh0dXJlID0gdGhpcy50ZXh0dXJlO1xyXG4gICAgICAgIC8vc3ByaXRlRnJhbWUuc2V0VGV4dHVyZSh0ZXh0dXJlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigtNTQwLC0xMjAwKSkpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==