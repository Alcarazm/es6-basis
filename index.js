const colors =require('colors')
const materias =require('./materias')

materias.forEach((materia)=>{
    if(materias.instructor === "Cristian Buitrago"){
    console.log(`nombre: ${materia.nombre}`.bgMagenta)
    }
});


const profesores = materias.map((materia)=>{
    return materias.instructor
})
console.log(profesores)

const PHP = materias.filter(()=>{
    return materias.instructor === "Cristian Buitrago"
})

console.log(PHP)