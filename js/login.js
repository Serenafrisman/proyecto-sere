connect2Server()

function login() {
    const user = document.getElementById("user").value
    const  password = document.getElementById("password").value

    
    let data= {
        usuario: user,
        contra:password,
    }
    
    postData("loginuser",data,callbackuser)
}

