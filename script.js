const cursor = document.querySelector('.cursor'); // transforma a classe cursor em uma constante no JS

// Seguir o mouse
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`; // faz a posição top do cursor ser a mesma que a do mouse
  cursor.style.left = `${e.clientX}px`; // faz a posição left do cursor ser a mesma que a do mouse
});

// Detectar hover sobre links e botões
const hoverTargets = document.querySelectorAll('a, .linkH, linkV, button'); // detecta os links e botões da minha página

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover')); // ativa o hover quando o mouse passa por cima
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover')); // desativa quando o mouse sair
});