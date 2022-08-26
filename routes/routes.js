import express from 'express'
import { profileInfo, updateProfile } from '../Controller/profileController.js';
import { addProject, getProject, selectedProject } from '../Controller/projectController.js';
import { addReview, showReview } from '../Controller/reviewController.js';
import { signin, signup } from '../Controller/userController.js'
import { addMeeting, updateMeeting, getMeeting, deleteMeeting, selectedMeeting } from '../Controller/meetingController.js';
import { createPayment, storePayment, getPayment } from '../Controller/PaymentController.js'
import { addTask, getTask } from '../Controller/taskController.js';
import { allUser } from '../Controller/usersController.js';
const router = express.Router();

// login signup API
router.post('/signup', signup);
router.post('/signin', signin);

// add & project API
router.post('/addProject', addProject);
router.get('/getProject', getProject);
router.get('/selectedProject/:id', selectedProject);

// Task API
router.post('/addTask', addTask);
router.get('/getTask', getTask);

// add & get Review API
router.post('/add-review', addReview);
router.get('/showReview', showReview);

// get & put user information API
router.put('/updateProfile/:email', updateProfile);
router.get('/userInfo/:email', profileInfo);

// meeting API
router.post('/addMeeting', addMeeting);
router.get('/getMeeting', getMeeting);
router.get('/selectedMeeting/:id', selectedMeeting);
router.patch('/updateMeeting/:id', updateMeeting);
router.delete('/deleteMeeting/:id', deleteMeeting);
//create-payment API
router.post('/create', createPayment);
router.post('/storePayment', storePayment);
router.get('/getUserPayment', getPayment);

// get all user
router.get('/user',allUser)

export default router; 