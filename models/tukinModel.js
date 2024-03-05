import mongoose from "mongoose";

const TukinSchema = new mongoose.Schema({
  tukin: {
    type: Number,
    default: 0,
  },
  koperasi: {
    type: Number,
    default: 0,
  },
  pengayoman: {
    type: Number,
    default: 0,
  },
  dharmaWanita: {
    type: Number,
    default: 0,
  },
  bapor: {
    type: Number,
    default: 0,
  },
  majelisTaklim: {
    type: Number,
    default: 0,
  },
  sosial: {
    type: Number,
    default: 0,
  },
  qurban: {
    type: Number,
    default: 0,
  },
  bendahara: {
    type: Number,
    default: 0,
  },
  pinjKoperasi: {
    type: Number,
    default: 0,
  },
  lainLain: {
    type: Number,
    default: 0,
  },
  jumPot: {
    type: Number,
    default: 0,
  },
  jumBersih: {
    type: Number,
    default: 0,
  },
  nip: String,
  bulan: Date,
});

export default mongoose.model("Tukin", TukinSchema);
