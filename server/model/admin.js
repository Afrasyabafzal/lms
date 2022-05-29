const {Schema,model} = require('mongoose')
const {hash, compare} = require('bcryptjs')
const validator = require('validator')

const adminSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
            validator : (value) => {
                return validator.isEmail(value)
            },
            message: `{VALUE} is not a valid email`
        }
    },
    password : {
        type: String,
        required: true,
        minLength: 4,
        trim: true,
        validate: {
            validator : (value) => {
                return validator.isLength(value,{min:4})
            }
        }
    },
    accessToken : {
        type: String,
        required: true
    },
    refreshToken : {
        type: String,
        required: true
    },
    course : [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    revenue : {
        type : Number,
        required : false
    }
},{timestamps: true})


adminSchema.statics.findbyEmailandPassword = async (email,password) => {
    try {
        const foundUser = await User.findOne({email});
        if(!foundUser){
            throw new Error('User not found')
        }
        const isMatch = await compare(password,foundUser.password)
        if (!isMatch) {
            throw new Error('Invalid password')
        }
        return foundUser;
    } catch (error) {
        throw error;
    }
}

adminSchema.pre('save', async function(next){
    try {
        if(this.isModified('password')){
            const hashedPassword = await hash(this.password,8)
            user.password =  hashedPassword
            next();
        }
    } catch (error) {
        console.error(error)
        next(error)
    }
})

const User = model('Admin', adminSchema)
module.exports = User
        


