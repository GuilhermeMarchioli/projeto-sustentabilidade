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

// Modais
function abrirModal1() {
  Swal.fire({
    title: "Poluição do Solo",
    text: "O descarte incorreto de lixo, principalmente em lixões a céu aberto, causa sérios impactos no solo. Substâncias químicas e resíduos tóxicos liberados durante a decomposição dos materiais penetram na terra, alterando sua composição natural e prejudicando a fertilidade. Isso afeta diretamente plantações, florestas e ecossistemas locais. Com o tempo, o solo contaminado perde sua capacidade de sustentar vida, dificultando a recuperação ambiental e reduzindo a produtividade agrícola um problema que começa no lixo e termina na mesa das famílias.",
    icon: "warning",
    confirmButtonText: "Entendi",
    confirmButtonColor: "#28a745"
  });
}

function abrirModal2() {
  Swal.fire({
    title: "Poluição da Água",
    text: "Grande parte do lixo descartado de forma irregular acaba em rios, lagos e mares. À medida que esses resíduos se degradam, liberam substâncias químicas, microplásticos e metais pesados que comprometem a qualidade da água. Isso ameaça a vida aquática, contamina peixes e interfere em todo o equilíbrio dos ecossistemas hídricos. Além disso, a poluição da água tem reflexos diretos na saúde humana, já que muitos desses corpos d’água abastecem cidades e comunidades. O lixo que descartamos de maneira irresponsável retorna de forma silenciosa e perigosa pelo copo d’água que bebemos.",
    icon: "warning",
    confirmButtonText: "Entendi",
    confirmButtonColor: "#28a745"
  });
}

function abrirModal3() {
  Swal.fire({
    title: "Poluição do Ar",
    text: "A poluição do ar está diretamente ligada à forma como produzimos e descartamos nossos resíduos. A decomposição do lixo emite gases como o metano (CH₄) e o dióxido de carbono (CO₂), ambos intensificadores do efeito estufa e do aquecimento global. Além disso, a queima de lixo e a fumaça proveniente de aterros irregulares liberam partículas nocivas que afetam a saúde respiratória das populações próximas. Esse processo, embora muitas vezes invisível, contribui para a crise climática e torna o ar das cidades cada vez mais pesado e tóxico.",
    icon: "warning",
    confirmButtonText: "Entendi",
    confirmButtonColor: "#28a745"
  });
}

function abrirModal4() {
  Swal.fire({
    title: "Poluição dos Ecossistemas",
    text: "O acúmulo de resíduos sólidos nos ecossistemas naturais é uma das maiores ameaças à biodiversidade. Animais terrestres e marinhos confundem plásticos e outros materiais com alimento, causando intoxicações, ferimentos e até mortes. Além disso, a decomposição lenta de muitos desses resíduos libera substâncias que desequilibram o solo e a água, afetando desde plantas até microrganismos essenciais. Essa cadeia de impactos enfraquece todo o ambiente, mostrando que o lixo que geramos nunca desaparece  apenas muda de lugar, com consequências graves.",
    icon: "warning",
    confirmButtonText: "Entendi",
    confirmButtonColor: "#28a745"
  });
}

function abrirModal5() {
  Swal.fire({
    title: "Contaminação dos Lencóis Freaticos",
    text: "Nos lixões e aterros sem controle ambiental, o chorume um líquido escuro e altamente poluente escorre pelo solo até alcançar os lençóis freáticos. Esse líquido contém restos orgânicos, metais pesados e agentes patogênicos que tornam a água subterrânea imprópria para o consumo humano e animal. Como muitas comunidades utilizam essa água para beber ou irrigar plantações, o problema se torna uma ameaça invisível à saúde pública. Cada saco de lixo jogado no lugar errado pode, sem que percebamos, comprometer uma fonte de água limpa.",
    icon: "warning",
    confirmButtonText: "Entendi",
    confirmButtonColor: "#28a745"
  });
}

function abrirModal6() {
  Swal.fire({
    title: "Inundações",
    text: "O descarte incorreto de lixo nas ruas e bueiros é uma das principais causas das inundações nas cidades. Plásticos, papéis e restos de embalagens bloqueiam o escoamento da água da chuva, provocando alagamentos que causam prejuízos materiais e colocam vidas em risco. Além disso, a água parada favorece a proliferação de mosquitos e doenças como a dengue. Cada pequeno resíduo jogado no chão parece inofensivo, mas, somado a milhões de outros, se transforma em um problema coletivo um reflexo direto da falta de consciência ambiental.",
    icon: "warning",
    confirmButtonText: "Entendi",
    confirmButtonColor: "#28a745"
  });
}

// Grafico Lixo
const ctx = document.getElementById('graficoLixo');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2015', '2017', '2019', '2021', '2023', '2025'],
    datasets: [{
      label: 'Toneladas de Lixo (milhões)',
      data: [50, 58, 65, 70, 74, 79],
      borderColor: 'rgb(56, 142, 60)',
      backgroundColor: 'rgba(56, 142, 60, 0.2)',
      tension: 0.3, // deixa o traço curvado
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

AOS.init({
    duration: 1000, // duração da animação
    easing: 'ease-in-out', // suavização
    once: true, // anima só na primeira vez que aparece
  });