'use strict';

const IdeasModel = require('../model/IdeasModel');
const mongoose = require('../lib/db');

const IdeasService = () => {
  const addIdea = data => {
    return new Promise((resolve, reject) => {
      let dt = new IdeasModel(data);
      dt.save()
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  };

  const updateIdea = data => {
    return new Promise((resolve, reject) => {
      IdeasModel.findOneAndUpdate({
          chat_id: data.chat_id
        }, {
          $push: {
            message_response: data.message_response
          }
        })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  const listIdea = (chat_id) => {
    return new Promise((resolve, reject) => {
      IdeasModel.find()
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  return {
    addIdea: addIdea,
    updateIdea: updateIdea,
    listIdea: listIdea
  }
}
module.exports = IdeasService();
