let que = document.querySelector('h1');
let answers = document.querySelector('.answers');
let nextbtn = document.querySelector('.nextbutton');
let button1, button2, button3, button4;    
let createdbuttons = [];

let qc = 0;
let score = 0;

let block = () => { // nextbtn block
    nextbtn.style.display = 'block';
};

let none = () => { // nextbtn none
    nextbtn.style.display = 'none';
};

function mouseenter(e) {
    e.target.style.backgroundColor = 'white';
}

function mouseout(e) {
    e.target.style.backgroundColor = 'rgba(70, 176, 246, 0.3)';
}

function clearEventListeners() {
    createdbuttons.forEach(button => {
        button.removeEventListener('mouseenter', mouseenter);
        button.removeEventListener('mouseout', mouseout);
        button.removeEventListener('click', buttonClickHandler);
    });
}

// Handle button click
function buttonClickHandler(e) {
    if (e.target.innerText === 'Hyper text markup language') {
        e.target.style.backgroundColor = 'lightgreen';
        score++; // Increase score for "H"
    } else if (e.target.innerText === 'Cascading style sheat') {
        e.target.style.backgroundColor = 'lightgreen';
        score++; // Increase score for "Cascading style sheat"
    } else {
        e.target.style.backgroundColor = 'red';
    }

    createdbuttons.forEach(button => {
        button.disabled = true; // Disable all buttons after click
    });

    block(); // Show next button

    // Clear event listeners to prevent multiple triggers
    clearEventListeners();
}

nextbtn.addEventListener('click', () => {
    qc += 1;

    if (qc == 1) {
        button1 = document.createElement('button');
        button1.classList.add('ansbutn');
        answers.appendChild(button1);

        button2 = document.createElement('button');
        button2.classList.add('ansbutn');
        answers.appendChild(button2);

        button3 = document.createElement('button');
        button3.classList.add('ansbutn');
        answers.appendChild(button3);

        button4 = document.createElement('button');
        button4.classList.add('ansbutn');
        answers.appendChild(button4);

        createdbuttons = [button1, button2, button3, button4];

        que.innerText = '1. What is the full form of HTML.';
        button1.innerText = 'Hyper text markup language';
        button2.innerText = 'Hper text markup language';
        button3.innerText = 'hyper test markup language';
        button4.innerText = 'Hyper text markup languages';
        nextbtn.innerText = 'NEXT';
    } else if (qc == 2) {
        createdbuttons.forEach(function (button) {
            button.removeAttribute('disabled');
            button.style.backgroundColor = 'rgba(70, 176, 246, 0.3)';
        });

        que.innerText = '2. What is the full form of CSS.';
        button1.innerText = 'Clear style sheat';
        button2.innerText = 'Cascading sheat style';
        button3.innerText = 'clear styles sheat';
        button4.innerText = 'Cascading style sheat';
    } else if (qc == 3) {
        while (answers.firstChild) {
            answers.removeChild(answers.firstChild);
        }
        que.innerHTML = `CORRECT ANSWEARS ${score} out of 2`;
        nextbtn.innerText = 'RESTART';
        block();
        qc = 0;
        score = 0;
    }

    createdbuttons.forEach((button) => {
        // Add event listeners again when moving to the next question
        button.addEventListener('mouseenter', mouseenter);
        button.addEventListener('mouseout', mouseout);
        button.addEventListener('click', buttonClickHandler);
    });
});










