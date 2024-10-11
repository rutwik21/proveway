const form = document.querySelector("form");
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const desc1 = document.querySelector('#desc1');
const desc2 = document.querySelector('#desc2');
const desc3 = document.querySelector('#desc3');

card1.addEventListener('click',()=>{
    resetCards();  // Reset all cards before expanding the clicked one
    updateForm(1);
    desc1.className = "block";
    card1.className = "expanded-card";
});
card2.addEventListener('click',()=>{
    resetCards();  // Reset all cards before expanding the clicked one
    updateForm(2);
    desc2.className = "block";
    card2.className = "expanded-card2";
});
card3.addEventListener('click',()=>{
    resetCards();  // Reset all cards before expanding the clicked one
    updateForm(3);
    desc3.className = "block";
    card3.className = "expanded-card";
});
card2.click();
// Function to reset all cards to their original state
function resetCards() {
    card1.className = "card";
    card2.className = "card";
    card3.className = "card";
    desc1.className = "none";
    desc2.className = "none";
    desc3.className = "none";
}

function updateForm(value){
    form.package.value = value
}