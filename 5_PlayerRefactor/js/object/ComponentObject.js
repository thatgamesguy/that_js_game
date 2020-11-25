export default class ComponentObject extends Phaser.GameObjects.GameObject {
    constructor(scene, type){
        super(scene, type);
        this.components = [];
    }

    initAllComponents(){
        //TODO: this should only to be called after all components added, refactor to enforce
        for(var i = 0; i < this.components.length; ++i) {
            this.components[i].component.init(this.scene);
        }
    }

    update(){
        for(var i = 0; i < this.components.length; ++i) {
            this.components[i].component.update();
        }
    }

    addComponent(component, type){
        //TODO: look into language features that will allow us to instantiate component here (possibly with reflection)
        component.parent = this;
        this.components.push({component, type});
    }

    getComponent(type){
        var componentEntry = this.components.find(x => x.type === type);
        if (componentEntry != undefined) {
            return componentEntry.component;
        }

        return undefined;
    }
}