"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_validation_1 = require("./product.validation");
//import auth from '../../middlewares/auth';
const router = express_1.default.Router();
router.post('/api/product', 
//auth('user'),
(0, validateRequest_1.default)(product_validation_1.productValidation.productValidationSchema), product_controller_1.ProductControllers.createProduct);
router.get('/api/products', product_controller_1.ProductControllers.getAllProducts);
router.get('/api/product/:productId', product_controller_1.ProductControllers.getOneProduct);
router.delete('/api/product/:productId', product_controller_1.ProductControllers.deletedProduct);
router.delete('/api/bulk-delete', product_controller_1.ProductControllers.bulkDeletedProduct);
router.put('/api/product/:productId', 
//auth('user'),
(0, validateRequest_1.default)(product_validation_1.productValidation.productUpdateValidationSchema), product_controller_1.ProductControllers.updateProduct);
router.post('/api/duplicate/:productId', 
//auth('user'),
(0, validateRequest_1.default)(product_validation_1.productValidation.productUpdateValidationSchema), product_controller_1.ProductControllers.duplicateProduct);
exports.ProductRoute = router;
