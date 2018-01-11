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

    var searchEvent = function (e) {
        e.preventDefault();
        var students = search();
        result.innerHTML = listShow(students);
    };

    var topTech = function (e) {
      e.preventDefault();
      var students = topTech();
      result.innerHTML = listshow(students);
    }

    var topHSE = function (e) {
      e.preventDefault();
      var students = topHSE();
      result.innerHTML = listshow(students);
    }




    // Manejadores de eventos
    addBoton.addEventListener("click", addEvent);
    showBoton.addEventListener("click", showEvent);
    searchBoton.addEventListener("click", searchEvent);
    topTechBoton.addEventListener("click", topTech);
    topHSEBoton.addEventListener("click", topHSE);
}();
