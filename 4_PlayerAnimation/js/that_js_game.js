import GameScene from "./scenes/GameScene.js";
import SplashScreen from "./scenes/SplashScreen.js";


const config = {
    width:512,
    height:512,
    backgroundColor:"#ffffff",
    type:Phaser.AUTO,
    parent:'that_js_game', // parent div defined in index.html
    scene:[SplashScreen, GameScene],
    physics: {
        default: 'matter', // use matter physics engine
        matter: {
            debug:true, // draw colliders
            gravity: {y:0} // disable gravity
        }
    },
    plugins: {
        scene: [{
            plugin:PhaserMatterCollisionPlugin, // Plugin class
            key:"matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
            mapping:"matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
        }]
    }
}

new Phaser.Game(config);