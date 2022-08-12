import express from 'express'
import { addProject, getProject, } from '../Controller/projectController.js';
import { signin, signup } from '../Controller/userController.js'


const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/addProject', addProject);
router.get('/getProject', getProject);

export default router; 