import { Schema, model } from 'mongoose';
import { ProductMethods, ProductModel, TProduct } from './product.interface';

const productSchema = new Schema<TProduct, ProductModel, ProductMethods>(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    releaseDate: { type: Date, required: true },
    brand: { type: String, required: true },
    modelNumber: { type: String, required: true },
    category: { type: String, required: true },
    operatingSystem: { type: String, required: true },
    connectivity: { type: String, required: true },
    powerSource: { type: String, required: true },
    features: { type: String, required: true },
    weight: { type: Number, required: true },
    dimensions: {
      length: { type: Number, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
  },
  { timestamps: true },
);

productSchema.methods.isProductExits = async function (id: string) {
  const existingProduct = await Product.findById(id);
  return existingProduct;
};

export const Product = model<TProduct, ProductModel>('Product', productSchema);
