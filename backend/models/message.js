import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const messageSchema = new Schema({
        email: {type: String, required: true},
        topic: {type: String, required: true},
        text: {type: String, required: true},
    },
    {
        collection: 'message'
    });

messageSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Message', messageSchema, 'message');
