function addProduct(data) {
   
   const id = crypto.randomUUID();

   if(data.image === '') data.image = '/assets/no-image.jpeg'

   const product = { ...data, id };

   inventory[id] = { ...product };

   createProductCard(product);

   saveToLocalStorage();
}
