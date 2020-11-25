export default class KeyboardControlComponent {
    constructor(){}

    static preload(scene){}

    init(scene){
        this.inputKeys = scene.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });

        this.matterSprite = this.parent.getComponent('Sprite');
    }

    update(){
        let playerVel = this.calculatePlayerVelocity();
        this.matterSprite.setVelocity(playerVel.x, playerVel.y);
    }

    calculatePlayerVelocity(){
        const speed = 2.5;
        let playerVel = new Phaser.Math.Vector2();
       
        if(this.inputKeys.right.isDown){
            playerVel.x = 1;
        } else if(this.inputKeys.left.isDown){
            playerVel.x = -1;
        }

        if(this.inputKeys.up.isDown){
            playerVel.y = -1;
        } else if(this.inputKeys.down.isDown){
            playerVel.y = 1;
        }

        playerVel.normalize();
        playerVel.scale(speed);

        return playerVel;
    }
}