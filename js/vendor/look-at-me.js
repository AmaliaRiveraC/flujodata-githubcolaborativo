+function () {
    // Elementos
    

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
