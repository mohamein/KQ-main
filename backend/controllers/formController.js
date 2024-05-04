import posts from '../models/formModel.js';

const createPost = async (req, res) => {
  try {
    req.body.photo = req.file.filename;
    console.log(req.body);

    await posts.create(req.body);
    res.status(200).json({ message: 'form is created' });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await posts.find().populate('user');
    res.status(200).json({ posts });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export default {
  createPost,
  getPosts,
};
