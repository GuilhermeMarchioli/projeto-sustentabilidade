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

  //  Initialize Swiper 
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });    


// Porrcentagem animation
var bar = new ProgressBar.Line('#sp-bar', {
  strokeWidth: 4,
  color: '#388e71ff',
  trailColor: '#ebebebff',
  trailWidth: 4,
  duration: 1400,
  easing: 'easeInOut'
});
bar.animate(0.11); 

var bar = new ProgressBar.Line('#sd-bar', {
  strokeWidth: 4,
  color: '#388e71ff',
  trailColor: '#ebebebff',
  trailWidth: 4,
  duration: 1400,
  easing: 'easeInOut'
});
bar.animate(0.49); 

var bar = new ProgressBar.Line('#ce-bar', {
  strokeWidth: 4,
  color: '#388e71ff',
  trailColor: '#ebebebff',
  trailWidth: 4,
  duration: 1400,
  easing: 'easeInOut'
});
bar.animate(0.08); 

var bar = new ProgressBar.Line('#no-bar', {
  strokeWidth: 4,
  color: '#388e71ff',
  trailColor: '#ebebebff',
  trailWidth: 4,
  duration: 1400,
  easing: 'easeInOut'
});
bar.animate(0.07);

var bar = new ProgressBar.Line('#nr-bar', {
  strokeWidth: 4,
  color: '#388e71ff',
  trailColor: '#ebebebff',
  trailWidth: 4,
  duration: 1400,
  easing: 'easeInOut'
});
bar.animate(0.24); 

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

// abrir dialogs
function abrirModal1() {
  let modal1 = document.getElementById('modal1')
  modal1.showModal()
}

function abrirModal2() {
  let modal2 = document.getElementById('modal2')
  modal2.showModal()
}

function abrirModal3() {
  let modal3 = document.getElementById('modal3')
  modal3.showModal()
}

function abrirModal4() {
  let modal4 = document.getElementById('modal4')
  modal4.showModal()
}

function abrirModal5() {
  let modal5 = document.getElementById('modal5')
  modal5.showModal()
}

function abrirModal6() {
  let modal6 = document.getElementById('modal6')
  modal6.showModal()
}