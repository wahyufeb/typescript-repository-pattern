"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RepositoryApp_1 = __importDefault(require("./RepositoryApp"));
const Product_1 = __importDefault(require("./DataTransferObejct/Product"));
const repoApp = new RepositoryApp_1.default();
const product = new Product_1.default();
product.name = "Macbook Pro 15 2017";
product.price = 18000000;
product.description = "16GB RAM & 512 SSD";
// All data products
repoApp.getAll();
// Save product
repoApp.saveProduct(product);
// Get product by id
product.id = 12;
repoApp.getProductId(product);
// Update product by id
product.id = 12;
product.name = "Lenovo legion";
product.price = 25000000;
product.description = "16GB RAM & 1TB SSD";
repoApp.updateProductId(product);
// Delete product by id
product.id = 12;
repoApp.deleteProductId(product);
//# sourceMappingURL=index.js.map