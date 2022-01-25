const productos = [
    { id: "1", image: 'assets/carteles.jpg', nombre: "Cartel", description: "carteles de diseño",categoria:"decoHogar", precio: 1500 , stock: 20},
    { id: "2", image: 'assets/posaVaso.jpg' , nombre: "Posa vaso", description: "posa vaso diseño", categoria:"decoHogar",  precio: 550 , stock: 15},
    { id: "3", image: 'assets/dispensador.jpg', nombre: "Dispenser", description: "dispenser de jabón y detergente", categoria:"decoHogar", precio: 850 , stock: 25},
    { id: "4", image: 'assets/atrapaSueño.jpg', nombre: "Atrapa Sueño", description: "Atrapa sueño de diseño", categoria:"decoHogar", precio: 1000 , stock: 30},
    { id: "5", image: 'assets/bandejaCafe.jpeg', nombre: "Bandeja para Café", description: "Bandeja para Café o Mate con Letras", categoria:"mate", precio: 1300, stock: 10 },
    { id: "6", image: 'assets/bandejaPosible.jpeg', nombre: "Bandeja desayuno", description: "Bandeja con la palabra posible", categoria:"mate", precio: 1250, stock: 10 },
    { id: "7", image: 'assets/comboMate.jpeg', nombre: "Combo para Mate", description: "Combo para mate de diseño", categoria:"mate", precio: 2000, stock: 15 },
    { id: "8", image: 'assets/florero.jpeg', nombre: "Florero", description: "Florero blanco elegante", categoria:"decoHogar", precio: 900, stock: 10 },
    { id: "9", image: 'assets/jaboneraCeramica.jpeg', nombre: "Jabonera Cerámica", description: "Jaboneras de cerámicas", categoria:"baño", precio: 1000, stock: 10 },
    { id: "10", image: 'assets/jabonNatural.jpeg', nombre: "Jabón Natural", description: "Jabones naturales de avena y miel x 4", categoria:"baño", precio: 1050, stock: 30 },
    { id: "11", image: 'assets/Llavero.jpeg', nombre: "Llavero", description: "Llavero para colgar de diseño", categoria:"decoHogar", precio: 800, stock: 10 },
    { id: "12", image: 'assets/MateCeramica.jpeg', nombre: "Mate de Cerámica", description: "Mates de cerámica", categoria:"mate", precio: 1100, stock: 10 },
    { id: "13", image: 'assets/mateMaderaAluminio.jpeg', nombre: "Mate de madera", description: "Mates de madera y aluminio", categoria:"mate", precio: 950, stock: 10 },
    { id: "14", image: 'assets/mateVidrioEco.jpeg', nombre: "Mate de Vidrio", description: "Mates de vidrio y ecocuero", categoria:"mate", precio: 1500, stock: 10 },
    { id: "15", image: 'assets/organizador.jpeg', nombre: "Organizador", description: "Organizador para baño", categoria:"baño", precio: 1100, stock: 15 },
    { id: "16", image: 'assets/perchero.jpeg', nombre: "Perchero", description: "Percheros para colgar con frases", categoria:"decoHogar", precio: 1000, stock: 10 },
    { id: "17", image: 'assets/posaPava.jpeg', nombre: "Posa Pava", description: "Posa Pava", categoria:"mate", precio: 500, stock: 25 },
    { id: "18", image: 'assets/salesBaño.jpeg', nombre: "Sales de Baño", description: "Tubos de sales de baño", categoria:"baño", precio: 1200, stock: 20 },
    { id: "19", image: 'assets/salesDeBaño.jpeg', nombre: "Sales de Baño", description: "Sales de baño en Botellas", categoria:"baño", precio: 900, stock: 20 },
    { id: "20", image: 'assets/tablaMadera.jpeg', nombre: "Tabla de Madera", description: "Tablas de maderas reversibles", categoria:"decoHogar", precio: 600, stock: 15 },
    { id: "21", image: 'assets/teteraBlanca.jpeg', nombre: "Tetera Blanca", description: "Teteras Blancas de Porcelana", categoria:"decoHogar", precio: 1200, stock: 10 },
    { id: "22", image: 'assets/vasoChopero.jpeg', nombre: "Vaso Chopero", description: "Vaso chopero de vidrio con logo personalizado", categoria:"decoHogar", precio: 1000, stock: 10 },
    { id: "23", image: 'assets/yerberaAzucareraMadera.jpeg', nombre: "Yerbera y Azucarera", description: "Yerbera y azucarera de madera", categoria:"mate", precio: 1800, stock: 8 },
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