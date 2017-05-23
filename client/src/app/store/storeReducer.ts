import { StoreModule, Action } from '@ngrx/store';
import { INITIAL_APPLICATION_STATE, ApplicationState } from 'app/store/application-state';
import { LOAD_CHAT_LIST_ACTION,
  LoadChatListActions,
  LOGIN_SUCCESS_ACTION,
  LOGOUT_SUCCESS_ACTION,
  REGISTER_SUCCESS_ACTION,
  UPDATE_PROFILE_SUCCESS_ACTION,
  MESSAGE_ADD_SUCCESS_ACTION,
  GET_ALL_MESSAGES_SUCCESS_ACTION,
  LOAD_CHATS_LIST_SUCCESS_ACTION,
  GET_ALL_PRIVATES_MESSAGES_SUCCESS_ACTION,
  ADD_PRIVATE_MESSAGE_SUCCESS_ACTION,
  UPDATE_CURRENT_CHAT_SUCCESS_ACTION } from 'app/store/actions';

export default function storeReducer (state: ApplicationState, action: Action): ApplicationState {
  switch (action.type) {
    case LOAD_CHAT_LIST_ACTION:
      return handleLoadChatListsAction(state, action);

    case LOGIN_SUCCESS_ACTION:
      return handleLoginSuccessAction(state, action);

    case LOGOUT_SUCCESS_ACTION:
      return handleLogoutSuccessAction(state, action);

    case REGISTER_SUCCESS_ACTION:
      return handleRegisterSuccessAction(state, action);

    case UPDATE_PROFILE_SUCCESS_ACTION:
      return handleUpdateProfileSuccessAction(state, action);

    case MESSAGE_ADD_SUCCESS_ACTION:
      return handleMessageAddSuccessAction(state, action);

    case GET_ALL_MESSAGES_SUCCESS_ACTION:
      return handleGetAllMessagesSuccessAction(state, action);

    case LOAD_CHATS_LIST_SUCCESS_ACTION:
      return handleLoadChatsListActions(state, action);

    case GET_ALL_PRIVATES_MESSAGES_SUCCESS_ACTION:
      return handleGetAllPrivateMessagesActions(state, action);

    case ADD_PRIVATE_MESSAGE_SUCCESS_ACTION:
      return handleAddPrivateMessageActions(state, action);

    case UPDATE_CURRENT_CHAT_SUCCESS_ACTION:
      return handleUpdateCurrentChatActions(state, action);
    }
  return state;
}

function handleUpdateCurrentChatActions(state, action) {
  const currentChat = action.payload;

  const newState: ApplicationState = Object.assign({}, state);

  newState.uiState.currentChat = currentChat;

  return newState;
}

function handleAddPrivateMessageActions(state, action) {
  const privateMessage = action.payload;
  const chatname = privateMessage.chatname;
  delete privateMessage['chatname'];

  const newState: ApplicationState = Object.assign({}, state);

  newState.storeData.chats.forEach((chat) => {
    if (chat['name'] === chatname) {
      chat.privateMessages.push(privateMessage);
    }
  });

  return newState;
}

function handleGetAllPrivateMessagesActions(state, action) {
  const privateChatData = action.payload;

  const newState: ApplicationState = Object.assign({}, state);

  newState.storeData.chats.forEach((chat) => {
    if (chat['name'] === privateChatData.name) {
      chat.privateMessages = [...privateChatData.privateMessages];
    }
  });

  return newState;
}

function handleLoadChatsListActions(state, action) {
  const chatsData = action.payload;

  const newState: ApplicationState = Object.assign({}, state);

  newState.storeData.chats = [...chatsData];

  return newState;
}

function handleGetAllMessagesSuccessAction(state, action) {
  const messagesData = action.payload;

  const newState: ApplicationState = Object.assign({}, state);

  newState.storeData.messages = [...messagesData];

  return newState;
}

function handleMessageAddSuccessAction(state, action) {
  const messageData = action.payload;

  const newState: ApplicationState = Object.assign({}, state);

  newState.storeData.messages.push(messageData);

  return newState;
}

function handleUpdateProfileSuccessAction(state, action) {
   return state;
}

function handleRegisterSuccessAction(state, action) {
 const userData = action.payload;

  localStorage.setItem('token', userData.token);

  const newState: ApplicationState = Object.assign({}, state);

  newState.uiState = {
    user: action.payload.user,
    authenticated: true,
    // usersOn: [action.payload.user],
    currentChat: ''
  };

  return newState;
}

function handleLogoutSuccessAction(state: ApplicationState, action: LoadChatListActions): ApplicationState {

  const newState: ApplicationState = Object.assign({}, state);

  newState.storeData = {
    users: [],
    chats: [],
    messages: []
  };

  newState.uiState = {
    authenticated: undefined,
    user: undefined,
    // usersOn: [],
    currentChat: ''
  };

  return newState;
}

function handleLoadChatListsAction (state: ApplicationState, action: LoadChatListActions) {
  const userData = action.payload;

  let usersOn = [...userData.users];
  if (state.uiState.user) {
    usersOn
      .forEach((user, index) => {
        for (const key in user) {
          if (key === 'email' && user['email'] === state.uiState.user.email) {
            user.isLogged = true;
          }
        }
      });
    // usersOn = usersOn.filter(function(user) {
    //   if (user.isLogged === true) {
    //     return true;
    //   }
    //   return false;
    // });
  };
  const newState: ApplicationState = Object.assign({}, state);
  newState.storeData.users = userData.users;
  // newState.uiState.usersOn = usersOn;

  return newState;
}

function handleLoginSuccessAction(state, action) {
  const userData = action.payload;

  localStorage.setItem('token', userData.token);

  const newState: ApplicationState = Object.assign({}, state);
    newState.uiState = {
      user: action.payload.user,
      authenticated: true,
      // usersOn: [action.payload.user],
      currentChat: ''
    };
  return newState;
}
