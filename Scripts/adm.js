function mostrarSecao(secaoId) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => {
    secao.style.display = 'none';
  });

  const secaoAtiva = document.getElementById(secaoId);
  if (secaoAtiva) {
    secaoAtiva.style.display = 'block';
  }
}

// Carregar foto de perfil a partir do input file
function carregarFoto(event) {
  const arquivo = event.target.files[0];
  if (arquivo && arquivo.type.startsWith('image/')) {
    const imagem = document.getElementById('fotoPerfil');
    imagem.src = URL.createObjectURL(arquivo);
  } else {
    alert('Por favor, selecione uma imagem válida.');
  }
}
