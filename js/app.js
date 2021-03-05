const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Fernanda', 'García')
];

function mostrarPersonas() {
    let texto = ' ';
    for (let persona of personas) {
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const form = document.forms['form'];
    const nombre = form['nombre'];
    const apellido = form['apellido'];

    if (nombre.value != '' && apellido.value != '') {
        
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    } else {
        alert('No hay información para agregar')
    }
}