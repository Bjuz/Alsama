const username = document.getElementById("username");
const Password = document.getElementById("password");
const form = document.getElementById("form")
const { SingInUser } = require("./util");


form.addEventListener("submit", async function(event) {
    event.preventDefault();
    const login = await SingInUser(username.value, Password.value);
    if (login != "Correo o contraseña incorrecto.") {
        localStorage.setItem("userLoggueado", login);
        window.location.href = "./html/index.html"
        
      } else {
        alert(login); 
      }
})

