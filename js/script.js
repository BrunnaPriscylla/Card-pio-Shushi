
    document.addEventListener('DOMContentLoaded', function() {
        const addButtons = document.querySelectorAll('.btnAdd .add');
        const itensContainer = document.getElementById('itens');
        const totalElement = document.getElementById('vlrTotal');
        let total = 0;

        // Função para atualizar o total
        function updateTotal() {
            totalElement.innerText = total.toFixed(2).replace('.', ',');
        }

        // Função para adicionar um item na sacola
        function addItem(itemName, itemPrice) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';
            itemDiv.innerHTML = `
                <div class="descSacola">${itemName}</div>
                <div class="quantidade">1</div>
                <div class="vlrSacola">R$ ${itemPrice}</div>
                <div class="totItem vlrSacola">R$ ${itemPrice}</div>
                <div class="btnRemover">
                    <button class="remover" title="Remover Item">
                        <img src="imagens/remover.png" alt="Remover Item">
                    </button>
                </div>
            `;
            itensContainer.appendChild(itemDiv);
            total += parseFloat(itemPrice);
            updateTotal();

            // Adicionar evento de clique ao botão de remover
            itemDiv.querySelector('.remover').addEventListener('click', function() {
                const itemPrice = parseFloat(itemDiv.querySelector('.totItem').innerText.replace('R$', '').replace(',', '.'));
                total -= itemPrice;
                updateTotal();
                itemDiv.remove();
            });
        }

        // Adicionar eventos aos botões de adicionar
        addButtons.forEach(button => {
            button.addEventListener('click', function() {
                const itemName = this.getAttribute('data-item');
                const itemPrice = this.getAttribute('data-price');
                addItem(itemName, itemPrice);
            });
        });
    });

