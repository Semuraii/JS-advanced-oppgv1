const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];

  const productsUnder200 = products.filter(function (product) {
    return product.price < 200;
  });
  console.log("productsUnder200:", productsUnder200);

  const productNames = products.map(function (product) {
    return product.name;
  });
  console.log("productNames:", productNames);

  const electronicsProducts = products.filter(function (product) {
    return product.category === "electronics";
    });
    console.log("electronicsProducts:", electronicsProducts);
