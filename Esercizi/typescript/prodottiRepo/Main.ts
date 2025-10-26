import { Repository } from "./Repository";
const productRepository = new Repository<Product>();

productRepository.add({ id: 1, name: "Laptop", price: 1200 });
productRepository.add({ id: 2, name: "Mouse", price: 25 });
productRepository.add({ id: 3, name: "Tastiera", price: 45 });

console.log("Lista iniziale dei prodotti:\n", productRepository.getAll());

const product = productRepository.getById(2);
console.log("\nProdotto con ID 2:\n", product);

productRepository.removeById(1);

console.log("\nLista aggiornata dei prodotti:", productRepository.getAll());
