// D:/zerodha/backend/schemas/PositionsSchema.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const PositionsSchema = new Schema({
  symbol: String,
  quantity: Number,
  avgPrice: Number,
  currentPrice: Number,
  pnl: Number,
});

// ✅ Named export
export { PositionsSchema };
