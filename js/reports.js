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
            subject.codigo.toLowerCase().includes(name.toLowerCase())
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
                listItem.textContent = `ID: ${result.id} | Curso: ${getNameById(listCourse, result.curso_id)} (ID:${result.curso_id}) | Código: ${result.codigo}`;
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
            listItem.textContent = `ID: ${subject.id} | Curso: ${getNameById(listCourse, subject.curso_id)} (ID:${subject.curso_id}) | Código: ${subject.codigo} | Créditos: ${subject.creditos} | Profesor: ${getNameById(listTeachers, subject.profesor_id)} (ID:${subject.profesor_id}) | Cupos: ${subject.cupos_disponibles} | Programa: ${getNameById(listCareer, subject.programa_id)} (ID:${subject.programa_id}) | Horario: Día ${subject.horario_clases.dia}, Hora ${subject.horario_clases.hora}, Salón ${getNameById(listClassrooms, subject.horario_clases.salon_id)}`;
            subjectsList.appendChild(listItem);
        });

        div.appendChild(subjectsList);
        listSubjectsPage.appendChild(div);
    } catch (error) {
        console.error("Error al cargar la lista de asignaturas:", error);
    }
};

const loadListEnrollsPage = async () => {
    const enrollsPage = document.getElementById('page');
    enrollsPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("ListaMatriculas");

    const searchStudentNameById = (studentId) => {
        const student = listStudents.find(student => student.id === studentId);
        return student ? student.name : "";
    };

    const searchEnrollByStudent = (enrollsArray, studentName) => {
        return enrollsArray.filter(enroll =>
            searchStudentNameById(enroll.estudiante_id).toLowerCase().includes(studentName.toLowerCase())
        );
    };

    try {
        const response = await fetch('http://localhost:3000/matriculas');
        const enrollsData = await response.json();

        const enrollsList = document.createElement("ul");
        enrollsList.classList.add("list-group");

        const showSearchResults = (results) => {
            enrollsList.innerHTML = '';
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.textContent = `ID: ${result.id} | Estudiante: ${getNameById(listStudents, result.estudiante_id)} (ID:${result.estudiante_id}) | Asignatura: ${getNameById(listSubject, result.asignatura_id)} (ID:${result.asignatura_id}) | Periodo: ${getNameById(listTerms, result.periodo_id)} (ID:${result.periodo_id}) | Precio: ${result.precio}`;
                enrollsList.appendChild(listItem);
            });
        };

        const searchInput = document.createElement("input");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("id", "searchInput");
        searchInput.setAttribute("placeholder", "Buscar por nombre de estudiante...");
        div.appendChild(searchInput);

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm.length === 0) {
                showSearchResults(enrollsData); 
            } else {
                const searchResults = searchEnrollByStudent(enrollsData, searchTerm); 
                showSearchResults(searchResults); 
            }
        });

        enrollsData.forEach(enroll => {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.textContent = `ID: ${enroll.id} | Estudiante: ${getNameById(listStudents, Number(enroll.estudiante_id))} (ID:${enroll.estudiante_id}) | Asignatura: ${getNameById(listSubject, enroll.asignatura_id)} (ID:${enroll.asignatura_id}) | Periodo: ${getNameById(listTerms, enroll.periodo_id)} (ID:${enroll.periodo_id}) | Precio: ${enroll.precio}`;
            enrollsList.appendChild(listItem);
        });

        div.appendChild(enrollsList);
        enrollsPage.appendChild(div);
    } catch (error) {
        console.error("Error al cargar la lista de matrículas:", error);
    }
};

const loadInfo1 = async () => {
    const enrollsPage = document.getElementById('page');
    enrollsPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("ListaMatriculas");

    try {
        const response = await fetch('http://localhost:3000/matriculas');
        const enrollsData = await response.json();

        const totalByPeriod = {};

        enrollsData.forEach(enroll => {
            if (enroll.periodo_id === 0) {
                return;
            }
            
            if (!totalByPeriod[enroll.periodo_id]) {
                totalByPeriod[enroll.periodo_id] = 0;
            }
            totalByPeriod[enroll.periodo_id] += enroll.precio;
        });

        for (const periodoId in totalByPeriod) {
            div.innerHTML += `<p>Total de matrículas para el periodo ${getNameById(listTerms, periodoId)} (ID: ${periodoId}): ${totalByPeriod[periodoId]}</p>`;
        }

        enrollsPage.appendChild(div);
    } catch (error) {
        console.error("Error al cargar la lista de matrículas:", error);
    }
};

