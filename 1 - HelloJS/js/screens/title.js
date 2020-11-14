game.TitleScreen = me.Stage.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        this.bg = new me.Sprite(0, 0, {
            image : "that_games_guy_logo",
            framewidth : 500,
            frameheight : 500,
            anchorPoint : new me.Vector2d(0, 0)
        });

        me.game.world.addChild(this.bg);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.game.world.removeChild(this.bg);
    }
});
