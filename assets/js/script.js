// Acción con formulario (¡Correo enviado!)

document.getElementById('enviarNewsletter').addEventListener ('click', function() {
        alert("¡Correo enviado!");
});

// Efecto toggle (jquery on)

$('.tituloCard1').on('click', function() {
$('.textoCard1').toggle('fast',function() {
    });        
});