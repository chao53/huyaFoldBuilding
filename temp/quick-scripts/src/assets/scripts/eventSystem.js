"use strict";
cc._RF.push(module, '59df4Wq2V1Ij7FfbTDyPpKA', 'eventSystem');
// scripts/eventSystem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    background: {
      "default": null,
      type: cc.Node
    },
    gameOverPanle: {
      "default": null,
      type: cc.Layout
    },
    gameOverPanle_failed: {
      "default": null,
      type: cc.Layout
    },
    gameOverScore: {
      "default": null,
      type: cc.Label
    },
    floorPrefab: {
      "default": null,
      type: cc.Prefab
    },
    fakefloor: {
      "default": null,
      type: cc.Node
    },
    rope: {
      "default": null,
      type: cc.Node
    },
    lastfloor: {
      "default": null,
      type: cc.Node
    },
    particlePrefab: {
      "default": null,
      type: cc.Prefab
    },
    particlePrefab2: {
      "default": null,
      type: cc.Prefab
    },
    particlePrefab3: {
      "default": null,
      type: cc.Prefab
    },
    layoutStart: {
      "default": null,
      type: cc.Layout
    },
    time: {
      "default": null,
      type: cc.Label
    },
    music: {
      "default": null,
      type: cc.AudioClip
    },
    effect: {
      "default": null,
      type: cc.AudioClip
    },
    effect1: {
      "default": null,
      type: cc.AudioClip
    },
    perfect: {
      "default": null,
      type: cc.Node
    },
    flag: true
  },
  onLoad: function onLoad() {
    // this.choice = true;
    this.isPerfect = false;
    this.flag_number = 0;
    this.flag_start = false;
    this.isOver = false;
    this.count = 60;
    this.score = 0;
    this.fallside = 0;
    this.angleSpeed = 0;
    this.angleTimer = 0;
    this.shakeAnglespeed = 0;
    this.perfect.active = false;
    this.node.on('touchend', function (event) {
      if (this.flag && !this.isOver && this.flag_start) {
        this.spawnNewFloor();
      }
    }.bind(this));
    this.node.on('mousedown', function (event) {
      if (this.flag && !this.isOver && this.flag_start) {
        this.spawnNewFloor();
      }
    }.bind(this));
  },
  // LIFE-CYCLE CALLBACKS:
  start: function start() {},
  spawnNewFloor: function spawnNewFloor() {
    // 使用给定的模板在场景中生成一个新节点
    var newfloor = cc.instantiate(this.floorPrefab);
    this.node.addChild(newfloor);
    newfloor.getComponent('floorScript').bindnode(this.lastfloor, this.node);
    newfloor.getComponent('floorScript').changeSprite(this.fakefloor.getComponent('fakefloorScript').id);
    this.lastfloor = newfloor;
    newfloor.setPosition(this.fakefloor.convertToWorldSpaceAR(cc.v2(-630 + 3300 * Math.sin(this.node.angle * Math.PI / 180), 1840)));
    this.hideFakeFloor();
  },
  hideFakeFloor: function hideFakeFloor() {
    this.flag = false;
    var self = this;
    console.debug("0");
    this.scheduleOnce(function () {
      var newPar = cc.instantiate(self.particlePrefab);
      this.current = cc.audioEngine.play(this.effect, false, 0.3); //

      self.node.addChild(newPar);
      newPar.setPosition(cc.v2(0, 2590, 0));
      var newPar2 = cc.instantiate(self.particlePrefab2);
      self.node.addChild(newPar2);
      newPar2.setPosition(cc.v2(0, 2590, 0));
      console.debug('particles');
    }, 0.4);
    this.background.getComponent('BackChange').scheduleOnce(function () {
      this.startdown();
      self.changeWaveSpeed();

      if (self.isPerfect) {
        self.changeScore();
        console.debug("perfect");
        var newPar3 = cc.instantiate(self.particlePrefab3);
        self.node.addChild(newPar3);
        newPar3.setPosition(cc.v2(0, 3300, 0));
        console.debug('flower'); //this.getComponent('GreatWork').scheduleOnce(function() {
        //console.debug("create particle");
        //this.create();
        //}, 0.4)
      }

      self.isPerfect = false;
    }, 0.7); //console.debug("1");

    this.scheduleOnce(function () {
      if (self.isPerfect) {
        this.current1 = cc.audioEngine.play(this.effect1, false, 0.5); //第二个音效

        this.perfect.active = false;
      }
    }, 0.7);
    this.lastfloor.getComponent('floorScript').scheduleOnce(function () {
      this.changeState();
    }, 0.7);
    this.fakefloor.getComponent('fakefloorScript').changeTexture(1);
    this.fakefloor.getComponent('fakefloorScript').scheduleOnce(function () {
      // 这里的 this 指向 component
      this.changeTexture(2);

      if (!self.isOver) {
        self.flag = true;
        self.changeScore();
      }
    }, 0.7);
  },
  changeWaveSpeed: function changeWaveSpeed() {
    if (this.score <= 50) {
      this.rope.getComponent('pendulumScript').changeSpeed(this.score / 20 + 1.5);
      this.fakefloor.getComponent('pendulumScript').changeSpeed(this.score / 20 + 1.5);
    }
  },
  VeryPerfect: function VeryPerfect() {
    this.perfect.active = true;
    this.isPerfect = true;
  },
  changeScore: function changeScore() {
    this.score++;
    this.scoreDisplay.string = 'Score: ' + this.score;
  },
  gameOver: function gameOver() {
    if (!this.isOver) {
      this.isOver = true;
    }

    if (this.flag_number == 0) {
      this.scheduleOnce(function () {
        this.gameOverPanle.node.active = true;
        this.gameOverScore.string = this.score;
        this.gameOverScore.node.active = true;
        console.debug("panel_end");
      }, 1.5);
    }

    if (this.flag_number == 1) {
      this.scheduleOnce(function () {
        this.gameOverPanle_failed.node.active = true;
        this.gameOverScore.string = this.score;
        this.gameOverScore.node.active = true;
        console.debug("panel_fail");
      }, 1.5);
    }
  },
  falldown: function falldown(i) {
    if (!this.isOver) {
      this.fallside = i; // this.choice = false;

      this.gameOver();
    }
  },
  LayoutOn: function LayoutOn() {
    this.layoutStart.node.active = true;
  },
  LayoutOff: function LayoutOff() {
    this.layoutStart.node.active = false;
    this.flag_start = true; // console.debug("close");
  },
  buttonOne: function buttonOne() {
    this.LayoutOff();
    this.time.string = ''; // console.debug('button one')
  },
  buttonTwo: function buttonTwo() {
    this.flag_number = 1;
    this.choice = false;
    this.LayoutOff();
    this.iniTime();
  },
  iniTime: function iniTime() {
    // if (this.count >= 0) {
    this.schedule(function () {
      this.countdown();
    }, 1); // }
  },
  countdown: function countdown() {
    if (this.count >= 1) {
      this.count = this.count - 1;
      this.time.string = this.count + 's';
      cc.log("countdown:" + this.count);
    } else {
      this.flag_number = 0;
      this.gameOver();
    }
  },
  restar: function restar() {
    this.gameOverScore.node.active = false;
    cc.director.loadScene('1');
  },
  update: function update(dt) {
    if (this.fallside == 1) {
      if (this.node.angle < 90) {
        this.angleSpeed += 50 * dt;
        this.node.angle += this.angleSpeed * dt;
      }
    } else if (this.fallside == -1) {
      if (this.node.angle > -90) {
        this.angleSpeed += 50 * dt;
        this.node.angle -= this.angleSpeed * dt;
      }
    } else if (this.score >= 5 && this.score <= 35) {
      this.angleTimer += dt;
      this.shakeAnglespeed = Math.cos(this.angleTimer);
      this.node.angle += this.shakeAnglespeed * (this.score / 5) * dt;
    } else if (this.score >= 35) {
      this.angleTimer += dt;
      this.shakeAnglespeed = Math.cos(this.angleTimer);
      this.node.angle += this.shakeAnglespeed * 5 * dt;
    }
  }
});

cc._RF.pop();