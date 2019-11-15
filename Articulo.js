export default class Articulo {
    constructor(objArticulo) {
        this._codigo = objArticulo.codigo;
        this._nombre = objArticulo.nombre;
        this._precio = objArticulo.precio;
        this._contenido = objArticulo.contenido;
        this._descripcion = objArticulo.descripcion;
        this._derecha = null;
        this._izquierda = null;


        this.getToString();
    }
    get izquierda(){
        return this._izquierda;
    }
    get derecha(){
        return this._derecha;
    }
    get codigo() {
        return this._codigo;
    }
    get nombre() {
        return this._nombre;
    }
    get precio() {
        return this._precio;
    }
    get contenido() {
        return this._contenido;
    }
    get descripcion() {
        return this._descripcion
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set contenido(contenido) {
        this._contenido = contenido;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    set derecha(derecha){
        this._derecha = derecha;
    }
    set izquierda(izquierda){
        this._izquierda = izquierda;
    }

    getToString() {
        console.log(`codigo: ${this._codigo}
        nombre: ${this._nombre} 
        precio: ${this._precio} 
        contenido: ${this._contenido}
        descripción: ${this._descripcion}`)
    }
}