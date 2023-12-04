const tarea = prompt('Ingrese algo a la lista de tareas: ');

let primerLi = document.getElementsByClassName('lista1');
console.log(primerLi);

primerLi[0].innerText = tarea;

function agregarTarea() {
    const nuevaTarea = prompt('Ingrese una nueva tarea');
    let nuevoElementoLi = document.createElement('li');
    nuevoElementoLi.innerText = nuevaTarea;
    nuevoElementoLi.className = 'list-group-item';

    // Obtener el padre (ul con id 'padre')
    let padre = document.getElementById('padre');

    // Agregar el nuevo 'li' al final de la lista
    padre.appendChild(nuevoElementoLi);
}

