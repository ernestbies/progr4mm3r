import messageManager from './message.manager';

function getContext(request) {
  return { user: request && request.user };
}

function getter(manager) {
  return (request) => manager.create(getContext(request));
}

export default {
  getMessageManager: getter(messageManager)
};
