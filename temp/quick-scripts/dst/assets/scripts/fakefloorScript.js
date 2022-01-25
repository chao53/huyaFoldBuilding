
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/fakefloorScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '110fas8IV9IhopKq9bZv7Yq', 'fakefloorScript');
// scripts/fakefloorScript.js

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
    spriteFrame1: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame2: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame3: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame4: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame5: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame6: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame7: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame8: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame9: {
      "default": null,
      type: cc.SpriteFrame
    },
    spriteFrame10: {
      "default": null,
      type: cc.SpriteFrame
    },
    id: 2
  },
  // LIFE-CYCLE CALLBACKS:
  changeTexture: function changeTexture(i) {
    console.debug(i);
    var self = this;
    var spriteFrame;

    switch (i) {
      case 1:
        spriteFrame = this.spriteFrame1;
        self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        break;

      case 2:
        this.id = Math.floor(Math.random() * (12 - 3)) + 2;
        console.debug(this.id);

        switch (this.id) {
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
        break;

      default:
        break;
    }
  },
  getId: function getId() {
    return this.id;
  },
  start: function start() {},
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZmFrZWZsb29yU2NyaXB0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3ByaXRlRnJhbWUxIiwidHlwZSIsIlNwcml0ZUZyYW1lIiwic3ByaXRlRnJhbWUyIiwic3ByaXRlRnJhbWUzIiwic3ByaXRlRnJhbWU0Iiwic3ByaXRlRnJhbWU1Iiwic3ByaXRlRnJhbWU2Iiwic3ByaXRlRnJhbWU3Iiwic3ByaXRlRnJhbWU4Iiwic3ByaXRlRnJhbWU5Iiwic3ByaXRlRnJhbWUxMCIsImlkIiwiY2hhbmdlVGV4dHVyZSIsImkiLCJjb25zb2xlIiwiZGVidWciLCJzZWxmIiwic3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ2V0SWQiLCJzdGFydCIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsWUFBWSxFQUFFO0FBQ1YsaUJBQVMsSUFEQztBQUVWQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQyxLQUROO0FBS1JDLElBQUFBLFlBQVksRUFBRTtBQUNWLGlCQUFTLElBREM7QUFFVkYsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkMsS0FMTjtBQVNSRSxJQUFBQSxZQUFZLEVBQUU7QUFDVixpQkFBUyxJQURDO0FBRVZILE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZDLEtBVE47QUFhUkcsSUFBQUEsWUFBWSxFQUFFO0FBQ1YsaUJBQVMsSUFEQztBQUVWSixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQyxLQWJOO0FBaUJS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ZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHNwcml0ZUZyYW1lMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lMjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lMzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lNDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lNToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lNjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lNzoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lODoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lOToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwcml0ZUZyYW1lMTA6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpZCA6IDJcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICBjaGFuZ2VUZXh0dXJlOiBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoaSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzcHJpdGVGcmFtZTtcclxuICAgICAgICBzd2l0Y2goaSl7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZTE7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEyIC0gMykpICsgMjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcodGhpcy5pZCk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWUzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWU2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZTc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUZyYW1lODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWU5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlRnJhbWUxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRJZDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9LFxyXG59KTtcclxuIl19