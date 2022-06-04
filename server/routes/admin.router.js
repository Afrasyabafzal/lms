const router = require('express').Router();
const {
    signUp,
    signIn,
    signOut,
    createCourse,
    addMaterial,
    getCourses,
    createMaterial,
    getMaterials,
} = require('../controller/admin.controller');
const { adminToken } = require('../midlleware/authenticate');
const upload = require('multer');

router.post('/admin/signUp', signUp);
router.post('/admin/signIn', signIn);
router.delete('/admin/signOut', adminToken, signOut);
router.post('/admin/createCourse', adminToken, createCourse);
router.post('/admin/addMaterial/:id', adminToken, upload().single('file'), addMaterial);
router.get('/admin/courses', adminToken, getCourses);
router.post('/admin/createMaterial', adminToken, createMaterial);
router.get('/admin/materials', adminToken, getMaterials);


module.exports = router;