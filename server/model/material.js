const {Schema ,model} = require('mongoose')

const materialModel = new Schema({
    materialName: {
        type: String,
        required: true,
        trim: true
    },
    materialDescription: {
        type: String,
        required: true,
        trim: true
    },
    materialType: {
        type: String,
        required: true,
        trim: true,
        enum: ['Video', 'Document', 'PPT']
    },
    materialUrl: {
        type: String,
        required: true,
        trim: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    assesments: [{
        type: Schema.Types.ObjectId,
        ref: 'Assesment'
    }]
})

const MaterialModel = model('Material', materialModel)
module.exports = MaterialModel