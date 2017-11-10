
/* TODO
1. Character movement:
+ using CSS animation
+ using JS to config left & top of spritesheet (example: http://www.rleonardi.com/interactive-resume/)
*/

class Character {
    constructor() {
        this.body = document.getElementById("character");
    }

    getBodyLeft() {
        return this.body.offsetLeft;
    }

    moveToLeft() {
        let _body = this.body;
        _body.style.left = _body.offsetLeft + 25 + "px";
    }

    moveToRight() {
        let _body = this.body;
        let reducer = _body.offsetLeft - 25;
        _body.style.left = ((reducer <= 0) ? 0 : reducer) + "px";
    }

    jumpUpLeft() {}

    jumpUpRight() {}   
}

export default Character;