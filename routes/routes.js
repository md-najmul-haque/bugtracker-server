import express from 'express'
import { profileInfo, updateProfile, getUser } from '../Controller/profileController.js';
import { addReview, showReview } from '../Controller/reviewController.js';
import { signin, signup } from '../Controller/userController.js'
import { addProject, getProject, totalProject, selectedProject } from '../Controller/projectController.js';
import { addMeeting, updateMeeting, selectedMeeting, getMeeting, deleteMeeting } from '../Controller/meetingController.js';
import { createPayment, storePayment, getPayment } from '../Controller/PaymentController.js'
import { addTask, getTask, getMyTask, updateTask } from '../Controller/taskController.js';
import { allUser } from '../Controller/adminController.js'

const router = express.Router();

// login signup API
router.post('/signup', signup);
router.post('/signin', signin);

// add & project API
router.post('/addProject', addProject);
router.get('/getProject', getProject);
router.get('/totalProject', totalProject);
router.get('/selectedProject/:id', selectedProject);

// Task API
router.post('/addTask', addTask);
router.get('/getTask', getTask);
router.get('/getMyTask', getMyTask);
router.patch('/updateTask/:id', updateTask);

// add & get Review API
router.post('/add-review', addReview);
router.get('/showReview', showReview);

// get & put user information API
router.put('/updateProfile/:email', updateProfile);
router.get('/userInfo/:email', profileInfo);
router.get('/getUser', getUser);

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
router.get('/user', allUser)

export default router; 