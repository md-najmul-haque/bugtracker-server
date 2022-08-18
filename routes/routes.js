import express from 'express'
import { profileInfo, updateProfile } from '../Controller/profileController.js';
import { addProject, getProject, } from '../Controller/projectController.js';
import { addReview, showReview } from '../Controller/reviewController.js';
import { signin, signup } from '../Controller/userController.js'


const router = express.Router();

// login signup API
router.post('/signup', signup);
router.post('/signin', signin);

// add & project API
router.post('/addProject', addProject);
router.get('/getProject', getProject);

// add & get Review API
router.post('/add-review', addReview);
router.get('/showReview', showReview);

// get & put user info API
router.put('/updateProfile/:email', updateProfile);
router.get('/userInfo/:email', profileInfo);

export default router; 