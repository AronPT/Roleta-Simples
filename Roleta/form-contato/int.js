function logar() {

var password = document.getElementById("password").value;
var email = document.getElementById("email").value;

        if (email == "admin@gmail.com" && password == "admin") {
                alert("Acesso concedido");
                location.href = "/Roleta/blaze.html";
        }else {
                alert("Email ou senha incorretos");
        }
}

//email
email.addEventListener("focus", () => {
        email.style.borderColor = "#49a5f0"
});
email.addEventListener("blur", () => {
        email.style.borderColor = "#ccc"
});


//password
password.addEventListener("focus", () => {
        password.style.borderColor = "#49a5f0"
});
password.addEventListener("blur", () => {
        password.style.borderColor = "#ccc"
});

