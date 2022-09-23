import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb.js"

class ProductosDaoMongoDb extends ContenedorMongoDb {

    constructor() {
        super("productos", {
          title: { type: String, required: true },
          price: { type: Number, required: true },
          thumbnail: { type: String, required: true },
          date: { type: String, required: true }, // -> agregado
        });
    }
}

export default ProductosDaoMongoDb