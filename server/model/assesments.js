const {Schema, model} = require("mongoose");


const assesmentSchema = new Schema(
    {
        question: {
            type: String,
            required: true,
            trim: true
        },
        answer: {
            type: String,
            required: true,
            trim: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'Admin'
        },
    }
)
const AssesmentModel = model('Assesment', assesmentSchema)
module.exports = AssesmentModel;
