export default class SplashScreen extends Phaser.Scene {

    logoMovement = {
        x: 1,
        y: 1
    };

    constructor(){
        super("SplashScreen");
    }

    preload(){
        this.load.image('logo', 'assets/images/that_games_guy_logo.png');
    }

    create(){
        this.logo = this.add.image(0, 0, 'logo').setOrigin(0, 0);

        this.input.keyboard.on('keydown', function (event) { 
            this.scene.start("GameScene");
            event.stopPropagation();
        }, this);
    }

    update(){
        this.logo.x += this.logoMovement.x;
        this.logo.y += this.logoMovement.y;

        if(this.logo.x + this.logo.displayWidth >= 512 || this.logo.x <= 0){
            this.logoMovement.x *= -1;
        }

        if(this.logo.y + this.logo.displayHeight >= 512 || this.logo.y <= 0){
            this.logoMovement.y *= -1;
        } 
    }
}