const router = require('express').Router();
const {
    signUp,
    signIn,
    signOut,
    createCourse,
    addMaterial
} = require('../controller/admin.controller');
const { adminToken } = require('../midlleware/authenticate');
const upload = require('multer');

router.post('/admin/signUp', signUp);
router.post('/admin/signIn', signIn);
router.delete('/admin/signOut', adminToken, signOut);
router.post('/admin/createCourse', adminToken, createCourse);
router.post('/admin/addMaterial/:id', adminToken, upload().single('file'), addMaterial);

module.exports = router;