// app.js

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Lee el archivo products.json
const productsFilePath = path.join(__dirname, 'productos.json');
const productsJSON = fs.readFileSync(productsFilePath, 'utf8');
const productsData = JSON.parse(productsJSON);

// Endpoint para obtener la lista de items basados en la búsqueda
// Endpoint para obtener la lista de items basados en la búsqueda
app.get('/api/items', (req, res) => {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ error: 'Missing query parameter' });
    }

    // Filtra los productos que coinciden con la búsqueda en cualquier propiedad
    const filteredProducts = productsData.products.filter(product => {
      // Convierte cada valor del objeto a cadena y busca la coincidencia
      return Object.values(product).some(value =>
        value && typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase())
      );
    });

    res.json({ items: filteredProducts });
});

  
  

// Endpoint para obtener los detalles de un item por su ID
app.get('/api/items/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  if (isNaN(productId)) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }

  // Busca el producto por su ID
  const selectedProduct = productsData.products.find(product => product.id === productId);

  if (!selectedProduct) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json({ item: selectedProduct });
});

// Ruta para obtener la información de todos los productos
app.get('/api/products', (req, res) => {
  res.json(productsData);
});

// Configuración para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// No es necesario especificar el puerto cuando se despliega en Netlify
// Netlify gestionará la configuración del puerto automáticamente

module.exports = app;
