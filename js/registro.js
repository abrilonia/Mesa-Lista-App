const formulario = document.querySelector("#form_prueba");
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const contrasena = document.querySelector('#contrasena').value;
    const usuario = {
        email,
        contrasena
    };  
    fetch('https://responsible-buttoned-plane.glitch.me/registro-usuario', {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => console.dir(data))
        .catch(error => console.error(error))
    ; 

});

