import Articulo from "./Articulo.js"

export default class Arbol{
    constructor(){
        this._raiz = null
    }
    get raiz(){
        return this._raiz;
    }

    agregar(articulo){
        let newArticulo = new Articulo(articulo);

        if(this._raiz === null){
            this._raiz = newArticulo;
        }else{
            this._agregarArticulo(this._raiz, newArticulo)
        }

        console.log(this._raiz);
    }

    _agregarArticulo(raiz, newArticulo){
        if(raiz.codigo === newArticulo.codigo){
            alert("Este producto ya existe")
        }else if(newArticulo.codigo < raiz.codigo){
           if(raiz.izquierda===null){
            raiz.izquierda = newArticulo
           }else{
            this._agregarArticulo(raiz.izquierda, newArticulo)
           }
        }else{
            if(raiz.derecha===null){
                raiz.derecha = newArticulo
            }else{
                this._agregarArticulo(raiz.derecha, newArticulo)
            }
        }
    }

    inOrder(articulo, div){
        if(articulo !== null){
            this.inOrder(articulo.izquierda, div)
            div.innerHTML += articulo.codigo
            this.inOrder(articulo.derecha, div)
        }

        
    }

    preOrder(articulo,div){
        if(articulo!== null){
            div.innerHTML += articulo.codigo
            this.preOrder(articulo.izquierda, div)
            this.preOrder(articulo.derecha, div)
        }
    }
    postOrder(articulo,div){
        if(articulo!== null){
            this.postOrder(articulo.izquierda, div)
            this.postOrder(articulo.derecha, div)
            div.innerHTML += articulo.codigo
        }
    }
}