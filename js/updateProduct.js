function loadProductData(id) {
   const idToUpdate = id.split('_')[1];
   console.log(inventory[idToUpdate]);

   Object.entries(inventory[idToUpdate]).forEach(([key, value]) => {
      form.elements[key].value = value;
   });
}

function updateProduct(id, newData) {
   inventory[id] = {...newData}

   createProductCard(newData, true)

   saveToLocalStorage()
}
