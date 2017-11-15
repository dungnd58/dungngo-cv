/* Style */
import '../scss/main.scss'

/* Script */
import Character from './character.js';
import Controller from './controller.js';

(function(){
    var character, controller;
    
    var init = () => {
        character = new Character();
        controller = new Controller();
    }

    var handleController = () => {
        controller.handle(character);
    };

    var edit = () => {
        $.ajax('http://localhost:3000/', {
            method: 'POST',
            data: {
                name: "username4",
                password: "12345678"
            },
            success: function(data){
                console.log(data)
            },
            error: function(err) {
                console.log(err)
            }
        })
    }

    init();
    handleController();
}());


