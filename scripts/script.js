import { data } from "../data/data.js";

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const like = {};

document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})

const loadData = data => {

    data.forEach(personaje => {
         const {id,name,image} = personaje;
         templateCard.querySelector('h5').textContent = name;
         templateCard.querySelector('img').setAttribute('src',image);
         templateCard.querySelector('.btn-dark').dataset.id = id;
          const clone = templateCard.cloneNode(true);
          fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}

items.addEventListener('click', e => {
    addLike(e);
})

const addLike = e => {
     if(e.target.classList.contains('btn-dark')){
         setLike(e.target.parentElement);
     }
}

const setLike = objeto => {

     const boton = {
         id: objeto.querySelector('.btn-dark').dataset.id,
         cantidad: 0
     }

      //asignar cantidad al label like
      //validar que el objeto tenga la propiedad indicada
     if(like.hasOwnProperty(boton.id)){
         boton.cantidad = like[boton.id].cantidad + 1;
         objeto.querySelector('#like').textContent = boton.cantidad;
     }

     //itera como si fuera un arreglo
     like[boton.id] = {...boton};
  
}