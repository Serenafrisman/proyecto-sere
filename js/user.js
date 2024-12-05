import fs from "fs"

export const registerUser = (data)=>{
    const {user, password} = data
    let informacion = JSON.parse(fs.readFileSync("./data.json"))
        informacion.push({
            "username": user,
            "password": password,
            "favoritos": [],
            "recientes": []
          })
          fs.writeFileSync("./data.json",JSON.stringify(informacion, null, 2))
          return{valid:true, msg:"Usuario creado correctamente"}
    


}


export const loginUser = (data)=>{
    const {user, password} = data
    let informacion = JSON.parse(fs.readFileSync("./data.json"))
    for (let index = 0; index < informacion.length; index++) {
        if (informacion[index].username === user && informacion[index].password === password) {
            return {
                valid:true, 
                data:{recientes:informacion[index].recientes, 
                favoritos:informacion[index].favoritos
            }}
        }}
    return {valid:false,msg:"No se encontro el usuario"}        


}