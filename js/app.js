var students = [];

function getStudentsList() {
    // TO DO: Retornar la lista de estudiantes
    return students;
}

function studentAdd() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
   var name = prompt('Ingresa el nombre de la estudiante');
   var techPoints = parseInt(prompt('Ingresa su puntaje tecnico'));
   var HSEPoints = parseInt(prompt('Ingresa su puntaje de HSE'));

   var student = {
       'name': name,
       'tech Points': techPoints,
        'HSE Points': HSEPoints
   };

   students.push(student);

   return student;
}

function show(student) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var result = "";
    result += "<div class='row'>" +
        "<div class='col m6'>" +
        "<div class='card blue-grey darken-1'>" +
        "<div class='card-content white-text'>" +
        "<p><strong>Nombre:</strong> " + 
        student['name'] + 
        "</p>" +
        "<p><strong>Puntos Técnicos:</strong> " + 
        student['tech Points'] +
        "</p>" +
        "<p><strong>Puntos HSE:</strong> " + 
        student['HSE Points'] + 
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>";

    return result;
}

function listShow(students) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var contentHTML = "";

    for (var i = 0; i < students.length; i++) {
        contentHTML += show(students[i]);
    }

    return contentHTML;

}

function search(studentName, students) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var searchStudents = students.filter(function(student) {
       
        return student.name.toLowerCase() === studentName.toLowerCase();
    });
    
    return searchStudents;
}

function topTech(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
