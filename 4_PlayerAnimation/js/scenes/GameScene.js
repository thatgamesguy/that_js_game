export default class GameScene extends Phaser.Scene {
    constructor(){
        super("GameScene");
    }

    preload(){
        this.load.atlas('butcher', 'assets/animations/butcher/butcher.png', 'assets/animations/butcher/butcher_atlas.json');
        this.load.animation('butcher_anim', 'assets/animations/butcher/butcher_anim.json');
    }

    create(){
        this.player = new Phaser.Physics.Matter.Sprite(this.matter.world, 0, 0, 'butcher', 'butcher_idle_1');
        this.add.existing(this.player); // Adds matter sprite to scene
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

        this.updateAnimation(playerVel);
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

    updateAnimation(playerVel){
        if(playerVel.x == 0 && playerVel.y == 0){
            this.player.anims.play('butcher_idle', true);
        } else{
            this.player.anims.play('butcher_walk', true);
        }
    }
}