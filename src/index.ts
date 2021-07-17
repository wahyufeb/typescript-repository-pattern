import RepositoryApp from "./RepositoryApp";
import Product from "./DataTransferObejct/Product";

const repoApp = new RepositoryApp();
const product = new Product();

product.name = "Macbook Pro 15 2017";
product.price = 18000000;
product.description = "16GB RAM & 512 SSD";

// All data products
repoApp.getAll()

// Save product
repoApp.saveProduct(product)

// Get product by id
product.id = 12
repoApp.getProductId(product)

// Update product by id
product.id = 12;
product.name = "Lenovo legion";
product.price = 25000000;
product.description = "16GB RAM & 1TB SSD"
repoApp.updateProductId(product);

// Delete product by id
product.id = 12
repoApp.deleteProductId(product)