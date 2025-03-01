let display=document.querySelector('#inputbox');
//let Butn=document.querySelectorAll('button');

let Butn = Array.from(document.querySelectorAll('button')); // Convert NodeList to an Array

let string = ""; // Initialize an empty string

// Iterate through the buttons using forEach
Butn.forEach((butn) => {
    butn.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === "AC") {
            string = ""; // Reset the string
            display.value = "";
        } else if (value === "DEL") {
            string = string.substring(0, string.length - 1); // Remove the last character
            display.value = string;
        } else if (value === "=") {
            try {
                string = eval(string).toString(); // Evaluate the expression and convert to string
                display.value = string;
            } catch {
                display.value = "Error"; // Handle errors in the expression
                string = ""; // Reset the string
            }
        } else {
            string += value; // Append the value to the string
            display.value = string; // Update the display
        }
    });
});


/*Butn.forEach(function (butn){
    butn.addEventListener('click',function (e){
        if(e.target.innerHTML == "AC"){
            display.value='';
        }
        else if(e.target.innerHTML == "DEL"){
            display.value=display.value.slice(0,-1);
        }
        else if(e.target.innerHTML == "="){
            display.value=eval(display.value);
        }
        else{
            display.value+=e.target.innerHTML;
        }
    });
});*/