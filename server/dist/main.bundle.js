webpackJsonp([0,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_CHAT_LIST_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LoadChatListActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOGIN_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginSuccessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOGOUT_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LogoutSuccessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return REGISTER_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterSuccessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return UPDATE_PROFILE_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return UpdateProfileSuccessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return MESSAGE_ADD_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MessageAddSuccessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GET_ALL_MESSAGES_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GetAllMessagesSuccessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_CHATS_LIST_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoadChatsListActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GET_ALL_PRIVATES_MESSAGES_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetAllPrivateMessagesSuccessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ADD_PRIVATE_MESSAGE_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PrivateMessageAddSuccessActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return UPDATE_CURRENT_CHAT_SUCCESS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UpdateCurrentChatSuccessActions; });
var LOAD_CHAT_LIST_ACTION = 'LOAD_CHAT_LIST_ACTION';
var LoadChatListActions = (function () {
    function LoadChatListActions(payload) {
        this.payload = payload;
        this.type = LOAD_CHAT_LIST_ACTION;
    }
    return LoadChatListActions;
}());

var LOGIN_SUCCESS_ACTION = 'LOGIN_SUCCESS_ACTION';
var LoginSuccessActions = (function () {
    function LoginSuccessActions(payload) {
        this.payload = payload;
        this.type = LOGIN_SUCCESS_ACTION;
        console.log(payload);
    }
    return LoginSuccessActions;
}());

var LOGOUT_SUCCESS_ACTION = 'LOGOUT_SUCCESS_ACTION';
var LogoutSuccessActions = (function () {
    function LogoutSuccessActions() {
        this.type = LOGOUT_SUCCESS_ACTION;
    }
    return LogoutSuccessActions;
}());

var REGISTER_SUCCESS_ACTION = 'REGISTER_SUCCESS_ACTION';
var RegisterSuccessActions = (function () {
    function RegisterSuccessActions(payload) {
        this.payload = payload;
        this.type = REGISTER_SUCCESS_ACTION;
        console.log(payload);
    }
    return RegisterSuccessActions;
}());

var UPDATE_PROFILE_SUCCESS_ACTION = 'UPDATE_PROFILE_SUCCESS_ACTION';
var UpdateProfileSuccessActions = (function () {
    function UpdateProfileSuccessActions(payload) {
        this.payload = payload;
        this.type = UPDATE_PROFILE_SUCCESS_ACTION;
        console.log(payload);
    }
    return UpdateProfileSuccessActions;
}());

var MESSAGE_ADD_SUCCESS_ACTION = 'MESSAGE_ADD_SUCCESS_ACTION';
var MessageAddSuccessActions = (function () {
    function MessageAddSuccessActions(payload) {
        this.payload = payload;
        this.type = MESSAGE_ADD_SUCCESS_ACTION;
        console.log(payload);
    }
    return MessageAddSuccessActions;
}());

var GET_ALL_MESSAGES_SUCCESS_ACTION = 'GET_ALL_MESSAGES_SUCCESS_ACTION';
var GetAllMessagesSuccessActions = (function () {
    function GetAllMessagesSuccessActions(payload) {
        this.payload = payload;
        this.type = GET_ALL_MESSAGES_SUCCESS_ACTION;
        console.log(payload);
    }
    return GetAllMessagesSuccessActions;
}());

var LOAD_CHATS_LIST_SUCCESS_ACTION = 'LOAD_CHATS_LIST_SUCCESS_ACTION';
var LoadChatsListActions = (function () {
    function LoadChatsListActions(payload) {
        this.payload = payload;
        this.type = LOAD_CHATS_LIST_SUCCESS_ACTION;
        console.log(payload);
    }
    return LoadChatsListActions;
}());

var GET_ALL_PRIVATES_MESSAGES_SUCCESS_ACTION = 'GET_ALL_PRIVATES_MESSAGES_SUCCESS_ACTION';
var GetAllPrivateMessagesSuccessActions = (function () {
    function GetAllPrivateMessagesSuccessActions(payload) {
        this.payload = payload;
        this.type = GET_ALL_PRIVATES_MESSAGES_SUCCESS_ACTION;
        console.log(payload);
    }
    return GetAllPrivateMessagesSuccessActions;
}());

var ADD_PRIVATE_MESSAGE_SUCCESS_ACTION = 'ADD_PRIVATE_MESSAGE_SUCCESS_ACTION';
var PrivateMessageAddSuccessActions = (function () {
    function PrivateMessageAddSuccessActions(payload) {
        this.payload = payload;
        this.type = ADD_PRIVATE_MESSAGE_SUCCESS_ACTION;
        console.log(payload);
    }
    return PrivateMessageAddSuccessActions;
}());

var UPDATE_CURRENT_CHAT_SUCCESS_ACTION = 'UPDATE_CURRENT_CHAT_SUCCESS_ACTION';
var UpdateCurrentChatSuccessActions = (function () {
    function UpdateCurrentChatSuccessActions(payload) {
        this.payload = payload;
        this.type = UPDATE_CURRENT_CHAT_SUCCESS_ACTION;
        console.log(payload);
    }
    return UpdateCurrentChatSuccessActions;
}());

//# sourceMappingURL=actions.js.map

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPartChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainPartChatService = (function () {
    function MainPartChatService() {
        this.messageObj$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.connection$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.chatname$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.search$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.searchMessage$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.isMenuShown$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    MainPartChatService.prototype.getData = function () {
        return this.messageObj$;
    };
    MainPartChatService.prototype.updateData = function (data) {
        this.messageObj$.next(data);
    };
    MainPartChatService.prototype.updateConnection = function (data) {
        this.connection$.next(data);
    };
    MainPartChatService.prototype.getConnection = function () {
        return this.connection$;
    };
    MainPartChatService.prototype.getChatname = function () {
        return this.chatname$;
    };
    MainPartChatService.prototype.updateChatname = function (data) {
        this.chatname$.next(data);
    };
    MainPartChatService.prototype.setSearchValue = function (value) {
        console.log('SET SEARCH VALUE');
        this.search$.next(value);
    };
    MainPartChatService.prototype.getSearchValue = function () {
        return this.search$;
    };
    MainPartChatService.prototype.setSearchMessage = function (value) {
        console.log('SET MESSAGE VALUE');
        this.searchMessage$.next(value);
    };
    MainPartChatService.prototype.getSearchMessage = function () {
        return this.searchMessage$;
    };
    MainPartChatService.prototype.getIsMenuShown = function () {
        return this.isMenuShown$;
    };
    MainPartChatService.prototype.updateIsMenuShown = function (data) {
        console.log('isChatMenuShown', data);
        this.isMenuShown$.next(data);
    };
    return MainPartChatService;
}());
MainPartChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], MainPartChatService);

//# sourceMappingURL=main-part-chat.service.js.map

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_user_list___ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_chat_chat_list_chat_list_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WsService = (function () {
    function WsService(userlistservice, store, http, ChatListService) {
        this.userlistservice = userlistservice;
        this.store = store;
        this.http = http;
        this.ChatListService = ChatListService;
        this.url = 'http://localhost:8090';
    }
    WsService.prototype.sendPrivateMessage = function (privateMessage, room) {
        this.socketPrivateChat.emit('add-private-message', privateMessage, room);
    };
    WsService.prototype.sendMessage = function (message) {
        this.socketRoot.emit('add-message', message);
    };
    WsService.prototype.addChat = function (chat) {
        this.socketRoot.emit('add-chat', chat);
    };
    WsService.prototype.initWs = function () {
        var _this = this;
        var getAllUsers = this.userlistservice.getAllUsers();
        var store = this.store;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketRoot = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url + "/root");
            _this.socketRoot.on('connect', function () {
                var _this = this;
                this.socketRoot
                    .on('authenticated', function () {
                    console.log('authenticated client');
                })
                    .emit('authenticate', { token: localStorage.getItem('token') })
                    .on('join', function (val) {
                    console.log('join', val.user);
                    getAllUsers
                        .subscribe(function (allUserData) { return store.dispatch(new __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["h" /* LoadChatListActions */](allUserData)); });
                })
                    .on('leave', function (val) {
                    console.log('leave', val.user);
                    getAllUsers
                        .subscribe(function (allUserData) { return store.dispatch(new __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["h" /* LoadChatListActions */](allUserData)); });
                })
                    .on('message', function (data) {
                    console.log('message', data);
                    observer.next(data);
                })
                    .on('chat', function (data) {
                    console.log('chat123456', data);
                    _this.ChatListService.getAllChats()
                        .subscribe(function (allChats) {
                        _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["f" /* LoadChatsListActions */](allChats));
                        console.log('ALL CHATS MENU', allChats);
                    });
                });
            }.bind(_this));
            return function () {
                _this.socketRoot.disconnect();
            };
        });
        return observable;
    };
    ;
    WsService.prototype.initRoomWs = function (room) {
        var _this = this;
        this.room = room;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socketPrivateChat = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url + "/privatechat");
            _this.socketPrivateChat.on('connect', function () {
                console.log('user connection to room', room);
                this.socketPrivateChat.emit('room', room);
                this.socketPrivateChat.on('disconnect', function (val) {
                    console.log('leave', val);
                });
                this.socketPrivateChat.on('add-private-message', function (data) {
                    console.log('Incoming message:', data);
                    observer.next(data);
                });
            }.bind(_this));
            return function () {
                _this.socketPrivateChat.disconnect();
            };
        });
        return observable;
    };
    ;
    return WsService;
}());
WsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__chat_user_list___["b" /* UserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__chat_user_list___["b" /* UserListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_app_chat_chat_list_chat_list_service__["a" /* ChatListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_chat_chat_list_chat_list_service__["a" /* ChatListService */]) === "function" && _d || Object])
], WsService);

;
var _a, _b, _c, _d;
//# sourceMappingURL=ws.service.js.map

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginService.prototype.login = function (user) {
        return this.http.post('http://localhost:8090/signin', user).map(function (res) { return res.json(); });
    };
    LoginService.prototype.register = function (user) {
        return this.http.post('http://localhost:8090/signup', user).map(function (res) { return res.json(); });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('token');
        console.log('user logged out');
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatListService = (function () {
    function ChatListService(router, http) {
        this.router = router;
        this.http = http;
    }
    ChatListService.prototype.getAllChats = function () {
        return this.http.get('http://localhost:8090/api/chats').map(function (res) { return res.json(); });
    };
    return ChatListService;
}());
ChatListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ChatListService);

var _a, _b;
//# sourceMappingURL=chat-list.service.js.map

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = (function () {
    function AuthComponent() {
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'auth',
        template: __webpack_require__(292),
        styles: [__webpack_require__(264)],
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(163);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__(164);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ws_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_chat_main_part_chat_message_input_message_input_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(store, ws, MessageInputService, MainPartChatService) {
        this.store = store;
        this.ws = ws;
        this.MessageInputService = MessageInputService;
        this.MainPartChatService = MainPartChatService;
    }
    ChatComponent.prototype.onNotifyChatListFold = function (message) {
        this.isChatListFolded = message;
    };
    ChatComponent.prototype.onNotifyChatMenuShow = function (message) {
        this.isChatMenuShown = message;
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.error('NGONINT CHAT MODULE');
        this.MainPartChatService.getData().subscribe(function (data) {
            console.log('MESSAGE on CHAT COMP', data);
            _this.message = data;
        });
        if (this.connection) {
            this.connection = this.MainPartChatService.getConnection();
        }
        else {
            this.connection = this.ws.initWs()
                .subscribe(function (message) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["i" /* MessageAddSuccessActions */](message));
            });
        }
        ;
        this.MainPartChatService.updateConnection(this.connection);
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-chat',
        template: __webpack_require__(299),
        styles: [__webpack_require__(271)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_ws_service__["a" /* WsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_ws_service__["a" /* WsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_chat_main_part_chat_message_input_message_input_service__["a" /* MessageInputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_chat_main_part_chat_message_input_message_input_service__["a" /* MessageInputService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _d || Object])
], ChatComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=chat.component.js.map

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageInputService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageInputService = (function () {
    function MessageInputService(http) {
        this.http = http;
    }
    MessageInputService.prototype.sendMessage = function (message) {
        return this.http.post('http://localhost:8090/api/messages', message).map(function (res) { return res.json(); });
    };
    MessageInputService.prototype.getAllMessages = function () {
        return this.http.get('http://localhost:8090/api/messages').map(function (res) { return res.json(); });
    };
    return MessageInputService;
}());
MessageInputService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MessageInputService);

var _a;
//# sourceMappingURL=message-input.service.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_list_component__ = __webpack_require__(183);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_list_service__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__user_list_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListService = (function () {
    function UserListService(router, http) {
        this.router = router;
        this.http = http;
    }
    UserListService.prototype.getAllUsers = function () {
        return this.http.get('http://localhost:8090/api/users').map(function (res) { return res.json(); });
    };
    return UserListService;
}());
UserListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], UserListService);

var _a, _b;
//# sourceMappingURL=user-list.service.js.map

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_auth_shared__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AltLoginGoogleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AltLoginGoogleComponent = (function () {
    function AltLoginGoogleComponent(zone, router, loginservice, store) {
        this.zone = zone;
        this.router = router;
        this.loginservice = loginservice;
        this.store = store;
    }
    AltLoginGoogleComponent.prototype.submitBy = function () {
        var _this = this;
        gapi.load('auth2', function () {
            var auth2 = gapi.auth2.init({
                client_id: '691780650143-enoue9ml105j5vq536t8tp0og195sas5.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin'
            });
            auth2.attachClickHandler(document.getElementById('google-auth-btn'), {}, _this.onSuccess.bind(_this), _this.onFailure);
        });
    };
    AltLoginGoogleComponent.prototype.onFailure = function () {
        alert('Something goes wrong with Social Authorization');
    };
    AltLoginGoogleComponent.prototype.onSuccess = function (user) {
        var _this = this;
        this.zone.run(function () {
            _this.profile = user.getBasicProfile();
            _this.userData = {
                firstname: _this.profile.ofa,
                lastname: _this.profile.wea,
                email: _this.profile.U3,
                password: _this.profile.Eea
            };
            _this.loginservice.register(_this.userData)
                .subscribe(function (userInfo) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["a" /* RegisterSuccessActions */](userInfo));
                _this.router.navigate(['chat']);
            }, _this.onRegisterError.bind(_this));
        });
    };
    AltLoginGoogleComponent.prototype.onRegisterError = function (err) {
        var _this = this;
        if (err.status === 422) {
            var loginData = {
                email: this.userData.email,
                password: this.userData.password
            };
            this.loginservice
                .login(loginData)
                .subscribe(function (userInfo) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["b" /* LoginSuccessActions */](userInfo));
                _this.router.navigate(['chat']);
            }, this.onLoginError);
        }
    };
    AltLoginGoogleComponent.prototype.onLoginError = function (err) {
        console.error(err);
        alert('User not found');
    };
    AltLoginGoogleComponent.prototype.ngOnInit = function () { };
    return AltLoginGoogleComponent;
}());
AltLoginGoogleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-alt-login-google',
        template: __webpack_require__(291),
        styles: [__webpack_require__(263)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_app_auth_shared__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_auth_shared__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], AltLoginGoogleComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=alt-login-google.component.js.map

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_routing_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_auth_alt_login_google_alt_login_google_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__register__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_7_app_auth_alt_login_google_alt_login_google_component__["a" /* AltLoginGoogleComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__auth_routing_module__["a" /* AuthRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        providers: []
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(49);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register__ = __webpack_require__(50);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alt_login_google__ = __webpack_require__(160);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_component__ = __webpack_require__(48);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_module__ = __webpack_require__(92);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard_service__ = __webpack_require__(161);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__auth_guard_service__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_details_component__ = __webpack_require__(165);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__chat_details_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_chat_chat_list_chat_list_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_ws_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatMenuService = (function () {
    function ChatMenuService(http, router, ChatListService, store, ws) {
        this.http = http;
        this.router = router;
        this.ChatListService = ChatListService;
        this.store = store;
        this.ws = ws;
    }
    ChatMenuService.prototype.sendChatData = function (formAddChatData) {
        var _this = this;
        this.http.post('http://localhost:8090/api/chats', formAddChatData).map(function (res) { return res.json(); })
            .subscribe(function (userInfo) {
            console.error('userInfo', userInfo);
            _this.ChatListService.getAllChats()
                .subscribe(function (allChats) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5_app_store_actions__["f" /* LoadChatsListActions */](allChats));
                console.log('ALL CHATS MENU', allChats);
                _this.ws.addChat(formAddChatData);
            });
        });
    };
    return ChatMenuService;
}());
ChatMenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_chat_chat_list_chat_list_service__["a" /* ChatListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_chat_chat_list_chat_list_service__["a" /* ChatListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_app_ws_service__["a" /* WsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_ws_service__["a" /* WsService */]) === "function" && _e || Object])
], ChatMenuService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chat-menu.service.js.map

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_list__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_details__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_navbar_chat_navbar_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_part_chat_messages_navbar_messages_navbar_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_part_chat_messages_list_messages_list_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_part_chat_message_input_message_input_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_menu_chat_menu_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_list_chat_list_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_part_chat_main_part_chat_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__private_part_chat_private_part_chat_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_chat_chat_routing_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__private_part_chat_private_message_list_private_message_list_component__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__private_part_chat_private_message_navbar_private_message_navbar_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__private_part_chat_private_message_input_private_message_input_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_chat_user_list_user_list_filter_pipe__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_chat_chat_list_chat_list_filter_pipe__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_chat_main_part_chat_messages_list_messages_list_filter_pipe__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_chat_private_part_chat_private_message_list_private_message_filter_pipe__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_chat_user_list_user_list_filterOn_pipe__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { SharedModule }  from '../shared';






















