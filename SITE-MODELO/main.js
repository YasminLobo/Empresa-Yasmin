var quantidadeCliques = 0;
var idQtdItem = document.getElementById("registro-cliques");
var contar = document.getElementById("preco");
var prQt = 40;

function ContarCliques() {
    quantidadeCliques++;
    idQtdItem.innerHTML = `<td>${quantidadeCliques}</td>`;
    let valor = quantidadeCliques * prQt;
    preco.innerHTML = `<td>R$${valor},00</td>`;
}

function resetCounter() {
    quantidadeCliques = 0;
    idQtdItem.innerHTML = 0;
   preco.innerHTML = `<td>R$ ${valor},00</td>`;
}

function excluir() {
    quantidadeCliques--;
    idQtdItem.innerHTML = `<td>${quantidadeCliques}</td>`;
    let valor = quantidadeCliques * prQt;
    preco.innerHTML = `<td>R$${valor},00</td>`;
}

function excluir() {
    if(quantidadeCliques>0) {
        quantidadeCliques--;
        idQtdItem.innerHTML = `<td>${quantidadeCliques}</td>`;
    let valor = quantidadeCliques * prQt;
    preco.innerHTML = `<td>R$${valor}00,</td>`;
    }else{
       alert("Impossível selecionar esse valor");
    }
}
  
  