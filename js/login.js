connect2Server()

document.getElementById("ingresar").addEventListener("click",()=>{
    postData("loginUser",({user:document.getElementById("user").value,password:document.getElementById("password").value}),(data)=>{
        localStorage.setItem("recientes", data.data.recientes)
        localStorage.setItem("recientes", data.data.favoritos)
        location.href = "../inicio.html"
    })
})

