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
    studentsPage.innerHTML= "";
    const div = document.createElement("div");
    div.classList.add("FormularioEstudiante")
    div.innerHTML = `
    <form class="">
      <div id="crearEstudiante">
        <h2>CREAR ESTUDIANTE</h2>
        <label for="nameStudent">Nombre:</label>
        <input type="text" id="nameStudent" name="nombre" required><br>
        <label for="idStudent">ID:</label>
        <input type="text" id="idStudent" name="id" required><br>
        <label for="birthdayStudent">Fecha de Nacimiento:</label>
        <input type="date" id="birthdayStudent" name="fechaNacimiento" required><br>
        <label for="documentStudent">Tipo de Documento:</label>
        <select id="documentStudent" name="tipoDocumento" required>
            <option value="">Seleccione...</option>
            <option value="cedula">C.C</option>
            <option value="pasaporte">Pasaporte</option>
            <option value="otro">T.J</option>
        </select><br>


        <label for="careerStudent">Programa Académico:</label>
        <select id="careerStudent" name="programaAcademico" required>
           

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
  studentsPage.appendChild(div)
  careerOptions(listCareer);
}

const careerOptions = (listCareer) => {
    const careerselect= document.getElementById("careerStudent")
    careerselect.innerHTML="<option selected>Carreras...</option>";
        listCareer.forEach(programas=>{
            const optionElement= document.createElement('option')
            optionElement.value = programas.id
            optionElement.textContent = programas.nombre
            careerselect.appendChild(optionElement)})
}
/*const createStudent= async ()=>{
    const nameInput=document.getElementById('nameStudent');
    const edadInput=document.getElementById('edadCliente');
    const emailInput=document.getElementById('emailCliente');
    const nombreInput=document.getElementById('nombreCliente');
    const edadInput=document.getElementById('edadCliente');
    const emailInput=document.getElementById('emailCliente');
    const nombreInput=document.getElementById('nombreCliente');
    const edadInput=document.getElementById('edadCliente');
    const emailInput=document.getElementById('emailCliente');

    const nameStudent=nombreInput.value;
    const edad=edadInput.value;
    const email=emailInput.value;

    const nuevoCliente={
        id:listaClientes.length+1,
        nombre:nombre,
        edad: edad,
        email: email
    }

  
    await guardarCliente(nuevoCliente);
    await loadClientes();
   
    nombreInput.value='';
    edadInput.value='';
    emailInput.value='';

    alert('Cliente creado con éxito!');
    
    actulizarClientesEnFacturas();

    return nuevoCliente;

}*/