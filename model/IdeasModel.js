const mongoose = require('../lib/db');

module.exports = mongoose.model('Ideas', {
  chat_id: String,
  message_response: Array({
    idea: String,
    source: String
  })
});
