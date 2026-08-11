/*
    PRODUCTOS
*/

let productos = [

    {
        id: 1,
        nombre: "Tenis Running Pro",
        categoria: "Calzado",
        precio: 199900,
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 2,
        nombre: "Camiseta Deportiva",
        categoria: "Ropa",
        precio: 69900,
        imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 3,
        nombre: "Balón de Fútbol",
        categoria: "Balones",
        precio: 129900,
        imagen: "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 4,
        nombre: "Maleta Deportiva",
        categoria: "Accesorios",
        precio: 149900,
        imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 5,
        nombre: "Guantes de Arquero",
        categoria: "Accesorios",
        precio: 89900,
        imagen: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 6,
        nombre: "Gorra Deportiva",
        categoria: "Ropa",
        precio: 39900,
        imagen: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 7,
        nombre: "Mancuernas",
        categoria: "Accesorios",
        precio: 79900,
        imagen: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=500&q=80"
    },

    {
        id: 8,
        nombre: "Balón de Baloncesto",
        categoria: "Balones",
        precio: 99900,
        imagen: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=500&q=80"
    }

];

/*
   CARRITO
*/

let carrito = [];

/* 
   MOSTRAR PRODUCTOS
*/

function mostrarProductos(lista = productos) {

    let contenedor =
        document.getElementById("listaProductos");

    contenedor.innerHTML = "";

    lista.forEach(function(producto) {
        contenedor.innerHTML += `

            <div class="producto">

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <div class="producto-info">

                    <p class="categoria">
                        ${producto.categoria}
                    </p>

                    <h3>
                        ${producto.nombre}
                    </h3>

                    <p class="precio">
                        $${producto.precio.toLocaleString("es-CO")}
                    </p>

                    <button
                        onclick="agregarCarrito(${producto.id})">
                        Agregar al carrito
                    </button>

                </div>
            </div>
        `;
    });
}

/*
   AGREGAR AL CARRITO
*/

function agregarCarrito(id) {

    let producto =
        productos.find(function(producto) {

            return producto.id === id;

        });

    carrito.push(producto);

    mostrarCarrito();

    alert(
        producto.nombre +
        " fue agregado al carrito."
    );
}


/*
   MOSTRAR CARRITO
*/

function mostrarCarrito() {

    let contenedor =
        document.getElementById("listaCarrito");
    let total = 0;

    if(carrito.length === 0) {

        contenedor.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;

        document.getElementById("total")
            .textContent = "$0";
        return;
    }

    contenedor.innerHTML = "";

    carrito.forEach(function(producto, indice) {
        total += producto.precio;
        contenedor.innerHTML += `

            <div class="carrito-item">
                <div>
                    <h3>
                        ${producto.nombre}
                    </h3>

                    <p>
                        $${producto.precio.toLocaleString("es-CO")}
                    </p>
                </div>


                <button
                    onclick="eliminarCarrito(${indice})">
                    Eliminar
                </button>
            </div>
        `;
    });

    document.getElementById("total")
        .textContent =
        "$" + total.toLocaleString("es-CO");

}


/*
   ELIMINAR DEL CARRITO
*/

function eliminarCarrito(indice) {
    carrito.splice(indice, 1);
    mostrarCarrito();
}

/*
   FILTRAR
*/

function filtrar(categoria) {

    let resultado =
        productos.filter(function(producto) {
            return producto.categoria === categoria;
        });
    mostrarProductos(resultado);

    document.getElementById("productos")
        .scrollIntoView({
            behavior: "smooth"
        });
}

/*
   BUSCAR
 */

function buscarProducto() {

    let texto =
        document.getElementById("buscador")
        .value
        .toLowerCase();

    let resultado =
        productos.filter(function(producto) {
            return producto.nombre
                .toLowerCase()
                .includes(texto);
        });
    mostrarProductos(resultado);
}

/*
   MOSTRAR INICIO
*/

function mostrarInicio() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}