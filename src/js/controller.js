
class Controller {
    constructor() {}
    
    handle(character) {
        document.addEventListener('keydown', function(e) {
            if(e.key == "ArrowDown") {
                character.moveToLeft();
            } else if (e.key == "ArrowUp") {
                if (character.getBodyLeft() != 0) character.moveToRight();
                else return;
            } else {
                return;
            }
        });
    }
}

export default Controller;