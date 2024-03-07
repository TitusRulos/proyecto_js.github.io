const listStudents=[]
const listTeachers=[]
const listCareer=[]

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

const loadCareer = async() => {
    try{
        listCareer.lenght=0;
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

const loadTechaers = async() => {
    try{
        listTeachers.lenght=0;
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