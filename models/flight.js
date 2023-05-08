const { Schema, model } = require("mongoose");
const moment = require("moment");

let date = new Date();
let dateInaYear = date.setFullYear(date.getFullYear() + 1);

// let formattedDate = moment(DateInaYear).format('MM/DD/YYYY, hh:mm a')
// console.log(DateInaYear)

// let dateNow = new Date()
// let yearFromNowUnix = dateNow.setFullYear(dateNow.getFullYear() + 1)
// yearFromNowUTC = moment(yearFromNowUnix).format('MM/DD/YYYY, hh:mm a')

// console.log(yearFromNowUTC)

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    },
    arrival: Date,
  },
  {
    timestamps: true,
  }
);

const yearDate = moment().add(1, "year");
// let formatted = moment(yearDate).format("ddd MM/DD/YYYY, hh:mm a")

function dateInYear(date) {
  return moment(date).format("ddd MM/DD/YYYY, hh:mm a");
}

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      enum: ["American", "Southwest", "United"],
    },
    flightNo: {
      type: Number,
      required: true,
      min: [10, "must be more than 10"],
      max: [9999, "must be less than 9999"],
    },
    departs: {
      type: Date,
      default: !this.departs ? dateInYear(yearDate) : this.departs,
    },
    airport: {
      type: String,
      enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
      default: ["SAN"],
    },
    destination: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

const Flight = model("Flight", flightSchema);

module.exports = Flight;
