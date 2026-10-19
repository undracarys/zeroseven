document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    
    // Aquí podrías conectar con Formspree o mostrar una alerta
    alert('¡Gracias por suscribirte con: ' + email + '!');
    
    // Limpiar el input
    document.getElementById('emailInput').value = '';
});