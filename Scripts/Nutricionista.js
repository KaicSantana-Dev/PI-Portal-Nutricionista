function mostrarSecao(id) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function carregarFotoNutri(event) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById('fotoPerfilNutri').src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

function iniciarChat(nomeCliente) {
  document.getElementById('clienteNome').textContent = nomeCliente;
  mostrarSecao('chat');
}

function enviarMensagem() {
  const msgInput = document.getElementById('novaMensagem');
  const mensagens = document.getElementById('mensagens');
  if (msgInput.value.trim() !== '') {
    const p = document.createElement('p');
    p.textContent = msgInput.value;
    mensagens.appendChild(p);
    msgInput.value = '';
  }
}
