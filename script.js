// Inputs
const input = document.querySelector('.vname');
const check = document.querySelector('.input');
const range = document.querySelector('.form-range');

// Reset
range.value = 100;
input.value = '';
check.checked = true;

// Ev
range.addEventListener('change',async function () {t = Number(range.value);})
input.addEventListener('input',async function () {q = input.value;})
check.addEventListener('change',async function () {w = check.checked;})

// IO
function io(str) {input.value = str;};

// Random
function rand() {return String.fromCharCode(Math.floor(Math.random() * (122 - 65 + 1)) + 65);}

// Random str
let q = rand();

// Active
let w = check.checked;

// Time
let t = 100;


setInterval(function (){
    if (w) {
        for (let i = 0; i < 9; i++) {if (w) {setTimeout(function () {io(q + rand());}, t*(i+1));};};
        q += rand();
        io(q);
    };
},t*9);