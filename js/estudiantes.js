const listStudents=[]

const loadStudents = async() => {
    try{
        listStudents.lenght=0;
        const answer= await fetch('http://localhost:3000/alumnos')
        if (!answer.ok){
            throw new error('Error al cargar estudiantes', answer.status)
        }
        const students= await answer.json();
        listStudents.push(...students);
    }catch(error){
        console.error("Error al cargar estudiantes", error.message);
    }
}

const saveStudent= async(newStudent)=>{
    try{
        const answer=await fetch('http://localhost:3000/alumnos',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newStudent),
        });
        if(!answer.ok){
           throw new Error('Error al crear el cliente. Estado: ',answer.status);
        }
        const createdStudent=await answer.json();
        console.log('Estudiante creado:', createdStudent);
    }catch(error){
        console.error("Error al cargar clientes",error.message);
    }
}

const loadPageStudents=()=>{
    const studentsPage = document.getElementById('page');
    studentsPage.innerHTML = `
    <form class="">
      <div id="crearEsttudiante">
        <h2>CREAR ESTUDIANTE</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br>

        <label for="id">ID:</label>
        <input type="text" id="id" name="id" required><br>
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" name="fechaNacimiento" required><br>
        <label for="tipoDocumento">Tipo de Documento:</label>
        <select id="tipoDocumento" name="tipoDocumento" required>
            <option value="">Seleccione...</option>
            <option value="cedula">Cédula</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="otro">Otro</option>
        </select><br>
        <label for="programaAcademico">Programa Académico:</label>
        <select id="programaAcademico" name="programaAcademico" required>
            <option value="">Seleccione...</option>
            <option value="cedula">Cédula</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="otro">Otro</option>
        </select><br>
        <label for="ciudad">Ciudad:</label>
        <select id="ciudad" name="ciudad" required>
          <option value="">Seleccione una ciudad...</option>
          <option value="Bogotá">Bogotá</option>
          <option value="Medellín">Medellín</option>
          <option value="Cali">Cali</option>
          <option value="Barranquilla">Barranquilla</option>
          <option value="Cartagena">Cartagena</option>
          <option value="Santa Marta">Santa Marta</option>
          <option value="Bucaramanga">Bucaramanga</option>
          <option value="Cúcuta">Cúcuta</option>
          <option value="Ibagué">Ibagué</option>
          <option value="Pereira">Pereira</option>
          <option value="Manizales">Manizales</option>
          <option value="Pasto">Pasto</option>
          <option value="Neiva">Neiva</option>
          <option value="Villavicencio">Villavicencio</option>
          <option value="Valledupar">Valledupar</option>
          <option value="Armenia">Armenia</option>
          <option value="Montería">Montería</option>
          <option value="Popayán">Popayán</option>
          <option value="Sincelejo">Sincelejo</option>
          <option value="Tunja">Tunja</option>
          <option value="Riohacha">Riohacha</option>
          <option value="Quibdó">Quibdó</option>
          <option value="Florence">Florencia</option>
          <option value="Puerto Carreño">Puerto Carreño</option>
          <option value="Mitu">Mitu</option>
          <option value="San José del Guaviare">San José del Guaviare</option>
          <option value="Leticia">Leticia</option>
        </select><br>
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" required><br>
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required><br>
        <label for="sexo">Sexo:</label>
        <input type="radio" id="sexoM" name="sexo" value="masculino" required>
        <label for="sexoM">Masculino</label>
        <input type="radio" id="sexoF" name="sexo" value="femenino" required>
        <label for="sexoF">Femenino</label><br><br>
        <input type="submit" value="Crear Estudiante">
      </div>
      
    </form> 
  `;
}
