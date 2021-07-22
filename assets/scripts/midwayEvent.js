

cc.Class({
    extends: cc.Component,

    properties: {
        itemloader:{
            default:null,
            type:cc.Node,
        },
        birdloader:{
            default:null,
            type:cc.Node,
        },

        interval :0,
    },
    curinterval:0,

    start () {
        this.curinterval = this.interval+1;
    },

    eventTrigger:function(inf,offset){
        if(this.curinterval>=this.interval){
                console.debug("about to out");
                let choice = Math.round(Math.random()*2);
                switch(choice){
                    case 1: 
                    this.itemloader.getComponent('item').Test(inf,offset);
                    break;
                    case 2:
                    this.birdloader.getComponent('item').Test(inf,offset);
                    break;

                }
                
                this.curinterval = 0;
        }
        this.curinterval++;
    },

});
