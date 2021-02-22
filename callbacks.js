/*setTimeout(()  => {
    console.log('Hola Mundo');
},2000);

const saludar = ()  =>{
    consol.log('Hola Mundo');
}*/

//setTimeout(saludar,2000);

const getUserById = (id, callback) => {
    const user = {
        id:id,
        nombre: 'Soledad'
    }
    setTimeout(()  => callback(user),1000); //Desp de un seg devuelve ese user
}

const user = getUserById(10,(user)  => {
    console.log(user.nombre);
});


getUserById(10, ({nombre,id})  => console.log(`Nombre: ${nombre.toUpperCase()} - Id: ${id}`));