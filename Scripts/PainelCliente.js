    function mostrarSecao(secaoId) {
      const secoes = document.querySelectorAll('.secao');
      secoes.forEach(secao => secao.style.display = 'none');
      const secaoAtiva = document.getElementById(secaoId);
      secaoAtiva.style.display = 'block';
    }

    function carregarFoto(event) {
      const foto = document.getElementById('fotoPerfil');
      foto.src = URL.createObjectURL(event.target.files[0]);
    }

    mostrarSecao('consultas');