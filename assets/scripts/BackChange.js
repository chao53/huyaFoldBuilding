cc.Class({
    extends: cc.Component,

    properties: {
        SpriteFrame1: {
            default: null,
            type: cc.SpriteFrame,
        },
        SpriteFrame2:{
            default:null,
            type: cc.SpriteFrame,
        },
        SpriteFrame3:{
            default:null,
            type: cc.SpriteFrame,
        },

        CycleFrame: {
            default: null,
            type: cc.SpriteFrame,
        },
        back: {
            default: null,
            type: cc.Prefab,
        },
        width: 0,
        height: 0,
        offset: 0,
        movespeed: 0,
        rate: 0,
        downtime: 0,
        time: 0,
        begincycle: false,
        alloffset:0,
    },
   

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() { //初始化图片
        console.debug(this.alloffset);
     
        let hblew = 0;
        this.createSprite(this.SpriteFrame1,hblew);
        hblew+=this.width*this.rate;
        this.createSprite(this.SpriteFrame2,hblew);
        hblew+=this.width*this.rate;
        this.createSprite(this.SpriteFrame3,hblew);
        hblew+=this.width*this.rate;
        
        var curcyc = cc.instantiate(this.back);
        this.node.addChild(curcyc);
        let size = this.CycleFrame.getOriginalSize();
        this.rate = size.height / size.width;
        curcyc.setPosition(this.width / 2, hblew+ this.width * this.rate / 2);
        curcyc.width = this.width;
        curcyc.height = this.width * this.rate;
        let sprite = curcyc.getComponent(cc.Sprite);
        sprite.spriteFrame = this.CycleFrame;

    },

    createSprite:function(sf,hblew){
        var cur = cc.instantiate(this.back);
        let size = sf.getOriginalSize();
        this.rate = size.height / size.width;
        console.debug(this.rate);
        this.zindex = -1000;
        //cur.setLocalZOrder(-1);
        this.node.addChild(cur);
        let curspr = cur.getComponent(cc.Sprite);
        curspr.spriteFrame = sf;
        cur.width = this.width;
        //this.height = this.width*this.rate;
        cur.height = this.width * this.rate;
        cur.setPosition(cur.width / 2, hblew+cur.height / 2);
    },

    movedown: function() {
        this.node.y -= this.movespeed;
        this.offset += this.movespeed;
        this.alloffset +=this.movespeed;
        //console.debug(this.node.children[0].height+this.node.children[1].height);
        //console.debug(this.offset);
        if (this.begincycle == false) { //判断是否该加载图片
            if (this.offset + this.height + 600 >= this.node.children[0].height + this.node.children[1].height) { //600为预加载
                this.changeframe();
            }
        } else {
            let lower;
            let heigher;
            if (this.node.children[0].y < this.node.children[1].y) {
                lower = this.node.children[0];
                heigher = this.node.children[1];
                //console.debug("1");
            } else {
                lower = this.node.children[1];
                heigher = this.node.children[0];
                //console.debug("2");
            }
            if (this.offset + 600 >= heigher.height) { //600为预加载
                this.changeframe();
            }
        }

    },
    startdown: function() { //开始下移外部调用
        this.time = 0;
    },
    update(dt) {
        if (this.time < this.downtime) {
            this.movedown();
            this.time += dt;
        }
        this.getComponent('midwayEvent').eventTrigger(this.alloffset,this.offset);
       // console.debug(this.alloffset);

    },
    changeframe: function() { //切换图片
            let lower;
            let heigher;
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
            let size = this.CycleFrame.getOriginalSize();
            this.rate = size.height / size.width;

            //let cur = this.node.children[0];
            //console.debug(lower.y);
            //console.debug(heigher.y);
            lower.y += heigher.height + lower.height;
            lower.y -= this.offset;
            heigher.y -= this.offset;
            //console.debug(lower.y);
            //console.debug(heigher.y);
            let sprite = lower.getComponent(cc.Sprite);
            sprite.width = this.width;
            sprite.height = this.width * this.rate;
            this.node.setPosition(-630, -1170);
            this.offset = 0;
            console.debug(this.offset);
            sprite.spriteFrame = this.CycleFrame;
            this.begincycle = true;
        }
        // update (dt) {},
});