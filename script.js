const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');

card1.addEventListener('click',()=>{
    resetCards();  // Reset all cards before expanding the clicked one
    card1.className = "expanded-card";
});
card2.addEventListener('click',()=>{
    resetCards();  // Reset all cards before expanding the clicked one
    card2.className = "expanded-card";
});
card3.addEventListener('click',()=>{
    resetCards();  // Reset all cards before expanding the clicked one
    card3.className = "expanded-card";
});

// Function to reset all cards to their original state
function resetCards() {
    card1.className = "card";
    card2.className = "card";
    card3.className = "card";
}