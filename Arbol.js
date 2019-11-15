import Articulo from "./Articulo.js"

export default class Arbol{
    constructor(){
        this._raiz = null
    }

    agregar(articulo){
        let newArticulo = new Articulo(articulo);

        if(this._raiz === null){
            this._raiz = newArticulo;
        }else{
            this._agregarArticulo(this._raiz, newArticulo)
        }
    }

    _agregarArticulo(raiz, newArticulo){
        if(newArticulo.codigo < raiz.codigo){
           if(raiz.izquierda===null){
            raiz.izquierda = newArticulo
           }else{
            this._agregarArticulo(raiz.izquierda, newArticulo)
           }
        }else if(newArticulo.codigo > raiz.codigo){
            if(raiz.derecha===null){
                raiz.derecha = newArticulo
            }else{
                this._agregarArticulo(raiz.derecha, newArticulo)
            }
        }
    }
}