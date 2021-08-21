`use strict`

// Variables
const _base = document.querySelector('#base');
const _height = document.querySelector('#height');

let checkButton = document.querySelector('#tell_me');
let result = document.querySelector('.result');

function clickHandeler() {
    let base = Number(_base.value);
    let height = Number(_height.value);

    let sumOf_squareOfBaseAnd_squareOfheight = Math.pow(base, 2) + Math.pow(height, 2);

    let hypotenuse = Math.pow(sumOf_squareOfBaseAnd_squareOfheight, 0.5);

    result.innerText = `The length of hypotenuse is ${hypotenuse.toFixed(2)}`;
}

checkButton.addEventListener('click', clickHandeler);