const products = [
  {
    name: "HP Essentials 255 G8 AMD",
    price: 289,
    stars: 4,
    reviews: 250,
    seller: "CoolMod",
    image:
      "https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg",
  },
  {
    name: "Procesador AMD Ryzen 7 7800X3D 5.0GHz Socket AM5 Boxed",
    price: 509,
    stars: 5,
    reviews: 125,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-024047_1.jpg",
  },
  {
    name: 'Monitor LG UltraGear 27GS75Q-B 27" QHD 2K IPS 200Hz 1ms HDR FreeSync/G-Sync',
    price: 229,
    stars: 4,
    reviews: 45,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-036681_1.jpg",
  },
  {
    name: "Teclado para Mac y Windows Royal Kludge RKM75 ISO-ES Hot-Swappable Switch Silver Speed Wireless Phantom",
    price: 84,
    stars: 5,
    reviews: 233,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-030854_1.jpg",
  },
  {
    name: "Tarjeta Gráfica MSI GeForce RTX 4060 VENTUS 2X Black OC 8GB GDDR6 DLSS3",
    price: 329,
    stars: 4,
    reviews: 250,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-027184_1.jpg",
  },
  {
    name: "Disco Duro M.2 Western Digital Black SN770 1TB NVMe PCIe Gen4",
    price: 71,
    stars: 4,
    reviews: 34,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-022372_1.jpg",
  },
  {
    name: "Fuente/PSU Corsair RM750x Shift 80 Plus Gold 750W ATX 3.0 Modular",
    price: 149,
    stars: 5,
    reviews: 23,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-023464_1.jpg",
  },
  {
    name: "COOLPC Gamer V - Ryzen 5 5600X / GeForce RTX 4060 Ti 8Gb / 32GB DDR4 3200Mhz / NVMe 1Tb",
    price: 949,
    stars: 4,
    reviews: 344,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-009805_1.jpg",
  },
  {
    name: "COOLPC Gamer XIII - Ryzen 7 7700X / GeForce RTX 4070 SUPER 12Gb / 32Gb DDR5 6000Mhz / NVMe 1Tb",
    price: 1.599,
    stars: 5,
    reviews: 17,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-007152_1.jpg",
  },
  {
    name: "COOLPC Gamer III - Ryzen 5 5500 / GeForce RTX 4060 8Gb / 16GB DDR4 3200Mhz / NVMe 1Tb",
    price: 699,
    stars: 4,
    reviews: 30,
    seller: "CoolMod",
    image: "https://www.coolmod.com/images/product/large/PROD-010982_1.jpg",
  },
];

const productsContainer = document.getElementById("product-list");

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}€</p>
      <p>${product.stars} stars (${product.reviews} reviews)</p>
      <p>Seller: ${product.seller}</p>
    `;
  productsContainer.appendChild(productDiv);
});

const priceInput = document.getElementById("price");
const priceValue = document.getElementById("price-value");

// Actualizar el valor al mover el slider
priceInput.addEventListener("input", () => {
  priceValue.textContent = priceInput.value;
});
