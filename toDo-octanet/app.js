const inputBox = document.getElementById("input-box");
const lists = document.getElementById("lists");

function addTask(){
    if(inputBox.value === ''){
        alert("Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
lists.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("tick");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data", lists.innerHTML);
}


function showList(){
    lists.innerHTML = localStorage.getItem("data");
}
showList();


