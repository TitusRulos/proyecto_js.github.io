const loadPageStudents = () => {
    const studentsPage = document.getElementById('page');
    studentsPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("FormularioEstudiante");

    div.innerHTML = `
    <div class="container custom-container">
        <div id="crearEstudiante">
            <h2 class="text-center">CREAR ESTUDIANTE</h2>
            <form>
                <label for="nameStudent">Nombre:</label>
                <input type="text" id="nameStudent" name="nombre" class="form-control mb-2" required>
                
                <label for="lastnameStudent">Apellido:</label>
                <input type="text" id="lastnameStudent" name="apellido" class="form-control mb-2" required>
                
                <label for="tipeDocumentStudent">Tipo de Documento:</label>
                <select id="tipeDocumentStudent" name="tipoDocumento" class="form-control mb-2" required>
                    <option value="">Seleccione...</option>
                    <option value="C.C">C.C</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="T.J">T.J</option>
                </select>
                
                
                <label for="documentStudent">Numero de documento:</label>
                <input type="number" id="documentStudent" name="numeroDocumento" class="form-control mb-2" required>
                
                <label for="birthdayStudent">Fecha de Nacimiento:</label>
                <input type="date" id="birthdayStudent" name="fechaNacimiento" class="form-control mb-2" required>
                
                <label for="cityStudent">Ciudad:</label>
                <select id="cityStudent" name="ciudad" class="form-control mb-2" required>
                    <option value="">Seleccione una ciudad...</option>
                </select>
                
                <label for="adressStudent">Dirección:</label>
                <input type="text" id="adressStudent" name="direccion" class="form-control mb-2" required>
                
                <label for="celphoneStudent">Teléfono:</label>
                <input type="number" id="celphoneStudent" name="telefono" class="form-control mb-2" required>
                
                <label for="genderStudent">Sexo:</label>
                <select id="genderStudent" name="sexo" class="form-control mb-2" required>
                    <option value="">Seleccione...</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                </select>
                
                <label for="careerStudent">Programa Académico:</label>
                <select id="careerStudent" name="programaAcademico" class="form-control mb-2" required>
                </select>
                
                <input type="button" value="Crear Estudiante" onclick="createStudent()" class="btn btn-primary btn-block mt-3">
            </form>
        </div>
    </div>
    `;
    studentsPage.appendChild(div);
    createOptionsFromArray(listCareer, "careerStudent");
    populateCities();
}

const saveStudent = async (nuevoEstudiante) => {
    try {
        const respuesta = await fetch('http://localhost:3000/alumnos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoEstudiante),
        });

        if (!respuesta.ok) {
            throw new error('Error al crear el Estudiante. Estado: ', respuesta.status);
        }

        const EstudianteCreado = await respuesta.json();
        console.log('EstudianteCreado creado:', EstudianteCreado);
    } catch (error) {
        console.error("Error al cargar Estudiantes", error.message);
    }
}

const createStudent = async () => {
    const nameStudentInput = document.getElementById('nameStudent');
    const lastnameStudentInput = document.getElementById('lastnameStudent');
    const tipeDocumentStudentInput = document.getElementById('tipeDocumentStudent');
    const documentStudentInput = document.getElementById('documentStudent');
    const cityStudentInput = document.getElementById('cityStudent');
    const adressStudentInput = document.getElementById('adressStudent');
    const celphoneStudentInput = document.getElementById('celphoneStudent');
    const birthdayStudentInput = document.getElementById('birthdayStudent');
    const genderStudentInput = document.getElementById('genderStudent');
    const careerStudentInput = document.getElementById('careerStudent');

    const idStudent = listStudents.length + 1;
    const nameStudent = nameStudentInput.value;
    const lastnameStudent = lastnameStudentInput.value;
    const tipeDocumentStudent = tipeDocumentStudentInput.value;
    const documentStudent = documentStudentInput.value;
    const cityStudent = cityStudentInput.value;
    const adressStudent = adressStudentInput.value;
    const celphoneStudent = celphoneStudentInput.value;
    const birthdayStudent = birthdayStudentInput.value;
    const genderStudent = genderStudentInput.value;
    const careerStudent = careerStudentInput.value;

    const newStudent = {
        "id": idStudent,
        "nombre": nameStudent,
        "apellido": lastnameStudent,
        "tipo_documento": tipeDocumentStudent,
        "numero_documento": documentStudent,
        "ciudad_residencia": cityStudent,
        "direccion": adressStudent,
        "telefono": celphoneStudent,
        "fecha_nacimiento": birthdayStudent,
        "sexo": genderStudent,
        "programa_id": Number(careerStudent)
    };

    await saveStudent(newStudent);
    await loadStudents();

    nameStudentInput.value = '';
    lastnameStudentInput.value = '';
    tipeDocumentStudentInput.value = '';
    documentStudentInput.value = '';
    cityStudentInput.value = '';
    adressStudentInput.value = '';
    celphoneStudentInput.value = '';
    birthdayStudentInput.value = '';
    genderStudentInput.value = '';
    careerStudentInput.value = '';

    alert('Cliente creado con éxito!');
}
