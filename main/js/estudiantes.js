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
      <form id='listStudents'>
        <div class="container">
            <div class="row">
              <div class="col">
                <!-- Contenido de la primera fila -->
                <p>Fila 1 - Columna 1</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <!-- Contenido de la segunda fila -->
                <p>Fila 2 - Columna 1</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <!-- Contenido de la tercera fila -->
                <p>Fila 3 - Columna 1</p>
              </div>
            </div>
        </div>
      </form>   
  `;
  const listadoClientes = document.getElementById('listado-clientes');
  listadoClientes.style.display='none';
}
