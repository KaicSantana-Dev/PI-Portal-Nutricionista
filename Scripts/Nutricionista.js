    function mostrarSecao(secaoId) {
      const secoes = document.querySelectorAll('.secao');
      secoes.forEach(secao => secao.style.display = 'none');
      const secaoAtiva = document.getElementById(secaoId);
      secaoAtiva.style.display = 'block';
    }

    function carregarFotoNutri(event) {
      const foto = document.getElementById('fotoPerfilNutri');
      foto.src = URL.createObjectURL(event.target.files[0]);
    }

    function iniciarChat(cliente) {
      // Mostrar a seção de chat e o nome do cliente
      document.getElementById('chat').style.display = 'block';
      document.getElementById('clienteNome').textContent = cliente;

      // Limpar o campo de mensagens ao iniciar um novo chat
      document.getElementById('mensagens').innerHTML = '';
      document.getElementById('novaMensagem').value = '';
    }

    function enviarMensagem() {
      const mensagem = document.getElementById('novaMensagem').value;
      if (mensagem.trim() !== '') {
        // Adicionar a mensagem na tela
        const mensagens = document.getElementById('mensagens');
        const novaMensagem = document.createElement('div');
        novaMensagem.classList.add('mensagem');
        novaMensagem.textContent = mensagem;
        mensagens.appendChild(novaMensagem);

        // Limpar o campo de entrada de texto
        document.getElementById('novaMensagem').value = '';
        
        // Manter o chat sempre visível
        mensagens.scrollTop = mensagens.scrollHeight;
      }
    }

    mostrarSecao('clientes');