var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_4__user_list__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__chat_details__["a" /* ChatDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__chat_navbar_chat_navbar_component__["a" /* ChatNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_part_chat_messages_navbar_messages_navbar_component__["a" /* MessagesNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_part_chat_messages_list_messages_list_component__["a" /* MessagesListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_part_chat_message_input_message_input_component__["a" /* MessageInputComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chat_menu_chat_menu_component__["a" /* ChatMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__chat_list_chat_list_component__["a" /* ChatListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__main_part_chat_main_part_chat_component__["a" /* MainPartChatComponent */],
            __WEBPACK_IMPORTED_MODULE_13__private_part_chat_private_part_chat_component__["a" /* PrivatePartChatComponent */],
            __WEBPACK_IMPORTED_MODULE_15__private_part_chat_private_message_list_private_message_list_component__["a" /* PrivateMessageListComponent */],
            __WEBPACK_IMPORTED_MODULE_16__private_part_chat_private_message_navbar_private_message_navbar_component__["a" /* PrivateMessageNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__private_part_chat_private_message_input_private_message_input_component__["a" /* PrivateMessageInputComponent */],
            __WEBPACK_IMPORTED_MODULE_18_app_chat_user_list_user_list_filter_pipe__["a" /* FilterUserByNamePipe */],
            __WEBPACK_IMPORTED_MODULE_22_app_chat_user_list_user_list_filterOn_pipe__["a" /* FilterUserOnByNamePipe */],
            __WEBPACK_IMPORTED_MODULE_19_app_chat_chat_list_chat_list_filter_pipe__["a" /* FilterChatByNamePipe */],
            __WEBPACK_IMPORTED_MODULE_20_app_chat_main_part_chat_messages_list_messages_list_filter_pipe__["a" /* FilterMessageByTextPipe */],
            __WEBPACK_IMPORTED_MODULE_21_app_chat_private_part_chat_private_message_list_private_message_filter_pipe__["a" /* FilterPrivateMessageByTextPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_app_chat_chat_routing_module__["a" /* ChatsRoutingModule */]
        ],
        providers: []
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_list__ = __webpack_require__(54);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_details__ = __webpack_require__(94);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_module__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__chat_module__["ChatModule"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_guard_service__ = __webpack_require__(166);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__chat_guard_service__["a"]; });


// export * from './chat-new';



//# sourceMappingURL=index.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPartChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainPartChatComponent = (function () {
    function MainPartChatComponent() {
    }
    // onNotify(message:object):void {
    //   this.message = message;
    //   console.log('MESSAGE IN CHAT COMP', this.message)
    // }
    MainPartChatComponent.prototype.ngOnInit = function () {
    };
    return MainPartChatComponent;
}());
MainPartChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-main-part-chat',
        template: __webpack_require__(300),
        styles: [__webpack_require__(272)]
    }),
    __metadata("design:paramtypes", [])
], MainPartChatComponent);

//# sourceMappingURL=main-part-chat.component.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateMessageInputService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivateMessageInputService = (function () {
    function PrivateMessageInputService(http) {
        this.http = http;
    }
    PrivateMessageInputService.prototype.sendPrivateMessage = function (message, chatname) {
        return this.http.post("http://localhost:8090/api/chats/" + chatname, message).map(function (res) { return res.json(); });
    };
    PrivateMessageInputService.prototype.getAllMessagesFromPrivateChat = function (chatname) {
        return this.http.get("http://localhost:8090/api/chats/" + chatname).map(function (res) { return res.json(); });
    };
    return PrivateMessageInputService;
}());
PrivateMessageInputService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], PrivateMessageInputService);

