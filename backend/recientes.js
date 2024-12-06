import fs from "fs"
export const setRecientes = (data)=>{
    const {user,room} = data
    let informacion = JSON.parse(fs.readFileSync("./data.json"))
    for (let index = 0; index < informacion.length; index++) {
        if (informacion[index].username === user) {
            if (!informacion[index].recientes.includes(room)) {
                informacion[index].recientes.push(room)
                fs.writeFileSync("./data.json",JSON.stringify(informacion, null, 2))
                return {valid:true, msg:"Aula guardada correctamente"}
            }else{
                return {valid:false, msg:"Ese aula ya existe en recientes"}
            }
        }
    }
    return {valid:false,msg:"No se encontro el usuario"}        


}

export const getRecientes = (data)=>{
    const {user} = data
    let informacion = JSON.parse(fs.readFileSync("./data.json"))
    for (let index = 0; index < informacion.length; index++) {
        if (informacion[index].username === user) {
           return {valid:true, data: informacion[index].recientes}
        }
    }
    return {valid:false,msg:"No se encontro el usuario"}        


}