// Particulas
tsParticles.load("tsparticles", {
      particles: {
        number: { value: 6 },
        move: {
          enable: true,
          direction: "bottom",
          speed: 2,
          straight: false,
          outModes: "out"
        },
        shape: {
          type: "character",
          character: [
            { value: "🍃", font: "Verdana", style: "", weight: "10" },
            { value: "🍃", font: "Verdana", style: "", weight: "10" },
            { value: "🌿", font: "Verdana", style: "", weight: "10" }
          ]
        },
        size: { value: { min: 5, max: 10 } },
        opacity: { value: 0.9 },
        rotate: {
          value: { min: 0, max: 360 },
          animation: { enable: true, speed: 10 }
        }
      }
    });

// MenuHumburguer
function mudouTamanho() {
    if (window.innerWidth >= 768) {
    itens.style.display = 'none'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
   if (itens.style.display == 'block') {
    itens.style.display = 'none'
   } else {
    itens.style.display = 'block'
   }
}