// Simulação de login (exemplo)
// Para testar, defina localStorage.user = JSON.stringify({tipo: 'cliente'}) ou {tipo: 'nutricionista'}

document.addEventListener('DOMContentLoaded', function() {
  const areaLogada = document.getElementById('areaLogada');
  const painelCliente = document.getElementById('painelCliente');
  const painelNutricionista = document.getElementById('painelNutricionista');

  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && areaLogada) {
      areaLogada.classList.remove('d-none');
      if (user.tipo === 'cliente') {
        painelCliente.classList.remove('d-none');
        painelNutricionista.classList.add('d-none');
      } else if (user.tipo === 'nutricionista') {
        painelNutricionista.classList.remove('d-none');
        painelCliente.classList.add('d-none');
      }
    }
  } catch (e) {
    // Usuário não logado ou erro no localStorage
  }
}); 