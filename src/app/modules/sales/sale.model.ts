import { Schema, model } from 'mongoose';
import { TSale } from './sale.interface';

const saleSchema = new Schema<TSale>(
  {
    quantity: { type: Number, required: true },
    buyerName: { type: String, required: true },
    saleDate: { type: Date, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  },
  { timestamps: true },
);

export const Sale = model<TSale>('Sale', saleSchema);
