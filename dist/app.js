"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sale_route_1 = require("./app/modules/sales/sale.route");
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const product_route_1 = require("./app/modules/product/product.route");
const user_route_1 = require("./app/modules/user/user.route");
const auth_route_1 = require("./app/modules/auth/auth.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:5173', credentials: true }));
//application route.
app.use('/', product_route_1.ProductRoute);
app.use('/', sale_route_1.SaleRoute);
app.use('/', user_route_1.UserRoute);
app.use('/', auth_route_1.AuthRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
    });
});
//route error handler
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found',
    });
});
app.use(globalErrorHandler_1.default);
exports.default = app;
