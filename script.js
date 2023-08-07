const formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch('http://localhost:3000/agregar', {
        method: 'POST',
        body: JSON.stringify({nombre: nombre.value }), 
        headers: {
            'Content-Type': 'application/json'
        }
    }) .then(res => res.json()).then(data => {
        console.log(data);
        formulario.reset();
        nombre.focus();
    }).catch(err => console.log(err));
});