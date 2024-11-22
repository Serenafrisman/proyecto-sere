import fs from "fs"
export const setFavoritos = (data)=>{
    const {user,room} = data
    let informacion = JSON.parse(fs.readFileSync("./data.json"))
    for (let index = 0; index < informacion.length; index++) {
        if (informacion[index].username === user) {
            if (!informacion[index].favoritos.includes(room)) {
                informacion[index].favoritos.push(room)
                fs.writeFileSync("./data.json",JSON.stringify(informacion, null, 2))
                return {valid:true, msg:"Aula guardada correctamente"}
            }else{
                return {valid:false, msg:"Ese aula ya existe en favoritos"}
            }
        }
    }
    return {valid:false,msg:"No se encontro el usuario"}        


}

export const getFavoritos = (data)=>{
    const {user} = data
    let informacion = JSON.parse(fs.readFileSync("./data.json"))
    for (let index = 0; index < informacion.length; index++) {
        if (informacion[index].username === user) {
           return {valid:true, data: informacion[index].favoritos}
        }
    }
    return {valid:false,msg:"No se encontro el usuario"}        


}


