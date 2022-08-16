import express from 'express'
import { addProject, getProject, } from '../Controller/projectController.js';
import { addReview, showReview } from '../Controller/reviewController.js';
import { signin, signup } from '../Controller/userController.js'
import { addMeeting } from '../Controller/meetingController.js';


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

// add & get meeting API
router.put('/addMeeting/:id', addMeeting);

export default router; 