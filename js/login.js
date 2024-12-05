connect2Server()

function login() {
    const user = document.getElementById("user").value
    const  password = document.getElementById("password").value

    
    let data= {
        usuario: user,
        contra:password,
    }

    function callbacklogin(res) {
        if (res.valid === true) {
            alert("iniciaste sesion")
        } else {
            alert("intenta de nuevo")
        }
    }

    postData("loginuser",data,callbacklogin)
}
