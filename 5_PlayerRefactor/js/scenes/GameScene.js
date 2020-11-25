import KeyboardControlComponent from "../components/KeyboardControlComponent.js";
import MatterSpriteComponent from "../components/MatterSpriteComponent.js";
import AnimationComponent from "../components/AnimationComponent.js";
import ComponentObject from "../object/ComponentObject.js";


export default class GameScene extends Phaser.Scene {
    constructor(){
        super("GameScene");
    }

    preload(){
        //TODO: think of solution to enable calling of preload on all components in scene with specifying them individually
        MatterSpriteComponent.preload(this);
        KeyboardControlComponent.preload(this);
        AnimationComponent.preload(this);
    }

    create(){
        // Create player object
        this.player = new ComponentObject(this, "Player");
        
        var spriteComponent = new MatterSpriteComponent({scene:this, x:0, y:0, texture:'butcher', frame:'butcher_idle_1'});
        this.player.addComponent(spriteComponent, 'Sprite');
        
        var controlComponent = new KeyboardControlComponent();
        this.player.addComponent(controlComponent, 'KeyboardController');

        var animComponent = new AnimationComponent();
        this.player.addComponent(animComponent, 'Animation');

        this.player.initAllComponents();
    }

    update(){
        this.player.update();
    }
}