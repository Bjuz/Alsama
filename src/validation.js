const { CurrentUser } = require("./util"); 
const { LogOutUser } = require("./util"); 

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function loadHTML(){
  let xhttp;
  let element = document.getElementById("NavBar");
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.onreadystatechange == 4){
      if(this.status == 200){element.innerHTML = this.responseText}
    }
  }
  xhttp.open("GET", "navbar.html", true);
  xhttp.send();
  return;

}


window.addEventListener('DOMContentLoaded', async (event) => {
  loadHTML();
    await sleep(500);
    var response = await CurrentUser();
    if(response == false){

        window.location.href = "../index.html"
    }
    else{
   

  }
})

document.querySelector('.nav__logout').addEventListener("click", async function () {
const text = await LogOutUser();
if(text == "Sign out successful"){
  alert(text);
  localStorage.clear();
  location.href = "./../index.html";
}else{
  alert(text);
}
});