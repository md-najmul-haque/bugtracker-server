import express from 'express'
import { signin, signup } from '../Controller/userController.js'
import { addProject } from '../Controller/projectController.js';

const router = express.Router();
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/addProject', addProject);

export default router; 