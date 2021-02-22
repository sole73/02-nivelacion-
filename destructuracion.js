const personaje = { //Esto meindica un objeto
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'zapatero',
    getDescription() {
        return `${nombre} ${apellido} ${profesion}`
    }
}

/*const nombre = personaje.nombre;
const apellido = personaje.apellido;
const profesion = personaje.profesion;*/

//const {nombre,apellido,profesion, edad = 50} = personaje;

const imprimirPersonaje = ({nombre,apellido,profesion,edad=50}) => {
    console.log(nombre, apellido, profesion,edad);
}
imprimirPersonaje(personaje);