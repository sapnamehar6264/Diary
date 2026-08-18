const saveBtn = document.querySelector(".savebtn");
const data = document.querySelector("#story");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const pageCounter = document.querySelector("#page-counter");

let diaryPages = [];
let currentPage = 0;

// Helper function to update input fields on page change
function updateUI() {
  const activePage = diaryPages[currentPage] || {};
  
  data.value = activePage.text || "";
  document.querySelector(".date").value = activePage.date || "";
  document.querySelector(".day").value = activePage.day || "";
  
  pageCounter.textContent = `Page ${currentPage + 1}`;
}

if(localStorage.getItem("diaryData")){
    diaryPages = JSON.parse(localStorage.getItem("diaryData"));
}

updateUI();

function saveToLocalStorage() {
    const word = JSON.stringify(diaryPages);
    localStorage.setItem("diaryData", word);
}

data.value = diaryPages[0] || "";
updateUI();

nextBtn.addEventListener("click", function(){

    diaryPages[currentPage] = {
        text: data.value,
        date: document.querySelector(".date").value,
        day: document.querySelector(".day").value
    }; // 1. Save textarea text to array first

    saveToLocalStorage(); // 2. Then save updated array to browser

    currentPage++;
    updateUI();

    pageCounter.textContent = `Page ${currentPage + 1}`;
    
    //Load text for the new page (if it exists) or clear for a fresh page
    updateUI();

    console.log("Current Page:", currentPage + 1, diaryPages);
});

prevBtn.addEventListener("click", function(){
    console.log("Previous button is clicked! Current page index before move", currentPage);
    if(currentPage > 0){

        // Store all inputs into an object for the active page
        diaryPages[currentPage] = {
        text: data.value,
        date: document.querySelector(".date").value,
        day: document.querySelector(".day").value
        };

        saveToLocalStorage();

        currentPage--;
        updateUI();
        pageCounter.textContent = `Page ${currentPage + 1}`;
        
        //Show the previous page's saved text
        dupdateUI();
    } else {
        console.log("Can't go prev anymore! You've reached the starting point");
    }
});

saveBtn.addEventListener("click", function () {
  // 1. Save whatever is currently typed to the active page
  diaryPages[currentPage] = {
    text: data.value,
    date: document.querySelector(".date").value,
    day: document.querySelector(".day").value
    };

  saveToLocalStorage();

  // 2. Show confirmation
  console.log("Entire diary saved:", diaryPages);
  alert(`Page ${currentPage + 1} saved successfully!`);
});

