+function () {
    // Elementos
    var addBoton = document.getElementById("agregar");
    var showBoton = document.getElementById("mostrar");
    var searchBoton = document.getElementById("buscar");
    var topTechBoton = document.getElementById("top-tecnico");
    var topHSEBoton = document.getElementById("top-hse");
    var result = document.getElementById("contenedor-estudiantes");

    // Evento Click - Agregar
    var addEvent = function (e) {
        e.preventDefault();
        var student = studentAdd();
        result.innerHTML = show(student);
    };

    var showEvent = function (e) {
        e.preventDefault();
        var students = getStudentsList();
        result.innerHTML = listShow(students);
    };

    var searchEvent = function(e) {
        e.preventDefault();
        var students = getStudentsList();
        var searchName = prompt('Que estudiante(s) deseas buscar');
        var searchStudents = search(searchName, students);
        result.innerHTML = listShow(searchStudents);
    };

    

    // Manejadores de eventos
    addBoton.addEventListener("click", addEvent);
    showBoton.addEventListener("click", showEvent);
    searchBoton.addEventListener("click", searchEvent);
    
}();
