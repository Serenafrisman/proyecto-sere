connect2Server()

function register() {
    const user = document.getElementById("user").value
    const  password = document.getElementById("password").value

    
    let data= {
        usuario: user,
        contra:password,
    }

    function callbackregister(res) {
        if (res.valid === true) {
            alert("Volver al login")
            window.location.href = "home.html";
        } else {
            alert("intenta de nuevo")
        }
    }

    postData("loginuser",data,callbacklogin)
}
