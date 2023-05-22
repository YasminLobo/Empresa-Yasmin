
const buyButtons = document.querySelectorAll('.buy-product');

const deleteButtons = document.querySelectorAll('.delete-product');

buyButtons.forEach((button) => {

    button.addEventListener('click', comprarProduto);
});


deleteButtons.forEach((button) => {
    button.addEventListener('click', excluirProduto);
});


function comprarProduto(event) {
    const button = event.target;
    const product = button.parentNode.parentNode;
    const quantidadeInput = product.querySelector('.quantity-input');
    const quantidade = parseInt(quantidadeInput.value);


    console.log('Produto comprado!');
    console.log('Quantidade:', quantidade);
}

function excluirProduto(event) {
    const button = event.target;
    const product = button.parentNode.parentNode;


    product.remove();
}

