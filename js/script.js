
const datos = {
    nombre: '',
    email: '',
    mensaje: '',
}

const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const mensaje= document.getElementById('mensaje')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)




function leerTexto(e){
    datos[e.target.id] = e.target.value
      
    console.log(datos)
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    const {nombre, email, mensaje} = datos;
if(nombre == '' || email == '' || mensaje == ''){
    mostrarError('todos los campos son obligatorios')
    
    return;
}
enviado = true
 mostrarForm('Formulario Enviado')

    console.log('Enviando formulario')
})

let formAnterior = null; 


function mostrarError (mensaje){
    const error = document.createElement('P')
    error.innerHTML = mensaje;
   error.classList.add('error')
   

    if (formAnterior !== null) {
        formAnterior.remove(); 
    }
    formAnterior = error; 
    setTimeout(() => {
        error.remove();
        
    }, 3000);

    formulario.appendChild(error);
}





function mostrarForm(mensaje){
    const form = document.createElement('p');
    form.innerHTML = mensaje;
    form.classList.add('enviado');

    if (formAnterior !== null) {
        formAnterior.remove(); 
    }
    formAnterior = form; 

    setTimeout(() => {
        form.remove();
       
    }, 3000);

    formulario.appendChild(form);
}

