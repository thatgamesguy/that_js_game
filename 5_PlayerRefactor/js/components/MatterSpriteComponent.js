export default class MatterSpriteComponent extends Phaser.Physics.Matter.Sprite {
    constructor(data){
        let {scene, x, y, texture, frame} = data;
        super(scene.matter.world, x, y, texture, frame);
    }

    static preload(scene){
        scene.load.atlas('butcher', 'assets/animations/butcher/butcher.png', 'assets/animations/butcher/butcher_atlas.json');
    }

    init(scene){
        scene.add.existing(this);
    }

    getVelocity(){
        return this.body.velocity;
    }
}