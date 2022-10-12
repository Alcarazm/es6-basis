const colors =require('colors')
const materias =require('./materias')


materias.push({
    nombre: "PHP",
    instructor: "Cristian Buitrago",
    notas: [
        4.0,
        3.5
    ],
    Tipo: "Tecnica"
})


//Actualizar materia: findindex

let indice = materias.findIndex((materia)=>materia.instructor === "Cristian Buitrago")
console.log(indice)
materias[indice].notas = [4.5, 4.8, 3.3]

//elimitar materia: splice

materias.splice(2,1)

materias.forEach((materia)=>{

    console.log(`nombre: ${materia.nombre}`.bgMagenta)
    console.log(`nota: ${materia.notas}`.bgMagenta)
    console.log('-----------------------------------')
   
});






//Crear una nueva materia y ponerla 
//push()

/*
//if(materias.instructor === "Cristian Buitrago"){ }

const profesores = materias.map((materia)=>{
    return materias.instructor
})
console.log(profesores)



const PHP = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})

console.log(PHP)

//crear una nueva materia

*/