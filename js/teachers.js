const loadPageTeachers = () => {
    const teachersPage = document.getElementById('page');
    teachersPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("FormularioProfesores");

    div.innerHTML = `
    <div class="container custom-container">
        <div id="crearProfesor">
            <h2 class="text-center">CREAR PROFESOR</h2>
            <form onsubmit = "return createTeacher()">
                <label for="nameTeachers">Nombre:</label>
                <input type="text" id="nameTeachers" name="nombre" class="form-control mb-2" required>
                <label for="lastnameTeachers">Apellido:</label>
                <input type="text" id="lastnameTeachers" name="apellido" class="form-control mb-2" required>
                <label for="tipeDocumentTeacher">Tipo de Documento:</label>
                <select id="tipeDocumentTeacher" name="tipoDocumento" class="form-control mb-2" required>
                    <option value="">Seleccione...</option>
                    <option value="C.C">C.C</option>
                    <option value="Pasaporte">Pasaporte</option>
                </select>
                <label for="documentTeacher">Numero de documento:</label>
                <input type="number" id="documentTeacher" name="numeroDocumento" class="form-control mb-2" required>
                <label for="departamentTeacher">Departamento:</label>
                <select id="departamentTeacher" name="programaAcademico" class="form-control mb-2" required>
                </select>
                <input type="submit" value="Crear Profesor" class="btn btn-primary btn-block mt-3">
            </form>
        </div>
    </div>
    `;
    teachersPage.appendChild(div);
    createOptionsFromArray(listDepartament, "departamentTeacher");
}

const saveTeacher = async (newTeacher) => {
    try {
        const respuesta = await fetch('http://localhost:3000/profesores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTeacher),
        });

        if (!respuesta.ok) {
            throw new error('Error al crear el Profesor. Estado: ', respuesta.status);
        }

        const TeacherCreado = await respuesta.json();
        console.log('Profesor Creado:', TeacherCreado);
    } catch (error) {
        console.error("Error al cargar Profesores", error.message);
    }
}

const createTeacher = async () => {
    const nameTeacherInput = document.getElementById('nameTeachers');
    const lastnameTeacherInput = document.getElementById('lastnameTeachers');
    const tipeDocumentTeacherInput = document.getElementById('tipeDocumentTeacher');
    const documentTeacherInput = document.getElementById('documentTeacher');
    const departamentTeacherInput = document.getElementById('departamentTeacher');

    const idTeacher = listTeachers.length + 1;
    const nameTeacher = nameTeacherInput.value;
    const lastnameTeacher = lastnameTeacherInput.value;
    const tipeDocumentTeacher = tipeDocumentTeacherInput.value;
    const documentTeacher = documentTeacherInput.value;
    const departamentTeacher = departamentTeacherInput.value;

    const newTeacher = {
        "id": idTeacher,
        "nombre": nameTeacher,
        "apellido": lastnameTeacher,
        "tipo_documento": tipeDocumentTeacher,
        "numero_documento": documentTeacher,
        "departamento_id": Number(departamentTeacher)
    };

    await saveTeacher(newTeacher);

    nameTeacherInput.value = '';
    lastnameTeacherInput.value = '';
    tipeDocumentTeacherInput.value = '';
    documentTeacherInput.value = '';
    departamentTeacherInput.value = '';

    alert('Profesor creado con éxito!');
}
