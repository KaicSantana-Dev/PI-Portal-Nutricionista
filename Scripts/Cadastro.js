        function alternarFormulario() {
          const tipo = document.getElementById('tipo').value;
          const formCliente = document.getElementById('formCliente');
          const formNutricionista = document.getElementById('formNutricionista');
    
          if (tipo === 'cliente') {
            formCliente.classList.remove('hidden');
            formNutricionista.classList.add('hidden');
          } else {
            formCliente.classList.add('hidden');
            formNutricionista.classList.remove('hidden');
          }
        }