var _a;
//# sourceMappingURL=private-message-input.service.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_ws_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivatePartChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrivatePartChatComponent = (function () {
    function PrivatePartChatComponent(route, store, ws, MainPartChatService) {
        this.route = route;
        this.store = store;
        this.ws = ws;
        this.MainPartChatService = MainPartChatService;
        this.storeConnection = store.subscribe(function (state) {
            console.log('Private Part Chat Component section received state', state);
        });
    }
    PrivatePartChatComponent.prototype.initWsRoom = function () {
        var _this = this;
        console.log('initWsRoom working');
        this.connectionRoom = this.ws.initRoomWs(this.chatname)
            .subscribe(function (privateMessage) {
            console.log('privateMessage111', privateMessage);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["d" /* PrivateMessageAddSuccessActions */](privateMessage));
        });
    };
    PrivatePartChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('params', params.id);
            _this.chatname = params.id;
            _this.MainPartChatService.updateChatname(_this.chatname);
            if (_this.connectionRoom) {
                _this.connectionRoom.unsubscribe();
                console.log('connectionRoom unsubscribe');
            }
            _this.initWsRoom();
            console.log('INIT PRIVATE CHAT');
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["e" /* UpdateCurrentChatSuccessActions */](_this.chatname));
        });
    };
    PrivatePartChatComponent.prototype.ngOnDestroy = function () {
        this.connectionRoom.unsubscribe();
        this.storeConnection.unsubscribe();
    };
    return PrivatePartChatComponent;
}());
PrivatePartChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-private-part-chat',
        template: __webpack_require__(307),
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_ws_service__["a" /* WsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_ws_service__["a" /* WsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _d || Object])
], PrivatePartChatComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=private-part-chat.component.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return localStorage.getItem('token') == null ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_module__ = __webpack_require__(184);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(101);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__auth_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(189);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_not_found_component__ = __webpack_require__(190);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_not_found_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_profile_profile_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function dateCompare(c) {
    var startControl = c.get('currentpassword');
    var endControl = c.get('newpassword');
    if (startControl.value !== endControl.value) {
        return null;
    }
    return { 'match': true };
}
var ProfileComponent = (function () {
    function ProfileComponent(store, profileservice, router, fb) {
        this.store = store;
        this.profileservice = profileservice;
        this.router = router;
        this.fb = fb;
        this.storeConnection = store.subscribe();
        this.userInfo$ = store
            .map(this.mapStatetoUserInfo.bind(this));
    }
    ProfileComponent.prototype.mapStatetoUserInfo = function (state) {
        this.userInfoCurrent = state.uiState.user;
        return state.uiState.user;
    };
    ProfileComponent.prototype.profileSubmit = function (value) {
        var _this = this;
        this.userInfoNew = {
            firstname: this.profileForm.value.firstname || this.userInfoCurrent.firstname,
            lastname: this.profileForm.value.lastname || this.userInfoCurrent.lastname,
            email: this.profileForm.value.email || this.userInfoCurrent.email,
            currentpassword: this.profileForm.value.passwords.currentpassword,
            newpassword: this.profileForm.value.passwords.newpassword
        };
        var userInfoComplex = Object.assign(this.userInfoCurrent, this.userInfoNew, this.userInfoNew.passwords);
        this.profileservice
            .updateProfile(userInfoComplex)
            .subscribe(function (newUserInfo) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["v" /* UpdateProfileSuccessActions */](newUserInfo));
            _this.router.navigate(['chat']);
        }, this.onLoginError);
    };
    ProfileComponent.prototype.onLoginError = function (err) {
        alert('Something goes wrong');
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.profileForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[^@]+@[^@]+\.[a-zA-Z]{2,}')]],
            passwords: this.fb.group({
                currentpassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(14)]],
                newpassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(14)]]
            }, { validator: dateCompare })
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-profile',
        template: __webpack_require__(313),
        styles: [__webpack_require__(285)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_profile_profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_profile_profile_service__["a" /* ProfileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.updateProfile = function (user) {
        return this.http.put("http://localhost:8090/api/users/" + user._id, user).map(function (res) { return res.json(); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAAClCAYAAACQqiVzAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAPCElEQVR4nO2db2wbZx3Hv07nc+Kek2I3TS6qapbqPLY0qpK9aCgsAzUFzR1bNyQmVQgkqjLENLYJIZiohJCKyh9NbMCQulIk+qKiSJRVW4NgrVhTStsXOKqaAKqVDlfVzm5jL43PSX0mNi989vznzr5LnvOdp9/nnS9n50nuc8/9nt/z8/O4CoUCjPDpfUeMnegg/n7iWZeR844c/U/b/W3PHviEob/NKB0sP4xoX0gEAgCJQKiQCAQAEoFQIREIACQCoXKf3Q1oBu/lIH58Y9UxOZNFNJa0qUXs4Lh12BjwVB3LKnkkk/da3hZHijDy0ADC4yGMPDiA/l6f7nmf3nekha1iw4DgRSjUgwHBC5/PrXvekaP/aWGrHCjC97/xGTw2/oDdzbCEzzwq4IFQj93N0MRRMQJJYB+OEWHkoYGPrAQDgtfREgAOEuFrX3zY7iZYxsMPb2x+ks04QgQxGMDIgwN2N8MSAoFODAheu5vRFEcEiyMP6UsQv5PGb//4T0jzaUz/6/0WtooNjSRIp3P4Z2Qe6XQO70tLLWxVPY4Qgfd6dH/2oyPvtqUAJTwe/U733fOS7QKUcMSjoRHtLEEznCIB4HAR4nfSdjfBMtLpnN1NqMLRIkjzH2ERZBKBcCAtDRbFYAD8+vrAUOjlNc8feXBAd0QRv5OG5KBHRyDQCQ9Xf1/xvPZ8woDg1R1RpOVcyx8dLRXhW1/ZaTpf8MuDX9A8/vyhtxwlws5PbjKdL/jC41s0j7/19s2Wi0CPBgJAG4tAw0q2tKUI8pJidxMsQ1HytvzethQhGpu3uwmWMW9DdRLQpiLImY9wj5C1p0do6ajhF8f/oTl8DI+HdGsRnj/0Vt0xJ2Yc/3HptubwMRTq0a1FeOvtm3XH7Eo0tVQEvYLTRkPKdgkK9QpOBwb0h5Q010A4DhKBAEAiECokAgGARCBUSAQCAIlAqJAIBAASgVAhEQgAJAKhQiIQAEgEQoVEIACQCISKy+ii3MRHG+oRCAAkAqFCIhAASARChUQgAJAIhAqJQAAgEQgVEoEAYOKbTjOP7Wi7FOS2P1+h7f4MQj0CAYBEIFRIBAIAiUCokAgEABKBUGnZQhmdgyI8gyK4TULTczPXprF0LdKCVrEh4PcgEPDoLq5ZiRRfgiQtt6BV5rBUBHefAP8TX0LPxB6sW6+9umot8yeOtYUEPt6NoaENCInd4DSWzNEiMp1ypASAhSL0TITRd+BF5DNpfHD6JO7diMLdJ8A3Ng7v8EjVuanTJ5HPyEhfnsK9G1GrmsSMkNiNsR29UJQVzMwuIJnKwsffh2CQh9DfVXXuzOwCFCWPWExGMpW1qcXNsUSEgZcOomdXGLnbEt57/qtYycjln6VOn4T/yWfQd+CF8rHOwRBiLz9nRVOY8+gjfRDFbshyDqfevFm1LuLM7AK2DW3A2I7e8rFAwIMzk7fsaKopmAeLPRNh9OwKAwASb7xWJUGJ1OmTSF+eKr/2Do+gd99+1k1hTkjshih2AwAuXZnXXBxzZnYBsdiHf7PQ34XRkUDL2rhamIqwbj2PvgMvll9XXuxapJ8fqpJk4779huMIO+C4jqo7vfJi13L+QqJKktERv+E4wi6Yts47PGr4Yq5kZMg1ongGQyybwxRB8Bq+mKWYoJJAQH/fKifAVITOQdHU+Zk2GB2UCPjNXUgp7szRgR6W9lfuvsY5g1wibuWvtxRfk5yB07bqaYalItQOE5uRuy1pHu+ZCCN4+PWqkYbdCEJX85MqkNP/0zweEruxJ7y5Kv6wA6Yi1OYA/E88Y/i9d89NIpfQFoHbJMA7PIJOG2OI2hzA0NAGw++NRhd1ewied0Po77I9hmAqQm1CqHNQhP9JfRnWqz3GSkZG4o1XWTaFObUJoYDfg20NZBD6i2swK0oel67csbx9a4X5o0F6tXpY2HfgBfRMhOvO8w6PYuO+/bh3I4q5rz2tmW9wGlNT1cPCsR29CKl5hUoEoQujI34kU1n8/g/v2bYZhxkMfxvaTM3iuvU8Nh/8SVWMcO9GtDxc9AyK8I2N496NKG6+/FydBN7hUQQP/6rp75k/cQx3ThzT/bkVNYsc14HdEwNVqeRkKotYLAMACPg5BIM8kqkszkzeqpNAELqw57HNTX9PZDqFyLT2avYA+5pFS1LMKxkZsZefK88tlHILH3vymao8g5YETkdR8jgzeQs+3o1gcD04bh0AYNvQhqo8g5YETsbS2cdcQkLq9Mny640G08hL1yL49+M7y6979+3Hxn37sXRt2jFzEmk5h5nZhfLr0RG/ofdJ0jJ+89sP46jRkQBGR/yQ4su2zknYmvfccvh1R6eV18Ke8GbHp5UraWlL756brHrdOSji/l/+Dt7h0VY2wxKi0cWq1wG/B0/v3WI632AXllcoeYdH4e7rB7dJwIpcvxeTe5OA4OFfIXH0tarHSDsgCF3w8W7wvBtZjXiA593Y89hmXL5yp+ox4kQsEaFnIgzf2Dh8Y+MAgCW19CyfkTGvRvm1gWMpa6glQ+baNHDiGBSdzGMrCYndCG5Zj2Cw2HYpvgxJWoai5BGZTgGoDxxLWUMtGaT4EiLTgGxzSpqpCJ2DIjYf/DHcmwTkbkt4/9VDkC9N6dYkCC8dLMsCFGVIX56qyzAuXYvYXr4W8Huwe0IAz7shyzlMXUjgvzFZpybhAzz6SF9ZFqAoQyyWqcswStKyI8rXmMUI3uFR3P+L38G9ScC9G1G89/xXcffspO7wcCUj49ah7yFx9LWq4xt21Sef7EYQuvDU3i3geTeSqSxOvXkT16OLusNDRcnjnXMSLtdkFEWN5JNTYCJCMYH04/LrxFHtyiQtUqdPVgWRTgscOa4Du3d9uB3h5St3DOcHZmYXqoJIJweOTESorVI22403yg7aTW2VstluvBQ3OB1mPcJaqIwJ9Kai7aKUOVwtlTGBnHZujYIleYRmBSmNSF/Sr3N0As0KUhrx35sZhi1hCxMRaod1ZgtISrOTS9emGxa82kHtsG5sx0ZT7y/NTkrx5YYFr3bDRIS7Zyer6hB8Y+MYeOmgoUdG56CIvgMv4t6NKG4d+i6L5jDlenSxqg4hGOTx6CN9htLHAb8HYzt6kUxl8c5ZZ+9xzSyPcPPl57Dl8OvlAtaeXWHwY+OQL08hcy2CXCJeDiJL34MsJZ3unptE4o1XHTsTeWbyFvaEN5cLWEWxG8Egj1hMhhRfRlrOlYPI0vcgS0mnaHQRl0yMNOyCeT1Cz0QY/ieeaVrRXCpnv3PimG6J2lphXY8QErsxNLShaUVzqZw9Mp2yrIjV8fUId89O4u7ZSbj7BHTeL9YJodyWkL0RbYvvONZyPbqI69FF+Hg3/AFPnRCynEMymXX0dxz1sGzSKZeQkEtIjgv+WJCWc0jLOUcHf2ZpnwlzwlJIBAIAiUCokAgEABKBUCERCAC03R+hQj0CAYBEIFRIBAIAiUCokAgEABKBUCERCAAkAqFCIhAATBSmfPYNtF0K8m9fB233ZxDqEQgAJAKhQiIQAEgEQoVEIACQCIQKiUAAIBEIFRKBANDCnWCbwXPA09sK+LyYR1/Ft+kvxlw4NevCVenDRFo/D+wMFnBqlmlyzTI4rgPbhj6GkOir2i02FpMx86+FquV4Sms8t3pdRqYi/HAij+PTLswlzV0gngNeCeexNVCf6f1UsIBPqRd9LunCdqGAz4kF/GyqtZ3Z7l0CItMp019w5biOqq/UVxIM8ggGeczMLiCVykLo74IodmPqQoJVsw3DTIR+vnjRtgsFfHuyw5QMehJU8vRQAVCnO+aSLvwl6gLPAbKyllYbo3iX8hAEL85M3jIlg54ElVRuAJJMZXE9ugiO62jpmgrMbqs+X/EiNbq7tfi8WDB8LlC88FfjwJG9eWwXWjNXxPuK90uju1uLkNhtanc4RclDkpbx1N4tEATvqtq6WizpX3mueKGKd3FjPieau5g8V+wdrsaL8UOr4bgOPLV3S8NtfEqYXWCzGEtsgCS1fr0lSx+03xzL45Vw4zt3NXf1X6Mu/PqyvQOesR292BPe3HARzdoNw40QjS7WrdjaCpjFCHoxwXahgFeEAq5KLvw16sLFmGtNz/VTs62XIJnUjgmE/uK2PFJ8GdHoou7azEaZmV2wRQKAoQiyUrxT9br67UIxkPwOgKuSC3MpQFbMd+2rec9aUZQ8otFF3a5e6O+C0N+F8Uf6IMWXkUxmVyWEnQtuMR01HI90YKu/eaBYlAJAmxQ9+Xg3ItMpzXWTailJ0W4wE2FnsICvjOZN5xDMItuwTlUwuB6jIwHLF8lSlBVLP78RzB62c6liRG/1kG7OhjWuk6ksOK7D8jvdztXYmIlwVXIh0YIRT2WquVVI0nJLdlixcwMPpuG31dG8HRKUuHRl3tLPl+L27uLC9MpdjBWHiFZhRwKpRCwm1+3kxvrz7YT5LfzTqQ784GwH88dEaXhqJ+cvJPDOOYn5Y0JR8rhuoWRGYC7C1kAB3xxjPx4+NdvRkgmmRgT8HnzS5DL9RpiZXbB90W7mIswlXYinXVU1BWtFVoBTM/bXHiRTWaTl/1XVFKwVRcljZvYDZp+3WiyJ7n42xfbuPR6xvzcoMTWVYHr3RqaTtvcGgEUixGWYrknQo1Sh5BTScs50TYIesZjsmB1iLStVm0u68OybrnKxipEpaa3PaHUlkhGSqSz+9ObNYrFKf5ehKWmtzzhvQyWSHpb/l2UF2N5v/n1zSRe+PemcR4IWirKyqr0ck6kszkzecsQjoYQlPcLWQAHb+81XH5W4GHMxjzNYEfB7IAjF2kIz1UclYjEZ5y+wjTNYwESE7UIBP5zIg+fW9jmyUgwMnRQTCEIXdu8aMLSZVyOKm4gnHRMT1MJEhKuSC18+uU6zHN0IslLME5yaWVvRihVI0jJ+/4f3NMvRjVAcHi5gZvYDx/UClTAtTDkeceF4ZF05QNzq15+NnEu6cDVelMjO1LERSndzZDpZDhADAY/ubGQylS3uAu/wvR4rsSRGuBhz/sVdLbGY3DYX1wzOG5sRtkAiEABIBEKFRCAAkAiEColAACARCBUSgQBAIhAqtN0fAYB6BEKFRCAAkAiEColAACARCBUSgQBAIhAqJAIBgEQgVP4PUa6vi6tJc2AAAAAASUVORK5CYII="

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/chat/chat.module": [
		96
	],
	"app/auth/auth.module": [
		92
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 145;


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_profile_profile_component__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomeComponent */]
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'chat',
        loadChildren: '../app/chat/chat.module#ChatModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth__["a" /* AuthGuard */]]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_5_app_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth__["a" /* AuthGuard */]]
    },
    {
        path: 'auth',
        loadChildren: 'app/auth/auth.module#AuthModule',
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__page_not_found__["a" /* PageNotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* PreloadAllModules */] })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.js.map

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ws_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(store, ws) {
        this.store = store;
        this.ws = ws;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.error('NGONINT');
        this.ws.initWs()
            .subscribe(function (val) {
            console.log(val);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-root',
        template: __webpack_require__(290),
        styles: [__webpack_require__(262)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_ws_service__["a" /* WsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_ws_service__["a" /* WsService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_shared_login_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth___ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat___ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core___ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_store_application_state__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_profile_profile_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_ws_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_chat_chat_menu_chat_menu_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_chat_main_part_chat_message_input_message_input_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_chat_chat_list_chat_list_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__chat_user_list_user_list_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_chat_private_part_chat_private_message_input_private_message_input_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_store_storeReducer__ = __webpack_require__(193);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__page_not_found__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__core__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__chat__["a" /* ChatModule */],
            __WEBPACK_IMPORTED_MODULE_16__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_26_app_store_storeReducer__["a" /* default */], __WEBPACK_IMPORTED_MODULE_17_app_store_application_state__["a" /* INITIAL_APPLICATION_STATE */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__auth_shared_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_11__auth___["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_12__chat___["b" /* ChatGuard */],
            __WEBPACK_IMPORTED_MODULE_13__core___["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_24__chat_user_list_user_list_service__["a" /* UserListService */],
            __WEBPACK_IMPORTED_MODULE_18_app_profile_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_19_app_ws_service__["a" /* WsService */],
            __WEBPACK_IMPORTED_MODULE_20_app_chat_chat_menu_chat_menu_service__["a" /* ChatMenuService */],
            __WEBPACK_IMPORTED_MODULE_21_app_chat_main_part_chat_message_input_message_input_service__["a" /* MessageInputService */],
            __WEBPACK_IMPORTED_MODULE_22_app_chat_chat_list_chat_list_service__["a" /* ChatListService */],
            __WEBPACK_IMPORTED_MODULE_23_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */],
            __WEBPACK_IMPORTED_MODULE_25_app_chat_private_part_chat_private_message_input_private_message_input_service__["a" /* PrivateMessageInputService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alt_login_google_component__ = __webpack_require__(91);
/* unused harmony namespace reexport */

//# sourceMappingURL=index.js.map

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(loginService, router, store) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.store = store;
        this.store
            .subscribe(function (state) {
            console.error('state', state);
            _this.authenticated = state.uiState.authenticated;
        });
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authenticated) {
            this.loginService.logout();
            this.router.navigate(['home']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_component__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var authRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__auth_component__["a" /* AuthComponent */],
        children: [
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginComponent */]
            },
            {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_3__register__["a" /* RegisterComponent */]
            }
        ]
    }
];
var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    return AuthRoutingModule;
}());
AuthRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(authRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        providers: []
    })
], AuthRoutingModule);

//# sourceMappingURL=auth-routing.module.js.map

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(LoginService, router, zone, store) {
        this.LoginService = LoginService;
        this.router = router;
        this.zone = zone;
        this.store = store;
        this.user = {
            email: '',
            password: ''
        };
        this.storeConnection = store.subscribe(function (state) {
            console.log('LoginComponent section received state', state);
        });
    }
    LoginComponent.prototype.signInSubmit = function (form) {
        var _this = this;
        this.user = {
            email: form.email,
            password: form.password,
        };
        console.log(this.user);
        this.LoginService
            .login(this.user)
            .subscribe(function (userInfo) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["b" /* LoginSuccessActions */](userInfo));
            _this.router.navigate(['chat']);
        }, this.onLoginError);
    };
    LoginComponent.prototype.onLoginError = function (err) {
        console.error(err);
        alert('User not found');
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.storeConnection.unsubscribe();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-login',
        template: __webpack_require__(293),
        styles: [__webpack_require__(265)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_login_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_store_actions__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






function dateCompare(c) {
    var startControl = c.get('password');
    var endControl = c.get('confirmpassword');
    if (startControl.value !== endControl.value) {
        return { 'match': true };
    }
    return null;
}
var RegisterComponent = (function () {
    function RegisterComponent(fb, LoginService, router, zone, store) {
        this.fb = fb;
        this.LoginService = LoginService;
        this.router = router;
        this.zone = zone;
        this.store = store;
    }
    RegisterComponent.prototype.signUpSubmit = function (form) {
        var _this = this;
        var data = {
            firstname: this.signUpForm.value.firstname,
            lastname: this.signUpForm.value.lastname,
            email: this.signUpForm.value.email,
            password: this.signUpForm.value.passwords.password
        };
        console.log(data);
        this.LoginService
            .register(data)
            .subscribe(function (userInfo) {
            console.error(userInfo);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5_app_store_actions__["a" /* RegisterSuccessActions */](userInfo));
            _this.router.navigate(['chat']);
        }, this.onLoginError);
    };
    RegisterComponent.prototype.onLoginError = function (err) {
        console.error(err);
        alert('Something goes wrong');
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('[^@]+@[^@]+\.[a-zA-Z]{2,}')]],
            passwords: this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(14)]],
                confirmpassword: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]]
            }, { validator: dateCompare })
        });
    };
    RegisterComponent.prototype.ngOnDestroy = function () { };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-register',
        template: __webpack_require__(294),
        styles: [__webpack_require__(266)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatDetailsComponent = (function () {
    function ChatDetailsComponent(store) {
        this.store = store;
        store.subscribe(function (state) { return console.log('message section received state', state); });
    }
    ChatDetailsComponent.prototype.ngOnInit = function () { };
    return ChatDetailsComponent;
}());
ChatDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-chat-details',
        template: __webpack_require__(295),
        styles: [__webpack_require__(267)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], ChatDetailsComponent);

var _a;
//# sourceMappingURL=chat-details.component.js.map

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__(101);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatGuard = (function () {
    function ChatGuard(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    ChatGuard.prototype.canActivate = function () {
        console.log('isLoggedIn', this.loginService.isLoggedIn);
        if (this.loginService.isLoggedIn) {
            this.router.navigate(['chat']);
            return false;
        }
        return true;
    };
    return ChatGuard;
}());
ChatGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ChatGuard);

var _a, _b;
//# sourceMappingURL=chat-guard.service.js.map

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterChatByNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterChatByNamePipe = (function () {
    function FilterChatByNamePipe() {
    }
    FilterChatByNamePipe.prototype.transform = function (chats, filterValue) {
        if (chats) {
            return chats.filter(function (chat) {
                return chat.name.match(new RegExp(filterValue, 'i'));
            });
        }
        else {
            return chats;
        }
    };
    return FilterChatByNamePipe;
}());
FilterChatByNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filterChatByName'
    })
], FilterChatByNamePipe);

