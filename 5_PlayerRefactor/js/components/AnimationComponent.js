export default class AnimationComponent {
    constructor(){}

    static preload(scene){
        //TODO: move anim paths/names to constructor
        scene.load.animation('butcher_anim', 'assets/animations/butcher/butcher_anim.json');
    }

    init(scene){
        this.matterSprite = this.parent.getComponent("Sprite");
    }

    update(){
        var playerVel = this.matterSprite.getVelocity();
        const walkVel = 0;
        if(Math.abs(playerVel.x) > walkVel || Math.abs(playerVel.y) > walkVel){
            this.matterSprite.anims.play('butcher_walk', true);
        } else{
            this.matterSprite.anims.play('butcher_idle', true);
        }
    }

}