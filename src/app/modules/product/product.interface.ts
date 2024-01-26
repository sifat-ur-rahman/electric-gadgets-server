/* eslint-disable no-unused-vars */
//import { Schema, model, connect } from 'mongoose';

import { Model } from 'mongoose';

export type TProduct = {
  name: string;
  price: number;
  quantity: number;
  releaseDate: Date;
  brand: string;
  modelNumber: string;
  category: string;
  operatingSystem: string;
  connectivity: string;
  powerSource: string;
  features: string;
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
};

export type ProductMethods = {
  isProductExits(id: string): Promise<TProduct | null>;
};

export type ProductModel = Model<
  TProduct,
  Record<string, never>,
  ProductMethods
>;
