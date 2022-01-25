
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/midwayEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d11dEr5CZBBYqnAFGsWkLQ', 'midwayEvent');
// scripts/midwayEvent.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    itemloader: {
      "default": null,
      type: cc.Node
    },
    birdloader: {
      "default": null,
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
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWlkd2F5RXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtbG9hZGVyIiwidHlwZSIsIk5vZGUiLCJiaXJkbG9hZGVyIiwiaW50ZXJ2YWwiLCJjdXJpbnRlcnZhbCIsInN0YXJ0IiwiZXZlbnRUcmlnZ2VyIiwiaW5mIiwib2Zmc2V0IiwiY29uc29sZSIsImRlYnVnIiwiY2hvaWNlIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiZ2V0Q29tcG9uZW50IiwiVGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBQztBQUNQLGlCQUFRLElBREQ7QUFFUEMsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRkQsS0FESDtBQUtSQyxJQUFBQSxVQUFVLEVBQUM7QUFDUCxpQkFBUSxJQUREO0FBRVBGLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZELEtBTEg7QUFVUkUsSUFBQUEsUUFBUSxFQUFFO0FBVkYsR0FIUDtBQWVMQyxFQUFBQSxXQUFXLEVBQUMsQ0FmUDtBQWlCTEMsRUFBQUEsS0FqQkssbUJBaUJJO0FBQ0wsU0FBS0QsV0FBTCxHQUFtQixLQUFLRCxRQUFMLEdBQWMsQ0FBakM7QUFDSCxHQW5CSTtBQXFCTEcsRUFBQUEsWUFBWSxFQUFDLHNCQUFTQyxHQUFULEVBQWFDLE1BQWIsRUFBb0I7QUFDN0IsUUFBRyxLQUFLSixXQUFMLElBQWtCLEtBQUtELFFBQTFCLEVBQW1DO0FBQzNCTSxNQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBYyxjQUFkO0FBQ0EsVUFBSUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsQ0FBekIsQ0FBYjs7QUFDQSxjQUFPSCxNQUFQO0FBQ0ksYUFBSyxDQUFMO0FBQ0EsZUFBS1osVUFBTCxDQUFnQmdCLFlBQWhCLENBQTZCLE1BQTdCLEVBQXFDQyxJQUFyQyxDQUEwQ1QsR0FBMUMsRUFBOENDLE1BQTlDO0FBQ0E7O0FBQ0EsYUFBSyxDQUFMO0FBQ0EsZUFBS04sVUFBTCxDQUFnQmEsWUFBaEIsQ0FBNkIsTUFBN0IsRUFBcUNDLElBQXJDLENBQTBDVCxHQUExQyxFQUE4Q0MsTUFBOUM7QUFDQTtBQU5KOztBQVVBLFdBQUtKLFdBQUwsR0FBbUIsQ0FBbkI7QUFDUDs7QUFDRCxTQUFLQSxXQUFMO0FBQ0g7QUF0Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGl0ZW1sb2FkZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpcmRsb2FkZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBpbnRlcnZhbCA6MCxcclxuICAgIH0sXHJcbiAgICBjdXJpbnRlcnZhbDowLFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmN1cmludGVydmFsID0gdGhpcy5pbnRlcnZhbCsxO1xyXG4gICAgfSxcclxuXHJcbiAgICBldmVudFRyaWdnZXI6ZnVuY3Rpb24oaW5mLG9mZnNldCl7XHJcbiAgICAgICAgaWYodGhpcy5jdXJpbnRlcnZhbD49dGhpcy5pbnRlcnZhbCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiYWJvdXQgdG8gb3V0XCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNob2ljZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoyKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChjaG9pY2Upe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTogXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtbG9hZGVyLmdldENvbXBvbmVudCgnaXRlbScpLlRlc3QoaW5mLG9mZnNldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmlyZGxvYWRlci5nZXRDb21wb25lbnQoJ2l0ZW0nKS5UZXN0KGluZixvZmZzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJpbnRlcnZhbCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VyaW50ZXJ2YWwrKztcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19