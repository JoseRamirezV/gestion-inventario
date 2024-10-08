function addProduct(data) {
   // Recoger datos del formulario
   const id = crypto.randomUUID();

   const product = { ...data, id };

   inventory[id] = { ...product };

   createProductCard(product);

   console.log({inventory});

   saveToLocalStorage();
}