const getMostEnrolledSubjects = async () => {
    try {
        const response = await fetch('http://localhost:3000/matriculas');
        const enrollsData = await response.json();

        const enrollCounts = {};
        enrollsData.forEach(enroll => {
            const subjectId = enroll.asignatura_id;
            if (!enrollCounts[subjectId]) {
                enrollCounts[subjectId] = 0;
            }
            enrollCounts[subjectId]++;
        });

        const sortedEnrollCounts = Object.entries(enrollCounts).sort((a, b) => b[1] - a[1]);

        const resultList = document.createElement('ul');
        sortedEnrollCounts.forEach(([subjectId, count]) => {
            const subjectName = getNameById(listSubject, subjectId);
            const listItem = document.createElement('li');
            listItem.textContent = `${subjectName} (${subjectId}): ${count} matrículas`;
            resultList.appendChild(listItem);
        });

        const resultContainer = document.getElementById('page');
        resultContainer.innerHTML = '';
        resultContainer.appendChild(resultList);

    } catch (error) {
        console.error("Error al cargar la lista de matrículas:", error);
    }
};

const generateStudySchedule = async (studentId) => {
    try {
        // Obtener las matrículas del alumno
        const response = await fetch('http://localhost:3000/matriculas');
        const enrollsData = await response.json();
        const studentEnrolls = enrollsData.filter(enroll => enroll.estudiante_id === studentId);

        // Calcular el total de horas de clase por semana para cada asignatura
        const hoursPerSubject = {};
        studentEnrolls.forEach(enroll => {
            const subjectId = enroll.asignatura_id;
            const subject = listSubjects.find(subject => subject.id === subjectId);
            const totalHours = subject.horario_clases.reduce((acc, curr) => {
                const startTime = new Date(`2024-01-01T${curr.hora_inicio}`);
                const endTime = new Date(`2024-01-01T${curr.hora_fin}`);
                const diffMs = endTime - startTime;
                const diffHours = diffMs / (1000 * 60 * 60);
                return acc + diffHours;
            }, 0);
            if (!hoursPerSubject[subjectId]) {
                hoursPerSubject[subjectId] = 0;
            }
            hoursPerSubject[subjectId] += totalHours;
        });

        // Distribuir las horas de estudio a lo largo de los días de la semana
        const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        const studySchedule = {};
        Object.keys(hoursPerSubject).forEach(subjectId => {
            const totalHours = hoursPerSubject[subjectId];
            const hoursPerDay = Math.ceil(totalHours / 5); // Distribuir equitativamente en 5 días laborables
            const subjectName = listSubjects.find(subject => subject.id === subjectId).nombre;
            studySchedule[subjectName] = [];
            daysOfWeek.forEach((day, index) => {
                const hoursToAdd = (index < 5) ? hoursPerDay : 0; // No estudiar durante el fin de semana
                studySchedule[subjectName].push({ day, hours: hoursToAdd });
            });
        });

        // Generar el HTML del horario de estudio
        let scheduleHTML = '<h2>Horario de Estudio</h2>';
        Object.entries(studySchedule).forEach(([subjectName, schedule]) => {
            scheduleHTML += `<h3>${subjectName}</h3><ul>`;
            schedule.forEach(({ day, hours }) => {
                scheduleHTML += `<li>${day}: ${hours} horas</li>`;
            });
            scheduleHTML += '</ul>';
        });

        // Mostrar el horario de estudio en el contenedor especificado
        document.getElementById('studySchedule').innerHTML = scheduleHTML;

    } catch (error) {
        console.error("Error al generar el horario de estudio:", error);
    }
};





