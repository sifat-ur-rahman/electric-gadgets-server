"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ProductData = req.body;
        const result = yield product_service_1.ProductService.createProductIntoDB(ProductData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Product created successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllCourseFromDB(req.query);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Courses retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getOneCourseWithReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { courseId } = req.params;
        const result = yield product_service_1.ProductService.getOneCourseWithReviewFromDB(courseId);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Course and Reviews retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.courseId;
        const updatedCourseData = req.body;
        const result = yield product_service_1.ProductService.updateCourseFromDB(id, updatedCourseData);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Course updated successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.CourseControllers = {
    createCourse: createProduct,
    getAllCourse,
    getOneCourseWithReview,
    updateCourse,
};
