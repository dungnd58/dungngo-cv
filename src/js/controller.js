
class Controller {
    constructor() {}
    
    handle(character) {
        document.addEventListener('keydown', function(e) {
            if(e.key == "ArrowDown") {
                character.moveToLeft();
            } else if (e.key == "ArrowUp") {
                character.moveToRight();
            } else {
                return;
            }
        });
    }
}

export default Controller;