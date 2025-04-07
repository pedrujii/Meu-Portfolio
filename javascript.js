// Aguarda até que o DOM esteja carregado
document.addEventListener("DOMContentLoaded", function() {
    particlesJS.load('particles-container', 'particlesjs-config.json', function() {
        console.log("Particles.js carregado com sucesso!");
    });
});

 const button = document.querySelector('.button');

    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        button.style.setProperty('--x', `${x}%`);
        button.style.setProperty('--y', `${y}%`);
    });

    function baixarCurriculo() {
        const link = document.createElement("a");
        link.href = "./curriculo.pdf";
        link.download = "curriculo.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }