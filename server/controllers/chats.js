const Chat = require('../models/chat');

exports.getAllChats = function(req, res) {
    Chat.find({}, function(err, chats) {
      if(err) return err;
      console.log(chats)
      res.send(chats);
    })
  }

exports.createChat = function(req, res) {
    var usersNames = [];
    var usersIds = [];

    Chat.find({name: req.body.chatName})
      .then((chat) => {
        if(chat.length) {
          res.send({message: 'this chat name is already been taken'})
        }
        else {
          req.body.users.forEach((user) => {
            for(var key in user) {
              if(key === '_id') {
                usersIds.push(user[key]);
              }
              if(key === 'firstname') {
                usersNames.push(user[key]);
              }
            }
          })
          Chat.find({usersNames: usersNames}, function(err, chats) {
            if(err) return err;
            if(!chats.length) {
              var chatObj = {
                name: req.body.chatName,
                privateMessages: [],
                usersIds: usersIds,
                usersNames: usersNames
              }
              Chat.create(chatObj, function(err, chat) {
                if (err) return err;
                res.send(chat);
              })
            }
            else {
                res.send({message: 'these users have been already connected to private chat'})
            }
            })
          }
      })
  }

  exports.createPrivateMessage = function(req, res) {
    var messagesObj = {};
    messagesObj.privateMessages = [];
    messagesObj.privateMessages.push(req.body)
    Chat.findOneAndUpdate({name: req.params.id},  {$push: {privateMessages: req.body}}, function(err, chat) {
      if(err) return err;
      res.send({message: `message added to chat: ${req.params.id}`});
    })
  }

   exports.getPrivateMessages = function(req, res) {
    Chat.findOne({name: req.params.id}, function(err, chat) {
      if(err) return err;
      res.send(chat);
    })
  }