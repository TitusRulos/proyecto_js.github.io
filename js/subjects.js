const loadPageSubjects = () => {
    const subjectsPage = document.getElementById('page');
    subjectsPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("FormularioAsignatura");

    div.innerHTML = `
    <div class="container custom-container">
        <div id="crearAsignatura">
            <h2 class="text-center">CREAR ASIGNATURA</h2>
            <form>
                <label for="courseSubject">Curso:</label>
                <select id="courseSubject" name="curso" class="form-control mb-2" required>
                </select>
                <label for="codeSubject">Codigo:</label>
                <input type="text" id="codeSubject" name="codeSubject" class="form-control mb-2" required>
                <label for="creditsSubject">Creditos:</label>
                <input type="number" id="creditsSubject" name="numero" class="form-control mb-2" required>
                <label for="teacherSubject">Profesor:</label>
                <select id="teacherSubject" name="profe" class="form-control mb-2" required>
                </select>
                <label for="capacitySubject">Cupos Disponibles:</label>
                <input type="number" id="capacitySubject" name="numero" class="form-control mb-2" required>
                <label for="careerSubject">Programa:</label>
                <select id="careerSubject" name="programas" class="form-control mb-2" required>
                </select>
                <label for="schedule">Horario:</label>
                <div id="schedule" class="schedule form-inline">
                    <select name="dias" id="dias" class="form-control mb-2 mr-sm-2" required>
                        <option value="">Día...</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miércoles">Miércoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sábado">Sábado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
            
                    <select name="horas" id="horas" class="form-control mb-2 mr-sm-2" required>
                        <option value="">Hora...</option>
                        <option value="00:00-02:00">00:00 - 02:00</option>
                        <option value="02:00-04:00">02:00 - 04:00</option>
                        <option value="04:00-06:00">04:00 - 06:00</option>
                        <option value="06:00-08:00">06:00 - 08:00</option>
                        <option value="08:00-10:00">08:00 - 10:00</option>
                        <option value="10:00-12:00">10:00 - 12:00</option>
                        <option value="12:00-14:00">12:00 - 14:00</option>
                        <option value="14:00-16:00">14:00 - 16:00</option>
                        <option value="16:00-18:00">16:00 - 18:00</option>
                        <option value="18:00-20:00">18:00 - 20:00</option>
                        <option value="20:00-22:00">20:00 - 22:00</option>
                        <option value="22:00-24:00">22:00 - 24:00</option>
                    </select>
                                       

                    <select id="classroomSubject" name="programas" class="form-control mb-2 mr-sm-2" required>
                        
                    </select>
                </div>
                <input type="button" value="Crear Asignatura" onclick="createSubject()" class="btn btn-primary btn-block mt-3">
            </form>
        </div>
    </div>
    `;
    subjectsPage.appendChild(div);
    createOptionsFromArray(listCourse, "courseSubject");
    createOptionsFromArrayPersons(listTeachers, "teacherSubject");
    createOptionsFromArray(listCareer, "careerSubject");
    createOptionsFromArray(listClassrooms, "classroomSubject")
}

const saveSubject = async (newSubject) => {
    try {
        const respuesta = await fetch('http://localhost:3000/asignaturas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSubject),
        });

        if (!respuesta.ok) {
            throw new error('Error al crear el asignatura. Estado: ', respuesta.status);
        }

        const createdSubject = await respuesta.json();
        console.log('Profesor Creado:', createdSubject);
    } catch (error) {
        console.error("Error al cargar asignaturas", error.message);
    }
}

const checkScheduleAvailability = async (selectedDay, selectedHour, classroomId) => {
    try {
        const response = await fetch(`http://localhost:3000/asignaturas?horario_clases.dia=${selectedDay}&horario_clases.hora=${selectedHour}&horario_clases.salon_id=${classroomId}`);
        const data = await response.json();

        if (data.length > 0) {
            alert('El salón seleccionado ya está ocupado en el horario especificado. Por favor, elige otro horario o salón.');
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error('Error al verificar la disponibilidad del horario:', error);
        return false;
    }
}

const createSubject = async () => {
    const idSubject = listSubject.length + 1;
    const courseSubjectInput = document.getElementById("courseSubject").value;
    const codeSubjectInput = document.getElementById("codeSubject").value;
    const creditsSubjectInput = document.getElementById("creditsSubject").value;
    const teacherSubjectInput = document.getElementById("teacherSubject").value;
    const capacitySubjectInput = document.getElementById("capacitySubject").value;
    const careerSubjectInput = document.getElementById("careerSubject").value;
    const selectedDay = document.getElementById("dias").value;
    const selectedHour = document.getElementById("horas").value;
    const classroomSubjectInput = document.getElementById("classroomSubject").value;

    const isAvailable = await checkScheduleAvailability(selectedDay, selectedHour, classroomSubjectInput);

    if (!isAvailable) {
        return;
    }

    const newSubject = {
        "id": idSubject,
        "curso_id": Number(courseSubjectInput),
        "codigo": codeSubjectInput,
        "creditos": Number(creditsSubjectInput),
        "profesor_id": Number(teacherSubjectInput),
        "cupos_disponibles": Number(capacitySubjectInput),
        "programa_id": Number(careerSubjectInput),
        "horario_clases": {
            "dia": selectedDay,
            "hora": selectedHour,
            "salon_id": Number(classroomSubjectInput)
        }
    };

    await saveSubject(newSubject);

    courseSubjectInput.value = '';
    codeSubjectInput.value = '';
    creditsSubjectInput.value = '';
    teacherSubjectInput.value = '';
    capacitySubjectInput.value = '';
    careerSubjectInput.value = '';
    selectedDay.value = '';
    selectedHour.value = '';
    classroomSubjectInput.value = '';

    alert('Asignatura creada con éxito!');
}