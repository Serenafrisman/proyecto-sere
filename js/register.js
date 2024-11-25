connect2Server()

document.getElementById("ingresar").addEventListener("click",()=>{
    console.log({user:document.getElementById("user").value,password:document.getElementById("password").value})
    postData("registerUser",({user:document.getElementById("user").value,password:document.getElementById("password").value}),(data)=>{
        localStorage.setItem("recientes", data.data.recientes)
        localStorage.setItem("favoritos", data.data.favoritos)
    })
    location.href = "../inicio.html"
})