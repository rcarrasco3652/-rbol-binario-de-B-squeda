import Arbol from "./Arbol.js";


class Main{
    constructor(){
        this._arbol = new Arbol();

        document.getElementById('agregar').addEventListener('click', () => {
            let objArticulo = {
                codigo: Number(document.getElementById('codigoArticulo').value),
                nombre: document.getElementById('nombreArticulo').value,
                precio: Number(document.getElementById('precioArticulo').value),
                contenido: document.getElementById('contenidoArticulo').value,
                descripcion: document.getElementById('descripcionArticulo').value
            };

            this._arbol.agregar(objArticulo);
        });
        document.getElementById('imprimir').addEventListener('click', () => {
            let div = document.getElementById('print')
            this._arbol.inOrder(this._arbol.raiz, div)
            div.innerHTML += "<br>"
            this._arbol.preOrder(this._arbol.raiz, div)
            div.innerHTML += "<br>"
            this._arbol.postOrder(this._arbol.raiz, div)
        })
        
    }
}

var m = new Main();