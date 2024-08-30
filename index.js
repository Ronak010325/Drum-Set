//Mouse Click or Touch
var arr = document.querySelectorAll(".drum");
for (var i = 0 ; i < arr.length ; i++) {
    arr[i].addEventListener("click" , function () {
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button);
    });
}

//Keyboard presss
document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    console.log(key);
    switch (key) {
        case 'w':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
        break;
        case 'a':
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
        break;
        case 's':
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
        break;
        case 'd':
            var sound = new Audio("sounds/tom-4.mp3");
            sound.play();
        break;
        case 'j':
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
        break;
        case 'k':
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
        break;
        case 'l':
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
        break;
    }
}

//Adding .pressed class which is already defined in the CSS and removeing after some time to make an effect.
//Using Query Selector
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    },100);
}