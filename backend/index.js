import {onEvent,sendEvent,startServer} from "soquetic"
import { getFavoritos, setFavoritos } from "./favoritos.js"
import {setRecientes, getRecientes} from "./recientes.js"
import { registerUser, loginUser } from "./user.js"

onEvent("setFavoritos",(data) => setFavoritos(data))
onEvent("getFavoritos",(data) => getFavoritos(data))
onEvent("setRecientes",(data) => setRecientes(data))
onEvent("getRecientes",(data) => getRecientes(data))
onEvent("registerUser",(data)=>registerUser(data))
onEvent("loginUser",(data)=>loginUser(data))


startServer()
console.log(registerUser({user:"1",password:""})
)