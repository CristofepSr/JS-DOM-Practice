function addTask(){
    var taskInput = document.getElementById('taskInput'); // Selecionando el input por su id
    var taskList =document.getElementById('taskList'); // Selecionando en button por su id

    var taskText = taskInput.value; // Extrayendo el value del input

    if (taskText !== ""){
        var listItem = document.createElement('li'); // Creando un elemento html

        listItem.textContent = taskText; // Integando el texto al elemento html li

        taskList.appendChild(listItem); //  Agregando el texto al elemeno <li> creado

        taskInput.value = ""; // Borando el value del input despues de agreharlo

        // Activa el evento click y agrega la clase 'complet al elemto elecionado
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('complet');
        });
    } else {
        alert("Por favor agregar la tarea") // Alerta taskInput se agrega vacio
    }

    document.getElementById('completTask').addEventListener('click', () => { // Selecionando en button por su id y agregando el evento de click
        var complet = document.querySelectorAll('.complet'); // Seleciona cada tarea con el selecor css .complet
        complet.forEach( (task) => {  // Itera cada tarea compeltada
            task.remove(); // Eliminar la tarea
        });
    });
}
