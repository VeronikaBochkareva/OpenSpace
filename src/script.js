let ok = document.getElementById("ok");
let password = document.getElementById("password");
let input = document.getElementsByTagName('input');
let launch = document.getElementById("launch");
let checkbox = document.getElementsByClassName("checkbox");
let range = document.getElementsByClassName("range");
let rocket = document.getElementById("rocket");

//#1 password verification
function activation() {
    if (password.value === "TrustNo1") {
        for (let i = 0; i < input.length; i++) {
            input[i].removeAttribute("disabled");
        }
        password.setAttribute("disabled", "");
        ok.setAttribute("disabled", "");
        launch.setAttribute("disabled", "");
    }
}
ok.addEventListener("click", activation);

//#2.1 testing checkbox
for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].onchange = function(){unlock()};
}

//#2.2 testing range
for(let i = 0; i < range.length; i++) {
    range[i].onchange = function(){unlock()};
}

//#2.3 unlock launch
function unlock() {
    let countCheckbox = 0;
    let countRange = 0;

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true)
            countCheckbox++;
    }
    for (let i = 0; i < range.length; i++) {
        if (range[i].value == 100)
            countRange++;
    }

    if (countCheckbox == checkbox.length && countRange == range.length)
        launch.removeAttribute("disabled");
}
function start() {rocket.animate([
    { // current position of your rocket
        left: '240px',
        bottom: '-225px'
    },
    { //  final position of your rocket
        left: '440px',
        bottom: '117px'
    }
], {
    // timing options
    duration: 2000,
    iterations: 1
})}

launch.addEventListener("click", function() {rocket.animate([
    { // current position of your rocket
        left: '400px',
        bottom: '350px'
    },
    { //  final position of your rocket
        left: '600px',
        bottom: '1100px'
    }
], {
    // timing options
    duration: 2000,
    iterations: 1
})})