const saveBtn = document.querySelector(".savebtn");
const data = document.querySelector("#story");

const myNotes = [];

saveBtn.addEventListener("click", function() {
    let currentData = data.value;

    if(currentData.trim() != " "){
        myNotes.push(currentData);
        console.log("SUCCESS! Current array content:", myNotes);
        alert("Saved note! Check the developer console.");
    } else {
        console.log("Textarea is empty!");
    }

});