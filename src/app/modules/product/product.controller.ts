import { NextFunction, Request, Response } from 'express';
import { ProductService } from './product.service';

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const ProductData = req.body;

    const result = await ProductService.createProductIntoDB(ProductData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ProductService.getAllProductsFromDB(req.query);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Products retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const getOneProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getOneProductFromDB(productId);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Product By ID retrieved successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.productId;
    const updatedProductData = req.body;
    const result = await ProductService.updateProductFromDB(
      id,
      updatedProductData,
    );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Course updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deletedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteOneProductFromDB(productId);
    if (result) {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Product delete successfully',
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};
const bulkDeletedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productsId } = req.body;

    const result = await ProductService.bulkDeletedProductFromDB(productsId);
    if (result) {
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Bulk Deleted Product delete successfully',
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

const duplicateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.productId;
    const duplicateProductData = req.body;
    const result = await ProductService.duplicateProductFromDB(
      id,
      duplicateProductData,
    );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Course updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deletedProduct,
  duplicateProduct,
  bulkDeletedProduct,
};
