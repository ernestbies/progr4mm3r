import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const statSchema = new Schema({
    visitors: {type: Number, default: 0, required: true},
});

statSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Stat', statSchema);
