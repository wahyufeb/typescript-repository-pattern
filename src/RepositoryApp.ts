import ProductRepository from "./Repository/ProductRepository";
import Product from "./DataTransferObejct/Product";

class RepositoryApp {
    private productRepo: ProductRepository

    constructor() {
        this.productRepo = new ProductRepository()
    }

    getAll = async () => {
        const result = await this.productRepo.getAllAction()
        console.log(result)
    }

    saveProduct = async (params: Product) => {
        const result = await this.productRepo.saveAction(params)
        console.log(result)
    }

    getProductId = async (params: Product) => {
        const result = await this.productRepo.findOneAction(params)
        console.log(result)
    }

    updateProductId = async (params: Product) => {
        const result = await this.productRepo.updateAction(params);
        console.log(result)
    }

    deleteProductId = async (params: Product) => {
        const result = await this.productRepo.deleteProductAction(params)
        console.log(result)
    }
}

export default RepositoryApp