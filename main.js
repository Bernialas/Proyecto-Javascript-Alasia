// Base de datos simulada de productos
const productos = [
    {
        id: 1,
        categoria: "Remeras",
        variedades: [
            {remera_1: "Remera lisa manga corta", precio: 15000},
            {remera_2: "Remera lisa manga larga", precio: 20000},
            {remera_3: "Remera estampada manga corta", precio: 18000},
            {remera_4: "Remera estampada manga larga", precio: 23000},
            {remera_5: "Chomba lisa manga corta", precio: 20000},
            {remera_6: "Chomba lisa manga larga", precio: 25000},                                                          
        ]
    },
    {
        id: 2,
        categoria: "Buzos",
        variedades: [
            {buzo_1: "Buzo liso", precio: 30000},
            {buzo_2: "Buzo estampa fútbol", precio: 35000},
            {buzo_3: "Buzo estampa rock", precio: 35000},
            {buzo_4: "Buzo estampa anime", precio: 35000},
            {buzo_5: "Buzo polar", precio: 45000},
            {buzo_6: "Buzo con capucha", precio: 35000},                                                          
        ]
    },
    {
        id: 3,
        categoria: "Camperas",
        variedades: [
            {campera_1: "Campera de pluma", precio: 150000},
            {campera_2: "Campera rompeviento", precio: 85000},
            {campera_3: "Campera 3 en 1", precio: 20000},
            {campera_4: "Campera con capucha", precio: 10000},
            {campera_5: "Campera impermeable", precio: 175000},
            {campera_6: "Campera con interior de polar", precio: 90000},                                                          
        ]
    },
    {
        id: 4,
        categoria: "Pantalón",
        variedades: [
            {pantalon_1: "Pantalón jean clásico azul", precio: 65000},
            {pantalon_2: "Pantalón jean clásico gris", precio: 65000},
            {pantalon_3: "Pantalón jean clásico negro", precio: 65000},
            {pantalon_4: "Pantalón jogging azul", precio: 45000},
            {pantalon_5: "Pantalón jogging gris", precio: 45000},
            {pantalon_6: "Pantalón jogging negro", precio: 45000},                                                          
        ]
    }        
];

let carrito = [];

// Función para mostrar productos disponibles
function mostrarProductos() {
    let lista = "Productos disponibles:\n";
    for (let producto of productos) {
        lista += `\n${producto.id}. Categoría: ${producto.categoria}\n`;
        producto.variedades.forEach((variante, index) => {
            const clave = Object.keys(variante).find(k => k !== "precio");
            lista += `${index + 1}) ${variante[clave]} - $${variante.precio}\n`;
        });
    }
    alert(lista);
}

// Función para agregar productos al carrito
function agregarAlCarrito() {
    let seguirComprando = true;

    while (seguirComprando) {
        let idProducto = parseInt(prompt("Ingresá el ID de la categoría (por ejemplo, 1 para Remeras):"));
        const productoSeleccionado = productos.find((p) => p.id === idProducto);

        if (productoSeleccionado) {
            let listaVariedades = "";
            productoSeleccionado.variedades.forEach((variante, index) => {
                const clave = Object.keys(variante).find(k => k !== "precio");
                listaVariedades += `${index + 1}) ${variante[clave]} - $${variante.precio}\n`;
            });

            let indiceVariedad = parseInt(prompt(`Elegí una variedad de "${productoSeleccionado.categoria}":\n${listaVariedades}`));

            if (
                !isNaN(indiceVariedad) &&
                indiceVariedad > 0 &&
                indiceVariedad <= productoSeleccionado.variedades.length
            ) {
                const varianteElegida = productoSeleccionado.variedades[indiceVariedad - 1];
                carrito.push(varianteElegida);
                const nombre = Object.values(varianteElegida).find(v => typeof v === "string");
                alert(`"${nombre}" fue agregada al carrito.`);
            } else {
                alert("Variedad no válida. Intentá de nuevo.");
            }
        } else {
            alert("Categoría no encontrada. Intentá nuevamente.");
        }

        seguirComprando = confirm("¿Querés agregar otro producto?");
    }
}

// Función para mostrar el resumen de la compra
function mostrarResumen() {
    if (carrito.length === 0) {
        alert("No agregaste productos al carrito.");
        return;
    }

    let total = 0;
    let resumen = "Resumen de tu compra:\n";

    for (let item of carrito) {
        const clave = Object.keys(item).find(k => k !== "precio");
        const nombre = item[clave];

        resumen += `- ${nombre} - $${item.precio}\n`;
        total += item.precio;
    }

    resumen += `\nTotal a pagar: $${total}`;
    alert(resumen);
    console.log(resumen);
}

// Ejecución
alert("¡Bienvenido al simulador de carrito de compras!");
mostrarProductos();
agregarAlCarrito();
mostrarResumen();

