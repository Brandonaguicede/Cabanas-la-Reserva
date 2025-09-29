class PaisajeCarousel {
  constructor() {
    this.carrusel = document.getElementById('carrusel-paisaje');
    this.botonAtras = document.getElementById('botonAtras');
    this.botonAdelante = document.getElementById('botonAdelante');
    this.slides = this.carrusel.querySelectorAll('.slide_paisaje');
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;

    this.init();
    this.updateCarrusel();
  }

  init() {
    this.botonAdelante.addEventListener('click', () => this.nextSlide());
    this.botonAtras.addEventListener('click', () => this.prevSlide());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateCarrusel();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarrusel(); 
  }

  updateCarrusel() {
    const translateX = -(this.currentIndex * 100);
    this.carrusel.style.transform = `translateX(${translateX}%)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PaisajeCarousel();
});


class ServicioCarusel {
  constructor() {
    this.carrusel = document.getElementById('carrusel-servicio');
    this.botonAtras = document.getElementById('botonAtrasSer');
    this.botonAdelante = document.getElementById('botonAdelanteSer');
    this.slides = this.carrusel ? this.carrusel.querySelectorAll('.slide_Servicio') : [];

    this.currentIndex = 0;
    this.totalSlides = this.slides.length;

    this.init();
    this.updateCarrusel();
  }

  init() {
    this.botonAdelante.addEventListener('click', () => this.nextSlide());
    this.botonAtras.addEventListener('click', () => this.prevSlide());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });

    window.addEventListener('resize', () => this.updateCarrusel());
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateCarrusel();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarrusel();
  }

  updateCarrusel() {

    const translateX = -(this.currentIndex * 100);
    this.carrusel.style.transform = `translateX(${translateX}%)`;
  }
}


//Modales /
document.addEventListener('DOMContentLoaded', () => {
  new ServicioCarusel();
});

function abrirModal(id) {
  document.getElementById(id).style.display = "flex";
}

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  const modales = document.querySelectorAll(".modal");
  modales.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};


 // Lightbox

  const grid   = document.querySelector('.galeria-grid');
  const lb     = document.getElementById('lightbox');
  const lbImg  = document.getElementById('lightbox-img');
  const closeB = lb.querySelector('.lb-close');

  function openLB(img) {
    const src = img.dataset.full || img.src;
    lbImg.src = src;
    lbImg.alt = img.alt || '';
    lb.classList.add('open');
    document.body.classList.add('lb-open');
    closeB.focus();
  }
  function closeLB() {
    lb.classList.remove('open');
    document.body.classList.remove('lb-open');
    lbImg.src = '';
  }

  grid.addEventListener('click', (e) => {
    const img = e.target.closest('.item img, .galeria-grid img');
    if (!img) return;
    openLB(img);
  });
  closeB.addEventListener('click', closeLB);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLB(); });


// botton responsive
(function() {
  const btn  = document.querySelector('.nav-toggle');
  const menu = document.getElementById('navMenu');
  if (!btn || !menu) { console.warn('Falta .nav-toggle o #navMenu'); return; }

  // Backdrop básico
  let backdrop = document.querySelector('.mobile-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-backdrop';
    document.body.appendChild(backdrop);
  }

  function openMenu() {
    menu.classList.add('is-open');
    document.body.classList.add('nav-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    backdrop.classList.add('is-show');
  }
  function closeMenu() {
    menu.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    backdrop.classList.remove('is-show');
  }
  function toggleMenu() {
    (menu.classList.contains('is-open')) ? closeMenu() : openMenu();
  }

  btn.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Cierra con Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
})();


