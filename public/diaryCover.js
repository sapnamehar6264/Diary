const coverTitle = document.querySelector("#cover-title");
const userNameInput = document.querySelector("#user-name-input");
const openBtn = document.querySelector("#open-btn");

if(localStorage.getItem("diaryUser")){
    userNameInput.value = localStorage.getItem("diaryUser");
    coverTitle.textContent = `${localStorage.getItem("diaryUser")}'s Secret Journal`;
}

if(userNameInput){
    userNameInput.addEventListener("input",function(){
 
        if(userNameInput.value.trim() != ""){
            coverTitle.textContent = `${userNameInput.value}'s Secret Journal`;
        } else{
            coverTitle.textContent = "User's Secret Journal";
        }
    });
}

if(userNameInput && openBtn){
openBtn.addEventListener("click", function(){
    console.log("btn is working");
    const finalName = userNameInput.value.trim() || "Anonymous";

    localStorage.setItem("diaryUser", finalName);
    window.location.href = "diary.html";
});
}








