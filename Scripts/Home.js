
        // Função para abrir modais
        function openModal(modalId) {
            // Implementação de abertura de modal aqui
            console.log("Abrindo modal: " + modalId);
        }
        
        // Função para alternar entre abas
        function openTab(tabId) {
            // Ocultar todas as abas
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Desativar todos os botões
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Mostrar a aba selecionada
            document.getElementById(tabId).classList.add('active');
            
            // Ativar o botão correspondente
            event.currentTarget.classList.add('active');
        }