const toggleButton = document.getElementById('theme-toggle');
const status = document.getElementById('status');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const isHighContrast = document.body.dataset.theme === 'high-contrast';
    document.body.dataset.theme = isHighContrast ? '' : 'high-contrast';
    toggleButton.setAttribute('aria-pressed', String(!isHighContrast));
    toggleButton.textContent = isHighContrast
      ? 'Ativar alto contraste'
      : 'Desativar alto contraste';

    status.textContent = isHighContrast
      ? 'Modo de alto contraste desativado.'
      : 'Modo de alto contraste ativado.';
  });
}
