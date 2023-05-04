const moment = require('moment');
const {Schema, model} = require('mongoose')


let date = new Date();
let DateInaYear=  date.setFullYear(date.getFullYear() + 1);
let formattedDate = moment(DateInaYear).format('MM/DD/YYYY, hh:mm a')
console.log(formattedDate)

const flightSchema = new Schema(
    {
        airline: {
            type: String, 
            enum: ['American', 'Southwest', 'United']
        },
        flightNo: {
            type: Number, 
            required: true, 
            min: [10, 'must be more than 10'],
            max: [9999, 'must be less than 9999']
        },
        departs: {
            type: Date,
            default:[formattedDate]
        }
    },
    {
        timestamps: true
    }
)

const Flight = model("Flight", flightSchema);

module.exports = Flight;
