function loadProductData(id) {
   const idToUpdate = id.split('_')[1];

   Object.entries(inventory[idToUpdate]).forEach(([key, value]) => {
      form.elements[key].value = value;
   });
}

function updateProduct(id, newData) {
   inventory[id] = {...newData}

   Object.keys(inventory)

   createProductCard(newData, true)

   saveToLocalStorage()
}
