/* eslint-disable @typescript-eslint/no-explicit-any */

import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const {
    priceRange,
    releaseDate,
    brand,
    modelNumber,
    category,
    operatingSystem,
    connectivity,
    powerSource,
    features,
    weight,
    dimensions,
  } = query;

  const filterOptions: any = {};

  if (priceRange) {
    filterOptions.price = {
      $gte: query.priceRange.min,
      $lte: query.priceRange.max,
    };
  }

  if (releaseDate) {
    filterOptions.releaseDate = query.releaseDate;
  }

  if (brand) {
    filterOptions.brand = query.brand;
  }

  if (modelNumber) {
    filterOptions.modelNumber = query.modelNumber;
  }

  if (category) {
    filterOptions.category = query.category;
  }

  if (operatingSystem) {
    filterOptions.operatingSystem = query.operatingSystem;
  }

  if (connectivity) {
    filterOptions.connectivity = query.connectivity;
  }

  if (powerSource) {
    filterOptions.powerSource = query.powerSource;
  }

  if (features) {
    filterOptions.features = query.features;
  }

  if (weight) {
    filterOptions.weight = query.weight;
  }

  if (dimensions) {
    filterOptions.dimensions = query.dimensions;
  }

  const products = await Product.find(filterOptions);
  return products;
};
const getOneProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};
const updateProductFromDB = async (
  id: string,
  updatedProductData: Partial<TProduct>,
): Promise<TProduct | null> => {
  const { dimensions, ...remainingStudentData } = updatedProductData;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (dimensions && Object.keys(dimensions).length) {
    for (const [key, value] of Object.entries(dimensions)) {
      modifiedUpdatedData[`dimensions.${key}`] = value;
    }
  }

  const result = await Product.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};
const deleteOneProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);

  return result;
};
export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getOneProductFromDB,
  updateProductFromDB,
  deleteOneProductFromDB,
};
