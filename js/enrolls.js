const loadPageEnrolls = () => {
    const enrollsPage = document.getElementById('page');
    enrollsPage.innerHTML = "";

    const div = document.createElement("div");
    div.classList.add("FormularioMatricula");

    div.innerHTML = `
    <div class="container custom-container">
        <div id="crearMatricula">
            <h2 class="text-center">CREAR MATRÍCULA</h2>
            <form onsubmit = "return createEnroll()">
                <label for="idStudentEnroll">Estudiante:</label>
                <select id="idStudentEnroll" name="student" class="form-control mb-2" required>
                </select>
                <label for="idSubjectEnroll">Asignatura:</label>
                <select id="idSubjectEnroll" name="subject" class="form-control mb-2" required>
                </select>
                <label for="idTermEnroll">Periodo:</label>
                <select id="idTermEnroll" name="term" class="form-control mb-2" required>
                </select>
                <label for="priceEnroll">Precio:</label>
                <input type="number" id="priceEnroll" name="numeroDocumento" class="form-control mb-2" required>
                
                <input type="submit" value="Crear Matrícula" class="btn btn-primary btn-block mt-3">
            </form>
        </div>
    </div>
    `;
    enrollsPage.appendChild(div);
    createOptionsFromArrayPersons(listStudents, "idStudentEnroll");
    createOptionsFromArray(listSubject, "idSubjectEnroll")
    createOptionsFromArray(listTerms, "idTermEnroll")
}

const saveEnroll = async (newEnroll) => {
    try {
        const respuesta = await fetch('http://localhost:3000/matriculas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEnroll),
        });

        if (!respuesta.ok) {
            throw new error('Error al crear la matrícula. Estado: ', respuesta.status);
        }

        const createdEnroll = await respuesta.json();
        console.log('Enroll Creado:', createdEnroll);
    } catch (error) {
        console.error("Error al cargar matriculas", error.message);
    }
}

const createEnroll = async () => {
    const idEnroll = listEnroll.length + 1;
    const idStudentEnrollInput = document.getElementById('idStudentEnroll').value;
    const idSubjectEnrollInput = document.getElementById('idSubjectEnroll').value;
    const idTermEnrollInput = document.getElementById('idTermEnroll').value;
    const priceEnrollInput = document.getElementById('priceEnroll').value;



    const newEnroll = {
        "id": idEnroll,
        "estudiante_id": Number(idStudentEnrollInput),
        "asignatura_id": Number(idSubjectEnrollInput),
        "periodo_id": Number(idTermEnrollInput),
        "precio": Number(priceEnrollInput)
    };

    await saveEnroll(newEnroll);

    idStudentEnrollInput.value = '';
    idSubjectEnrollInput.value = '';
    idTermEnrollInput.value = '';
    priceEnrollInput.value = '';

    alert('Enroll creado con éxito!');
}
