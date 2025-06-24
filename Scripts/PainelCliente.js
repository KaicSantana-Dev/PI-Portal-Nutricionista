function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function carregarFoto(event) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById('fotoPerfil').src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}
