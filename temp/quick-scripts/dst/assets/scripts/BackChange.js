
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BackChange.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '123dfvoCpRBCZtKVLrDqQN4', 'BackChange');
// scripts/BackChange.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    SpriteFrame1: {
      "default": null,
      type: cc.SpriteFrame
    },
    SpriteFrame2: {
      "default": null,
      type: cc.SpriteFrame
    },
    SpriteFrame3: {
      "default": null,
      type: cc.SpriteFrame
    },
    CycleFrame: {
      "default": null,
      type: cc.SpriteFrame
    },
    back: {
      "default": null,
      type: cc.Prefab
    },
    width: 0,
    height: 0,
    offset: 0,
    movespeed: 0,
    rate: 0,
    downtime: 0,
    time: 0,
    begincycle: false,
    alloffset: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    //初始化图片
    console.debug(this.alloffset);
    var hblew = 0;
    this.createSprite(this.SpriteFrame1, hblew);
    hblew += this.width * this.rate;
    this.createSprite(this.SpriteFrame2, hblew);
    hblew += this.width * this.rate;
    this.createSprite(this.SpriteFrame3, hblew);
    hblew += this.width * this.rate;
    var curcyc = cc.instantiate(this.back);
    this.node.addChild(curcyc);
    var size = this.CycleFrame.getOriginalSize();
    this.rate = size.height / size.width;
    curcyc.setPosition(this.width / 2, hblew + this.width * this.rate / 2);
    curcyc.width = this.width;
    curcyc.height = this.width * this.rate;
    var sprite = curcyc.getComponent(cc.Sprite);
    sprite.spriteFrame = this.CycleFrame;
  },
  createSprite: function createSprite(sf, hblew) {
    var cur = cc.instantiate(this.back);
    var size = sf.getOriginalSize();
    this.rate = size.height / size.width;
    console.debug(this.rate);
    this.zindex = -1000; //cur.setLocalZOrder(-1);

    this.node.addChild(cur);
    var curspr = cur.getComponent(cc.Sprite);
    curspr.spriteFrame = sf;
    cur.width = this.width; //this.height = this.width*this.rate;

    cur.height = this.width * this.rate;
    cur.setPosition(cur.width / 2, hblew + cur.height / 2);
  },
  movedown: function movedown() {
    this.node.y -= this.movespeed;
    this.offset += this.movespeed;
    this.alloffset += this.movespeed; //console.debug(this.node.children[0].height+this.node.children[1].height);
    //console.debug(this.offset);

    if (this.begincycle == false) {
      //判断是否该加载图片
      if (this.offset + this.height + 600 >= this.node.children[0].height + this.node.children[1].height) {
        //600为预加载
        this.changeframe();
      }
    } else {
      var lower;
      var heigher;

      if (this.node.children[0].y < this.node.children[1].y) {
        lower = this.node.children[0];
        heigher = this.node.children[1]; //console.debug("1");
      } else {
        lower = this.node.children[1];
        heigher = this.node.children[0]; //console.debug("2");
      }

      if (this.offset + 600 >= heigher.height) {
        //600为预加载
        this.changeframe();
      }
    }
  },
  startdown: function startdown() {
    //开始下移外部调用
    this.time = 0;
  },
  update: function update(dt) {
    if (this.time < this.downtime) {
      this.movedown();
      this.time += dt;
    }

    this.getComponent('midwayEvent').eventTrigger(this.alloffset, this.offset); // console.debug(this.alloffset);
  },
  changeframe: function changeframe() {
    //切换图片
    var lower;
    var heigher;

    if (this.node.children[0].y < this.node.children[1].y) {
      lower = this.node.children[0];
      heigher = this.node.children[1];
      console.debug("1");
    } else {
      lower = this.node.children[1];
      heigher = this.node.children[0];
      console.debug("2");
    }

    console.debug("change");
    var size = this.CycleFrame.getOriginalSize();
    this.rate = size.height / size.width; //let cur = this.node.children[0];
    //console.debug(lower.y);
    //console.debug(heigher.y);

    lower.y += heigher.height + lower.height;
    lower.y -= this.offset;
    heigher.y -= this.offset; //console.debug(lower.y);
    //console.debug(heigher.y);

    var sprite = lower.getComponent(cc.Sprite);
    sprite.width = this.width;
    sprite.height = this.width * this.rate;
    this.node.setPosition(-630, -1170);
    this.offset = 0;
    console.debug(this.offset);
    sprite.spriteFrame = this.CycleFrame;
    this.begincycle = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmFja0NoYW5nZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlNwcml0ZUZyYW1lMSIsInR5cGUiLCJTcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lMiIsIlNwcml0ZUZyYW1lMyIsIkN5Y2xlRnJhbWUiLCJiYWNrIiwiUHJlZmFiIiwid2lkdGgiLCJoZWlnaHQiLCJvZmZzZXQiLCJtb3Zlc3BlZWQiLCJyYXRlIiwiZG93bnRpbWUiLCJ0aW1lIiwiYmVnaW5jeWNsZSIsImFsbG9mZnNldCIsInN0YXJ0IiwiY29uc29sZSIsImRlYnVnIiwiaGJsZXciLCJjcmVhdGVTcHJpdGUiLCJjdXJjeWMiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNpemUiLCJnZXRPcmlnaW5hbFNpemUiLCJzZXRQb3NpdGlvbiIsInNwcml0ZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwic2YiLCJjdXIiLCJ6aW5kZXgiLCJjdXJzcHIiLCJtb3ZlZG93biIsInkiLCJjaGlsZHJlbiIsImNoYW5nZWZyYW1lIiwibG93ZXIiLCJoZWlnaGVyIiwic3RhcnRkb3duIiwidXBkYXRlIiwiZHQiLCJldmVudFRyaWdnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxZQUFZLEVBQUU7QUFDVixpQkFBUyxJQURDO0FBRVZDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZDLEtBRE47QUFLUkMsSUFBQUEsWUFBWSxFQUFDO0FBQ1QsaUJBQVEsSUFEQztBQUVURixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQSxLQUxMO0FBU1JFLElBQUFBLFlBQVksRUFBQztBQUNULGlCQUFRLElBREM7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QUFMLEdBQWEsS0FBS0ksSUFBbEM7QUFDQSxTQUFLWSxJQUFMLENBQVVJLFdBQVYsQ0FBc0IsQ0FBQyxHQUF2QixFQUE0QixDQUFDLElBQTdCO0FBQ0EsU0FBS2xCLE1BQUwsR0FBYyxDQUFkO0FBQ0FRLElBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLEtBQUtULE1BQW5CO0FBQ0FtQixJQUFBQSxNQUFNLENBQUNHLFdBQVAsR0FBcUIsS0FBSzNCLFVBQTFCO0FBQ0EsU0FBS1UsVUFBTCxHQUFrQixJQUFsQjtBQUNILEdBeEpBLENBeUpEOztBQXpKQyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFNwcml0ZUZyYW1lMToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNwcml0ZUZyYW1lMjp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTcHJpdGVGcmFtZTM6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIEN5Y2xlRnJhbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZHRoOiAwLFxyXG4gICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICBvZmZzZXQ6IDAsXHJcbiAgICAgICAgbW92ZXNwZWVkOiAwLFxyXG4gICAgICAgIHJhdGU6IDAsXHJcbiAgICAgICAgZG93bnRpbWU6IDAsXHJcbiAgICAgICAgdGltZTogMCxcclxuICAgICAgICBiZWdpbmN5Y2xlOiBmYWxzZSxcclxuICAgICAgICBhbGxvZmZzZXQ6MCxcclxuICAgIH0sXHJcbiAgIFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCgpIHsgLy/liJ3lp4vljJblm77niYdcclxuICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMuYWxsb2Zmc2V0KTtcclxuICAgICBcclxuICAgICAgICBsZXQgaGJsZXcgPSAwO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3ByaXRlKHRoaXMuU3ByaXRlRnJhbWUxLGhibGV3KTtcclxuICAgICAgICBoYmxldys9dGhpcy53aWR0aCp0aGlzLnJhdGU7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTcHJpdGUodGhpcy5TcHJpdGVGcmFtZTIsaGJsZXcpO1xyXG4gICAgICAgIGhibGV3Kz10aGlzLndpZHRoKnRoaXMucmF0ZTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNwcml0ZSh0aGlzLlNwcml0ZUZyYW1lMyxoYmxldyk7XHJcbiAgICAgICAgaGJsZXcrPXRoaXMud2lkdGgqdGhpcy5yYXRlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBjdXJjeWMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhY2spO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjdXJjeWMpO1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5DeWNsZUZyYW1lLmdldE9yaWdpbmFsU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMucmF0ZSA9IHNpemUuaGVpZ2h0IC8gc2l6ZS53aWR0aDtcclxuICAgICAgICBjdXJjeWMuc2V0UG9zaXRpb24odGhpcy53aWR0aCAvIDIsIGhibGV3KyB0aGlzLndpZHRoICogdGhpcy5yYXRlIC8gMik7XHJcbiAgICAgICAgY3VyY3ljLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBjdXJjeWMuaGVpZ2h0ID0gdGhpcy53aWR0aCAqIHRoaXMucmF0ZTtcclxuICAgICAgICBsZXQgc3ByaXRlID0gY3VyY3ljLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuQ3ljbGVGcmFtZTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVNwcml0ZTpmdW5jdGlvbihzZixoYmxldyl7XHJcbiAgICAgICAgdmFyIGN1ciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFjayk7XHJcbiAgICAgICAgbGV0IHNpemUgPSBzZi5nZXRPcmlnaW5hbFNpemUoKTtcclxuICAgICAgICB0aGlzLnJhdGUgPSBzaXplLmhlaWdodCAvIHNpemUud2lkdGg7XHJcbiAgICAgICAgY29uc29sZS5kZWJ1Zyh0aGlzLnJhdGUpO1xyXG4gICAgICAgIHRoaXMuemluZGV4ID0gLTEwMDA7XHJcbiAgICAgICAgLy9jdXIuc2V0TG9jYWxaT3JkZXIoLTEpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjdXIpO1xyXG4gICAgICAgIGxldCBjdXJzcHIgPSBjdXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgY3Vyc3ByLnNwcml0ZUZyYW1lID0gc2Y7XHJcbiAgICAgICAgY3VyLndpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICAvL3RoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aCp0aGlzLnJhdGU7XHJcbiAgICAgICAgY3VyLmhlaWdodCA9IHRoaXMud2lkdGggKiB0aGlzLnJhdGU7XHJcbiAgICAgICAgY3VyLnNldFBvc2l0aW9uKGN1ci53aWR0aCAvIDIsIGhibGV3K2N1ci5oZWlnaHQgLyAyKTtcclxuICAgIH0sXHJcblxyXG4gICAgbW92ZWRvd246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS55IC09IHRoaXMubW92ZXNwZWVkO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ICs9IHRoaXMubW92ZXNwZWVkO1xyXG4gICAgICAgIHRoaXMuYWxsb2Zmc2V0ICs9dGhpcy5tb3Zlc3BlZWQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRoaXMubm9kZS5jaGlsZHJlblswXS5oZWlnaHQrdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmhlaWdodCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmRlYnVnKHRoaXMub2Zmc2V0KTtcclxuICAgICAgICBpZiAodGhpcy5iZWdpbmN5Y2xlID09IGZhbHNlKSB7IC8v5Yik5pat5piv5ZCm6K+l5Yqg6L295Zu+54mHXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldCArIHRoaXMuaGVpZ2h0ICsgNjAwID49IHRoaXMubm9kZS5jaGlsZHJlblswXS5oZWlnaHQgKyB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uaGVpZ2h0KSB7IC8vNjAw5Li66aKE5Yqg6L29XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWZyYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbG93ZXI7XHJcbiAgICAgICAgICAgIGxldCBoZWlnaGVyO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuWzBdLnkgPCB0aGlzLm5vZGUuY2hpbGRyZW5bMV0ueSkge1xyXG4gICAgICAgICAgICAgICAgbG93ZXIgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICBoZWlnaGVyID0gdGhpcy5ub2RlLmNoaWxkcmVuWzFdO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKFwiMVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvd2VyID0gdGhpcy5ub2RlLmNoaWxkcmVuWzFdO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2hlciA9IHRoaXMubm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1ZyhcIjJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0ICsgNjAwID49IGhlaWdoZXIuaGVpZ2h0KSB7IC8vNjAw5Li66aKE5Yqg6L29XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWZyYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHN0YXJ0ZG93bjogZnVuY3Rpb24oKSB7IC8v5byA5aeL5LiL56e75aSW6YOo6LCD55SoXHJcbiAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lIDwgdGhpcy5kb3dudGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVkb3duKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSArPSBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoJ21pZHdheUV2ZW50JykuZXZlbnRUcmlnZ2VyKHRoaXMuYWxsb2Zmc2V0LHRoaXMub2Zmc2V0KTtcclxuICAgICAgIC8vIGNvbnNvbGUuZGVidWcodGhpcy5hbGxvZmZzZXQpO1xyXG5cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VmcmFtZTogZnVuY3Rpb24oKSB7IC8v5YiH5o2i5Zu+54mHXHJcbiAgICAgICAgICAgIGxldCBsb3dlcjtcclxuICAgICAgICAgICAgbGV0IGhlaWdoZXI7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5bMF0ueSA8IHRoaXMubm9kZS5jaGlsZHJlblsxXS55KSB7XHJcbiAgICAgICAgICAgICAgICBsb3dlciA9IHRoaXMubm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgIGhlaWdoZXIgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMV07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiMVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvd2VyID0gdGhpcy5ub2RlLmNoaWxkcmVuWzFdO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2hlciA9IHRoaXMubm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCIyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gdGhpcy5DeWNsZUZyYW1lLmdldE9yaWdpbmFsU2l6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJhdGUgPSBzaXplLmhlaWdodCAvIHNpemUud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAvL2xldCBjdXIgPSB0aGlzLm5vZGUuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5kZWJ1Zyhsb3dlci55KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKGhlaWdoZXIueSk7XHJcbiAgICAgICAgICAgIGxvd2VyLnkgKz0gaGVpZ2hlci5oZWlnaHQgKyBsb3dlci5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxvd2VyLnkgLT0gdGhpcy5vZmZzZXQ7XHJcbiAgICAgICAgICAgIGhlaWdoZXIueSAtPSB0aGlzLm9mZnNldDtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmRlYnVnKGxvd2VyLnkpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuZGVidWcoaGVpZ2hlci55KTtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IGxvd2VyLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBzcHJpdGUud2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgICAgICBzcHJpdGUuaGVpZ2h0ID0gdGhpcy53aWR0aCAqIHRoaXMucmF0ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC02MzAsIC0xMTcwKTtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKHRoaXMub2Zmc2V0KTtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5DeWNsZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmJlZ2luY3ljbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7Il19