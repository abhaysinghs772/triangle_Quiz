`use strict`

// Variables
const angle_1 = document.querySelector('#angle-1');
const angle_2 = document.querySelector('#angle-2');
const angle_3 = document.querySelector('#angle-3');

let isTriangle = document.querySelector('#tell_me');
let result = document.querySelector('.result');

function clickHandeler() {

    // console.log('clicked');
    let sum_Of_angles = Number(angle_1.value) + Number(angle_2.value) + Number(angle_3.value);

    if (sum_Of_angles === 180) {
        result.innerText = "Yay, the angles form a triangle!"
    } else {
        result.innerText = "Oh Oh! The angle doesn't form a triangle";
    }
}

isTriangle.addEventListener('click', clickHandeler);