// Redirigir al hacer clic en el carrito
document.getElementById('cart-link').addEventListener('click', function() {
  window.location.href = 'CART.html'; // Asegúrate de tener este archivo
});

// Agregar producto al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
      const product = this.getAttribute('data-product');
      const price = this.getAttribute('data-price');

      // Crear objeto del producto
      const item = { product, price };

      // Obtener carrito de localStorage o crear uno nuevo
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      // Agregar el nuevo producto al carrito
      cart.push(item);

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Redirigir al carrito
      window.location.href = 'CART.html';
  });
});



