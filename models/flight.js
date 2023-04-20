import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United']},
  airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
  flightNo: {type: Number, required: yes, min: 10, max: 9999},
  departs: {type: Date, default: function() {
    const d = new Date().getTime()
    return d.setFullYear(d.getFullYear() + 1)
  }}
}

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight,
}