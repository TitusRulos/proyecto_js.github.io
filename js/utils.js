const listTerms=[]
const listCareer=[]
const listFee=[]
const listDepartament=[]
const listTeachers=[]
const listStudents=[]
const listCourse=[]
const listClassrooms=[]
const listSubject=[]
const listEnroll=[]

const loadTerms = async() => {
    try{
        listTerms.length=0;
        const answer= await fetch('http://localhost:3000/periodos')
        if (!answer.ok){
            throw new Error('Error al cargar periodos', answer.status)
        }
        const terms= await answer.json();
        listTerms.push(...terms);
    }catch(error){
        console.error("Error al cargar periodos", error.message);
    }
}

const loadCareer = async() => {
    try{
        listCareer.length=0;
        const answer= await fetch('http://localhost:3000/programas')
        if (!answer.ok){
            throw new error('Error al cargar programas', answer.status)
        }
        const career= await answer.json();
        listCareer.push(...career);
    }catch(error){
        console.error("Error al cargar programas", error.message);
    }
}

const loadFee = async() => {
    try{
        listFee.length=0;
        const answer= await fetch('http://localhost:3000/tarifas')
        if (!answer.ok){
            throw new Error('Error al cargar tarifas', answer.status)
        }
        const fees= await answer.json();
        listFee.push(...fees);
    }catch(error){
        console.error("Error al cargar tarifas", error.message);
    }
}

const loadDepartament = async() => {
    try{
        listDepartament.length=0;
        const answer= await fetch('http://localhost:3000/departamentos')
        if (!answer.ok){
            throw new error('Error al cargar departamentos', answer.status)
        }
        const departament= await answer.json();
        listDepartament.push(...departament);
    }catch(error){
        console.error("Error al cargar departamentos", error.message);
    }
}

const loadTechaers = async() => {
    try{
        listTeachers.length=0;
        const answer= await fetch('http://localhost:3000/profesores')
        if (!answer.ok){
            throw new error('Error al cargar profesores', answer.status)
        }
        const teachers= await answer.json();
        listTeachers.push(...teachers);
    }catch(error){
        console.error("Error al cargar profesores", error.message);
    }
}

const loadStudents = async() => {
    try{
        listStudents.length=0;
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

const loadCourse = async() => {
    try{
        listCourse.length=0;
        const answer= await fetch('http://localhost:3000/cursos')
        if (!answer.ok){
            throw new error('Error al cargar cursos', answer.status)
        }
        const course= await answer.json();
        listCourse.push(...course);
    }catch(error){
        console.error("Error al cargar cursos", error.message);
    }
}

const loadClassrooms = async() => {
    try{
        listClassrooms.length=0;
        const answer= await fetch('http://localhost:3000/salones')
        if (!answer.ok){
            throw new error('Error al cargar salones', answer.status)
        }
        const classrooms= await answer.json();
        listClassrooms.push(...classrooms);
    }catch(error){
        console.error("Error al cargar salones", error.message);
    }
}

const loadSubject = async() => {
    try{
        listSubject.length=0;
        const answer= await fetch('http://localhost:3000/asignaturas')
        if (!answer.ok){
            throw new error('Error al cargar asignaturas', answer.status)
        }
        const subject= await answer.json();
        listSubject.push(...subject);
    }catch(error){
        console.error("Error al cargar asignaturas", error.message);
    }
}

const loadEnrolls = async() => {
    try{
        listEnroll.length=0;
        const answer= await fetch('http://localhost:3000/matriculas')
        if (!answer.ok){
            throw new error('Error al cargar matriculas', answer.status)
        }
        const enroll= await answer.json();
        listEnroll.push(...enroll);
    }catch(error){
        console.error("Error al cargar matriculas", error.message);
    }
}

const originPage = () =>{
    const page = document.getElementById("page")
    page.innerHTML=`
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="">` 
}

const populateCities = () => {
    const citiesSelect = document.getElementById("cityStudent");
    const colombianCities = [
        "Bogotá", "Medellín", "Cali", "Barranquilla", "Cartagena",
        "Santa Marta", "Bucaramanga", "Cúcuta", "Ibagué", "Pereira",
        "Manizales", "Pasto", "Neiva", "Villavicencio", "Valledupar",
        "Armenia", "Montería", "Popayán", "Sincelejo", "Tunja",
        "Riohacha", "Quibdó", "Florencia", "Puerto Carreño", "Mitu",
        "San José del Guaviare", "Leticia"
    ];

    colombianCities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citiesSelect.appendChild(option);
    });
}

const createOptionsFromArray = (array, id) => {
    const select = document.getElementById(id);
    select.innerHTML = "<option selected value=''>...</option>";

    array.forEach(objeto => {
        const option = document.createElement('option');
        option.value = objeto.id;
        option.textContent = objeto.nombre || objeto.codigo || objeto.numero_identificacion;
        select.appendChild(option);
    });

    return select;
}

const createOptionsFromArrayPersons = (array, id) => {
    const select = document.getElementById(id);
    select.innerHTML = "<option selected value=''>...</option>";

    array.forEach(objeto => {
        const option = document.createElement('option');
        option.value = objeto.id;
        option.textContent = objeto.nombre + " " + objeto.apellido;
        select.appendChild(option);
    });

    return select;
}

const getNameById = (array, id) => {
    const foundItem = array.find(item => item.id == id);
    return foundItem ? foundItem.nombre : null;
};







