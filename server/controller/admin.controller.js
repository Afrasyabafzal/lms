const { verify } = require('jsonwebtoken');
const PrivateKey = process.env.private_key;
const Course = require('../model/course');
const bufferToString = require('../utils/bufferToString');
const Admin = require('../model/admin');
const {createToken} = require('../utils/createToken');
const cloudinary = require('../utils/cloud');
const Material = require('../model/material');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

module.exports = {
    signUp: catchAsync(async (req, res, next) => {
        const newAdmin = await Admin.create({...req.body});
        console.log("newAdmin",newAdmin);
        createToken(newAdmin)
        await newAdmin.save();
        res.status(200).json({
            status: 'success',
            data: newAdmin,
            message: 'Admin created successfully',
            user: newAdmin.name
        });
    }),
    signIn: catchAsync(async (req, res, next) => {
        console.log("req.body",req.body);
        const { email, password } = req.body;
        const foundAdmin = await Admin.findbyEmailandPassword(email, password);
        createToken(foundAdmin)
        foundAdmin.save();
        res.status(200).json({
            status: 'success',
            data: foundAdmin,
            message: 'Admin signed in successfully',
            user: foundAdmin.name
        });
    }),
    signOut: async (req, res, next) => {
        const token = req.headers.authorization;
        const foundAdmin = await Admin.fineOneAndUpdate({accesstoken: token}, {accesstoken: null});
        if(!foundAdmin) {
            return next(new AppError('Admin not found', 404));
        }
        res.status(200).json({
            status: 'success',
            data: foundAdmin,
            message: 'Admin signed out successfully'
        });
    },

    createCourse: catchAsync(async (req, res, next) => {
        const token = req.headers.authorization;
        const decoded = verify(token, PrivateKey);
        const newCourse = await Course.create({...req.body, admin: decoded.id});
        await Admin.findByIdAndUpdate(decoded.id, {$push: {course: newCourse._id}});
        res.status(200).json({
            status: 'success',
            data: newCourse,
            message: 'Course created successfully'
        });
    }),
    addMaterial: catchAsync(async (req, res, next) => {
        const { orignalname, buffer } = req.file;
        const dataURI = bufferToString(orignalname, buffer);
        const secure_url = await cloudinary.uploader.upload(dataURI);
        const courseId = req.params.id;
        const newMaterial = await Material.create({...req.body, materialUrl:secure_url,course: courseId});
        const course = await Course.findByIdAndUpdate(courseId, {$push: {material: newMaterial}});
        res.status(200).json({
            status: 'success',
            data: newMaterial,
            message: 'Material created successfully',
            course: course
        });
    })
}





