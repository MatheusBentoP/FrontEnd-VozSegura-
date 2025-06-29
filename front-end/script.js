function openModal() {
    document.getElementById('denunciaModal').style.display = 'block';
}
 
function closeModal() {
    document.getElementById('denunciaModal').style.display = 'none';
}
 
function openApoioModal() {
    document.getElementById('apoioModal').style.display = 'block';
}
 
function closeApoioModal() {
    document.getElementById('apoioModal').style.display = 'none';
}
 
function scrollTo(selector) {
    document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}
 
document.getElementById('denunciaForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        data: document.getElementById('data').value,
        tipo: document.getElementById('tipo').value,
        descricao: document.getElementById('descricao').value,
        anonimo: document.getElementById('anonimo').checked,
        timestamp: new Date().toISOString()
    };
    
    // Como o backend foi removido, a denúncia será apenas logada ou tratada localmente.
    console.log('Denúncia enviada localmente:', formData);
    alert('Denúncia registrada localmente! (A funcionalidade de backend foi removida)');
    
    closeModal();
});
 
document.getElementById('apoioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        nome: document.getElementById('nomeApoio').value,
        email: document.getElementById('emailApoio').value,
        mensagem: document.getElementById('mensagemApoio').value,
        timestamp: new Date().toISOString()
    };
    
    console.log('Solicitação de apoio:', formData);
    alert('Solicitação de apoio enviada! Nossa equipe entrará em contato em breve.');
    closeApoioModal();
});
 
//Carrossel de imagens.
// Carousel
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

function changeSlide(direction) {
  currentSlideIndex += direction;
  if (currentSlideIndex >= slides.length) currentSlideIndex = 0;
  if (currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index - 1;
  showSlide(currentSlideIndex);
}

// Auto slide
setInterval(() => {
  changeSlide(1);
}, 5000);