const config = {
    width:512,
    height:512,
    backgroundColor:"#36E89A",
    type:Phaser.AUTO,
    parent:'that_js_game', // parent div defined in index.html
    scene:[],
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