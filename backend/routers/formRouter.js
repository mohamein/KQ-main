import express from 'express';
const router = express.Router();
import formcontroler from '../controllers/formController.js';

import upload from '../upload/Multer.js';
const isAuthenticated = (req, res, next) => {
  // Check if user is logged in (e.g., using session or token)
  if (req.user) {
    return next(); // User is authenticated, proceed to next middleware
  } else {
    return res.status(401).json({ error: 'Unauthorized' }); // User is not logged in
  }
};

const isAdmin = (req, res, next) => {
  // Check if user is logged in and has admin role
  if (req.user && req.user.role === 'admin') {
    return next(); // User is admin, proceed to next middleware
  } else {
    return res.status(403).json({ error: 'Forbidden' }); // User is not admin
  }
};

router.get('/admin/getusers', isAuthenticated, isAdmin, formcontroler.getPosts);
router.post('/', upload.single('avatar'), formcontroler.createPost);

export default router;
