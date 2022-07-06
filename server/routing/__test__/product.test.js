const { getAllProducts,
    getProductById,
    getProductDetails,
    createProduct,
    allProducts } = require('../products/handlers');

const ProductService = require('../../services/products.service');
const service = new ProductService();
jest.mock('../../services/products.service.js', () => {
    return jest.fn().mockImplementation(() => {
        return {
            find: jest.fn(),
            findOne: jest.fn(),
            findByName: jest.fn(),
            create: jest.fn()
        }
    })
});

describe('Products', () => {

    test('should return all products', async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnValue({ json: jest.fn() }),
        }
        await getAllProducts(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(service.find).toHaveBeenCalledTimes(1);
    })
})