
/* TODO
1. Character movement:
+ using CSS animation
+ using JS to config left & top of spritesheet (example: http://www.rleonardi.com/interactive-resume/)
*/

class Character {
    constructor() {
        this.body = document.getElementById("character");
    }

    moveToLeft() {
        let _body = this.body;
        _body.style.left = _body.offsetLeft + 25 + "px";
    }

    moveToRight() {
        let _body = this.body;
        _body.style.left = _body.offsetLeft - 25 + "px";
    }

    jumpUpLeft() {}

    jumpUpRight() {}   
}

export default Character;