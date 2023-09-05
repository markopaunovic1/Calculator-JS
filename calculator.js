const buttonElements = document.getElementsByClassName('button');
const result = document.getElementById('result');
let firstInput = true;

//const signElement = document.getElementsByClassName('calc_sign');

// 1.
/* for(let i=0 ; i<numberElements.length ; i++) {
    numberElements[i].addEventListener ...
} */

// 2.
/* Array.from(numberElements).forEach(Element => {
    Element.addEventListener ...
})  */

// 3.
for(const buttonElement of buttonElements ) {
    buttonElement.addEventListener('click', () => {
        buttonListener(buttonElement);
    })
}

const buttonListener = (button) => {
    if(button.innerText == '=') {
        calculate();
    } else {
        display(button.innerText);
    }
}

const clearResult = () => {
    result.innerText = '';
}

const display = (value) => {
    if(firstInput) {
        clearResult();
        firstInput = false;
    }
    result.innerText += value
}

const calculate = () => {
    let res = eval(result.innerText); // andvänd ej eval!!
    display('=' + res);
    firstInput = true;
}