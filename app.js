(function() {

let buttons = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let clear  = document.querySelector(".btn-clear");
let equals = document.querySelector(".btn-equals");


buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equals.addEventListener('click', function(e) {
    if (screen.value === '') {
        screen.value = "";
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})


})(); 