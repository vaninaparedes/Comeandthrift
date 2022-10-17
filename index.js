//Mouse Over

let img = document.getElementById("imagen");

img.addEventListener("mouseover",function(){
    img.src="img/img2.jpg"
});

//Mouse out

img.addEventListener("mouseout",function(){
    img.src = "img/logo.jpg"
});



//Carrito de compas
let carrito = [];

let btn_compra = document.querySelectorAll(".botonCompra");
console.log( btn_compra);

for( let boton of btn_compra){

    
    boton.addEventListener("click" , agregar_carro_compras);
}



function agregar_carro_compras(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;



    let nombre_producto = padre.querySelector("h5").textContent;

    let precio = padre.querySelector("span").textContent;
    let img = abuelo.querySelector("img").src;
    

    let producto = {
        nombre:nombre_producto,
        img:img,
        precio: precio,
        cantidad:1
    };


    carrito.push(producto);

    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito" , arreglo_JSON);

    console.log( carrito);
    
    mostrar_carrito( producto );

    Toastify({

        text: "Agregaste un articulo!",   
        duration: 1500,    
        style:{
            fontSize:"10px",
            fontFamily:"Abril Fatface",
            color:"",
            background:"linear-gradient( #FF80AD, #E481FF)",
        }
        
    }).showToast();
}



function mostrar_carrito( producto){

    let fila = document.createElement("tr");

     fila.innerHTML = `<td><img src="${producto.img}"></td>
                       <td>${producto.nombre}</td>
                       <td>${producto.cantidad}</td>
                       <td>${producto.precio}</td>
                       <td><button class="btn-danger borrar_elemento">Borrar</button></td>`;

    let tabla = document.getElementById("tbody");
    tabla.append(fila);


    let botones_borrar = document.querySelectorAll(".borrar_elemento");

    for( let boton of botones_borrar){

        boton.addEventListener("click" , borrar_producto);
    }

}


function borrar_producto(e){

    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();
}




