import express from 'express'
import { addProject } from '../Controller/projectController.js';
import { signin, signup } from '../Controller/userController.js'


const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/addProject', addProject);

export default router; 