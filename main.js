let string = "";
let buttons = document.querySelectorAll('#button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (f) =>{
        if (f.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (f.target.innerHTML == 'AC') {
            string = "";   
            document.querySelector('input').value = string;
        }
        else if (f.target.innerHTML == 'DEL') {
            string = string.slice(0, -1); 
            document.querySelector('input').value = string;
        }
        else {
            
console.log(f.target)
        string = string + f.target.innerHTML;
        document.querySelector('input').value = string;
    }
})
});