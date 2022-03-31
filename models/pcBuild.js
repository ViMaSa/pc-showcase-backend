const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pcBuildSchema = new Schema({
  buildName: {type: String, required: false},
  image: {type: String, required: true},
  rating: {type: Number, default: 0, required: false},
  cpu: {type: String, required: true},
  cpuCooler: {type: String, required: true},
  motherBoard: {type: String, required: true},
  memory: {type: String, required: true},
  storage: {type: String, required: true},
  videoCard: {type: String, required: false},
  powerSupply: {type: String, required: true},
  case: {type: String, required: true}
}, {timestamps: true});

const PCBuild = mongoose.model('PCBuild', pcBuildSchema);

module.exports = PCBuild;