// Selecionar os botões "Comprar produto"
const buyButtons = document.querySelectorAll('.buy-product');

// Selecionar os botões "Excluir produto"
const deleteButtons = document.querySelectorAll('.delete-product');

// Adicionar evento de clique a cada botão "Comprar produto"
buyButtons.forEach((button) => {
  button.addEventListener('click', buyProduct);
});

// Adicionar evento de clique a cada botão "Excluir produto"
deleteButtons.forEach((button) => {
  button.addEventListener('click', deleteProduct);
});

// Função para comprar o produto
function buyProduct(event) {
  const button = event.target;
  const product = button.parentNode.parentNode;
  const quantityInput = product.querySelector('.quantity-input');
  const quantity = parseInt(quantityInput.value);

  // Realizar a lógica de compra aqui
  // Exemplo: enviar uma requisição para o servidor, adicionar ao carrinho, etc.
  console.log(`Produto comprado: ${product.querySelector('h3').textContent}`);
  console.log(`Quantidade: ${quantity}`);
}

// Função para excluir o produto
function deleteProduct(event) {
  const button = event.target;
  const product = button.parentNode.parentNode;

  product.remove();
}
c