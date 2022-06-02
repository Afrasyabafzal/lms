const router = require('express').Router();
const {
    signUp,
    signIn,
    signOut,
    getCourses,
    getCourse,
    buyCourse,
    getUser,
    getAllLearners
} = require('../controller/learner.controller');

const { learnerToken } = require('../midlleware/authenticate');

router.post('/learner/signUp', signUp);
router.post('/learner/signIn', signIn);
router.delete('/learner/signOut', learnerToken, signOut);
router.get('/learner/courses', getCourses);
router.get('/learner/course/:id',  getCourse);
router.post('/learner/buyCourse/:id', learnerToken, buyCourse);
router.get('/learner/user', getUser);
router.get('/learner/allLearners', getAllLearners);

module.exports = router;