//# sourceMappingURL=chat-list-filter.pipe.js.map

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_chat_chat_list_chat_list_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatListComponent = (function () {
    function ChatListComponent(ChatListService, store, http, MainPartChatService, router) {
        this.ChatListService = ChatListService;
        this.store = store;
        this.http = http;
        this.MainPartChatService = MainPartChatService;
        this.router = router;
        this.searchValue = '';
        this.subscriptions = [];
        this.chatsOn$ = store
            .map(this.mapStatetoChats);
    }
    ;
    ChatListComponent.prototype.mapStatetoChats = function (state) {
        var allChats = state.storeData.chats;
        var username = state.uiState.user.firstname;
        return allChats.filter(function (chat) {
            if (chat['usersNames'].includes(username)) {
                console.log(chat['usersNames'].includes(username));
                return true;
            }
            return false;
        });
    };
    ChatListComponent.prototype.select = function (chat) {
        var obj = { selected: true };
        var name = chat.name;
        this.router.navigate(['chat', chat.name]);
    };
    ChatListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ChatListService.getAllChats()
            .subscribe(function (allChats) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["f" /* LoadChatsListActions */](allChats));
            console.log('ALL CHATS', allChats);
        });
        this.subscriptions.push(this.MainPartChatService
            .getSearchValue()
            .subscribe(function (value) {
            _this.searchValue = value;
            console.log('SEARCH', _this.searchValue);
            return _this.searchValue;
        }));
    };
    ;
    ChatListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
    };
    return ChatListComponent;
}());
ChatListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-chat-list',
        template: __webpack_require__(296),
        styles: [__webpack_require__(268)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_chat_chat_list_chat_list_service__["a" /* ChatListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_chat_chat_list_chat_list_service__["a" /* ChatListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ChatListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chat-list.component.js.map

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_chat_chat_menu_chat_menu_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMenuComponent = (function () {
    function ChatMenuComponent(store, ChatMenuService, MainPartChatService) {
        var _this = this;
        this.store = store;
        this.ChatMenuService = ChatMenuService;
        this.MainPartChatService = MainPartChatService;
        this.chat = {
            name: '',
            users: ''
        };
        store.subscribe(function (state) {
            return _this.currentUser = state.uiState.user;
        });
        this.users$ = store
            .map(this.mapStatetoAllUsers);
    }
    ChatMenuComponent.prototype.mapStatetoAllUsers = function (state) {
        var currentUsername = state.uiState.user.firstname;
        var users = state.storeData.users;
        return users.filter(function (user) {
            if (user['firstname'] === currentUsername) {
                return false;
            }
            return true;
        });
    };
    ChatMenuComponent.prototype.addChat = function (event, data) {
        event.preventDefault();
        data.users.push(this.currentUser);
        console.log('data.users', data.users);
        data.users.sort(function (a, b) {
            var re = /\D/g;
            return (parseInt(a.firstname.replace(re, ''), 10) - parseInt(b.firstname.replace(re, ''), 10));
        });
        this.ChatMenuService.sendChatData(data);
        this.chat.name = '';
        this.chat.users = '';
        this.MainPartChatService.updateIsMenuShown(false);
    };
    ChatMenuComponent.prototype.ngOnInit = function () {
        if (this.somevar) {
            this.somevar.unsubscribe();
        }
    };
    return ChatMenuComponent;
}());
ChatMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-chat-menu',
        template: __webpack_require__(297),
        styles: [__webpack_require__(269)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_chat_chat_menu_chat_menu_service__["a" /* ChatMenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_chat_chat_menu_chat_menu_service__["a" /* ChatMenuService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _c || Object])
], ChatMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=chat-menu.component.js.map

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatNavbarComponent = (function () {
    function ChatNavbarComponent(MainPartChatService) {
        this.MainPartChatService = MainPartChatService;
        this.notifyChatListFold = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.notifyChatMenuShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.searchValue = '';
    }
    ChatNavbarComponent.prototype.onBlur = function () {
        this.searchValue = '';
        this.MainPartChatService.setSearchValue('');
    };
    ChatNavbarComponent.prototype.onSearchValueChange = function (value) {
        this.MainPartChatService.setSearchValue(value);
    };
    ChatNavbarComponent.prototype.foldChatList = function () {
        this.isChatListFolded = !this.isChatListFolded;
        this.notifyChatListFold.emit(this.isChatListFolded);
    };
    ChatNavbarComponent.prototype.showChatMenu = function () {
        this.isChatMenuShown = !this.isChatMenuShown;
        this.notifyChatMenuShow.emit(this.isChatMenuShown);
    };
    ChatNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.somevar = this.MainPartChatService.getIsMenuShown().subscribe(function (val) {
            if (val === false) {
                _this.showChatMenu();
            }
            console.log(val);
        });
    };
    return ChatNavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], ChatNavbarComponent.prototype, "notifyChatListFold", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
], ChatNavbarComponent.prototype, "notifyChatMenuShow", void 0);
ChatNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-chat-navbar',
        template: __webpack_require__(298),
        styles: [__webpack_require__(270)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _c || Object])
], ChatNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=chat-navbar.component.js.map

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_chat_main_part_chat_main_part_chat_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_chat_private_part_chat_private_part_chat_component__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var chatRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3_app_chat_main_part_chat_main_part_chat_component__["a" /* MainPartChatComponent */],
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_4_app_chat_private_part_chat_private_part_chat_component__["a" /* PrivatePartChatComponent */]
            }
        ]
    }
];
var ChatsRoutingModule = (function () {
    function ChatsRoutingModule() {
    }
    return ChatsRoutingModule;
}());
ChatsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(chatRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        providers: []
    })
], ChatsRoutingModule);

//# sourceMappingURL=chat-routing.module.js.map

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ws_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_chat_main_part_chat_message_input_message_input_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessageInputComponent = (function () {
    function MessageInputComponent(ws, store, MessageInputService, MainPartChatService) {
        var _this = this;
        this.ws = ws;
        this.store = store;
        this.MessageInputService = MessageInputService;
        this.MainPartChatService = MainPartChatService;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.storeConnection = store.subscribe(function (state) {
            console.log('Message Input Component section received state', state);
            _this.authorId = state.uiState.user._id;
            _this.author = state.uiState.user.firstname;
        });
    }
    MessageInputComponent.prototype.sendMessage = function () {
        this.message = {
            userId: this.authorId,
            userName: this.author,
            timestamp: Date.now(),
            text: this.messageText
        };
        this.ws.sendMessage(this.message);
        this.MessageInputService.sendMessage(this.message)
            .subscribe(function (message) {
            console.error('API', message);
        });
        this.MainPartChatService.updateData(this.message);
        this.messageText = '';
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.MessageInputService.getAllMessages()
            .subscribe(function (messages) {
            console.error(messages);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["g" /* GetAllMessagesSuccessActions */](messages));
        });
    };
    MessageInputComponent.prototype.ngOnDestroy = function () {
        this.storeConnection.unsubscribe();
    };
    return MessageInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
], MessageInputComponent.prototype, "notify", void 0);
MessageInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-message-input',
        template: __webpack_require__(301),
        styles: [__webpack_require__(273)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_ws_service__["a" /* WsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_ws_service__["a" /* WsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_chat_main_part_chat_message_input_message_input_service__["a" /* MessageInputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_chat_main_part_chat_message_input_message_input_service__["a" /* MessageInputService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _e || Object])
], MessageInputComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=message-input.component.js.map

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMessageByTextPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterMessageByTextPipe = (function () {
    function FilterMessageByTextPipe() {
    }
    FilterMessageByTextPipe.prototype.transform = function (messages, filterValue) {
        if (messages) {
            return messages.filter(function (message) {
                return message.text.match(new RegExp(filterValue, 'i'));
            });
        }
        else {
            return messages;
        }
    };
    return FilterMessageByTextPipe;
}());
FilterMessageByTextPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filterMessageByText',
        pure: false
    })
], FilterMessageByTextPipe);

//# sourceMappingURL=messages-list-filter.pipe.js.map

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesListComponent = (function () {
    function MessagesListComponent(store, MainPartChatService) {
        var _this = this;
        this.store = store;
        this.MainPartChatService = MainPartChatService;
        this.searchMessage = '';
        this.subscriptions = [];
        store.subscribe(function (state) {
            return _this.author = state.uiState.user.firstname;
        });
        this.messages$ = store
            .map(this.mapStatetoMessages);
    }
    MessagesListComponent.prototype.mapStatetoMessages = function (state) {
        console.log('mapStatetoMessages', state.storeData.messages);
        return state.storeData.messages;
    };
    MessagesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.MainPartChatService
            .getSearchMessage()
            .subscribe(function (value) { return _this.searchMessage = value; }));
    };
    MessagesListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
    };
    return MessagesListComponent;
}());
MessagesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-messages-list',
        template: __webpack_require__(302),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _b || Object])
], MessagesListComponent);

var _a, _b;
//# sourceMappingURL=messages-list.component.js.map

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesNavbarComponent = (function () {
    function MessagesNavbarComponent(MainPartChatService) {
        this.MainPartChatService = MainPartChatService;
        this.searchMessage = '';
    }
    MessagesNavbarComponent.prototype.onBlur = function () {
        this.searchMessage = '';
        this.MainPartChatService.setSearchMessage('');
        console.log(this.MainPartChatService.setSearchMessage(''));
    };
    MessagesNavbarComponent.prototype.onSearchMessageChange = function (value) {
        this.MainPartChatService.setSearchMessage(value);
        console.log('onSearchMessageChange', value);
    };
    MessagesNavbarComponent.prototype.ngOnInit = function () { };
    return MessagesNavbarComponent;
}());
MessagesNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-messages-navbar',
        template: __webpack_require__(303),
        styles: [__webpack_require__(275)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _a || Object])
], MessagesNavbarComponent);

var _a;
//# sourceMappingURL=messages-navbar.component.js.map

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ws_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_chat_private_part_chat_private_message_input_private_message_input_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_store_actions__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateMessageInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrivateMessageInputComponent = (function () {
    function PrivateMessageInputComponent(ws, store, PrivateMessageInputService, MainPartChatService) {
        var _this = this;
        this.ws = ws;
        this.store = store;
        this.PrivateMessageInputService = PrivateMessageInputService;
        this.MainPartChatService = MainPartChatService;
        this.storeConnection = store.subscribe(function (state) {
            console.log('Private Message Input Component received state', state);
            _this.authorId = state.uiState.user._id;
            _this.author = state.uiState.user.firstname;
        });
    }
    PrivateMessageInputComponent.prototype.sendPrivateMessage = function () {
        this.privateMessage = {
            userId: this.authorId,
            userName: this.author,
            timestamp: Date.now(),
            text: this.messageText
        };
        console.log('Private message', this.privateMessage);
        console.log(this.chatname);
        this.ws.sendPrivateMessage(this.privateMessage, this.chatname);
        this.PrivateMessageInputService.sendPrivateMessage(this.privateMessage, this.chatname)
            .subscribe(function (privateChatMessages) {
            console.error('API CHATNAME MESSAGES', privateChatMessages);
        });
        this.MainPartChatService.updateData(this.privateMessage);
        this.messageText = '';
    };
    PrivateMessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PrivateMessageInputService.getAllMessagesFromPrivateChat(this.chatname)
            .subscribe(function (privateMessages) {
            console.error('Private Chat messages', privateMessages);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5_app_store_actions__["c" /* GetAllPrivateMessagesSuccessActions */](privateMessages));
        });
    };
    PrivateMessageInputComponent.prototype.ngOnDestroy = function () {
        this.storeConnection.unsubscribe();
    };
    return PrivateMessageInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], PrivateMessageInputComponent.prototype, "chatname", void 0);
PrivateMessageInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-private-message-input',
        template: __webpack_require__(304),
        styles: [__webpack_require__(276)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_ws_service__["a" /* WsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_ws_service__["a" /* WsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_chat_private_part_chat_private_message_input_private_message_input_service__["a" /* PrivateMessageInputService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_chat_private_part_chat_private_message_input_private_message_input_service__["a" /* PrivateMessageInputService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _d || Object])
], PrivateMessageInputComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=private-message-input.component.js.map

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPrivateMessageByTextPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPrivateMessageByTextPipe = (function () {
    function FilterPrivateMessageByTextPipe() {
    }
    FilterPrivateMessageByTextPipe.prototype.transform = function (messages, filterValue) {
        if (messages) {
            return messages.filter(function (message) {
                return message.text.match(new RegExp(filterValue, 'i'));
            });
        }
        else {
            return messages;
        }
    };
    return FilterPrivateMessageByTextPipe;
}());
FilterPrivateMessageByTextPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filterPrivateMessageByText',
        pure: false
    })
], FilterPrivateMessageByTextPipe);

//# sourceMappingURL=private-message-filter.pipe.js.map

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateMessageListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivateMessageListComponent = (function () {
    function PrivateMessageListComponent(store, MainPartChatService) {
        var _this = this;
        this.store = store;
        this.MainPartChatService = MainPartChatService;
        this.searchPrivateMessage = '';
        this.subscriptions = [];
        this.storeConnection = store.subscribe(function (state) {
            console.log('PRIVATE MESSAGE COMPONENT STATE', state);
            _this.author = state.uiState.user.firstname;
        });
        this.privateMessages$ = store
            .map(this.mapStatetoPrivateMessages);
    }
    PrivateMessageListComponent.prototype.mapStatetoPrivateMessages = function (state) {
        console.log('PRIVATEEEE');
        var indexChat;
        state.storeData.chats.forEach(function (chat, index) {
            if (chat['name'] === state.uiState.currentChat) {
                indexChat = index;
                console.log(indexChat);
            }
        });
        console.log(state.storeData.chats[indexChat].privateMessages);
        return state.storeData.chats[indexChat].privateMessages;
    };
    PrivateMessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storeConnection.unsubscribe();
        this.subscriptions.push(this.MainPartChatService
            .getSearchMessage()
            .subscribe(function (value) { return _this.searchPrivateMessage = value; }));
    };
    PrivateMessageListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
    };
    return PrivateMessageListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", String)
], PrivateMessageListComponent.prototype, "chatname", void 0);
PrivateMessageListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-private-message-list',
        template: __webpack_require__(305),
        styles: [__webpack_require__(277)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _b || Object])
], PrivateMessageListComponent);

var _a, _b;
//# sourceMappingURL=private-message-list.component.js.map

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateMessageNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivateMessageNavbarComponent = (function () {
    function PrivateMessageNavbarComponent(MainPartChatService) {
        this.MainPartChatService = MainPartChatService;
        this.searchPrivateMessage = '';
    }
    PrivateMessageNavbarComponent.prototype.onBlur = function () {
        this.searchPrivateMessage = '';
        this.MainPartChatService.setSearchMessage('');
        console.log(this.MainPartChatService.setSearchMessage(''));
    };
    PrivateMessageNavbarComponent.prototype.onSearchPrivateMessageChange = function (value) {
        this.MainPartChatService.setSearchMessage(value);
        console.log('onSearchPrivateMessageChange', value);
    };
    PrivateMessageNavbarComponent.prototype.ngOnInit = function () { };
    return PrivateMessageNavbarComponent;
}());
PrivateMessageNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-private-message-navbar',
        template: __webpack_require__(306),
        styles: [__webpack_require__(278)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _a || Object])
], PrivateMessageNavbarComponent);

var _a;
//# sourceMappingURL=private-message-navbar.component.js.map

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapStatetoUsers;
function mapStatetoUsers(state) {
    return state.storeData.users;
}
//# sourceMappingURL=mapStateToUsers.js.map

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterUserByNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterUserByNamePipe = (function () {
    function FilterUserByNamePipe() {
    }
    FilterUserByNamePipe.prototype.transform = function (users, filterValue) {
        if (users) {
            return users.filter(function (user) {
                return user.firstname.match(new RegExp(filterValue, 'i'));
            });
        }
        else {
            return users;
        }
    };
    return FilterUserByNamePipe;
}());
FilterUserByNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filterUserByName'
    })
], FilterUserByNamePipe);

//# sourceMappingURL=user-list-filter.pipe.js.map

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterUserOnByNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterUserOnByNamePipe = (function () {
    function FilterUserOnByNamePipe() {
    }
    FilterUserOnByNamePipe.prototype.transform = function (users) {
        if (users) {
            return users.sort(function (a, b) {
                var keyA = a.isLogged, keyB = b.isLogged;
                if (keyA < keyB) {
                    return 1;
                }
                ;
                if (keyA > keyB) {
                    return -1;
                }
                ;
                return 0;
            });
        }
    };
    return FilterUserOnByNamePipe;
}());
FilterUserOnByNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'filterUserOnByName'
    })
], FilterUserOnByNamePipe);

//# sourceMappingURL=user-list-filterOn.pipe.js.map

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_list_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_chat_user_list_mapStateToUsers__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserListComponent = (function () {
    function UserListComponent(userlistservice, store, MainPartChatService) {
        this.userlistservice = userlistservice;
        this.store = store;
        this.MainPartChatService = MainPartChatService;
        this.searchValue = '';
        this.subscriptions = [];
        this.usersOn$ = store
            .map(__WEBPACK_IMPORTED_MODULE_4_app_chat_user_list_mapStateToUsers__["a" /* mapStatetoUsers */]);
    }
    ;
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userlistservice.getAllUsers()
            .subscribe(function (allUserData) { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3_app_store_actions__["h" /* LoadChatListActions */](allUserData)); });
        this.subscriptions.push(this.MainPartChatService
            .getSearchValue()
            .subscribe(function (value) {
            _this.searchValue = value;
            console.log('SEARCH', _this.searchValue);
            return _this.searchValue;
        }));
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.map(function (subscription) { return subscription.unsubscribe(); });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-user-list',
        template: __webpack_require__(308),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_list_service__["a" /* UserListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_list_service__["a" /* UserListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_chat_main_part_chat_main_part_chat_service__["a" /* MainPartChatService */]) === "function" && _c || Object])
], UserListComponent);

