/* Style */
import '../scss/main.scss'

/* Script */
import Character from './character.js';
import Controller from './controller.js';

class Main {
    constructor() {
        this.character = null;
    }

    init() {
        this.character = new Character();
        this.controller = new Controller();
    }

    handleController() {
        let { controller, character } = this;
        controller.handle(character);
    }
}

(function(){
    var main = new Main();
    main.init();
    main.handleController();
}());


