function deleteOutOfStockProducts() {
   Object.keys(inventory).forEach((id) => {
      const product = inventory[id];

      if (Number(product.stock) === 0) {
         deleteProduct(id);
      }
   });

   saveToLocalStorage();
}

function deleteProduct(id) {
   delete inventory[id];

   const productCard = document.getElementById(id);

   if (productCard) {
      productCard.remove();
   }
}
