export default class GameScene extends Phaser.Scene {
    constructor(){
        super("GameScene");
    }

    preload(){
        console.log('GameScene - preload');
    }

    create(){
        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world);
        this.inputKeys = this.input.keyboard.addKeys({
            up: Phaser.Input.Keyboard.KeyCodes.W,
            left: Phaser.Input.Keyboard.KeyCodes.A,
            down: Phaser.Input.Keyboard.KeyCodes.S,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    update(){
        let playerVel = this.calculatePlayerVelocity();
        this.player.setVelocity(playerVel.x, playerVel.y);
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