    // Adiciona um evento de clique aos botões de compra
    var buyButtons = document.querySelectorAll('.buy');
    buyButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var quantityInput = this.previousElementSibling;
        var quantity = parseInt(quantityInput.value);
        var name = this.parentNode.querySelector('.name').innerText;
        alert('Você comprou ' + quantity + ' unidades do produto: ' + name);
      });
    });

    // Adiciona um evento de clique aos botões de exclusão
    var deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        var quantityInput = this.parentNode.querySelector('.quantity');
        quantityInput.value = 0;
      });
    });