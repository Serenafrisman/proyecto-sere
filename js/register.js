connect2Server()

document.getElementById("ingresar").addEventListener("click",()=>{
    postData("registerUser",({user:document.getElementById("user").value,password:document.getElementById("password").value}),(data)=>{
        localStorage.setItem("recientes", data.data.recientes)
        localStorage.setItem("recientes", data.data.favoritos)
        location.href = "../inicio.html"
    })
})