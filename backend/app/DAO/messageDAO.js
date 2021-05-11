import applicationException from '../service/applicationException';
import mongoConverter from '../service/mongoConverter';
import Message from '../models/message';

async function createMessage(payload) {
  const data = await Message(payload).save();
  if (data) {
    return mongoConverter(data);
  }
  throw applicationException.new(applicationException.ERROR, 'Cannot create new message');
}

export default {
  createMessage: createMessage
};
