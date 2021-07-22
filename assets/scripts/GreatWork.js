cc.Class({
    extends: cc.Component,

    properties: {
        Particle: {
            default: null,
            type: cc.Prefab,
        },
        target: {
            default: null,
            type: cc.Node,
        },
        speed: 0,
        deviation: 0,
        num: 0,
        mula: 0,
        length: 0,
        first: null,
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    phy: function() {

        this.px = 0;
        this.py = 0;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.particle = null;
        this.next = null;
        this.move = function() {
            this.px += this.vx;
            this.py += this.vy;

            this.particle.x = this.px;
            this.particle.y = this.py;
        }
        this.changespeed = function(target, mula) {
            let targetx = target.x;
            let targety = target.y;
            //console.debug(targetx);
            //console.debug(this.px);
            //console.debug(targetx-this.px);

            let dx = targetx - this.px;
            let dy = targety - this.py;
            //console.debug(dx*dx+dy*dy);
            //console.debug(dx*dx/(dx*dx+dy*dy));
            //console.debug(dx*dx/(dx*dx+dy*dy)*mula);
            this.ax = dx * dx / (dx * dx + dy * dy) * mula;
            this.ay = dy * dy / (dx * dx + dy * dy) * mula;
            //console.debug(this.ax,this.ay);
            this.vx += this.ax;
            this.vy += this.ay;
        }
        this.init = function(particle, midx, speed) {
            console.debug("init");
            this.particle = particle;
            this.px = particle.x;
            this.py = particle.y;
            this.vx = (this.px - midx) * Math.random() * speed;
            this.vy = this.vy * Math.random() * speed * (-1);
        }

    },
    start() {
        this.first = new this.phy(this.Particle);
        console.debug("start");
    },

    createOne: function(particle) {
        console.debug("createOne");
        var newpar = new this.phy();
        newpar.init(particle, 0, this.speed);
        newpar.next = this.first.next;
        this.first.next = newpar;
    },

    create: function() {
        for (let i = 0; i < this.num; i++) {
            console.debug("create");
            let newpar = cc.instantiate(this.Particle);
            this.scheduleOnce(function() {
                //newpar.destroy();
            }, 0.1);
            let x = (Math.random() - Math.random() / 2) * 2 * this.length;
            newpar.setPosition(cc.v2(x, 2590, 0));
            this.node.addChild(newpar);
            this.createOne(newpar);
        }

    },


    update(dt) {
        let poi = this.first.next;
        while (poi != null) {
            poi.changespeed(this.target, this.mula);
            poi.move();
            poi = poi.next;
        }
    },
});