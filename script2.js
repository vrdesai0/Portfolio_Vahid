
// const box = document.querySelectorAll('.box');






// Select all box and buttons
const box = document.querySelectorAll('.box');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // Index of the currently visible container

// Function to update visibility of box
function updatebox() {
    box.forEach((container, index) => {
        container.classList.toggle('show', index === currentIndex);
    });
}

// Event listeners for arrow buttons
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % box.length; // Move to the next container
    updatebox();
});

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + box.length) % box.length; // Move to the previous container
    updatebox();
});

// Initial state update
updatebox();






















/*
let left = document.getElementById('left');
let right = document.getElementById('right');
let pr1 = document.getElementById('pr1');
let pr2 = document.getElementById('pr2');
let pr3 = document.getElementById('pr3');


window.onload = activecall2;

function activecall2() {
    pr1.classList.add('show');
}

let counter = 0;
left.addEventListener('click', ()=> {
    counter++;
    if(counter==1) {
        pr3.classList.add('show');
        pr1.classList.remove('show');
        pr2.classList.remove('show');

        counter++;
        console.log(counter);
    }    
    else if(counter==4) {
        pr3.classList.add('show');
        pr1.classList.remove('show');

        // counter++;
        console.log(counter);
    }    
    else if(counter==3){
        pr3.classList.remove('show');
        pr2.classList.add('show');
        counter++;
        console.log(counter);
    
    }
    else {
        pr2.classList.remove('show');
        pr3.classList.remove('show');
        pr1.classList.add('show');
        counter = 0;
        console.log(counter);
    }
});

let counter2 = 0;
right.addEventListener('click', ()=> {
    if(counter==0) {
        if(counter2==0) {
            pr2.classList.add('show');
            pr1.classList.remove('show');
            counter2++;
        }
        // pr3.classList.remove('show')

        else if(counter2==1) {
            pr2.classList.remove('show');
            pr3.classList.add('show');
            counter2++;
        }
        else {
            pr3.classList.remove('show');
            pr1.classList.add('show');
            counter2 = 0;
        }
        console.log(counter);
    }    
    else if(counter==2){
        pr3.classList.remove('show');
        pr1.classList.add('show');
        // pr1.classList.remove('show');
        counter++;
        console.log(counter);
        
    }
    else if(counter==4){
        pr2.classList.remove('show');
        pr3.classList.remove('show');
        pr1.classList.add('show');
        // pr1.classList.remove('show');
        // pr1.classList.remove('show');
        // counter++;
        console.log(counter);
        
    }
    else {
        // pr3.classList.remove('show');
        pr2.classList.add('show');
        pr1.classList.remove('show');
        counter = 0;
        console.log(counter);
    }
});
*/