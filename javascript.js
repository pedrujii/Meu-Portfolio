// Aguarda até que o DOM esteja carregado
document.addEventListener("DOMContentLoaded", function() {
    particlesJS.load('particles-container', 'particlesjs-config.json', function() {
        console.log("Particles.js carregado com sucesso!");
    });
});