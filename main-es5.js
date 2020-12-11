function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGameGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <drag-scroll style=\"height: 100vh\">  -->\r\n<div class=\"flex top-panel\">\r\n  <div class=\"flex1\">\r\n\r\n    <div class=\"title\">Order Management In Action</div>\r\n    <div class=\"progress\">\r\n      <div class=\"thumb\" [style.width]=\" ((quizNo / totalQuestion) * 100) + '%'\"></div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      Question {{quizNo}} / {{totalQuestion}}\r\n    </div>\r\n  </div>\r\n  <div class=\"score-panel\">\r\n    <div class=\"title\">Your Score</div>\r\n    <div class=\"score\">{{score}}</div>\r\n    <div class=\"flex fcenter\">\r\n      <div class=\"batch\">\r\n        <img *ngIf=\"batches > 0\" src=\"assets/batches.png\" alt=\"Batches\">\r\n        <img *ngIf=\"batches > 1\" src=\"assets/batches.png\" alt=\"Batches\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"game\" class=\"game\" #game>\r\n\r\n  <div class=\"game_layout abs\"><img src=\"assets/game.png\" alt=\"game\"></div>\r\n\r\n  <div class=\"screen_10 abs\"><img src=\"assets/10_screen.png\" alt=\"game\"></div>\r\n\r\n  <div class=\"screen_10_1 abs\"><img src=\"assets/10_screen_1.png\" alt=\"game\"></div>\r\n\r\n  <div id=\"batch\" class=\"abs\"><img src=\"assets/batches.png\" alt=\"batch\"></div>\r\n  <div id=\"questNoAdd\" class=\"abs\">+1</div>\r\n\r\n\r\n  <div id=\"earn_batch1\" class=\"abs\"><img src=\"assets/earn_batch.png\" alt=\"Earn a Batch\"></div>\r\n\r\n  <div id=\"earn_batch2\" class=\"abs\"><img src=\"assets/earn_batch.png\" alt=\"Earn a Batch\"></div>\r\n\r\n  <div id=\"truck1\" class=\"Truck1 abs\"><img src=\"assets/Truck1.png\" alt=\"Truck1\"></div>\r\n  <div id=\"truck2\" class=\"Truck2 abs\"><img src=\"assets/Truck2.png\" alt=\"Truck2\"></div>\r\n  <div id=\"truck3\" class=\"Truck3 abs\"><img src=\"assets/Truck3.png\" alt=\"Truck2\"></div>\r\n\r\n\r\n</div>\r\n\r\n<div id=\"quiz\" class=\"quiz flex fcenter\" *ngIf=\"showPanel\">\r\n  <div class=\"instructor\" *ngIf=\"showQuizScreen == 'intro'\">\r\n    <img src=\"assets/man.png\" alt=\"Man\">\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"intro\" *ngIf=\"showQuizScreen == 'intro'\">\r\n      <h2>Instructions </h2>\r\n      <p>Welcome to this dynamic game where you can apply the knowledge you’ve gained to create a great order\r\n        experience for the customer. </p>\r\n\r\n      <p>In this game you’ll go through the Order Management process as a Customer Service Representative. In each\r\n        scenario, you will choose the ideal way to serve customers, in alignment with the service level they expect,\r\n        to achieve mutually winning outcomes. Each decision you make will impact the customer experience. </p>\r\n\r\n      <p>As you navigate through the challenges, <b>Think Forward</b>. You’ve seen what Cargill is working towards in\r\n        Order\r\n        Management to drive customer value and ensure seamless delivery. Although some processes and technology may\r\n        not be fully implemented today, consider what you have learned and how you can best apply it.</p>\r\n\r\n      <p>Read the instructions carefully before you begin. </p>\r\n      <div class=\"text-center\">\r\n        <button class=\"primary-btn\" (click)=\"this.showQuizScreen = 'rule'\">Next</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"rule\" *ngIf=\"showQuizScreen == 'rule'\">\r\n      <h2>About the Game </h2>\r\n      <p>Your journey begins with an order request scenario and runs through the end-to-end process\r\n        with the customer.\r\n        <ul>\r\n          <li>Each question is worth 100 points, and you can attempt each question only once.</li>\r\n          <li>There are a couple hidden “Proactive Behavior” questions. These are focused on positive behaviors that\r\n            drive exceptional performance and ones we want to see more of in action. For correct answers here, you\r\n            will earn bonus badges!</li>\r\n          <li>You need to score at least <b>600 points</b> to win.</li>\r\n        </ul>\r\n        <p>Are you ready to get into the Game? <b>Click Start and let’s begin! </b></p>\r\n        <div class=\"text-center\">\r\n          <button class=\"primary-btn\" (click)=\"action(1)\">Start</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"miles\" *ngIf=\"showQuizScreen == 'miles'\">\r\n      <h2>10 Miles to Go </h2>\r\n      <p>Good job! You have successfully achieved all the milestones in Order Management. However, we are not quite\r\n        there yet. There is 10 miles to go for the delivery to reach the customer. \r\n        Answer the next two questions and win the opportunity to earn 200 extra points and win the game.    \r\n      </p>\r\n      <div class=\"text-center\">\r\n        <button class=\"primary-btn\" (click)=\"getQuiz(9)\">Continue</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"quiz-panel\" *ngIf=\"showQuizScreen == 'quiz'\">\r\n      <div class=\"question\" *ngIf=\"selectedQuiz.submitted != true\">\r\n        <div class=\"flex\">\r\n          <div class=\"icon\"></div>\r\n          <div class=\"title\">\r\n            <h2>{{selectedQuiz.title}}</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"text\" [innerHTML]=\"selectedQuiz.question\">\r\n\r\n        </div>\r\n        <div class=\"instr\">\r\n          {{selectedQuiz.instr}}\r\n        </div>\r\n\r\n        <div class=\"choices\" *ngIf=\"selectedQuiz.type == 'single_choice'\">\r\n          <div *ngFor=\"let item of selectedQuiz.choices; let i = index\">\r\n            <div class=\"flex choice\" (click)=\"selectedQuiz.selected = i; selectedQuiz.choosen = true\">\r\n              <div class=\"single-choice\">\r\n                <div class=\"dot\" [ngClass]=\"{'active' : selectedQuiz.selected == i}\"></div>\r\n              </div>\r\n              <div class=\"text\">\r\n                {{alpha[i]}}. {{item.text}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"sorting\" *ngIf=\"selectedQuiz.type == 'sort_order'\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n          <div *ngFor=\"let item of selectedQuiz.choices; let i = index\" cdkDrag>\r\n            <div class=\"flex choice\">\r\n              <div class=\"label\">\r\n                {{item.label}}\r\n              </div>\r\n              <div class=\"text\">\r\n                {{item.text}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"choices\" *ngIf=\"selectedQuiz.type == 'multiple_choice'\">\r\n          <div *ngFor=\"let item of selectedQuiz.choices; let i = index\">\r\n            <div class=\"flex choice\" (click)=\"item.selected = !item.selected; selectedQuiz.choosen = true\">\r\n              <div class=\"multi-choice\">\r\n                <div class=\"dot\" [ngClass]=\"{'active' : item.selected == true}\"></div>\r\n              </div>\r\n              <div class=\"text\">\r\n                {{alpha[i]}}. {{item.text}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"text-center submit\">\r\n          <button class=\"primary-btn\" [ngClass]=\"{'disabled' : !selectedQuiz.choosen}\"\r\n            (click)=\"quizSubmit(selectedQuiz)\">Submit</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"feedback\" *ngIf=\"selectedQuiz.submitted == true\">\r\n        <div *ngIf=\"selectedQuiz.correct == true\" [innerHTML]=\"selectedQuiz.feedback.correct\"></div>\r\n        <div *ngIf=\"selectedQuiz.correct == false\" [innerHTML]=\"selectedQuiz.feedback.incorrect\"></div>\r\n        <div class=\"text-center submit\">\r\n          <button class=\"primary-btn\" (click)=\"action(step + 1)\">Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"result\" [hidden]=\"showQuizScreen != 'result'\">\r\n      <div class=\"result_title\">\r\n        <h2>Order Management In Action</h2>\r\n      </div>\r\n      <h2 class=\"text-center\">{{result.title}}</h2>\r\n\r\n      <div class=\"flex\">\r\n        <div class=\"bubble mr-5\">\r\n          <img src=\"assets/bubble.png\" class=\"opacity0\" alt=\"\">\r\n          <div class=\"text\">{{result.bubble}}</div>\r\n\r\n        </div>\r\n        <div class=\"flex flex1\">\r\n          <div class=\"text-center\">\r\n            <h2>Your Score = <span class=\"primary-color\">{{score}} / 1000 </span> </h2>\r\n            <h3>You earned badges = <span class=\"primary-color\">{{batches}} </span> </h3>\r\n            <div class=\"flex fcenter\">\r\n              <div class=\"batch\" *ngFor=\"let b of counter(batches)\">\r\n                <img src=\"assets/batches.png\" alt=\"Batches\">\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <ng-container >\r\n                <button *ngIf=\"this.score < 800\" class=\"primary-btn mr-5\" (click)=\"reload()\">Replay</button>\r\n              </ng-container>\r\n              <button class=\"primary-btn\" (click)=\"close()\">Exit Window</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- </drag-scroll> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quiz/quiz.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quiz/quiz.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQuizQuizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <div id=\"quiz\" class=\"quiz flex fcenter\" *ngIf=\"showPanel\">\n    <div class=\"instructor\" *ngIf=\"showQuizScreen != 'quiz'\">\n      <img src=\"assets/man.png\" alt=\"Man\">\n    </div>\n    <div class=\"panel\">\n      <div class=\"intro\" *ngIf=\"showQuizScreen == 'intro'\">\n        <h2>Instructions </h2>\n        <p>Welcome to this dynamic game where you can apply the knowledge you’ve gained to create a great order\n          experience for the customer. </p>\n\n        <p>In this game you’ll go through the Order Management process as a Customer Service Representative. In each\n          scenario, you will choose the ideal way to serve customers, in alignment with the service level they expect,\n          to achieve mutually winning outcomes. Each decision you make will impact the customer experience. </p>\n\n        <p>As you navigate through the challenges, <b>Think Forward</b>. You’ve seen what Cargill is working towards in\n          Order\n          Management to drive customer value and ensure seamless delivery. Although some processes and technology may\n          not be fully implemented today, consider what you have learned and how you can best apply it.</p>\n\n        <p>Read the instructions carefully before you begin. </p>\n        <div class=\"text-center\">\n          <button class=\"primary-btn\" (click)=\" this.showQuizScreen = 'rule'\">Next</button>\n        </div>\n\n      </div>\n\n      <div class=\"rule\" *ngIf=\"showQuizScreen == 'rule'\">\n        <h2>About the Game </h2>\n        <p>Your journey begins with an order request scenario and runs through the end-to-end process \n          with the customer.\n          <ul>\n            <li>Each question is worth 100 points, and you can attempt each question only once.</li>\n            <li>There are a couple hidden “Proactive Behavior” questions. These are focused on positive behaviors that\n              drive exceptional performance and ones we want to see more of in action. For correct answers here, you\n              will earn bonus badges!</li>\n            <li>You need to score at least <b>600 points</b> to win.</li>\n          </ul>\n          <p>Are you ready to get into the Game? <b>Click Start and let’s begin! </b></p>\n          <div class=\"text-center\">\n            <button class=\"primary-btn\" (click)=\"action(1)\">Start</button>\n          </div>\n\n      </div>\n\n      <div *ngIf=\"showQuizScreen == 'quiz'\">\n        <div class=\"question\" *ngIf=\"selectedQuiz.submitted != true\">\n          <div class=\"flex\">\n            <div class=\"icon\"></div>\n            <div class=\"title\">\n              <h2>{{selectedQuiz.title}}</h2>\n            </div>\n          </div>\n          <div class=\"text\">\n            {{selectedQuiz.question}}\n          </div>\n          <div class=\"text-center instr\">\n            {{selectedQuiz.instr}}\n          </div>\n          <div class=\"choices\">\n            <div *ngFor=\"let item of selectedQuiz.choices; let i = index\">\n              <div class=\"flex choice\" (click)=\"selectedQuiz.selected = i\">\n                <div class=\"single-choice\">\n                  <div class=\"dot\" [ngClass]=\"{'active' : selectedQuiz.selected == i}\"></div>\n                </div>\n                <div class=\"text\">\n                  {{item.text}}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center submit\">\n            <button class=\"primary-btn\" (click)=\"quizSubmit(selectedQuiz)\">Submit</button>\n          </div>\n        </div>\n\n\n        <div class=\"feedback\" *ngIf=\"selectedQuiz.submitted == true\">\n          <div *ngIf=\"selectedQuiz.correct == true\" [innerHTML]=\"selectedQuiz.feedback.correct\"></div>\n          <div *ngIf=\"selectedQuiz.correct == false\" [innerHTML]=\"selectedQuiz.feedback.incorrect\"></div>\n          <div class=\"text-center submit\">\n            <button class=\"primary-btn\">Next</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/game/game.component */
    "./src/app/pages/game/game.component.ts");

    var routes = [{
      path: '',
      component: _pages_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'om-in-action';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/game/game.component */
    "./src/app/pages/game/game.component.ts");
    /* harmony import */


    var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-drag-scroll */
    "./node_modules/ngx-drag-scroll/fesm2015/ngx-drag-scroll.js");
    /* harmony import */


    var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/quiz/quiz.component */
    "./src/app/pages/quiz/quiz.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"], _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__["QuizComponent"]],
      imports: [ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_6__["DragScrollModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/pages/game/data.js":
  /*!************************************!*\
    !*** ./src/app/pages/game/data.js ***!
    \************************************/

  /*! exports provided: data */

  /***/
  function srcAppPagesGameDataJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "data", function () {
      return data;
    });

    var data = [//1
    {
      type: 'single_choice',
      title: 'Customer Care Management',
      question: 'You receive an order request from the Customer asking Cargill to deliver goods. What steps should you follow before the order is entered in our systems?',
      instr: 'Choose the correct option.',
      selected: -1,
      submitted: false,
      score: 100,
      choices: [{
        text: 'Promptly ensure everything is set-up correctly in our systems so the Customer has a seamless experience.',
        correct: true
      }, {
        text: 'Read the request notes carefully. Perform updates exactly as they are outlined. Do nothing further.',
        correct: false
      }, {
        text: 'Hold the order request. Contact the Customer to double check and review all the details they submitted. Document your notes in a notebook or use post-it notes, and then save them to enter when you have all your responses from the Customer.',
        correct: false
      }, {
        text: 'Review and double check the details with the Customer. Wait to enter the details into the system until the day before the loading date.',
        correct: false
      }],
      feedback: {
        correct: "<h2 class='correct'>Great job! You are correct.</h2>\n        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>\n        <ul>\n          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time\xA0engaging with the customers.</li>\n          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>\n          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>\n          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>\n        </ul>",
        incorrect: "<h2 class='correct'>Good try, but this is incorrect. Option A is the correct answer.</h2>\n        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>\n        <ul>\n          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time\xA0engaging with the customers.</li>\n          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>\n          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>\n          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>\n        </ul>"
      }
    }, //2
    {
      type: 'sort_order',
      title: 'Order Intake',
      question: "As part of our future-forward aspirations, we strive to adopt automated system rules to support smooth order intake processes where possible. \n    Even when we implement automation on occasions, certain orders may be flagged and that\u2019s our opportunity to be involved in closer review to ensure accuracy. Today, \n    you receive a message from a customer with a one-off Special Delivery request. The Customer wants the product loaded to a specific truck type. \nWhat steps should you follow?",
      instr: 'Rearrange the options in the correct order.',
      selected: -1,
      submitted: false,
      score: 100,
      choices: [{
        label: 'A',
        text: 'Once you address the immediate request, ensure there are no other areas in the system that should be updated (i.e., Master data).',
        correct: 3
      }, {
        label: 'B',
        text: 'Check message details and validate that what is documented is correct.',
        correct: 1
      }, {
        label: 'C',
        text: 'Once the request is done, seek to understand why the Special Delivery request was needed. Was there an issue with the product? Is there an opportunity to upgrade services that would address this need in the future? Is there a chance to provide a meaningful cross/up-sell? Helping to determine the reasons behind exceptions gives us line of sight to possible longer-term solutions.  ',
        correct: 5
      }, {
        label: 'D',
        text: 'Determine what specific actions are required to fulfill Special Delivery request specifications (i.e., Special Approvals).',
        correct: 2
      }, {
        label: 'E',
        text: 'Once all updates are completed, ensure a response is sent to the Customer to keep them informed.',
        correct: 4
      }],
      feedback: {
        correct: "<h2 class='correct'>Great job! You are correct.</h2>\n        <p>It is important that we understand the details of the request, address them and keep our customer informed.</p>",
        incorrect: "<h2 class='correct'>Good try, but this is incorrect. This is the correct order.</h2>\n      \n        <ul>\n          <li>Check message details and validate that what is documented is correct.</li>\n          <li>Determine what specific actions are required to fulfill the Special Delivery specifications (i.e., Special Approvals).</li>\n          <li>Once you address the immediate request, ensure there are no other areas in the system that should be updated (i.e., Master data).</li>\n          <li>Once all updates are completed, ensure an automated response is sent to the Customer to keep them informed.</li>\n          <li>Once the request is done, seek to understand why the Special Delivery was needed. Was there an issue with the product? Is there an opportunity to upgrade services \n          that would address this need in the future? Is there a chance to provide a meaningful cross/up-sell? Helping to determine the reasons behind exceptions gives us \n          line of sight to possible longer-term solutions.</li>\n        </ul>\n          <p>It is important that we understand the details of the request, address them, and keep our customer informed.</p>"
      }
    }, //2 batch
    {
      type: 'multiple_choice',
      title: 'Bonus Question – Earn a Badge!',
      question: 'In the Order Intake process, how can you be more proactive?',
      instr: 'Choose the correct options.',
      selected: -1,
      submitted: false,
      score: 0,
      batch: true,
      choices: [{
        text: 'Make sure our systems and master data are updated with the correct customer details.',
        correct: true,
        selected: false
      }, {
        text: 'Use advanced analytics and partner with Sales team to identify meaningful cross/up sell opportunities.',
        correct: true,
        selected: false
      }, {
        text: "Inform other Customer Service team members by email that you've entered and confirmed the\xA0customer's request.",
        correct: false,
        selected: false
      }, {
        text: 'After sending an automated order acknowledgement to the customer using their preferred communication channel (i.e. email), make a phone call to them too to make sure they received the order confirmation.',
        correct: false,
        selected: false
      }],
      feedback: {
        correct: "<h2 class='correct'>Great job! You are correct and earned a bonus badge!</h2>\n        <p>We make sure the data in our systems is correct.\xA0</p>\n        <p>When we actively seek to deeply understand our customers\u2019 needs and what drives their requests, we may be able to proactively offer solutions that create an enhanced outcome for both Cargill and the customer. For example, using advanced analytics creates opportunities for Vendor Managed Inventory (VMI), allowing us to let our customer know when they should be placing their order, or leveraging the current products or promotions to create up selling or cross selling opportunities.\xA0 \n        </p>\n        <p>All of this is done while partnering with commercial team and working with the customer on the solutions that make sense for their business.</p>",
        incorrect: "<h2 class='correct'>Good try, but this is incorrect. Options A and B are correct answers.</h2>\n       \n        <ul>\n          <li>We make sure the data in our systems is correct.\xA0</li>\n          <li>When we actively seek to deeply understand our customers\u2019 needs and what drives their requests, we may be able to proactively offer solutions that create an enhanced outcome. For example, using advanced analytics creates opportunities for Vendor Managed Inventory (VMI), allowing us to let our customer know when they should be placing their order, or leveraging the current products or promotions to create up-selling or cross-selling opportunities.\xA0 All of this is done while partnering with commercial team and working with the customer on the solutions that make sense for their business.</li>\n          <li>We should work in an efficient and effective manner. Informing Customer Service team members about the customer's specific requirements is important, but the best way to do that is using the system functionality and ensuring that master data is updated in all applicable systems.\n</li>\n          <li>Confirming back to the customer is important part of the process, but confirming through the customers' preferred channel is enough, unless there are exceptions or issues that require customer's immediate attention.\n</li>\n        </ul>"
      }
    }, //3
    {
      type: 'multiple_choice',
      title: 'Order Confirmation',
      question: 'Let’s envision a well-managed customer order management experience. When the customer places their order, their order goes through the intake process with no issues because everything was configured correctly when the account was first set up. Just the way we like it!  Now it’s time for Order Confirmation. What steps do we take to contribute to this seamless experience for our customer?',
      instr: 'Choose the correct options.',
      selected: -1,
      submitted: false,
      score: 100,
      choices: [{
        text: 'We advise our customers if we are dealing with internal breakdowns (i.e., plant shutdowns).',
        correct: false
      }, {
        text: 'We perform credit checks and actively monitor release of orders on hold. We do this to ensure smooth processing.',
        correct: true
      }, {
        text: 'We confirm with CTL (the transportation schedule) to ensure there were no issues with the order request.',
        correct: true
      }, {
        text: 'We verify there’s enough volume of product, per their contract/plant inventory.',
        correct: true
      }, {
        text: 'We advise the Customer when they are on a credit hold.',
        correct: false
      }, {
        text: 'We tell the customer about pricing and costs. They should be kept informed about details like margins.',
        correct: false
      }, {
        text: 'We ensure accuracy on everything, from the start, in the system – credit check, contract, order creation. This supports seamless order process allowing for automation of tasks.',
        correct: true
      }, {
        text: 'We verify to ensure quality testing timelines are aligned to shipment schedule, where applicable.',
        correct: true
      }, {
        text: 'We select the appropriate sourcing location, based on business rules.',
        correct: true
      }, {
        text: 'Once the orders are completed, we send an order confirmation to the customer, to keep them informed.',
        correct: true
      }],
      feedback: {
        correct: "<h2 class='correct'>Great job! You are correct.</h2>\n        <p>When we work to ensure everything is set up correctly, processed accurately and we connect with key internal partners, where appropriate, to verify important details like inventory availability and transportation schedules, we support seamless customer experiences. </p>\n        <p>Keeping our customers informed is critical. As we embrace forward thinking ways, we are using more automated methods. For example, while in the past customers appreciated an email; with our new technology we believe that the system will take care of the confirmation for the customer and they can trust that their order is in process until the date the receive it. Digitalization impacts, like this one, positively influences our customers' perception.\n        </p>\n        <p>These actions reinforce our value proposition with our Customers to be their choice pick when we deliver what we say we will and meet their expectations, as mutually agreed upon in the SLA to ensure alignment. </p>\n        ",
        incorrect: "<h2 class='correct'>Good try, but this is incorrect. Options B, C, D, G, H, I, J are correct answers.</h2>\n        \n        <ul>\n          <li>B. We perform credit checks and actively monitor release of orders on hold. We do this to ensure smooth processing.</li>\n          <li>C. We confirm with CTL (the transportation schedule) to ensure there were no issues with the order request.</li>\n          <li>D. We verify there\u2019s enough volume of product, per their contract/plant inventory.</li>\n          <li>G. We ensure accuracy on everything, from the start, in the system \u2013 credit check, contract, order creation.</li>\n          <li>H. We verify to ensure quality testing timelines are aligned to shipment schedule, where applicable.</li>\n          <li>I. We select the appropriate sourcing location, based on business rules.</li>\n          <li>J. Once the orders are completed, we send an order confirmation to the customer, to keep them informed!</li>\n        </ul>\n        <p>We generally want to be careful how and what we share information with our customers, especially when it concerns our internal processes and procedures. It's important to let the customers know if there is any risk for their order, but details about Cargill's plant breakdown is a circumstance we deal with internally. Another example of information sharing we should be mindful of, is pricing details, in which case we should direct the customer to our Commercial team, who can provide the most accurate information as needed.</p>\n        <p>When we work to ensure everything is set up correctly, processed accurately and we connect with key internal partners, where appropriate, to verify important details like inventory availability and transportation schedules, we support seamless customer experiences. These actions reinforce our value proposition with our Customers to be their choice pick when we deliver what we say we will and meet their expectations, as mutually agreed upon in the SLA to ensure alignment.</p>"
      }
    }, //4
    {
      type: 'single_choice',
      title: 'Order Processing',
      question: 'Today, we were notified that one of our plants experienced unplanned down time.  You check with your customer and they desperately need the product before the original sourcing plant can provide it.  This is going to require us to act quickly.  What steps should you follow?',
      instr: 'Choose the correct option.',
      selected: -1,
      submitted: false,
      score: 100,
      choices: [{
        text: 'Immediately after receiving notification about the plant shutdown, call the customer and inform them we will not be able to deliver their order and cancel the order in the system.',
        correct: false
      }, {
        text: 'Agree with planning team that customer can accept a similar product that they have previously ordered, which we can now deliver in a timely manner.',
        correct: false
      }, {
        text: 'Agree with the planner that sourcing location can be switched to a warehouse, which is far off the plant. Change the loading location in the system and only inform the customer about it. We assume that truck will still arrive on time.',
        correct: false
      }, {
        text: "You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed.\xA0After we agree on the resolution internally, you confirm expected next steps with the customer and ensure that transportation can be scheduled and secured to meet customers\u2019 expectations.",
        correct: true
      }],
      feedback: {
        correct: "<h2 class='correct'>Great job! You are correct.</h2>\n        <p>Following these steps will support our ability to provide a seamless experience for our customer, despite the obstacles. It\u2019s vital to keep your internal partners informed as well. It is important we align internally before updating the customer.You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements.</p>\n        <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>\n        ",
        incorrect: "<h2 class='correct'>Good try, but this is incorrect. The correct flow would look like this:</h2>\n        <p>You advise your Supply Chain partner and follow the arbitrage process to make sure the sourcing change proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Inform/confirm on the outcome you intend to deliver to the customer is agreed upon internally. It is important we align internally before updating the customer. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed.</p>\n       <p>It's important to keep the customer informed on any changes. Before cancelling the order, make sure we have explored all possible alternatives to deliver and meet the customer's expectations. It\u2019s vital to keep your internal partners informed, as well. You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements. </p>\n       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.\n       </p>",
        incorrect1: "<h2 class='correct'>Good try, but this is incorrect. The correct flow would look like this:</h2>\n        <p>You advise your Supply Chain partner and follow the arbitrage process to make sure the sourcing change proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Inform/confirm on the outcome you intend to deliver to the customer is agreed upon internally. It is important we align internally before updating the customer. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed.\xA0</p>\n       <p>Product changes should always be consulted with our customers, even if we are aware of their ordering patterns. It's not only important to deliver when the customer requested us to do so, but also to deliver exactly what the customer asked for. It\u2019s vital to keep your internal partners informed, as well.You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements.</p>\n       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>\n       ",
        incorrect2: "<h2 class='correct'>Good try, but this is incorrect. Option D is the correct answer.</h2>\n        <p>Informing the customer is correct, but it is also important to validate if that change is doable with the carrier / CTL. It\u2019s vital to keep your internal partners (i.e. CTL) informed as well.You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements.</p>\n       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>\n  \n       "
      }
    }, //5
    {
      type: 'single_choice',
      title: 'Order Fulfillment',
      question: 'Unfortunately, we find out that one of our trucks en-route to a customer delivery has a flat tire. The truck carrier contacted CTL to notify them. Since this incident will result in a 2-hour delay before our customer will receive their order, CTL has notified us. What steps should you follow?',
      instr: 'Choose the correct option.',
      selected: -1,
      submitted: false,
      score: 100,
      choices: [{
        text: 'Have CTL update the customer when they know when the product will be delivered to them.',
        correct: false
      }, {
        text: "Don't do anything. Wait for the customer to call and ask where the truck is, and then provide details about the flat tire.",
        correct: false
      }, {
        text: 'Once you have confirmed with CTL when the product is expected to be delivered, take action to provide an update to the Customer immediately, so they are aware of the change.',
        correct: true
      }, {
        text: "Immediately after receiving notification about the truck's flat tire, call the customer to let them know we'll send another truck.",
        correct: false
      }],
      feedback: {
        correct: "<h2 class='correct'>Great job! You are correct.</h2>\n        <p>Always keep the customer informed when the product fulfillment will not meet the expected time so they can know when to expect it. So, once you confirm the delivery, be sure to reach out to the customer with an update on what to expect.</p>\n        <p>Also, it\u2019s important that we work across functions as one team and to be proactive. We want to come across to our customers as being One Team. CTL and CS teams should collaborate and make sure that we proactively reach out to customers in case of exceptions.</p>\n        ",
        incorrect: "<h2 class='correct'>Good try, but this is incorrect. Option C is the correct answer.</h2>\n        <p>CTL would not update the customer. CSRs are the contact point for customers in case of order or delivery issues.</p>\n        <p>The customers should always be proactively informed of any changes and provided assurance that we are working on it and solutions are in progress.</p>\n        <p>We should first discuss possible solutions with CTL / the carrier and understand what is best resolution considering customer's urgency and transportation availability. Sending another truck might be a possibility, but it must be aligned with CS's partners in other functions.\n</p>"
      }
    }, //6
    {
      type: 'multiple_choice',
      title: 'Order Support',
      question: 'A larger portion of our interaction and intervention is needed in this focus area. We can expect a variety of customer needs to come our way. It could be any one of a thousand reasons, so this area for us is probably the most variation in the Order Support bucket. Select some of the requests we can expect to handle in Order Support.',
      instr: 'Choose the correct options.',
      selected: -1,
      submitted: false,
      score: 100,
      choices: [{
        text: 'Receive and answer order / general inquiries about our products',
        correct: true
      }, {
        text: 'Process orders rejected or returned by customer',
        correct: true
      }, {
        text: 'Process order exceptions and issue escalations',
        correct: true
      }, {
        text: 'Make sure customer segmentation rules (where applicable) are properly setup in the system',
        correct: false
      }, {
        text: 'Manage Non-Standard Customer documentation requests –(e.g. issue/reissue B/L (Bill of Lading), COA (Certificate of Analysis), invoice)',
        correct: true
      }, {
        text: 'Enter customer orders in the system',
        correct: false
      }, {
        text: 'Receive invoice disputes',
        correct: true
      }, {
        text: 'Receive and process customer complaints',
        correct: true
      }, {
        text: 'New Customer – Helping to get them started',
        correct: true
      }, {
        text: 'Working with CTL to determine logistics planning',
        correct: false
      }, {
        text: 'Partner with Sales team to identify up and cross sell opportunities',
        correct: false
      }, {
        text: 'Work with CTC team to release customer orders that are on hold due to overdue invoices',
        correct: false
      }],
      feedback: {
        correct: "<h2 class='correct'>Great job! You are correct and earned a bonus badge!</h2>\n        <p>These are the type of Order Support actions we provide our expertise to contribute towards seamless Order Management experiences for our customers. </p>\n        ",
        incorrect: "<h2 class='correct'>Good try, but this is incorrect. Options A, B, C, E, G, H, I are correct answers.</h2>\n        <p>The Order Support actions we provide our expertise towards include:</p>\n        <ul>\n          <li>A. Receive and answer order / general inquiries about our products</li>\n          <li>B. Process orders rejected or returned by customer</li>\n          <li>C. Process order exceptions and issue escalations</li>\n          <li>E. Manage Non-Standard Customer documentation requests \u2013(e.g. issue/reissue B/L (Bill of Lading), COA (Certificate of Analysis), invoice)</li>\n          <li>G. Receive invoice disputes</li>\n          <li>H. Receive and process customer complaints</li>\n          <li>I. New Customer \u2013 Helping to get them started</li>\n        </ul>"
      }
    }, //6 batch
    {
      type: 'single_choice',
      title: 'Bonus Question – Earn a Badge!',
      question: 'In the Order Support process, how can you be more proactive?',
      instr: 'Choose the correct option.',
      selected: -1,
      submitted: false,
      score: 0,
      batch: true,
      choices: [{
        text: "In case of customer complaint related to quality, route the case to Quality team and do nothing until it's resolved.",
        correct: false
      }, {
        text: "When an order change comes through, ask questions to gain a deeper understanding of what\u2019s prompting the change request. You may discover, through the details gathered, there may be a better long-term solution to offer to help mitigate the need for changes in the future.",
        correct: true
      }, {
        text: 'The amount of financial disputes received from a customer has significantly increased in the past months. When a dispute notification is received from the customer forward it to CTC team.',
        correct: false
      }, {
        text: "Multiple customers reach out saying that they cannot download the documents related to their orders from Cargill's customers portal as they usually do. You manually send the documents to the customers by email and consider the case closed.",
        correct: false
      }],
      feedback: {
        choice_feedback: true,
        correct: "<h2 class='correct'>Great job! You are correct.</h2>\n        <p>Following these steps gives us an opportunity to better understand our customers' needs and strive to enhance outcomes when we discover better solutions to service them.</p>\n        ",
        choice_text: ["<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>\n        <p>Timely follow up and keeping the customer aware of progress made is important. Customers should be aware about work in progress on their request, and proactive checking with responsible functions and stakeholders is  key to  that.</p>\n        <p>The correct flow is the following:</p>\n        <p>When an order change comes through, ask questions to gain a deeper understanding of what\u2019s prompting the change request. You may discover, through the details gathered, there may be a better long-term solution to offer to help mitigate the need for changes in the future.</p>\n        <p>Following these steps gives us an opportunity to better understand our customers' needs and strive to enhance outcomes when we discover better solutions to service them.</p>", '', "<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>\n        <p>This is not all that we have to do. It's important we identify and address root cause issues, whether that be a Cargill issue or a specific Customer one. Thereby really looking to drive down the numbers through our reciprocal communication and the data available, as key trends could be identified via both CBS (CTC) and CSR teams, respectively.</p>\n\n        <p>The correct flow is the following:</p>\n        <p>When an order change comes through, ask questions to gain a deeper understanding of what\u2019s prompting the change request. You may discover, through the details gathered, there may be a better long-term solution to offer to help mitigate the need for changes in the future.</p>\n        \n        <p>Following these steps gives us an opportunity to better understand our customers' needs and strive to enhance outcomes when we discover better solutions to service them.</p>        \n        ", "\n        <h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>\n        <p>Sending the documents to the customers is correct, but you should also proactively reach out to higher level staff or technology specialist, making sure they are aware of the issue and that it's resolved as soon as possible.</p>\n\n        <p>The correct flow is the following:</p>\n        <p>When an order change comes through, ask questions to gain a deeper understanding of what\u2019s prompting the change request. You may discover, through the details gathered, there may be a better long-term solution to offer to help mitigate the need for changes in the future.</p>\n        \n        <p>Following these steps gives us an opportunity to better understand our customers' needs and strive to enhance outcomes when we discover better solutions to service them.</p>\n        "]
      }
    }, // 10 miles 
    {
      type: 'single_choice',
      title: '10 Miles to Customer',
      question: 'Your team received initial results from the latest Voice of the Customer (VoC) survey from the VoC COE Team. What should you do next?',
      instr: 'Choose the correct option.',
      selected: -1,
      submitted: false,
      score: 200,
      choices: [{
        text: 'Archive the received results. Nothing further.',
        correct: false
      }, {
        text: "Forward the results to all our customers.",
        correct: false
      }, {
        text: 'Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) to identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.',
        correct: true
      }, {
        text: "Ask the VOC COE team to work on and resolve the issues flagged by our customers.",
        correct: false
      }],
      feedback: {
        choice_feedback: true,
        correct: "<h2 class='correct'>Great job! You are correct.</h2>\n        <p>Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.</p>\n        ",
        choice_text: ["<h2 class='correct'>Good try, but this is incorrect. Option B is the correct answer.</h2>\n        <p>The purpose of all metrics measurement (including customer feedback) is to review and analyze the results, conduct root cause analysis for underperformance and take corrective actions.</p>\n        <p>The correct answer is:</p>\n        <p>Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.</p>", "<h2 class='correct'>Good try, but this is incorrect. Option B is the correct answer.</h2>\n        <p>We might want to reach out to some select customers after the survey is complete, but before that we need to conduct root cause analysis and identify improvement actions in our internal processes. Forwarding all results to all our customers might jeopardize our relationship with them, as the feedback shared is sensitive.</p>\n\n        <p>The correct answer is:</p>\n        <p>Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.</p>\n        ", '', "<h2 class='correct'>Good try, but this is incorrect. Option B is the correct answer.</h2>\n        <p>The VOC COE Team partners with the businesses to understand survey requirements, collect customer feedback, and analyze the data. However, the results and actions from the survey are owned by the business.</p>\n\n        <p>The correct answer is:</p>\n        <p>Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.</p>\n        "]
      }
    }, {
      type: 'single_choice',
      title: 'Customer Focus',
      question: "\n    <p>Every touch point with a customer is an opportunity to learn and better equip the business with information by:</p>\n    <ul><li>Asking meaningful questions. </li>\n    <li>Validating key customer details, where applicable </li>\n    <li>Documenting notes in Salesforce to make the information available to others across Cargill. </li>\n    </ul>\n    <p>Is this statement True or False?</p>\n    ",
      instr: 'Choose the correct option.',
      selected: -1,
      submitted: false,
      score: 200,
      choices: [{
        text: 'True',
        correct: true
      }, {
        text: "False",
        correct: false
      }],
      feedback: {
        correct: "<h2 class='correct'>Great job! You are correct.</h2>\n        <p>Every opportunity taken to learn more about the customers' needs allows us to better serve them in the agreed upon manner and can provide potential additional opportunities for Cargill to fill more of their business needs as well.\xA0</p>\n        <p>Getting to know our customers\u2019 needs better will empower us to be more effective, efficient, agile and provide value for both Cargill and the customers.</p>\n        ",
        incorrect: "<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>\n        <p>It is true that every opportunity taken to learn more about the customers' needs allows us to better serve them in the agreed upon manner and can provide potential additional opportunities for Cargill to fill more of their business needs as well.\xA0</p>\n        <p>Getting to know our customers\u2019 needs better will empower us to be more effective, efficient, agile and provide value for both Cargill and the customers.</p>\n        \n</p>"
      }
    }];
    /***/
  },

  /***/
  "./src/app/pages/game/game.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/game/game.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGameGameComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".top-panel {\n  color: #FFF;\n  padding: 30px;\n  position: relative;\n  z-index: 2;\n}\n.top-panel .title {\n  text-align: center;\n  font-size: 22px;\n}\n.top-panel .score {\n  text-align: center;\n  font-size: 34px;\n  margin: 5px;\n}\n.top-panel .progress {\n  max-width: 500px;\n  background-color: #FFF;\n  border-radius: 5px;\n  padding: 2px;\n  margin: 5px auto;\n}\n.top-panel .progress .thumb {\n  width: 50%;\n  height: 3px;\n  background-color: #279989;\n  border-radius: 5px;\n  transition: width 0.5s ease;\n}\n.game_layout,\n.screen_10,\n.screen_10_1 {\n  left: 0;\n  top: 0;\n  z-index: -1;\n}\n.screen_10,\n.screen_10_1 {\n  opacity: 0;\n}\n.game {\n  transform-origin: top left;\n  width: 1920px;\n  height: 1080px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  touch-action: auto;\n}\n.game .abs {\n  position: absolute;\n}\n.game .road_path {\n  left: -76px;\n  top: 673px;\n}\n.game .road {\n  left: -76px;\n  top: 323px;\n}\n.game .building1 {\n  left: 284px;\n  top: 549px;\n}\n.game .tree1 {\n  left: 397px;\n  top: 551px;\n}\n.game .selection1 {\n  left: 111px;\n  top: 425px;\n}\n.game .Truck1 {\n  left: 128px;\n  top: 792px;\n}\n.game .Truck2 {\n  left: 409px;\n  top: 630px;\n  opacity: 0;\n}\n.game .Truck3 {\n  left: 0px;\n  top: 0px;\n  opacity: 0;\n}\ndrag-scroll {\n  touch-action: pan-x pan-y;\n}\ndrag-scroll .drag-scroll-content {\n  overflow: hidden !important;\n}\n.quiz {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  z-index: 3;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  -webkit-animation: zoomIn 0.5s ease;\n          animation: zoomIn 0.5s ease;\n}\n.quiz .panel {\n  margin: 20px;\n  padding: 30px;\n  min-width: 800px;\n  min-height: 400px;\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 0 0 5px #33333347;\n}\n.text-center {\n  text-align: center;\n}\n.primary-text {\n  color: #279989;\n  font-weight: bold;\n}\n.primary-btn {\n  background-color: #005F86;\n  color: #fff;\n  padding: 10px;\n  min-width: 200px;\n  text-align: center;\n  border: 0;\n  border-radius: 30px;\n  font-size: 18px;\n  cursor: pointer;\n}\n.primary-btn.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.question {\n  font-size: 22px;\n  line-height: 32px;\n}\n.question .submit {\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n.question .instr {\n  font-style: italic;\n  color: #005F86;\n  margin: 20px 0;\n}\n.question .choice {\n  align-items: flex-start;\n  cursor: pointer;\n}\n.question .single-choice,\n.question .multi-choice {\n  background-color: #FFF;\n  border-radius: 50%;\n  margin: 7px 20px;\n  border: 1px solid #333;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.question .single-choice .dot,\n.question .multi-choice .dot {\n  width: 7px;\n  height: 7px;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: 5px;\n}\n.question .single-choice .dot.active,\n.question .multi-choice .dot.active {\n  background-color: #005F86;\n}\n.question .multi-choice {\n  border-radius: 0;\n}\n.question .multi-choice .dot {\n  border-radius: 0;\n}\n.sorting .label {\n  background-color: #005F86;\n  color: #fff;\n  border-radius: 50%;\n  padding: 5px 15px;\n  margin: 10px;\n  margin-top: 0px;\n  height: 30px;\n  font-size: 16px;\n}\n#earn_batch1 {\n  left: 845px;\n  top: 538px;\n  opacity: 0;\n}\n#earn_batch2 {\n  left: 1645px;\n  top: 300px;\n  opacity: 0;\n}\n.result_title {\n  background-color: #005F86;\n  margin: -30px -30px 0 -30px;\n  padding: 10px;\n  text-align: center;\n  color: #fff;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0px 0px 24px #0000003D;\n}\n.bubble {\n  background-image: url('bubble.png');\n  background-repeat: no-repeat;\n  position: relative;\n}\n.bubble .text {\n  position: absolute;\n  left: 136px;\n  top: 13px;\n  margin: 10px;\n}\n.opacity0 {\n  opacity: 0;\n}\n.batch {\n  margin: 10px;\n}\n#batch {\n  opacity: 0;\n}\n#questNoAdd {\n  color: #fff;\n  font-size: 18px;\n  opacity: 0;\n}\n@-webkit-keyframes zoomIn {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes zoomIn {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.mr-5 {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9GOlxcUHJvamVjdFxcR1BcXENhcmdpbGxcXE9NIEluIEFjdGlvblxcb20taW4tYWN0aW9uL3NyY1xcYXBwXFxwYWdlc1xcZ2FtZVxcZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRko7QURJSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRk47QURPQTs7O0VBR0UsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDSkY7QURRQTs7RUFFRSxVQUFBO0FDTEY7QURRQTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUNQRjtBRFNFO0VBQ0Usa0JBQUE7QUNQSjtBRFdFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNUSjtBRFlFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNWSjtBRGFFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNYSjtBRGVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNiSjtBRGlCRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDZko7QURtQkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ2pCSjtBRG9CRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ2xCSjtBRHFCRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ25CSjtBRHVCQTtFQUNFLHlCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsMkJBQUE7QUNwQko7QUR3QkE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUN0QkY7QUR1QkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNyQko7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHdCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ3JCRjtBRHVCQTtFQU9FLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUMxQkY7QURhRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ1hKO0FEMEJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDdkJGO0FEeUJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ3ZCSjtBRDBCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUN4Qko7QUQyQkU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUN6Qko7QUQ4QkU7O0VBSUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQzlCSjtBRGdDSTs7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQU1BLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDbENOO0FENEJNOztFQUNFLHlCQUFBO0FDekJSO0FEa0NFO0VBQ0UsZ0JBQUE7QUNoQ0o7QURrQ0k7RUFDRSxnQkFBQTtBQ2hDTjtBRHNDRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDbkNKO0FEdUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDcENGO0FEd0NBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDckNGO0FEd0NBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDckNGO0FEd0NBO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDckNGO0FEdUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNyQ0o7QUR5Q0E7RUFDRSxVQUFBO0FDdENGO0FEeUNBO0VBQ0UsWUFBQTtBQ3RDRjtBRDBDQTtFQUNFLFVBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUVBLFVBQUE7QUN4Q0Y7QUQ2Q0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzFDRjtFRDRDQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzFDRjtBQUNGO0FEa0NBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUMxQ0Y7RUQ0Q0E7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RUMxQ0Y7QUFDRjtBRDZDQTtFQUNFLGtCQUFBO0FDM0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1wYW5lbCB7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC5zY29yZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcyB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG5cclxuICAgIC50aHVtYiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5OTg5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5nYW1lX2xheW91dCxcclxuLnNjcmVlbl8xMCxcclxuLnNjcmVlbl8xMF8xIHtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuXHJcbn1cclxuXHJcbi5zY3JlZW5fMTAsXHJcbi5zY3JlZW5fMTBfMSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmdhbWUge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JnLnBuZycpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuXHJcbiAgdG91Y2gtYWN0aW9uOiBhdXRvO1xyXG5cclxuICAuYWJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5yb2FkX3BhdGgge1xyXG4gICAgbGVmdDogLTc2cHg7XHJcbiAgICB0b3A6IDY3M3B4O1xyXG4gIH1cclxuXHJcbiAgLnJvYWQge1xyXG4gICAgbGVmdDogLTc2cHg7XHJcbiAgICB0b3A6IDMyM3B4O1xyXG4gIH1cclxuXHJcbiAgLmJ1aWxkaW5nMSB7XHJcbiAgICBsZWZ0OiAyODRweDtcclxuICAgIHRvcDogNTQ5cHg7XHJcbiAgICAvL3RyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG5cclxuICAudHJlZTEge1xyXG4gICAgbGVmdDogMzk3cHg7XHJcbiAgICB0b3A6IDU1MXB4O1xyXG4gICAgLy90cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGlvbjEge1xyXG4gICAgbGVmdDogMTExcHg7XHJcbiAgICB0b3A6IDQyNXB4O1xyXG4gICAgLy90cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuXHJcbiAgLlRydWNrMSB7XHJcbiAgICBsZWZ0OiAxMjhweDtcclxuICAgIHRvcDogNzkycHg7XHJcbiAgfVxyXG5cclxuICAuVHJ1Y2syIHtcclxuICAgIGxlZnQ6IDQwOXB4O1xyXG4gICAgdG9wOiA2MzBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAuVHJ1Y2szIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbmRyYWctc2Nyb2xsIHtcclxuICB0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15O1xyXG5cclxuICAuZHJhZy1zY3JvbGwtY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucXVpeiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9oZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcclxuICBoZWlnaHQ6IDEwMHZoIDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAzO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIGFuaW1hdGlvbjogem9vbUluIDAuNXMgZWFzZTtcclxuICAucGFuZWwge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMzMzMzMzNDc7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucHJpbWFyeS10ZXh0e1xyXG4gIGNvbG9yOiAjMjc5OTg5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wcmltYXJ5LWJ0biB7XHJcblxyXG4gICYuZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVGODY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLnF1ZXN0aW9uIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcblxyXG4gIC5zdWJtaXQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuaW5zdHIge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6ICMwMDVGODY7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxuICB9XHJcblxyXG4gIC5jaG9pY2Uge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5zaW5nbGUtY2hvaWNlLFxyXG4gIC5tdWx0aS1jaG9pY2Uge1xyXG4gICAgLy93aWR0aDogMTVweDtcclxuICAgIC8vaGVpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogN3B4IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmRvdCB7XHJcbiAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgIGhlaWdodDogN3B4O1xyXG5cclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVGODY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubXVsdGktY2hvaWNlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4gICAgLmRvdCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc29ydGluZyB7XHJcbiAgLmxhYmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDVGODY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuI2Vhcm5fYmF0Y2gxIHtcclxuICBsZWZ0OiA4NDVweDtcclxuICB0b3A6IDUzOHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcblxyXG4jZWFybl9iYXRjaDIge1xyXG4gIGxlZnQ6IDE2NDVweDtcclxuICB0b3A6IDMwMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5yZXN1bHRfdGl0bGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVGODY7XHJcbiAgbWFyZ2luOiAtMzBweCAtMzBweCAwIC0zMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNHB4ICMwMDAwMDAzRDtcclxufVxyXG5cclxuLmJ1YmJsZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYnViYmxlLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAudGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMzZweDtcclxuICAgIHRvcDogMTNweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5vcGFjaXR5MCB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmJhdGNoIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcblxyXG4jYmF0Y2gge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbiNxdWVzdE5vQWRke1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyB6b29tSW4ge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5tci01e1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufSIsIi50b3AtcGFuZWwge1xuICBjb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuLnRvcC1wYW5lbCAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi50b3AtcGFuZWwgLnNjb3JlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM0cHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLnRvcC1wYW5lbCAucHJvZ3Jlc3Mge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luOiA1cHggYXV0bztcbn1cbi50b3AtcGFuZWwgLnByb2dyZXNzIC50aHVtYiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5OTg5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcbn1cblxuLmdhbWVfbGF5b3V0LFxuLnNjcmVlbl8xMCxcbi5zY3JlZW5fMTBfMSB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zY3JlZW5fMTAsXG4uc2NyZWVuXzEwXzEge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uZ2FtZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICB3aWR0aDogMTkyMHB4O1xuICBoZWlnaHQ6IDEwODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICB0b3VjaC1hY3Rpb246IGF1dG87XG59XG4uZ2FtZSAuYWJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmdhbWUgLnJvYWRfcGF0aCB7XG4gIGxlZnQ6IC03NnB4O1xuICB0b3A6IDY3M3B4O1xufVxuLmdhbWUgLnJvYWQge1xuICBsZWZ0OiAtNzZweDtcbiAgdG9wOiAzMjNweDtcbn1cbi5nYW1lIC5idWlsZGluZzEge1xuICBsZWZ0OiAyODRweDtcbiAgdG9wOiA1NDlweDtcbn1cbi5nYW1lIC50cmVlMSB7XG4gIGxlZnQ6IDM5N3B4O1xuICB0b3A6IDU1MXB4O1xufVxuLmdhbWUgLnNlbGVjdGlvbjEge1xuICBsZWZ0OiAxMTFweDtcbiAgdG9wOiA0MjVweDtcbn1cbi5nYW1lIC5UcnVjazEge1xuICBsZWZ0OiAxMjhweDtcbiAgdG9wOiA3OTJweDtcbn1cbi5nYW1lIC5UcnVjazIge1xuICBsZWZ0OiA0MDlweDtcbiAgdG9wOiA2MzBweDtcbiAgb3BhY2l0eTogMDtcbn1cbi5nYW1lIC5UcnVjazMge1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5kcmFnLXNjcm9sbCB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XG59XG5kcmFnLXNjcm9sbCAuZHJhZy1zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnF1aXoge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIGFuaW1hdGlvbjogem9vbUluIDAuNXMgZWFzZTtcbn1cbi5xdWl6IC5wYW5lbCB7XG4gIG1hcmdpbjogMjBweDtcbiAgcGFkZGluZzogMzBweDtcbiAgbWluLXdpZHRoOiA4MDBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzMzMzMzMzQ3O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmltYXJ5LXRleHQge1xuICBjb2xvcjogIzI3OTk4OTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcmltYXJ5LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVGODY7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJpbWFyeS1idG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5xdWVzdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG4ucXVlc3Rpb24gLnN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ucXVlc3Rpb24gLmluc3RyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzAwNUY4NjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4ucXVlc3Rpb24gLmNob2ljZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucXVlc3Rpb24gLnNpbmdsZS1jaG9pY2UsXG4ucXVlc3Rpb24gLm11bHRpLWNob2ljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiA3cHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnF1ZXN0aW9uIC5zaW5nbGUtY2hvaWNlIC5kb3QsXG4ucXVlc3Rpb24gLm11bHRpLWNob2ljZSAuZG90IHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiA1cHg7XG59XG4ucXVlc3Rpb24gLnNpbmdsZS1jaG9pY2UgLmRvdC5hY3RpdmUsXG4ucXVlc3Rpb24gLm11bHRpLWNob2ljZSAuZG90LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVGODY7XG59XG4ucXVlc3Rpb24gLm11bHRpLWNob2ljZSB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ucXVlc3Rpb24gLm11bHRpLWNob2ljZSAuZG90IHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnNvcnRpbmcgLmxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUY4NjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2Vhcm5fYmF0Y2gxIHtcbiAgbGVmdDogODQ1cHg7XG4gIHRvcDogNTM4cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNlYXJuX2JhdGNoMiB7XG4gIGxlZnQ6IDE2NDVweDtcbiAgdG9wOiAzMDBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnJlc3VsdF90aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVGODY7XG4gIG1hcmdpbjogLTMwcHggLTMwcHggMCAtMzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNHB4ICMwMDAwMDAzRDtcbn1cblxuLmJ1YmJsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9idWJibGUucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYnViYmxlIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMzZweDtcbiAgdG9wOiAxM3B4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5vcGFjaXR5MCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5iYXRjaCB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuI2JhdGNoIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuI3F1ZXN0Tm9BZGQge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4ubXItNSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/game/game.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/game/game.component.ts ***!
    \**********************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppPagesGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! gsap/all */
    "./node_modules/gsap/all.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./data */
    "./src/app/pages/game/data.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent(cdRef) {
        _classCallCheck(this, GameComponent);

        this.cdRef = cdRef;
        this.showPanel = true; // showPanel = false;

        this.showQuizScreen = 'intro'; // showQuizScreen = '';

        this.score = 0;
        this.speed = 5;
        this.step = 1;
        this.totalQuestion = 6;
        this.questions = _data__WEBPACK_IMPORTED_MODULE_3__["data"];
        this.quizNo = 0;
        this.selectedQuiz = this.questions[this.quizNo];
        this.batchesArr = [];
        this.batches = 0;
        this.result = {
          title: '',
          bubble: ''
        };
        this.alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']; //gsap.registerPlugin(MotionPathPlugin);
      }

      _createClass(GameComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.tl = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
          this.onResize(null); //this.getQuiz(this.quizNo + 1);
          //this.animateBatch();
          //this.animateAddQuestion();
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          var game = document.getElementById('game');
          var width = document.documentElement.clientWidth;
          var height = document.documentElement.clientHeight;
          var scaleW = 1;
          var scaleH = 1;

          if (width < 1920) {
            scaleW = width / 1920;
          }

          if (height < 937) {
            scaleH = height / 937;
          } //console.log(scaleW, scaleH); 


          var scale = Math.min(scaleW, scaleH);
          game.style.transform = 'scale(' + scale + ')';
        }
      }, {
        key: "action",
        value: function action(step) {
          var _this = this;

          console.log('action ' + step);
          this.step = step;
          this.showPanel = false;

          if (this.tl) {
            this.tl.clear();
          }

          this.tl = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();

          switch (step) {
            case 1:
              this.showPanel = false;
              this.tl.fromTo('#truck1', {
                x: -161,
                y: 100
              }, {
                x: 229,
                y: -140,
                duration: this.speed,
                onComplete: function onComplete() {
                  _this.getQuiz(1);
                }
              });
              break;

            case 2:
              this.showPanel = false;
              this.tl.set('#truck1', {
                opacity: 0
              });
              this.tl.set('#truck2', {
                opacity: 1,
                duration: 0.1
              });
              this.tl.fromTo('#truck2', {
                x: 0,
                y: 0
              }, {
                x: 160,
                y: 92,
                duration: this.speed / 1.5,
                delay: 2,
                onComplete: function onComplete() {
                  _this.getQuiz(2); //this.action(3);

                }
              });
              break;
            //batch

            case 3:
              this.tl.to('#truck2', {
                x: 240,
                y: 140,
                duration: this.speed / 2,
                ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__["Linear"],
                onComplete: function onComplete() {
                  // this.getQuiz(2);
                  _this.tl.set('#truck2', {
                    opacity: 0
                  });

                  _this.tl.set('#truck1', {
                    opacity: 1
                  });

                  _this.tl.fromTo('#truck1', {
                    x: 550,
                    y: -15
                  }, {
                    x: 723,
                    y: -111,
                    duration: _this.speed / 2,
                    onComplete: function onComplete() {
                      _this.animateAddQuestion();

                      _this.tl.to('#earn_batch1', {
                        opacity: 1,
                        duration: 0.5,
                        onComplete: function onComplete() {
                          setTimeout(function () {
                            _this.getQuiz(3);
                          }, 1000);
                        }
                      }); // this.action(4);

                    }
                  });
                }
              });
              break;

            case 4:
              this.tl.set('#truck2', {
                opacity: 1
              });
              this.tl.set('#truck1', {
                opacity: 0
              });
              this.tl.fromTo('#truck2', {
                x: 500,
                y: 40
              }, {
                x: 700,
                y: 165,
                duration: this.speed / 2,
                ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__["Linear"],
                onComplete: function onComplete() {
                  _this.tl.set('#truck2', {
                    opacity: 0
                  });

                  _this.tl.set('#truck1', {
                    opacity: 1
                  });

                  _this.tl.fromTo('#truck1', {
                    x: 1025,
                    y: 20
                  }, {
                    x: 1150,
                    y: -40,
                    duration: _this.speed / 2,
                    onComplete: function onComplete() {
                      _this.getQuiz(4); //this.action(5);

                    }
                  });
                }
              });
              break;

            case 5:
              this.tl.fromTo('#truck1', {
                x: 1150,
                y: -40
              }, {
                x: 1260,
                y: -110,
                duration: this.speed / 2,
                ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__["Linear"],
                onComplete: function onComplete() {
                  _this.tl.set('#truck1', {
                    opacity: 0
                  });

                  _this.tl.set('#truck3', {
                    opacity: 1
                  });

                  _this.tl.fromTo('#truck3', {
                    x: 1394,
                    y: 640
                  }, {
                    x: 1283,
                    y: 571,
                    duration: _this.speed / 2,
                    onComplete: function onComplete() {
                      //this.action(6);
                      _this.getQuiz(5);
                    }
                  });
                }
              });
              break;

            case 6:
              this.tl.fromTo('#truck3', {
                x: 1283,
                y: 571
              }, {
                x: 1125,
                y: 471,
                duration: this.speed / 2,
                onComplete: function onComplete() {
                  //this.getQuiz(1);
                  //console.log('came here');
                  _this.tl.set('#truck1', {
                    opacity: 1
                  });

                  _this.tl.set('#truck3', {
                    opacity: 0
                  });

                  _this.tl.fromTo('#truck1', {
                    x: 1013,
                    y: -365
                  }, {
                    x: 1043,
                    y: -380,
                    duration: _this.speed / 2,
                    onComplete: function onComplete() {
                      _this.getQuiz(6); //this.action(6);

                    }
                  });
                }
              });
              break;

            case 7:
              this.tl.fromTo('#truck1', {
                x: 1043,
                y: -380
              }, {
                x: 1209,
                y: -475,
                duration: this.speed / 2,
                onComplete: function onComplete() {
                  _this.tl.set('#truck1', {
                    opacity: 0
                  });

                  _this.tl.set('#truck2', {
                    opacity: 1
                  });

                  _this.tl.fromTo('#truck2', {
                    x: 1000,
                    y: -300
                  }, {
                    x: 1000,
                    y: -300,
                    duration: _this.speed / 2,
                    onComplete: function onComplete() {
                      _this.getQuiz(7); //this.action(7);

                    }
                  });
                }
              });
              break;
            //batch

            case 8:
              this.tl.set('#truck1', {
                opacity: 0
              });
              this.tl.set('#truck2', {
                opacity: 1
              });
              this.tl.to('#truck2', {
                x: 1184,
                y: -200,
                duration: this.speed,
                onComplete: function onComplete() {
                  _this.animateAddQuestion2();

                  _this.tl.to('#earn_batch2', {
                    opacity: 1,
                    duration: 0.5,
                    onComplete: function onComplete() {
                      setTimeout(function () {
                        _this.getQuiz(8);
                      }, 1000);
                    }
                  }); // this.getQuiz(7)
                  //this.action(8);

                }
              });
              break;

            case 9:
              this.tl.set('#truck1', {
                opacity: 0
              });
              this.tl.set('#truck2', {
                opacity: 1
              });
              this.tl.to('#truck2', {
                x: 1484,
                y: -38,
                duration: this.speed,
                onComplete: function onComplete() {
                  // this.getQuiz(8);
                  //this.action(8);
                  _this.tl.set('#truck2', {
                    opacity: 0
                  });

                  _this.tl.set('#earn_batch1', {
                    opacity: 0
                  });

                  _this.tl.set('#earn_batch2', {
                    opacity: 0
                  });

                  _this.tl.set('#truck2', {
                    opacity: 0
                  });

                  _this.tl.to('.game_layout', {
                    opacity: 0
                  });

                  _this.tl.to('.screen_10', {
                    opacity: 1,
                    onComplete: function onComplete() {
                      setTimeout(function () {
                        _this.showPanel = true;
                        _this.showQuizScreen = 'miles';
                        _this.totalQuestion = 10;

                        _this.tl.to('#miles', {
                          opacity: 1,
                          duration: 1
                        });
                      }, 1000);
                    }
                  });
                }
              });
              break;

            case 10:
              this.tl.to('.screen_10_1', {
                opacity: 1,
                onComplete: function onComplete() {
                  setTimeout(function () {
                    _this.showPanel = true;

                    _this.getQuiz(10);
                  }, 1000);
                }
              });
              break;

            case 11:
              this.showPanel = true;
              this.showQuizScreen = 'result'; // this.score = 800;

              if (this.score >= 800) {
                this.result.title = 'Congratulations! The product has been successfully delivered.';
                this.result.bubble = 'Cargill came through for me on this order. These are the results that show me you can deliver on your promises and build my confidence that I will get excellent service from Cargill. Thank you!';
              } else if (this.score >= 400) {
                this.result.title = 'Well done!';
                this.result.bubble = 'Recommend to replay the game. ';
              } else {
                this.result.title = 'Good try, but you missed it!';
                this.result.bubble = "You can try the game again or revisit the learning in the \u2018Order Management Process Overview\u2019 pathway.";
              }

              break;

            default:
              break;
          }
        }
      }, {
        key: "getQuiz",
        value: function getQuiz(step) {
          console.log('getQuiz = ' + step);
          this.showPanel = true;
          this.showQuizScreen = 'quiz';
          this.selectedQuiz = this.questions[step - 1];
          this.selectedQuiz.choosen = false;
          this.selectedQuiz.submitted = false;
          this.quizNo = step;

          if (this.selectedQuiz.type == 'multiple_choice') {
            this.selectedQuiz.choices.map(function (s) {
              s.selected = false;
            });
          }
        }
      }, {
        key: "quizSubmit",
        value: function quizSubmit(quiz) {
          if (quiz.type == 'single_choice') {
            if (quiz.choices[quiz.selected].correct == true) {
              this.setScore(quiz.score);
              quiz.correct = true;

              if (quiz.batch) {
                this.animateBatch(1750, 300);
              } //quiz.feedbackText = quiz.feedback.correct;


              console.log(this.score);
            } else {
              //this.score = 0;
              if (quiz.feedback.choice_feedback) {
                quiz.feedback.incorrect = quiz.feedback.choice_text[quiz.selected];
              } else {//quiz.feedbackText = quiz.feedback.incorrect;
              }

              quiz.correct = false;
            } //console.log(quiz);

          } else if (quiz.type == 'sort_order') {
            var wrong = false;

            for (var i = 0; i < quiz.choices.length; i++) {
              var choice = quiz.choices[i];

              if (choice.correct != i + 1) {
                wrong = true;
              }
            }

            if (wrong == false) {
              this.setScore(quiz.score);
              quiz.correct = true;
              quiz.feedbackText = quiz.feedback.correct;
            } else {
              quiz.correct = false;
              quiz.feedbackText = quiz.feedback.incorrect;
            }
          } else if (quiz.type == 'multiple_choice') {
            var _wrong = false;

            for (var _i = 0; _i < quiz.choices.length; _i++) {
              var _choice = quiz.choices[_i];

              if (_choice.correct != _choice.selected && _choice.selected != undefined) {
                console.log('multiple-choice ', _i, _choice.correct, _choice.selected);
                _wrong = true;
              }
            }

            if (_wrong == false) {
              this.setScore(quiz.score);
              quiz.correct = true;
              quiz.feedbackText = quiz.feedback.correct;
              console.log('batch' + quiz.batch);

              if (quiz.batch) {
                this.animateBatch(900, 500);
              }
            } else {
              quiz.correct = false;
              quiz.feedbackText = quiz.feedback.incorrect;
            }
          }

          quiz.submitted = true;
        }
      }, {
        key: "animateBatch",
        value: function animateBatch(xpos, ypos) {
          var _this2 = this;

          var tl1 = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
          this.showPanel = false;
          tl1.set('#batch', {
            x: xpos,
            y: ypos
          });
          tl1.fromTo('#batch', {
            opacity: 0
          }, {
            opacity: 1,
            duration: 0.5
          });
          tl1.to('#batch', {
            x: 1780,
            y: 200,
            delay: 0.5,
            duration: 0.5
          });
          tl1.to('#batch', {
            opacity: 0,
            duration: 0.5,
            onComplete: function onComplete() {
              _this2.batches += 1;
              _this2.showPanel = true;

              _this2.cdRef.detectChanges();
            }
          });
        }
      }, {
        key: "animateAddQuestion",
        value: function animateAddQuestion() {
          var _this3 = this;

          var tl2 = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
          tl2.set('#questNoAdd', {
            x: 930,
            y: 550
          });
          tl2.fromTo('#questNoAdd', {
            opacity: 0
          }, {
            opacity: 1,
            duration: 0.5
          });
          tl2.to('#questNoAdd', {
            x: 970,
            y: 90,
            delay: 0.5,
            duration: 0.5,
            onComplete: function onComplete() {
              _this3.totalQuestion += 1;

              _this3.cdRef.detectChanges();
            }
          });
          tl2.to('#questNoAdd', {
            opacity: 0,
            duration: 0.5
          });
        }
      }, {
        key: "animateAddQuestion2",
        value: function animateAddQuestion2() {
          var _this4 = this;

          var tl2 = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
          tl2.set('#questNoAdd', {
            x: 1730,
            y: 320
          });
          tl2.fromTo('#questNoAdd', {
            opacity: 0
          }, {
            opacity: 1,
            duration: 0.5
          });
          tl2.to('#questNoAdd', {
            x: 970,
            y: 90,
            delay: 0.5,
            duration: 0.5,
            onComplete: function onComplete() {
              _this4.totalQuestion += 1;

              _this4.cdRef.detectChanges();
            }
          });
          tl2.to('#questNoAdd', {
            opacity: 0,
            duration: 0.5
          });
        }
      }, {
        key: "setScore",
        value: function setScore(s) {
          this.score += s;
          /*gsap('#score_anim', {
            onComplete: () => {
              this.score += s;
            }
          });*/
        }
      }, {
        key: "drop",
        value: function drop(event) {
          console.log(event.previousIndex, event.currentIndex);
          this.selectedQuiz.choosen = true;
          Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["moveItemInArray"])(this.selectedQuiz.choices, event.previousIndex, event.currentIndex);
        }
      }, {
        key: "counter",
        value: function counter(i) {
          return new Array(i);
        }
      }, {
        key: "reload",
        value: function reload() {
          window.location.reload();
        }
      }, {
        key: "close",
        value: function close() {
          window.close();
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], GameComponent.prototype, "onResize", null);
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-game',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./game.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./game.component.scss */
      "./src/app/pages/game/game.component.scss"))["default"]]
    })], GameComponent);
    /***/
  },

  /***/
  "./src/app/pages/quiz/quiz.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/quiz/quiz.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQuizQuizComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/quiz/quiz.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/quiz/quiz.component.ts ***!
    \**********************************************/

  /*! exports provided: QuizComponent */

  /***/
  function srcAppPagesQuizQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizComponent", function () {
      return QuizComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QuizComponent = /*#__PURE__*/function () {
      function QuizComponent() {
        _classCallCheck(this, QuizComponent);
      }

      _createClass(QuizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QuizComponent;
    }();

    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-quiz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./quiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quiz/quiz.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./quiz.component.scss */
      "./src/app/pages/quiz/quiz.component.scss"))["default"]]
    })], QuizComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! F:\Project\GP\Cargill\OM In Action\om-in-action\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map