// ** Promesa **
 
class Articulo {
    SKU;
    descripcion;
    stock;
    precio;

    constructor(SKU,descripcion,stock,precio) {
        this.SKU = SKU;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
    }

    getStock() {
        return this.stock;
    }

    setStock(stock){
        this.stock = stock;
    }

}

const articulo1 = new Articulo(457894564,'zapatillas Air Jordan 8',0,200.99);

let getArticulo = (articulo,stock) => {
    return new Promise((resolve, reject) => {
        if (stock <= 0 || typeof stock !== 'number') {
            return reject({mensaje: 'No hay stock del producto'});
        } else {
            articulo.setStock(stock);
            setTimeout(() => {
                resolve({
                    mensaje : `SKU: ${articulo.SKU}, descripcion: ${articulo.descripcion}, stock: ${articulo.stock}, precio: ${articulo.precio}€`})
            },2000)
        }
    })
}

console.log(getArticulo(articulo1,5)
    .then(data => {
        console.log(data.mensaje);
    })
    .catch(error => console.error(error))
);