var _a, _b, _c;
//# sourceMappingURL=user-list.component.js.map

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar__["a" /* NavbarComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navbar__["a" /* NavbarComponent */]
        ],
        providers: []
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-header',
        template: __webpack_require__(309),
        styles: [__webpack_require__(281)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(185);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__header_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navbar_component__ = __webpack_require__(188);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__navbar_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_shared__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_store_actions__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_ws_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = (function () {
    function NavbarComponent(loginService, router, store, ws) {
        var _this = this;
        this.loginService = loginService;
        this.router = router;
        this.store = store;
        this.ws = ws;
        this.email = '';
        this.authenticated = false;
        this.store.subscribe(function (state) {
            console.log('Navbar Component section received state', state);
            if (state.uiState.user) {
                _this.email = state.uiState.user.email;
                _this.authenticated = state.uiState.authenticated;
            }
            else {
                _this.authenticated = false;
                return;
            }
        });
    }
    NavbarComponent.prototype.logoutAction = function () {
        this.loginService.logout();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4_app_store_actions__["j" /* LogoutSuccessActions */]());
    };
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.ngOnDestroy = function () { };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-navbar',
        template: __webpack_require__(310),
        styles: [__webpack_require__(282)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_shared__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_shared__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_ws_service__["a" /* WsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_ws_service__["a" /* WsService */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-home',
        template: __webpack_require__(311),
        styles: [__webpack_require__(283)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
        selector: 'ct-page-not-found',
        template: __webpack_require__(312),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_state__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_data__ = __webpack_require__(192);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_APPLICATION_STATE; });


;
var INITIAL_APPLICATION_STATE = {
    uiState: __WEBPACK_IMPORTED_MODULE_0__ui_state__["a" /* INITIAL_UI_STATE */],
    storeData: __WEBPACK_IMPORTED_MODULE_1__store_data__["a" /* INITIAL_STORE_DATA */]
};
//# sourceMappingURL=application-state.js.map

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STORE_DATA; });
;
var INITIAL_STORE_DATA = {
    users: [],
    messages: [],
    chats: []
};
//# sourceMappingURL=store-data.js.map

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_store_actions__ = __webpack_require__(9);
/* harmony export (immutable) */ __webpack_exports__["a"] = storeReducer;

function storeReducer(state, action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["k" /* LOAD_CHAT_LIST_ACTION */]:
            return handleLoadChatListsAction(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["l" /* LOGIN_SUCCESS_ACTION */]:
            return handleLoginSuccessAction(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["m" /* LOGOUT_SUCCESS_ACTION */]:
            return handleLogoutSuccessAction(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["n" /* REGISTER_SUCCESS_ACTION */]:
            return handleRegisterSuccessAction(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["o" /* UPDATE_PROFILE_SUCCESS_ACTION */]:
            return handleUpdateProfileSuccessAction(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["p" /* MESSAGE_ADD_SUCCESS_ACTION */]:
            return handleMessageAddSuccessAction(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["q" /* GET_ALL_MESSAGES_SUCCESS_ACTION */]:
            return handleGetAllMessagesSuccessAction(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["r" /* LOAD_CHATS_LIST_SUCCESS_ACTION */]:
            return handleLoadChatsListActions(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["s" /* GET_ALL_PRIVATES_MESSAGES_SUCCESS_ACTION */]:
            return handleGetAllPrivateMessagesActions(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["t" /* ADD_PRIVATE_MESSAGE_SUCCESS_ACTION */]:
            return handleAddPrivateMessageActions(state, action);
        case __WEBPACK_IMPORTED_MODULE_0_app_store_actions__["u" /* UPDATE_CURRENT_CHAT_SUCCESS_ACTION */]:
            return handleUpdateCurrentChatActions(state, action);
    }
    return state;
}
function handleUpdateCurrentChatActions(state, action) {
    var currentChat = action.payload;
    var newState = Object.assign({}, state);
    newState.uiState.currentChat = currentChat;
    return newState;
}
function handleAddPrivateMessageActions(state, action) {
    var privateMessage = action.payload;
    var chatname = privateMessage.chatname;
    delete privateMessage['chatname'];
    var newState = Object.assign({}, state);
    newState.storeData.chats.forEach(function (chat) {
        if (chat['name'] === chatname) {
            chat.privateMessages.push(privateMessage);
        }
    });
    return newState;
}
function handleGetAllPrivateMessagesActions(state, action) {
    var privateChatData = action.payload;
    var newState = Object.assign({}, state);
    newState.storeData.chats.forEach(function (chat) {
        if (chat['name'] === privateChatData.name) {
            chat.privateMessages = privateChatData.privateMessages.slice();
        }
    });
    return newState;
}
function handleLoadChatsListActions(state, action) {
    var chatsData = action.payload;
    var newState = Object.assign({}, state);
    newState.storeData.chats = chatsData.slice();
    return newState;
}
function handleGetAllMessagesSuccessAction(state, action) {
    var messagesData = action.payload;
    var newState = Object.assign({}, state);
    newState.storeData.messages = messagesData.slice();
    return newState;
}
function handleMessageAddSuccessAction(state, action) {
    var messageData = action.payload;
    var newState = Object.assign({}, state);
    newState.storeData.messages.push(messageData);
    return newState;
}
function handleUpdateProfileSuccessAction(state, action) {
    return state;
}
function handleRegisterSuccessAction(state, action) {
    var userData = action.payload;
    localStorage.setItem('token', userData.token);
    var newState = Object.assign({}, state);
    newState.uiState = {
        user: action.payload.user,
        authenticated: true,
        usersOn: [action.payload.user],
        currentChat: ''
    };
    return newState;
}
function handleLogoutSuccessAction(state, action) {
    var newState = Object.assign({}, state);
    newState.storeData = {
        users: [],
        chats: [],
        messages: []
    };
    newState.uiState = {
        authenticated: undefined,
        user: undefined,
        usersOn: [],
        currentChat: ''
    };
    return newState;
}
function handleLoadChatListsAction(state, action) {
    var userData = action.payload;
    var usersOn = userData.users.slice();
    if (state.uiState.user) {
        usersOn
            .forEach(function (user, index) {
            for (var key in user) {
                if (key === 'email' && user['email'] === state.uiState.user.email) {
                    user.isLogged = true;
                }
            }
        });
        usersOn = usersOn.filter(function (user) {
            if (user.isLogged === true) {
                return true;
            }
            return false;
        });
    }
    ;
    var newState = Object.assign({}, state);
    newState.storeData.users = userData.users;
    newState.uiState.usersOn = usersOn;
    return newState;
}
function handleLoginSuccessAction(state, action) {
    var userData = action.payload;
    localStorage.setItem('token', userData.token);
    var newState = Object.assign({}, state);
    newState.uiState = {
        user: action.payload.user,
        authenticated: true,
        usersOn: [action.payload.user],
        currentChat: ''
    };
    return newState;
}
//# sourceMappingURL=storeReducer.js.map

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_UI_STATE; });
;
var INITIAL_UI_STATE = {
    user: undefined,
    authenticated: undefined,
    currentChat: undefined,
    usersOn: []
};
//# sourceMappingURL=ui-state.js.map

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\r\n.social-icons-content {\r\n    font-size: 0;\r\n    margin-top: 32px;\r\n    margin-bottom: 13px;\r\n    text-align: center;\r\n}\r\n\r\n.social-icons-content__link {\r\n    margin-right: 32px;\r\n}\r\n\r\n.social-icons-content__link:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.social-icons-content__fb-icon-active,\r\n.social-icons-content__fb-icon,\r\n.social-icons-content__g-icon-active,\r\n.social-icons-content__g-icon,\r\n.social-icons-content__tw-icon-active,\r\n.social-icons-content__tw-icon {\r\n    background: url(" + __webpack_require__(142) + ") no-repeat;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    text-align: left;\r\n    text-indent: -9999px;\r\n}\r\n\r\n.social-icons-content__fb-icon:hover {\r\n    background-position: -10px -0px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__fb-icon {\r\n    background-position: -65px -0px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__g-icon:hover {\r\n    background-position: -10px -55px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__g-icon {\r\n    background-position: -65px -55px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__tw-icon:hover {\r\n    background-position: -10px -110px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__tw-icon {\r\n    background-position: -65px -110px;\r\n    height: 45px;\r\n    width: 45px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".form__wrapper {\r\n    background: #fff;\r\n    box-sizing: border-box;\r\n    margin: 0 auto;\r\n    margin-top: calc((100vh - 60px - 495px)/2);\r\n    min-height: 410px;\r\n    padding: 32px;\r\n    position: relative;\r\n    width: 480px;\r\n}\r\n\r\n.form-sign-in__header {\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: #989ad7;\r\n    color: white;\r\n    line-height: 45px;\r\n    margin: 13px 0 28px;\r\n}\r\n\r\n.form-sign-in {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.form-sign-in__label {\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    display: inline-block;\r\n    font-weight: 500;\r\n    color: #3b3e99;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.form-sign-in__input-field {\r\n    border: 1px solid #989ad7;\r\n    box-sizing: border-box;\r\n    height: 32px;\r\n    padding: 0 10px;\r\n    width: 100%;\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    \r\n}\r\n\r\n.form-sign-in__btn-login:disabled  {\r\n    background-color: grey;\r\n    border: white;\r\n    color: #fff;\r\n    cursor: not-allowed;\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n    margin-top: 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-sign-in__btn-login {\r\n    background-color: #3b3e99;\r\n    border: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n     margin-top: 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-sign-in__btn-login:not(:disabled):hover {\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n::-webkit-input-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n:-moz-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n.social-icons-content {\r\n    font-size: 0;\r\n    margin-top: 32px;\r\n    margin-bottom: 13px;\r\n    text-align: center;\r\n}\r\n\r\n.social-icons-content__link {\r\n    margin-right: 32px;\r\n}\r\n\r\n.social-icons-content__link:last-child {\r\n    margin-right: 0;\r\n}\r\n\r\n.social-icons-content__fb-icon-active,\r\n.social-icons-content__fb-icon,\r\n.social-icons-content__g-icon-active,\r\n.social-icons-content__g-icon,\r\n.social-icons-content__tw-icon-active,\r\n.social-icons-content__tw-icon {\r\n    background: url(" + __webpack_require__(142) + ") no-repeat;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    text-align: left;\r\n    text-indent: -9999px;\r\n}\r\n\r\n.social-icons-content__fb-icon:hover {\r\n    background-position: -10px -0px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__fb-icon {\r\n    background-position: -65px -0px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__g-icon:hover {\r\n    background-position: -10px -55px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__g-icon {\r\n    background-position: -65px -55px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__tw-icon:hover {\r\n    background-position: -10px -110px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.social-icons-content__tw-icon {\r\n    background-position: -65px -110px;\r\n    height: 45px;\r\n    width: 45px;\r\n}\r\n\r\n.form-sign-in__container {\r\n    position: relative;\r\n}\r\n\r\n\r\n.form-sign-in__container + \r\n.form-sign-in__container {\r\n    margin-top: 28px;\r\n}\r\n\r\n.header-has-error {\r\n    color: lightcoral;\r\n}\r\n\r\n.input-has-error {\r\n    border: 1px solid lightcoral;\r\n}\r\n\r\n.text-has-error {\r\n    color: lightcoral;\r\n    position: absolute;\r\n    top: 62px;\r\n    font-size: 13px;\r\n    padding: 0;\r\n}\r\n\r\nbutton:focus {outline:0;}\r\n\r\n@media only screen and (max-width: 30rem) {\r\n    \r\n    body {\r\n        background-color: #fff;\r\n        display: block;\r\n    }\r\n\r\n    .wrapper {\r\n        max-height: 100vh;\r\n        min-width: 480px;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".form__wrapper {\r\n    background: #fff;\r\n    box-sizing: border-box;\r\n    margin: 0 auto;\r\n    margin-top: calc((100vh - 60px - 514px)/2);\r\n    min-height: 410px;\r\n    padding: 32px;\r\n    position: relative;\r\n    width: 480px;\r\n}\r\n\r\n.form-sign-up {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.form-sign-up__header {\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: #989ad7;\r\n    color: white;\r\n    line-height: 45px;\r\n    margin: 13px 0 28px;\r\n}\r\n\r\n.form-sign-in__label {\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    display: block;\r\n    font-weight: 500;\r\n    color: #3b3e99;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.form-sign-up__input-field {\r\n    border: 1px solid #989ad7;\r\n    box-sizing: border-box;\r\n    height: 32px;\r\n    \r\n    padding: 0 10px;\r\n    width: 100%;\r\n}\r\n\r\n.form-sign-up__container--narrow {\r\n    float: left;\r\n    width: 48%;\r\n}\r\n\r\n.form-sign-up__container--narrow + .form-sign-up__container--narrow {\r\n    float: right;\r\n    width: 48%;\r\n}\r\n\r\n.form-sign-up__btn-register:disabled {\r\n    background-color: grey;\r\n    border: white;\r\n    color: #fff;\r\n    cursor: not-allowed;\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-sign-up__btn-register {\r\n    background-color: #3b3e99;\r\n    border: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n    margin-bottom: 13px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-sign-up__btn-register:not(:disabled):hover {\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n\r\n.form-sign-up__container {\r\n    position: relative;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.header-has-error {\r\n    color: lightcoral;\r\n}\r\n\r\n.input-has-error {\r\n    border: 1px solid lightcoral;\r\n}\r\n\r\n.text-has-error {\r\n    color: lightcoral;\r\n    position: absolute;\r\n    top: 62px;\r\n    font-size: 13px;\r\n    padding: 0;\r\n}\r\n\r\n/*.form-sign-up__container:nth-child(2) > .form-sign-up__input-field--narrow {\r\n    margin-left: 4%;\r\n}*/\r\n\r\n/*.form-sign-up__container:nth-child(2) > .error {\r\n    position: absolute;\r\n    left: unset;\r\n    right: 50px;\r\n}*/\r\n\r\nbutton:focus {outline:0;}\r\n\r\n::-webkit-input-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n:-moz-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n@media only screen and (max-width: 30rem) {\r\n    \r\n    body {\r\n        background-color: #fff;\r\n        display: block;\r\n    }\r\n\r\n    .wrapper {\r\n        max-height: 100vh;\r\n        min-width: 480px;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".chat-list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin: 0;\r\n    margin-top: 10px;\r\n    padding: 0;\r\n}\r\n\r\n.chat-list__item {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 60px;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    margin-bottom: 10px;\r\n    padding: 5px 24px;\r\n}\r\n\r\n.chat-list__item:hover {\r\n    background-color: mediumpurple;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-name__heading {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n}\r\n\r\n.chat-last-activity {\r\n    margin-left: auto;\r\n    background: lightgrey;\r\n    padding: 3px 13px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.avatar__img {\r\n    border-radius: 50%;\r\n    margin-right: 24px;\r\n}\r\n\r\n.activeLink {\r\n    background-color: purple;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".user-menu {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding: 24px;\r\n}\r\n\r\n.user-menu__item-info {\r\n    background: #fff;\r\n    display: none;\r\n    margin-bottom: 22px;\r\n    padding: 32px;\r\n}\r\n\r\n#btn-account-info,\r\n#btn-settings {\r\n    display: none;\r\n}\r\n\r\n \r\n .btn-arrow-sm {\r\n    border-right: 2px solid white;\r\n    border-top: 2px solid white;\r\n    padding: 0;\r\n    transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    transition: transform .3s, -webkit-transform .3s;\r\n    height: 10px;\r\n    position: absolute;\r\n    right: 17px;\r\n    top: calc((40px - 17px + 4px)/2);\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n    width: 10px;\r\n\r\n}\r\n\r\n.btn-arrow-label-sm {\r\n     background: lightgrey;\r\n     color: white;\r\n     cursor: pointer;\r\n     display: block;\r\n     font-size: 16px;   \r\n     height: 40px;\r\n     line-height: 40px;\r\n     margin-top: 10px;\r\n     position: relative;\r\n     text-align: center;\r\n  }\r\n\r\n#btn-account-info:checked + .btn-arrow-label-sm + .user-menu__item-info {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center; }\r\n\r\n#btn-account-info:checked + .btn-arrow-label-sm > .btn-arrow-sm {\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg); }\r\n\r\n#btn-account-info:checked + .btn-arrow-label-sm {\r\n    font-weight: 400; }\r\n\r\n#btn-settings:checked + .btn-arrow-label-sm + .user-menu__item-info {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center; }\r\n\r\n#btn-settings:checked + .btn-arrow-label-sm > .btn-arrow-sm {\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg); }\r\n\r\n#btn-settings:checked + .btn-arrow-label-sm {\r\n    font-weight: 400; }\r\n\r\n.form-add-chat {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".chat-navbar {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    padding: 24px 24px;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 32px;\r\n    text-align: center;\r\n}\r\n\r\n.chat-navbar__btn-left-arrow {\r\n    color: #fff;\r\n    /*transition: .2s transform;*/\r\n}\r\n\r\n.chat-navbar__btn-left-arrow:before {\r\n    content: \"\\F053\";\r\n    font-family: FontAwesome;\r\n    color: inherit;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-form {\r\n    position: relative;\r\n}\r\n\r\n.search-form__input {\r\n    background-color: lightgrey;\r\n    border: none;\r\n    border-radius: 15px;\r\n    height: 32px;\r\n    padding: 0 35px 0 15px;\r\n    \r\n}\r\n\r\n.search-form__btn-search:before {\r\n    content: \"\\F002\";\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 5px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-navbar__btn-bars:before {\r\n    content: \"\\F0C9\";\r\n    font-family: FontAwesome;\r\n    font-size: 22px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-navbar__btn-close:before {\r\n    content: \"\\F00D\";\r\n    font-family: FontAwesome;\r\n    font-size: 23px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.rotated {\r\n   -webkit-transform: rotate(-90deg);\r\n           transform: rotate(-90deg);\r\n   /*transition: .2s transform;*/\r\n}\r\n\r\n.centered {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n}\r\n\r\n.colored {\r\n    color: red;\r\n}\r\n\r\n.isVisible {\r\n    display: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, " .wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 600px;\r\n    width: 960px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    /*justify-content: center;*/\r\n    margin: 0 auto;\r\n    \r\n}\r\n\r\n.aside-part {\r\n    background-color: #3B3E99;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-height: 500px;\r\n    height: 500px;\r\n    min-width: 108px;\r\n    overflow: auto;\r\n    width: 40%; \r\n}\r\n\r\n.main-part {\r\n  background-color: #fff;\r\n  max-height: 500px;\r\n  height: 500px;\r\n  overflow-y: auto;\r\n  width: 60%;\r\n}\r\n\r\n.collapseWidth {\r\n  width: 108px;\r\n  overflow: hidden;\r\n}\r\n\r\n.expandWidth {\r\n  width: calc(100% - 108px);\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".message-input {\r\n    background-color: lightgrey;\r\n    border-radius: 15px;\r\n    box-sizing: border-box;\r\n    margin: 24px auto 30px;\r\n    margin-bottom: 32px;\r\n    min-height: 32px;\r\n    padding: 7px 16px;\r\n    position: relative;\r\n    width: 343px;\r\n}\r\n\r\n.message-input:after {\r\n    background-color: none;\r\n    color: grey;\r\n    content: \"\\F118\";\r\n    cursor: pointer;\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    position: absolute;\r\n    right: 16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\r\n.message-list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin: 0;\r\n    padding: 0 24px;\r\n    margin-bottom: 18px;\r\n    list-style: none;\r\n}\r\n\r\n.user-message {\r\n    width: 45%;\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.user-message-author {\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n}\r\n\r\n.user-message-friend {\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n}\r\n\r\n.user-message-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    min-height: 60px;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n}\r\n\r\n.avatar__img {\r\n    border-radius: 50%;\r\n    margin-right: 24px;\r\n}\r\n\r\n\r\n.user-message__text {\r\n    background: grey;\r\n    padding: 20px 24px;\r\n    min-height: 60px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n\r\n.user-message-friend .user-message__text {\r\n    -webkit-box-ordinal-group: 0;\r\n        -ms-flex-order: -1;\r\n            order: -1;\r\n    background: lightgrey;\r\n}\r\n\r\n.user-message-friend .avatar__img {\r\n    margin-right: 0;\r\n    margin-left: 24px;\r\n}\r\n\r\n.user-message__publication-date {\r\n    margin-top: 10px;\r\n    text-align: right;\r\n}\r\n\r\n.user-message-friend .user-message__publication-date {\r\n    text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".chat-details-navbar {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 45px;\r\n    padding: 16px 24px 34px 24px;\r\n}\r\n\r\n.logo {\r\n    margin-right: 25px;\r\n}\r\n\r\n.search-form {\r\n    position: relative;\r\n}\r\n\r\n.search-form__input {\r\n    background-color: lightgrey;\r\n    border: none;\r\n    border-radius: 15px;\r\n    height: 32px;\r\n    padding: 0 35px 0 15px;\r\n    \r\n}\r\n\r\n.search-form__btn-search:before {\r\n    content: \"\\F002\";\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 5px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".message-input {\r\n    background-color: lightgrey;\r\n    border-radius: 15px;\r\n    box-sizing: border-box;\r\n    margin: 24px auto 30px;\r\n    margin-bottom: 32px;\r\n    min-height: 32px;\r\n    padding: 7px 16px;\r\n    position: relative;\r\n    width: 343px;\r\n}\r\n\r\n.message-input:after {\r\n    background-color: none;\r\n    color: grey;\r\n    content: \"\\F118\";\r\n    cursor: pointer;\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    position: absolute;\r\n    right: 16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\r\n.message-list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin: 0;\r\n    padding: 0 24px;\r\n    margin-bottom: 18px;\r\n    list-style: none;\r\n}\r\n\r\n.user-message {\r\n    width: 45%;\r\n    margin-bottom: 24px;\r\n}\r\n\r\n.user-message-author {\r\n    -ms-flex-item-align: start;\r\n        align-self: flex-start;\r\n}\r\n\r\n.user-message-friend {\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n}\r\n\r\n.user-message-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    min-height: 60px;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n}\r\n\r\n.avatar__img {\r\n    border-radius: 50%;\r\n    margin-right: 24px;\r\n}\r\n\r\n\r\n.user-message__text {\r\n    background: grey;\r\n    padding: 20px 24px;\r\n    min-height: 60px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    text-align: center;\r\n    border-radius: 10px;\r\n    box-sizing: border-box;\r\n    \r\n}\r\n\r\n.user-message-friend .user-message__text {\r\n    -webkit-box-ordinal-group: 0;\r\n        -ms-flex-order: -1;\r\n            order: -1;\r\n    background: lightgrey;\r\n}\r\n\r\n.user-message-friend .avatar__img {\r\n    margin-right: 0;\r\n    margin-left: 24px;\r\n}\r\n\r\n.user-message__publication-date {\r\n    margin-top: 10px;\r\n    text-align: right;\r\n}\r\n\r\n.user-message-friend .user-message__publication-date {\r\n    text-align: left;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".chat-details-navbar {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 45px;\r\n    padding: 16px 24px 34px 24px;\r\n}\r\n\r\n.logo {\r\n    margin-right: 25px;\r\n}\r\n\r\n.search-form {\r\n    position: relative;\r\n}\r\n\r\n.search-form__input {\r\n    background-color: lightgrey;\r\n    border: none;\r\n    border-radius: 15px;\r\n    height: 32px;\r\n    padding: 0 35px 0 15px;\r\n    \r\n}\r\n\r\n.search-form__btn-search:before {\r\n    content: \"\\F002\";\r\n    font-family: FontAwesome;\r\n    font-size: 16px;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 5px;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".chat-list {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin: 0;\r\n    margin-top: 10px;\r\n    padding: 0;\r\n}\r\n\r\n.chat-list__item {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 60px;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    margin-bottom: 10px;\r\n    padding: 5px 24px;\r\n}\r\n\r\n.chat-list__item:hover {\r\n    background-color: mediumpurple;\r\n    cursor: pointer;\r\n}\r\n\r\n.chat-name__heading {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n}\r\n\r\n.chat-last-activity {\r\n    margin-left: auto;\r\n    background: lightgrey;\r\n    padding: 3px 13px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.avatar__img {\r\n    border-radius: 50%;\r\n    margin-right: 24px;\r\n}\r\n\r\n.activeLink {\r\n    background-color: purple;\r\n}\r\n\r\n.isLogged {\r\n    background-color: green;\r\n    color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".navbar {\r\n    background-color: #3b3e99;\r\n    padding: 0 75px;\r\n    height: 60px;\r\n    /*margin-bottom: 5px;*/\r\n}\r\n\r\n.navbar__logo-container {\r\n    float: left;\r\n    height: 60px;\r\n}\r\n\r\n.navbar__menu {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n  \r\n    line-height: 60px;\r\n}\r\n\r\n.navbar__menu-item {\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n.navbar__menu-link {\r\n    text-decoration: none;\r\n    font-size: 18px;\r\n    color: white;\r\n    margin-left: 75px;\r\n}\r\n\r\n.navbar__menu-item:last-child .navbar__menu-link {\r\n    margin-right: 0;\r\n}\r\n\r\n.menu-list li a:hover {\r\n    color: #989AD7;\r\n}\r\n\r\n.active {\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".form__wrapper {\r\n    background: #fff;\r\n    box-sizing: border-box;\r\n    margin: 0 auto;\r\n    margin-top: calc((100vh - 60px - 514px)/2);\r\n    min-height: 410px;\r\n    padding: 32px;\r\n    position: relative;\r\n    width: 480px;\r\n}\r\n\r\n.form-profile {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.form-profile__header {\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    background-color: #989ad7;\r\n    color: white;\r\n    line-height: 45px;\r\n    margin: 13px 0 28px;\r\n}\r\n\r\n.form-profile__label {\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    display: block;\r\n    font-weight: 500;\r\n    color: #3b3e99;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.form-profile__input-field {\r\n    border: 1px solid #989ad7;\r\n    box-sizing: border-box;\r\n    height: 32px;\r\n    \r\n    padding: 0 10px;\r\n    width: 100%;\r\n}\r\n\r\n.form-profile__container--narrow {\r\n    float: left;\r\n    width: 48%;\r\n}\r\n\r\n.form-profile__container--narrow + .form-profile__container--narrow {\r\n    float: right;\r\n    width: 48%;\r\n}\r\n\r\n.form-profile__btn-register:disabled {\r\n    background-color: grey;\r\n    border: white;\r\n    color: #fff;\r\n    cursor: not-allowed;\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-profile__btn-register {\r\n    background-color: #3b3e99;\r\n    border: none;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-family: \"Open Sans\", \"Arial\", sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    height: 45px;\r\n    margin-bottom: 13px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.form-profile__btn-register:not(:disabled):hover {\r\n    font-weight: 400;\r\n}\r\n\r\n\r\n\r\n.form-profile__container {\r\n    position: relative;\r\n    margin-bottom: 32px;\r\n}\r\n\r\n.header-has-error {\r\n    color: lightcoral;\r\n}\r\n\r\n.input-has-error {\r\n    border: 1px solid lightcoral;\r\n}\r\n\r\n.text-has-error {\r\n    color: lightcoral;\r\n    position: absolute;\r\n    top: 62px;\r\n    font-size: 13px;\r\n    padding: 0;\r\n}\r\n\r\n/*.form-sign-up__container:nth-child(2) > .form-sign-up__input-field--narrow {\r\n    margin-left: 4%;\r\n}*/\r\n\r\n/*.form-sign-up__container:nth-child(2) > .error {\r\n    position: absolute;\r\n    left: unset;\r\n    right: 50px;\r\n}*/\r\n\r\nbutton:focus {outline:0;}\r\n\r\n::-webkit-input-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n:-moz-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n::-moz-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n:-ms-input-placeholder {\r\n    color: #989ad7;\r\n}\r\n\r\n@media only screen and (max-width: 30rem) {\r\n    \r\n    body {\r\n        background-color: #fff;\r\n        display: block;\r\n    }\r\n\r\n    .wrapper {\r\n        max-height: 100vh;\r\n        min-width: 480px;\r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */
/***/ (function(module, exports) {

module.exports = "<ct-header></ct-header>\r\n<router-outlet></router-outlet>"

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = "<div class=\"social-icons-content\">\r\n\r\n  <div class=\"alt-login__divider\">\r\n    <span class=\"alt-login__text\">OR</span>\r\n  </div>\r\n\r\n  <span class=\"alt-login__title\">Login with:</span>\r\n\r\n  <a class=\"social-icons-content__link\" href=\"https://www.facebook.com\">\r\n    <div class=\"social-icons-content__fb-icon\"></div>\r\n  </a>\r\n\r\n  <span class=\"social-icons-content__link\">\r\n    <button type=\"button\" (click)=\"submitBy()\" id=\"google-auth-btn\" class=\"hover social-icons-content__g-icon\"></button>\r\n  </span>\r\n\r\n  <a class=\"social-icons-content__link\" href=\"https://twitter.com/\">\r\n    <div class=\"hover social-icons-content__tw-icon\"></div>\r\n  </a>\r\n  \r\n</div> <!--end social-icons-content-->\r\n"

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form__wrapper\">\r\n\r\n  <form #formSignIn=\"ngForm\" novalidate class=\"form-sign-in\" (ngSubmit)=\"signInSubmit(formSignIn.value)\">\r\n\r\n    <h4 class=\"form-sign-in__header\">Sign In</h4>\r\n\r\n    <div class=\"form-sign-in__container\">\r\n      <label class=\"form-sign-in__label\" for=\"emailId\" [class.header-has-error]=\"email.invalid && email.touched\">Email</label>\r\n      <input class=\"form-sign-in__input-field\" id=\"emailId\" type=\"text\" name=\"email\" placeholder=\"Email Address (required)\" #email=\"ngModel\"\r\n        required [class.input-has-error]=\"email.invalid && email.touched\" [ngModel]=\"user.email\">\r\n      <div *ngIf=\"email.invalid && email.touched\" class=\"text-has-error\">\r\n        Email is required\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-sign-in__container\">\r\n      <label class=\"form-sign-in__label\" for=\"passwordId\" [class.header-has-error]=\"password.invalid && password.touched\">Password</label>\r\n      <input class=\"form-sign-in__input-field\" id=\"passwordId\" type=\"password\" name=\"password\" placeholder=\"Password (required)\"\r\n        #password=\"ngModel\" required pattern=\".{6,}\" [ngModel]=\"user.password\" [class.input-has-error]=\"password.invalid && password.touched\">\r\n      <div *ngIf=\"password.invalid && password.touched\" class=\"text-has-error\">\r\n        Password is required (min 6 characters)\r\n      </div>\r\n    </div>\r\n    <ct-alt-login-google></ct-alt-login-google>\r\n    <button class=\"form-sign-in__btn-login\" type=\"submit\" [disabled]=\"formSignIn.invalid\">Login</button>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form__wrapper\">\r\n\r\n  <form action=\"\" class=\"form-sign-up\" [formGroup]=\"signUpForm\" novalidate (ngSubmit)=\"signUpSubmit(signUpForm)\">\r\n\r\n    <h3 class=\"form-sign-up__header\">Sign Up</h3>\r\n\r\n    <div class=\"form-sign-up__container\">\r\n      <div class=\"form-sign-up__container--narrow\">\r\n        <label for=\"firstnameId\" class=\"form-sign-in__label\" [class.header-has-error]=\"signUpForm.get('firstname').invalid && signUpForm.get('firstname').touched\">Firstname</label>\r\n        <input id=\"firstnameId\" class=\"form-sign-up__input-field\" type=\"text\" placeholder=\"First Name (required)\" formControlName=\"firstname\"\r\n          [class.input-has-error]=\"signUpForm.get('firstname').invalid && signUpForm.get('firstname').touched\">\r\n\r\n        <span *ngIf=\"signUpForm.get('firstname').invalid && signUpForm.get('firstname').touched\" [class.text-has-error]=\"(signUpForm.get('firstname').dirty || signUpForm.get('firstname').touched) && signUpForm.get('firstname').errors\">\r\n                                <span *ngIf=\"signUpForm.get('firstname').errors.required\">Firstname is required</span>\r\n        <span *ngIf=\"!!signUpForm.get('firstname').errors.minlength\">Minimum 3 characters</span>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-sign-up__container--narrow\">\r\n        <label for=\"lastnameId\" class=\"form-sign-in__label\" [class.header-has-error]=\"signUpForm.get('lastname').invalid && signUpForm.get('lastname').touched\">Lastname</label>\r\n        <input id=\"lastnameId\" class=\"form-sign-up__input-field\" type=\"text\" placeholder=\"Last Name (required)\" formControlName=\"lastname\"\r\n          [class.input-has-error]=\"signUpForm.get('lastname').invalid && signUpForm.get('lastname').touched\">\r\n        <span *ngIf=\"(signUpForm.get('lastname').dirty || signUpForm.get('lastname').touched) && signUpForm.get('lastname').errors\"\r\n          [class.text-has-error]=\"signUpForm.get('lastname').invalid && signUpForm.get('lastname').touched\">\r\n                                    <span *ngIf=\"signUpForm.get('lastname').errors.required\">Lastname is required</span>\r\n        <span *ngIf=\"!!signUpForm.get('lastname').errors.minlength\">Minimum 3 characters</span>\r\n\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-sign-up__container\">\r\n      <label for=\"emailId\" class=\"form-sign-in__label\" [class.header-has-error]=\"signUpForm.get('email').invalid && signUpForm.get('email').touched\">Email</label>\r\n      <input id=\"emailId\" class=\"form-sign-up__input-field\" type=\"text\" placeholder=\"Email Address (required)\" formControlName=\"email\"\r\n        [class.input-has-error]=\"signUpForm.get('email').invalid && signUpForm.get('email').touched\">\r\n      <span *ngIf=\"signUpForm.get('email').invalid && signUpForm.get('email').touched\" [class.text-has-error]=\"signUpForm.get('email').invalid && signUpForm.get('email').touched\">\r\n                            Email is required and should be valid\r\n                        </span>\r\n    </div>\r\n\r\n    <div formGroupName=\"passwords\">\r\n      <div class=\"form-sign-up__container\">\r\n        <label for=\"passwordId\" class=\"form-sign-in__label\" [class.header-has-error]=\"\r\n                            (signUpForm.get('passwords.password').dirty || signUpForm.get('passwords.password').touched) && \r\n                            signUpForm.get('passwords.password').errors\">Password</label>\r\n        <input id=\"passwordId\" class=\"form-sign-up__input-field\" type=\"password\" placeholder=\"Password (required)\" formControlName=\"password\"\r\n          [class.input-has-error]=\"\r\n                            (signUpForm.get('passwords.password').dirty || signUpForm.get('passwords.password').touched) && \r\n                            (signUpForm.get('passwords.password').errors || signUpForm.get('passwords').errors) && !signUpForm.get('passwords.confirmpassword').errors?.required\">\r\n        <span *ngIf=\"\r\n                            (signUpForm.get('passwords.password').dirty || signUpForm.get('passwords.password').touched) && \r\n                            signUpForm.get('passwords.password').errors\" [class.text-has-error]=\"\r\n                            (signUpForm.get('passwords.password').dirty || signUpForm.get('passwords.password').touched) && \r\n                            signUpForm.get('passwords.password').errors\r\n                            \">   \r\n                                <span *ngIf=\"signUpForm.get('passwords.password').errors.required\">Password is required</span>\r\n        <span *ngIf=\"!!signUpForm.get('passwords.password').errors.minlength || !!signUpForm.get('passwords.password').errors.maxlength\">Password should contain from 6 to 14 characters</span>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-sign-up__container\">\r\n        <label for=\"confirmpasswordId\" class=\"form-sign-in__label\" [class.header-has-error]=\"\r\n                            (signUpForm.get('passwords.confirmpassword').dirty || signUpForm.get('passwords.confirmpassword').touched) && \r\n                            signUpForm.get('passwords.confirmpassword').errors\r\n                            \">Confirm Password</label>\r\n        <input id=\"confirmpasswordId\" class=\"form-sign-up__input-field\" type=\"password\" placeholder=\"Confirm Password (required)\"\r\n          formControlName=\"confirmpassword\" [class.input-has-error]=\"\r\n                             (signUpForm.get('passwords.confirmpassword').dirty || signUpForm.get('passwords.confirmpassword').touched) && \r\n                            signUpForm.get('passwords').errors\r\n                             \">\r\n\r\n        <span *ngIf=\"\r\n                            (signUpForm.get('passwords.confirmpassword').dirty || signUpForm.get('passwords.confirmpassword').touched) && \r\n                            (signUpForm.get('passwords.confirmpassword').invalid || signUpForm.get('passwords').errors)\"\r\n          [class.text-has-error]=\"\r\n                              (signUpForm.get('passwords.confirmpassword').dirty || signUpForm.get('passwords.confirmpassword').touched) && \r\n                            (signUpForm.get('passwords.confirmpassword').invalid || signUpForm.get('passwords').errors)\r\n                            \">   \r\n                                <span *ngIf=\"signUpForm.get('passwords.confirmpassword').errors?.required\">Confirm password is required</span>\r\n        <span *ngIf=\"(signUpForm.get('passwords').errors?.match)\">Password doesn't match</span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <button class=\"form-sign-up__btn-register\" type=\"submit\" [disabled]=\"signUpForm.invalid\">Get Started</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  chat-details works!\r\n</p>\r\n"

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports = "<!--<p *ngFor='let user of chatsOn$ | async'>\r\n  users-list works!\r\n</p>\r\n\r\n<div>{{chatsOn$}}</div>-->\r\n\r\n<ul class=\"chat-list\">\r\n  <li class=\"chat-list__item\" *ngFor='let chat of chatsOn$ | async | filterChatByName: searchValue; let i = index' \r\n (click)=\"select(chat)\" \r\n  >\r\n    <div class=\"avatar\" >\r\n        <img class=\"avatar__img\" src=\"http://placehold.it/60x60\" alt=\"avatar-image\">\r\n    </div>\r\n\r\n    <div class=\"chat-info\" >\r\n        <h4 class=\"chat-name__heading\">{{chat.name}}</h4>\r\n    </div>\r\n\r\n    <div class=\"chat-last-activity\"  >\r\n        2 h\r\n    </div>\r\n    \r\n   \r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-menu\">\r\n\r\n                    <div class=\"user-menu__item\">\r\n                        <input type=\"checkbox\" id=\"btn-account-info\">\r\n                        <label for=\"btn-account-info\" class=\"btn-arrow-label-sm\">\r\n                            Add User\r\n                            <span class=\"btn-arrow-sm\"></span>\r\n                        </label>\r\n                        <div class=\"user-menu__item-info\">\r\n                            <form action=\"\">\r\n                                    <input type=\"text\" placeholder=\"Find User\">\r\n                                    <input type=\"submit\" value=\"Find\">\r\n                            </form>\r\n                        </div>\r\n                    </div>  <!--end user-menu__item-->\r\n\r\n                    <div class=\"user-menu__item\">\r\n                         <input type=\"checkbox\" id=\"btn-settings\">\r\n                         <label for=\"btn-settings\" class=\"btn-arrow-label-sm\">\r\n                            Add Chat\r\n                            <span class=\"btn-arrow-sm\"></span>\r\n                        </label>\r\n                         <div class=\"user-menu__item-info\">\r\n                             <form class=\"form-add-chat\" action=\"\" name=\"form-add-chat\"\r\n                              #formAddChat=\"ngForm\"\r\n                              novalidate\r\n                              (ngSubmit)=\"addChat($event, formAddChat.value)\"\r\n                              >\r\n                              <!--(click)=\"addChat(formAddChat.value)\" -->\r\n                              <label for=\"emailId\"\r\n                              \r\n                              >Chat Name</label>\r\n                                <input type=\"text\" name=\"chatName\" id=\"emailId\" placeholder=\"Chat Name (required)\" \r\n                                  #chatName=\"ngModel\" \r\n                                  required\r\n                                 \r\n                                  [(ngModel)]=\"chat.name\"\r\n                                  >\r\n\r\n                                  <label for=\"selectUsersId\"\r\n                              \r\n                              >Select Users</label>\r\n                                    <select required #users=\"ngModel\" [(ngModel)]=\"chat.users\" name=\"users\" id=\"usersIds\" multiple>\r\n                                        <option [ngValue]=\"user\" *ngFor=\"let user of users$ | async\">{{user.firstname}}</option>\r\n                                        <!--<option disabled selected>Choose friend</option>\r\n                                        <option value=\"sam\">Sam</option>\r\n                                        <option value=\"max\">Max</option>\r\n                                        <option value=\"andrew\">Andrew</option>-->\r\n                                    </select>\r\n                                    <!--<select [(ngModel)]=\"selectedValue\">\r\n                                      <option *ngFor=\"let c of countries\" [ngValue]=\"c\">{{c.name}}</option>\r\n                                    </select>-->\r\n                                    <br>\r\n                                    <button type=\"submit\" [disabled]=\"formAddChat.invalid\">Add Chat</button>\r\n                                    <!--<input type=\"submit\" value=\"Add Chat\">-->\r\n                                    {{formAddChat.value | json}}\r\n                            </form>\r\n                        </div>\r\n                    </div>   <!--end user-menu__item-->\r\n\r\n                </div>    <!--end user-menu-->"

/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-navbar\" \r\n    [class.centered]=\"isChatListFolded\"\r\n    >\r\n    <span class=\"chat-navbar__btn-left-arrow\" \r\n        (click)=\"foldChatList()\"\r\n        [class.rotated]=\"isChatListFolded\"\r\n        [class.disabled]=\"isChatMenuShown\"\r\n        ></span>\r\n    \r\n  \r\n        <form action=\"\" class=\"search-form\" autocomplete=\"off\"\r\n            *ngIf=\"!isChatListFolded\"\r\n            >\r\n             <input class=\"search-form__input\" type=\"text\" placeholder=\"Search\" name=\"search-field\"\r\n                 [(ngModel)]=\"searchValue\"\r\n                (blur)=\"onBlur()\"\r\n                (ngModelChange)=\"onSearchValueChange($event)\"\r\n             >\r\n              <span class=\"search-form__btn-search\"></span>\r\n        </form>\r\n\r\n    <span class=\"chat-navbar__btn-bars\"\r\n            *ngIf=\"!isChatListFolded\"\r\n            (click)='showChatMenu()'\r\n            [class.isVisible]=\"isChatMenuShown\"\r\n        ></span>\r\n\r\n        <span class=\"chat-navbar__btn-close\"\r\n           *ngIf=\"!isChatListFolded\"\r\n           (click)='showChatMenu()'\r\n           [class.isVisible]=\"!isChatMenuShown\"\r\n        ></span>\r\n</div>"

/***/ }),
/* 299 */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"wrapper\">\r\n    <aside class=\"aside-part\" [class.collapseWidth]=\"isChatListFolded\">\r\n        <ct-chat-navbar (notifyChatListFold)='onNotifyChatListFold($event)' (notifyChatMenuShow)='onNotifyChatMenuShow($event)'></ct-chat-navbar>\r\n        <ct-chat-menu\r\n            *ngIf=\"isChatMenuShown\"\r\n        ></ct-chat-menu>\r\n        <ct-chat-list></ct-chat-list>\r\n        <!--<ct-users-list></ct-users-list>-->\r\n        <!--<ct-chat-list></ct-chat-list>-->\r\n        <ct-user-list></ct-user-list>\r\n    </aside>\r\n    <div class=\"main-part\" [class.expandWidth]=\"isChatListFolded\">\r\n    <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 300 */
/***/ (function(module, exports) {

module.exports = " <ct-messages-navbar></ct-messages-navbar>\r\n        <!--<ct-chat-details></ct-chat-details>-->\r\n        <ct-messages-list></ct-messages-list>\r\n        <ct-message-input></ct-message-input>"

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"message-input\" contenteditable=\"true\">\r\n    Type Something...\r\n</div>-->\r\n\r\n<!--<div *ngFor=\"let message of messages$ | async\">\r\n  {{message.text}}\r\n</div>-->\r\n<input class=\"message-input\" [(ngModel)]=\"messageText\" (keyup.enter)=\"sendMessage()\" /><button (click)=\"sendMessage()\">Send</button>"

/***/ }),
/* 302 */
/***/ (function(module, exports) {

module.exports = "<!--<h3>MESSAGES LIST</h3>-->\r\n\r\n<ul class=\"message-list\">\r\n    <li \r\n    [class.user-message-author]=\"message.userName === author\"\r\n    [class.user-message-friend]=\"message.userName !== author\"\r\n    *ngFor='let message of messages$ | async | filterMessageByText: searchMessage; let i = index'>\r\n        <div class=\"user-message-wrapper\">\r\n      \r\n            <div class=\"avatar \">\r\n                <img class=\"avatar__img\" src=\"http://placehold.it/60x60\" alt=\"\">\r\n            </div>\r\n            <div class=\"user-message__text\">\r\n                {{message.userName}}>>{{message.text}}\r\n            </div>\r\n              \r\n        </div>\r\n\r\n        <div class=\"user-message__publication-date\">\r\n           2h\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n"

/***/ }),
/* 303 */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-details-navbar\">\r\n    <div class=\"logo\">\r\n        <a routerLink=\"/home\"  class=\"logo__link\">\r\n             <img class=\"logo__item\" src=\"http://placehold.it/120x45\" alt=\"\">\r\n        </a>\r\n    </div>\r\n\r\n     <form action=\"\" class=\"search-form\" autocomplete=\"off\">\r\n             <input class=\"search-form__input\" type=\"text\" placeholder=\"Search message\" name=\"search-message\"\r\n             [(ngModel)]=\"searchMessage\"\r\n             (blur)=\"onBlur()\"\r\n             (ngModelChange)=\"onSearchMessageChange($event)\"\r\n             >\r\n            <span class=\"search-form__btn-search\"></span>\r\n        </form>\r\n</div>\r\n"

/***/ }),
/* 304 */
/***/ (function(module, exports) {

module.exports = "<input class=\"message-input\" [(ngModel)]=\"messageText\" (keyup.enter)=\"sendPrivateMessage()\" /><button (click)=\"sendPrivateMessage()\">Send</button>"

/***/ }),
/* 305 */
/***/ (function(module, exports) {

module.exports = "<!--<h3>MESSAGES LIST</h3>-->\r\n<h2>{{chatname}}</h2>\r\n<ul class=\"message-list\">\r\n  Private messages goes here\r\n    <li\r\n    [class.user-message-author]=\"privateMessage.userName === author\"\r\n    [class.user-message-friend]=\"privateMessage.userName !== author\"\r\n    *ngFor='let privateMessage of privateMessages$ | async | filterPrivateMessageByText: searchPrivateMessage; let i = index'>\r\n        <div class=\"user-message-wrapper\">\r\n      \r\n            <div class=\"avatar \">\r\n                <img class=\"avatar__img\" src=\"http://placehold.it/60x60\" alt=\"\">\r\n            </div>\r\n            <div class=\"user-message__text\" >\r\n                {{privateMessage.userName}}>>{{privateMessage.text}}\r\n            </div>\r\n              \r\n        </div>\r\n\r\n        <div class=\"user-message__publication-date\">\r\n           2h\r\n        </div>\r\n    </li>\r\n</ul>\r\n\r\n"

/***/ }),
/* 306 */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-details-navbar\">\r\n    <div class=\"logo\">\r\n        <a routerLink=\"/chat\"  class=\"logo__link\">BACK</a>\r\n        <a routerLink=\"/home\"  class=\"logo__link\">\r\n             <img class=\"logo__item\" src=\"http://placehold.it/120x45\" alt=\"\">\r\n        </a>\r\n    </div>\r\n\r\n     <form action=\"\" class=\"search-form\" autocomplete=\"off\">\r\n             <input class=\"search-form__input\" type=\"text\" placeholder=\"Search message\" name=\"search-message\"\r\n               [(ngModel)]=\"searchPrivateMessage\"\r\n             (blur)=\"onBlur()\"\r\n             (ngModelChange)=\"onSearchPrivateMessageChange($event)\"\r\n             >\r\n            <span class=\"search-form__btn-search\"></span>\r\n        </form>\r\n</div>\r\n"

/***/ }),
/* 307 */
/***/ (function(module, exports) {

module.exports = "  <!--<a routerLink=\"/chat\">Back</a>-->\r\n  <!--<h1>{{value}}</h1>-->\r\n<ct-private-message-navbar></ct-private-message-navbar>\r\n<ct-private-message-list [chatname]=\"chatname\"></ct-private-message-list>\r\n<ct-private-message-input [chatname]=\"chatname\"></ct-private-message-input>\r\n"

/***/ }),
/* 308 */
/***/ (function(module, exports) {

module.exports = "\r\n      <!--<ul>\r\n        <li *ngFor=\"let user of users$ | async\">\r\n          <span>{{user.firstname}}</span>\r\n        </li>\r\n      </ul>-->\r\n \r\n<ul class=\"chat-list\">\r\n  <li class=\"chat-list__item\" *ngFor='let user of usersOn$ | async | filterUserOnByName | filterUserByName: searchValue; let i = index' \r\n \r\n  >\r\n    <div class=\"avatar\" >\r\n        <img class=\"avatar__img\" src=\"http://placehold.it/60x60\" alt=\"avatar-image\">\r\n    </div>\r\n\r\n    <div class=\"chat-info\" >\r\n        <h4 class=\"chat-name__heading\">{{user.firstname}}</h4>\r\n    </div>\r\n\r\n    <div class=\"chat-last-activity\" [class.isLogged]=\"user.isLogged\" >\r\n        {{user.isLogged === true ? 'on' : 'off'}}\r\n    </div>\r\n    \r\n   \r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),
/* 309 */
/***/ (function(module, exports) {

module.exports = "<ct-navbar></ct-navbar>\r\n\r\n"

/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n    <div class=\"navbar__logo-container\">\r\n        <a class=\"navbar__logo-link\" routerLink=\"/home\" >\r\n            <img class=\"navbar__logo-item\" src=\"http://placehold.it/120x60\" alt=\"\">\r\n        </a>\r\n    </div>\r\n    <ul class=\"navbar__menu\">\r\n        <li class=\"navbar__menu-item\">\r\n            <a class=\"navbar__menu-link\" routerLink=\"/home\" routerLinkActive=\"active\" >Home</a>\r\n        </li>\r\n        <li class=\"navbar__menu-item\">\r\n            <a class=\"navbar__menu-link\" routerLink=\"/chat\" routerLinkActive=\"active\" [hidden]=\"!authenticated\">Chat</a>\r\n        </li>\r\n        <!--<li class=\"navbar__menu-item\">\r\n            <a class=\"navbar__menu-link\" routerLink=\"/auth/login\" routerLinkActive=\"active\" [hidden]=\"isLogged()\">Sign In</a>\r\n        </li>\r\n        <li class=\"navbar__menu-item\"> \r\n            <a class=\"navbar__menu-link\" routerLink=\"/auth/register\" routerLinkActive=\"active\" [hidden]=\"isLogged()\">Sign Up</a>\r\n        </li>-->\r\n\r\n        <ng-container *ngIf=\"!authenticated\">\r\n            <a class=\"navbar__menu-link\" routerLink=\"/auth/login\" routerLinkActive=\"active\" [hidden]=\"authenticated\">Login</a>\r\n            <a class=\"navbar__menu-link\" routerLink=\"/auth/register\" routerLinkActive=\"active\" [hidden]=\"authenticated\">Register</a>\r\n        </ng-container>\r\n        <!--<li class=\"navbar__menu-item\">    \r\n             <a class=\"navbar__menu-link\">\r\n               \r\n            </a>\r\n        </li>-->\r\n\r\n        <li class=\"navbar__menu-item\">\r\n            <a href=\"\" class=\"navbar__menu-link\" routerLink=\"/profile\" [hidden]=\"!authenticated\">Profile</a>\r\n            <a href=\"\" class=\"navbar__menu-link\" routerLink=\"/\" [hidden]=\"!authenticated\" (click)=\"logoutAction()\">{{email}} Logout</a>\r\n        </li>\r\n    </ul>\r\n\r\n</nav>\r\n\r\n<!--<div class=\"user-profile\" *ngIf=\"isLoggedIn\">\r\n    <a class=\"user-profile-link\">\r\n      <span class=\"user-profile-link__name\">{{username}}</span>\r\n      <div class=\"user-profile-link__photo\" style=\"background-image: url(assets/img/avatar__1.jpg)\"></div>\r\n    </a>\r\n    <button class=\"log-out  chat-icon-sign-out\" (click)=\"logout()\"></button>\r\n  </div>-->"

/***/ }),
/* 311 */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),
/* 312 */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),
/* 313 */
/***/ (function(module, exports) {

module.exports = "<div class=\"form__wrapper\">\r\n\r\n  <form action=\"\" class=\"form-profile\" [formGroup]=\"profileForm\" novalidate (ngSubmit)=\"profileSubmit(profileForm.value)\">\r\n\r\n    <h3 class=\"form-profile__header\">Profile</h3>\r\n\r\n    <div class=\"form-profile__container\">\r\n      <div class=\"form-profile__container--narrow\">\r\n        <label for=\"firstnameId\" class=\"form-profile__label\" [class.header-has-error]=\"profileForm.get('firstname').invalid && profileForm.get('firstname').touched\">Firstname</label>\r\n        <input id=\"firstnameId\" class=\"form-profile__input-field\" type=\"text\" placeholder=\"First Name (required)\" value=\"{{(userInfo$ | async)?.firstname}}\"\r\n          formControlName=\"firstname\" [class.input-has-error]=\"profileForm.get('firstname').invalid && profileForm.get('firstname').touched\">\r\n        <span *ngIf=\"profileForm.get('firstname').invalid && profileForm.get('firstname').touched\" [class.text-has-error]=\"(profileForm.get('firstname').dirty || profileForm.get('firstname').touched) && profileForm.get('firstname').errors\">\r\n\t\t\t\t<span \r\n\t\t\t\t\t*ngIf=\"profileForm.get('firstname').errors.required\"\r\n\t\t\t\t>\r\n\t\t\t\t\tFirstname is required</span>\r\n        <span *ngIf=\"!!profileForm.get('firstname').errors.minlength\">\r\n\t\t\t\t\tMinimum 3 characters\r\n\t\t\t\t</span>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-profile__container--narrow\">\r\n        <label for=\"lastnameId\" class=\"form-profile__label\" [class.header-has-error]=\"profileForm.get('lastname').invalid && profileForm.get('lastname').touched\">\r\n\t\t\t\tLastname\r\n\t\t\t</label>\r\n        <input id=\"lastnameId\" class=\"form-profile__input-field\" type=\"text\" placeholder=\"Last Name (required)\" value=\"{{(userInfo$ | async)?.lastname}}\"\r\n          formControlName=\"lastname\" [class.input-has-error]=\"profileForm.get('lastname').invalid && profileForm.get('lastname').touched\">\r\n        <span *ngIf=\"(profileForm.get('lastname').dirty || profileForm.get('lastname').touched) && profileForm.get('lastname').errors\"\r\n          [class.text-has-error]=\"profileForm.get('lastname').invalid && profileForm.get('lastname').touched\">\r\n\t\t\t\t<span \r\n\t\t\t\t\t*ngIf=\"profileForm.get('lastname').errors.required\"\r\n\t\t\t\t>\r\n\t\t\t\t\tLastname is required\r\n\t\t\t\t</span>\r\n        <span *ngIf=\"!!profileForm.get('lastname').errors.minlength\">\r\n\t\t\t\t\tMinimum 3 characters\r\n\t\t\t\t</span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-profile__container\">\r\n      <label for=\"emailId\" class=\"form-profile__label\" [class.header-has-error]=\"profileForm.get('email').invalid && profileForm.get('email').touched\">\r\n\t\t\tEmail\r\n\t\t</label>\r\n      <input id=\"emailId\" class=\"form-profile__input-field\" type=\"text\" placeholder=\"Email Address (required)\" value=\"{{(userInfo$ | async)?.email}}\"\r\n        formControlName=\"email\" [class.input-has-error]=\"profileForm.get('email').invalid && profileForm.get('email').touched\">\r\n      <span *ngIf=\"(profileForm.get('email').dirty || profileForm.get('email').touched) && profileForm.get('email').errors\" [class.text-has-error]=\"profileForm.get('email').invalid && profileForm.get('email').touched\">\r\n\t\t\tEmail is required and should be valid\r\n\t\t</span>\r\n    </div>\r\n\r\n    <div formGroupName=\"passwords\">\r\n      <div class=\"form-profile__container\">\r\n        <label for=\"currentpasswordId\" class=\"form-profile__label\" [class.header-has-error]=\"\r\n(profileForm.get('passwords.currentpassword').dirty || profileForm.get('passwords.currentpassword').touched) && \r\nprofileForm.get('passwords.currentpassword').errors\">Current Password</label>\r\n        <input id=\"currentpasswordId\" class=\"form-profile__input-field\" type=\"password\" placeholder=\"Current Password\" formControlName=\"currentpassword\"\r\n          [class.input-has-error]=\"\r\n(profileForm.get('passwords.currentpassword').dirty || profileForm.get('passwords.currentpassword').touched) && \r\n(profileForm.get('passwords.currentpassword').errors || profileForm.get('passwords').errors) && !profileForm.get('passwords.currentpassword').errors?.required\">\r\n        <span *ngIf=\"\r\n(profileForm.get('passwords.currentpassword').dirty || profileForm.get('passwords.currentpassword').touched) && \r\nprofileForm.get('passwords.currentpassword').errors\" [class.text-has-error]=\"\r\n(profileForm.get('passwords.currentpassword').dirty || profileForm.get('passwords.currentpassword').touched) && \r\nprofileForm.get('passwords.currentpassword').errors\r\n\">   \r\n<span *ngIf=\"profileForm.get('passwords.currentpassword').errors.required\">Password is required</span>\r\n        <span *ngIf=\"!!profileForm.get('passwords.currentpassword').errors.minlength || !!profileForm.get('passwords.currentpassword').errors.maxlength\">Password should contain from 6 to 14 characters</span>\r\n        </span>\r\n      </div>\r\n\r\n      <div class=\"form-profile__container\">\r\n        <label for=\"newpasswordId\" class=\"form-profile__label\" [class.header-has-error]=\"\r\n(profileForm.get('passwords.newpassword').dirty || profileForm.get('passwords.newpassword').touched) && \r\nprofileForm.get('passwords.newpassword').errors\r\n\">New Password</label>\r\n        <input id=\"newpasswordId\" class=\"form-profile__input-field\" type=\"password\" placeholder=\"New Password\" formControlName=\"newpassword\"\r\n          [class.input-has-error]=\"\r\n(profileForm.get('passwords.newpassword').dirty || profileForm.get('passwords.newpassword').touched) && \r\nprofileForm.get('passwords').errors\r\n\">\r\n\r\n        <span *ngIf=\"\r\n(profileForm.get('passwords.newpassword').dirty || profileForm.get('passwords.newpassword').touched) && \r\n(profileForm.get('passwords.newpassword').invalid || profileForm.get('passwords').errors)\" [class.text-has-error]=\"\r\n(profileForm.get('passwords.newpassword').dirty || profileForm.get('passwords.newpassword').touched) && \r\n(profileForm.get('passwords.newpassword').invalid || profileForm.get('passwords').errors)\r\n\">   \r\n<span *ngIf=\"profileForm.get('passwords.newpassword').errors?.required\">New password is required</span>\r\n        <span *ngIf=\"!!profileForm.get('passwords.newpassword').errors?.minlength || !!profileForm.get('passwords.newpassword').errors?.maxlength\">Password should contain from 6 to 14 characters</span>\r\n        <span *ngIf=\"(profileForm.get('passwords').errors?.match && !profileForm.get('passwords.newpassword').errors?.required)\">Password mustn't match</span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <button class=\"form-profile__btn-register\" type=\"submit\" [disabled]=\"profileForm.invalid\">SAVE</button> {{profileForm.value\r\n    | json}} {{profileForm.invalid}}\r\n  </form>\r\n</div>\r\n"

/***/ }),
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ })
],[360]);
//# sourceMappingURL=main.bundle.js.map