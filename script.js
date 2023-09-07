let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button'); //to select all buttons
let string = ""; //to store result
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => { //when click on button then what
        if (e.target.innerHTML == '=') {
            string = eval(string); //evaluate the result and return it
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;

        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;

        } else {
            string += e.target.innerHTML;
            input.value = string;

        }
    })

})