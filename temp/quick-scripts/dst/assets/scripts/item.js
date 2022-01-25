
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e60fbG3dzpBGZPX5ZrM25Nm', 'item');
// scripts/item.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    itemPrefab: {
      "default": null,
      type: cc.Prefab
    },
    back: {
      "default": null,
      type: cc.Node
    },
    up: 0,
    down: 0,
    x: 0,
    y: 0,
    animname: ""
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  Test: function Test(inf, offset) {
    console.debug(inf);

    if (this.down <= inf && inf <= this.up) {
      console.debug("itemOut");
      this.Out(offset);
    }
  },
  Out: function Out(offset) {
    var curitem = cc.instantiate(this.itemPrefab);
    this.scheduleOnce(function () {
      curitem.active = false;
    }, 10);
    this.back.addChild(curitem);
    console.debug(curitem.children[0].name);
    curitem.zindex = 1000;
    curitem.setPosition(this.x, offset + this.y);
    var itemanim = curitem.children[0].getComponent(cc.Animation);
    itemanim.play(this.animname);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcaXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW1QcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwiYmFjayIsIk5vZGUiLCJ1cCIsImRvd24iLCJ4IiwieSIsImFuaW1uYW1lIiwic3RhcnQiLCJUZXN0IiwiaW5mIiwib2Zmc2V0IiwiY29uc29sZSIsImRlYnVnIiwiT3V0IiwiY3VyaXRlbSIsImluc3RhbnRpYXRlIiwic2NoZWR1bGVPbmNlIiwiYWN0aXZlIiwiYWRkQ2hpbGQiLCJjaGlsZHJlbiIsIm5hbWUiLCJ6aW5kZXgiLCJzZXRQb3NpdGlvbiIsIml0ZW1hbmltIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBQztBQUNQLGlCQUFRLElBREQ7QUFFUEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkQsS0FESDtBQUtSQyxJQUFBQSxJQUFJLEVBQUM7QUFDRCxpQkFBUSxJQURQO0FBRURGLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDUTtBQUZQLEtBTEc7QUFTUkMsSUFBQUEsRUFBRSxFQUFDLENBVEs7QUFVUkMsSUFBQUEsSUFBSSxFQUFDLENBVkc7QUFXUkMsSUFBQUEsQ0FBQyxFQUFDLENBWE07QUFZUkMsSUFBQUEsQ0FBQyxFQUFDLENBWk07QUFhUkMsSUFBQUEsUUFBUSxFQUFDO0FBYkQsR0FIUDtBQW1CTDtBQUVBO0FBRUFDLEVBQUFBLEtBdkJLLG1CQXVCSSxDQUVSLENBekJJO0FBMEJMQyxFQUFBQSxJQUFJLEVBQUMsY0FBU0MsR0FBVCxFQUFhQyxNQUFiLEVBQW9CO0FBQ3JCQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0gsR0FBZDs7QUFDQSxRQUFHLEtBQUtOLElBQUwsSUFBV00sR0FBWCxJQUFnQkEsR0FBRyxJQUFFLEtBQUtQLEVBQTdCLEVBQWdDO0FBQzVCUyxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxTQUFkO0FBQ0EsV0FBS0MsR0FBTCxDQUFTSCxNQUFUO0FBQ0g7QUFDSixHQWhDSTtBQWlDTEcsRUFBQUEsR0FBRyxFQUFDLGFBQVNILE1BQVQsRUFBZ0I7QUFFaEIsUUFBSUksT0FBTyxHQUFFckIsRUFBRSxDQUFDc0IsV0FBSCxDQUFlLEtBQUtsQixVQUFwQixDQUFiO0FBQ0EsU0FBS21CLFlBQUwsQ0FBa0IsWUFBVztBQUN6QkYsTUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCLEtBQWpCO0FBQ0gsS0FGRCxFQUVHLEVBRkg7QUFHQSxTQUFLakIsSUFBTCxDQUFVa0IsUUFBVixDQUFtQkosT0FBbkI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWNFLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQixDQUFqQixFQUFvQkMsSUFBbEM7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxNQUFSLEdBQWlCLElBQWpCO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsV0FBUixDQUFvQixLQUFLbEIsQ0FBekIsRUFBMkJNLE1BQU0sR0FBQyxLQUFLTCxDQUF2QztBQUNBLFFBQUlrQixRQUFRLEdBQUdULE9BQU8sQ0FBQ0ssUUFBUixDQUFpQixDQUFqQixFQUFvQkssWUFBcEIsQ0FBaUMvQixFQUFFLENBQUNnQyxTQUFwQyxDQUFmO0FBQ0FGLElBQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEtBQUtwQixRQUFuQjtBQUNILEdBN0NJLENBK0NMOztBQS9DSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtUHJlZmFiOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhY2s6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwOjAsXHJcbiAgICAgICAgZG93bjowLFxyXG4gICAgICAgIHg6MCxcclxuICAgICAgICB5OjAsXHJcbiAgICAgICAgYW5pbW5hbWU6XCJcIixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBUZXN0OmZ1bmN0aW9uKGluZixvZmZzZXQpe1xyXG4gICAgICAgIGNvbnNvbGUuZGVidWcoaW5mKTtcclxuICAgICAgICBpZih0aGlzLmRvd248PWluZiYmaW5mPD10aGlzLnVwKXtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIml0ZW1PdXRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuT3V0KG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIE91dDpmdW5jdGlvbihvZmZzZXQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBjdXJpdGVtID1jYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1QcmVmYWIpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjdXJpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgICAgICB0aGlzLmJhY2suYWRkQ2hpbGQoY3VyaXRlbSk7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhjdXJpdGVtLmNoaWxkcmVuWzBdLm5hbWUpO1xyXG4gICAgICAgIGN1cml0ZW0uemluZGV4ID0gMTAwMDtcclxuICAgICAgICBjdXJpdGVtLnNldFBvc2l0aW9uKHRoaXMueCxvZmZzZXQrdGhpcy55KTtcclxuICAgICAgICBsZXQgaXRlbWFuaW0gPSBjdXJpdGVtLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIGl0ZW1hbmltLnBsYXkodGhpcy5hbmltbmFtZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19