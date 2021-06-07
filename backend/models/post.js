import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const postSchema = new Schema({
    username: {type: String, required: true},
    message: {type: String, required: true},
    date: {type: Number, required: true},
});

postSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Post', postSchema);
