var navMenu = document.querySelector(".nav2");
var botonMenu = document.querySelector(".menu-hamburger");

// Alternar menú al hacer click en el botón
botonMenu.addEventListener('click', () => {
  navMenu.classList.toggle("navVisible");
});

// Cerrar menú al hacer click en cualquier enlace del menú
document.querySelectorAll(".nav-a").forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.remove("navVisible");
  });
});


// Modal certificaciones
const modal = document.getElementById("modal-certificaciones");
const btnCertificaciones = document.getElementById("btn-certificaciones");
const spanClose = document.querySelector(".modal .close");

btnCertificaciones.addEventListener('click', () => {
  modal.style.display = "block";
});

spanClose.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Modal proveedores
const modalPro = document.getElementById("modal-proveedores");
const btnPro = document.getElementById("btn-pro");
const spanClosePro = document.querySelector(".modal-pro .close-pro");

btnPro.addEventListener('click', () => {
  modalPro.style.display = "block";
});

spanClosePro.addEventListener('click', () => {
  modalPro.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === modalPro) {
    modalPro.style.display = "none";
  }
});


 // Año dinámico en el footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Galería lightbox
    function openLightbox(img){
      const lb = document.createElement('div');
      lb.id = 'lightbox';
      lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:9999;';
      lb.innerHTML = `<img src="${img.src}" style="max-width:90%;max-height:90%;border-radius:10px;box-shadow:0 10px 40px rgba(0,0,0,0.6)">`;
      lb.addEventListener('click', ()=> document.body.removeChild(lb));
      document.body.appendChild(lb);
    }

    // Desplazar a la galería
    function openGallery(){
      document.getElementById('gallery').scrollIntoView({behavior:'smooth'});
    }

    // Enviar formulario de contacto (abre cliente de correo)
    function sendContact(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      const body = encodeURIComponent(`Nombre: ${name}%0AEmail: ${email}%0A%0A${message}`);
      const mailto = `mailto:hotellasbahamas@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = mailto;
      alert('Se abrirá tu cliente de correo para enviar el mensaje.');
    }

    

    const swiper = new Swiper('.swiper', {
      loop: true,          
      effect: 'fade',       
      autoplay: {
        delay: 4000,      
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

