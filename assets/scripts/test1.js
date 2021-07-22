// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        texture: {
            default: null,
            type: cc.Texture2D,
        },
        spriteFrame: {
            default: null,
            type: cc.SpriteFrame,
        },
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad: function () {
        var spriteFrame = this.spriteFrame;
        var texture = this.texture;
        //spriteFrame.setTexture(texture);
    },

    start () {

    },

    update (dt) {
        console.debug(this.node.convertToWorldSpaceAR(cc.v2(-540,-1200)));
    },
});
