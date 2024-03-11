const loadListStudentsPage = async () => {
    const listStudentsPage = document.getElementById('page');
    listStudentsPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("ListaEstudiantes");

    const searchStudentByName = (studentsArray, name) => {
        return studentsArray.filter(student =>
            student.nombre.toLowerCase().includes(name.toLowerCase()) ||
            student.apellido.toLowerCase().includes(name.toLowerCase())
        );
    };

    try {
        const response = await fetch('http://localhost:3000/alumnos');
        const studentsData = await response.json();

        const studentsList = document.createElement("ul");
        studentsList.classList.add("list-group");

        const showSearchResults = (results) => {
            studentsList.innerHTML = '';
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.textContent = `ID: ${result.id} | Nombre: ${result.nombre} ${result.apellido} | Tipo de documento ${result.tipo_documento} | Número de documento ${result.numero_documento} | Ciudad: ${result.ciudad_residencia} | Direccion: ${result.direccion} | Telefono: ${result.telefono} | Fecha de nacimiento: ${result.fecha_nacimiento} | Sexo: ${result.sexo} | Programa: ${getNameById(listCareer,result.programa_id)} (ID:${result.programa_id})`;
                studentsList.appendChild(listItem);
            });
        };

        const searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("id", "searchInput");
        searchInput.setAttribute("placeholder", "Buscar por nombre...");
        div.appendChild(searchInput);

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm.length === 0) {
                showSearchResults(studentsData); 
            } else {
                const searchResults = searchStudentByName(studentsData, searchTerm); 
                showSearchResults(searchResults); 
            }
        });

        studentsData.forEach(student => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `ID: ${student.id} | Nombre: ${student.nombre} ${student.apellido} | Tipo de documento ${student.tipo_documento} | Número de documento ${student.numero_documento} | Ciudad: ${student.ciudad_residencia} | Direccion: ${student.direccion} | Telefono: ${student.telefono} | Fecha de nacimiento: ${student.fecha_nacimiento} | Sexo: ${student.sexo} | Programa: ${getNameById(listCareer,student.programa_id)} (ID:${student.programa_id})`;
            studentsList.appendChild(listItem);
        });

        div.appendChild(studentsList);
        listStudentsPage.appendChild(div);
    } catch (error) {
        console.error("Error al cargar la lista de estudiantes:", error);
    }
};

const loadListTeachersPage = async () => {
    const listTeachersPage = document.getElementById('page');
    listTeachersPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("ListaProfesores");

    const searchTeacherByName = (teachersArray, name) => {
        return teachersArray.filter(teacher =>
            teacher.nombre.toLowerCase().includes(name.toLowerCase()) ||
            teacher.apellido.toLowerCase().includes(name.toLowerCase())
        );
    };

    try {
        const response = await fetch('http://localhost:3000/profesores');
        const teachersData = await response.json();

        const teachersList = document.createElement("ul");
        teachersList.classList.add("list-group");

        const showSearchResults = (results) => {
            teachersList.innerHTML = '';
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.textContent = `ID: ${result.id} | Nombre: ${result.nombre} ${result.apellido} | Tipo de documento ${result.tipo_documento} | Número de documento ${result.numero_documento} | Departamento: ${getNameById(listDepartament, result.departamento_id)} (ID:${result.departamento_id})`;
                teachersList.appendChild(listItem);
            });
        };

        const searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("id", "searchInput");
        searchInput.setAttribute("placeholder", "Buscar por nombre...");
        div.appendChild(searchInput);

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm.length === 0) {
                showSearchResults(teachersData); 
            } else {
                const searchResults = searchTeacherByName(teachersData, searchTerm); 
                showSearchResults(searchResults); 
            }
        });

        teachersData.forEach(teacher => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `ID: ${teacher.id} | Nombre: ${teacher.nombre} ${teacher.apellido} | Tipo de documento ${teacher.tipo_documento} | Número de documento ${teacher.numero_documento} | Departamento: ${getNameById(listDepartament, teacher.departamento_id)} (ID:${teacher.departamento_id})`;
            teachersList.appendChild(listItem);
        });

        div.appendChild(teachersList);
        listTeachersPage.appendChild(div);
    } catch (error) {
        console.error("Error al cargar la lista de profesores:", error);
    }
};

