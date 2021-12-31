const productos = [
    { id: "1", nombre: "cartel", description: "carteles de diseño", precio: 1500},
    { id: "2", nombre: "posa vaso", description: "posa vaso diseño", precio: 550},
    { id: "3", nombre: "dispenser", description: "dispenser de jabón y detergente", precio: 850},
    { id: "4", nombre: "llamador de ángeles", description: "llamador de ángel de diseño", precio: 1000},
    { id: "5", nombre: "caja madera", description: "cajas de maderas con descripciones", precio: 1500},
];

export const getFetch = new Promise((resolve, reject)=>{
    let condicion = true
    if (condicion){
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    }else{
        reject('error')
    }
})