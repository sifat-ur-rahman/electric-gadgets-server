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
router.post('/api/courses', 
//auth('user'),
(0, validateRequest_1.default)(product_validation_1.productValidation.productValidationSchema), product_controller_1.CourseControllers.createCourse);
router.get('/api/courses', product_controller_1.CourseControllers.getAllCourse);
router.get('/api/courses/:courseId/reviews', product_controller_1.CourseControllers.getOneCourseWithReview);
router.put('/api/courses/:courseId', 
//auth('user'),
(0, validateRequest_1.default)(product_validation_1.productValidation.productUpdateValidationSchema), product_controller_1.CourseControllers.updateCourse);
exports.ProductRoute = router;