const loadListSubjectsPage = async () => {
    const listSubjectsPage = document.getElementById('page');
    listSubjectsPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("ListaAsignaturas");

    const searchSubjectByName = (subjectsArray, name) => {
        return subjectsArray.filter(subject =>
            subject.nombre.toLowerCase().includes(name.toLowerCase())
        );
    };

    try {
        const response = await fetch('http://localhost:3000/asignaturas');
        const subjectsData = await response.json();

        const subjectsList = document.createElement("ul");
        subjectsList.classList.add("list-group");

        const showSearchResults = (results) => {
            subjectsList.innerHTML = '';
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.textContent = `ID: ${result.id} | Curso: ${getNameById(listCourse, result.curso_id)} (ID:${result.curso_id}) | Código: ${result.codigo} | Guía de cátedra: ${result.guia_catedra}`;
                subjectsList.appendChild(listItem);
            });
        };

        const searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("id", "searchInput");
        searchInput.setAttribute("placeholder", "Buscar por nombre...");
        div.appendChild(searchInput);

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm.length === 0) {
                showSearchResults(subjectsData); 
            } else {
                const searchResults = searchSubjectByName(subjectsData, searchTerm); 
                showSearchResults(searchResults); 
            }
        });

        subjectsData.forEach(subject => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `ID: ${subject.id} | Nombre: ${subject.nombre} | Código: ${subject.codigo} | Guía de cátedra: ${subject.guia_catedra}`;
            subjectsList.appendChild(listItem);
        });

        div.appendChild(subjectsList);
        listSubjectsPage.appendChild(div);
    } catch (error) {
        console.error("Error al cargar la lista de asignaturas:", error);
    }
};


const loadList = async () => {
    const listStudentsPage = document.getElementById('page');
    listStudentsPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("ListaEstudiantes");

    // Función para buscar estudiantes por nombre
    const searchStudentByName = (studentsArray, name) => {
        return studentsArray.filter(student =>
            student.nombre.toLowerCase().includes(name.toLowerCase()) ||
            student.apellido.toLowerCase().includes(name.toLowerCase())
        );
    };

    try {
        const response = await fetch('http://localhost:3000/alumnos');
        const studentsData = await response.json();

        const studentsList = document.createElement("ul");
        studentsList.classList.add("list-group");

        // Función para mostrar los resultados de la búsqueda
        const showSearchResults = (results) => {
            studentsList.innerHTML = ''; // Limpiar resultados anteriores
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.textContent = `ID: ${result.id} | Nombre: ${result.nombre} ${result.apellido} | Tipo de documento ${result.tipo_documento} | Número de documento ${result.numero_documento} | Ciudad: ${result.ciudad_residencia} | Direccion: ${result.direccion} | Telefono: ${result.telefono} | Fecha de nacimiento: ${result.fecha_nacimiento} | Sexo: ${result.sexo} | Programa: ${getNameById(listCareer,result.programa_id)} (ID:${result.programa_id})`;
                studentsList.appendChild(listItem);
            });
        };

        // Obtener referencia al elemento de entrada de búsqueda
        const searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("id", "searchInput");
        searchInput.setAttribute("placeholder", "Buscar por nombre...");
        div.appendChild(searchInput);

        // Agregar evento de escucha para la entrada de búsqueda
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim(); // Obtener el término de búsqueda
            if (searchTerm.length === 0) {
                showSearchResults(studentsData); // Si no hay término de búsqueda, mostrar todos los estudiantes
            } else {
                const searchResults = searchStudentByName(studentsData, searchTerm); // Realizar la búsqueda
                showSearchResults(searchResults); // Mostrar los resultados de la búsqueda
            }
        });

        studentsData.forEach(student => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `ID: ${student.id} | Nombre: ${student.nombre} ${student.apellido} | Tipo de documento ${student.tipo_documento} | Número de documento ${student.numero_documento} | Ciudad: ${student.ciudad_residencia} | Direccion: ${student.direccion} | Telefono: ${student.telefono} | Fecha de nacimiento: ${student.fecha_nacimiento} | Sexo: ${student.sexo} | Programa: ${getNameById(listCareer,student.programa_id)} (ID:${student.programa_id})`;
            studentsList.appendChild(listItem);
        });

        div.appendChild(studentsList);
        listStudentsPage.appendChild(div);
    } catch (error) {
        console.error("Error al cargar la lista de estudiantes:", error);
    }
};


  
  
  
  
  
  
  
  
  
  