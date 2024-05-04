import express from 'express';
import userControler from '../controllers/userControler.js';
const router = express.Router();

router.post('/signup', userControler.signup);
router.post('/login', userControler.login);
router.get('/users', userControler.getUsers);
router.post('/admin/login', userControler.admin);

export default router;
