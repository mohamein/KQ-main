import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // place:{type: String , required: true},
  photo: { type: String },
  // message:{type: String , required: true},
});

const Form = mongoose.model('Form', formSchema);

export default Form;
