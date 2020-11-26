(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <drag-scroll style=\"height: 100vh\">  -->\r\n<div class=\"flex top-panel\">\r\n  <div class=\"flex1\">\r\n\r\n    <div class=\"title\">Order Management In Action</div>\r\n    <div class=\"progress\">\r\n      <div class=\"thumb\" [style.width]=\" ((quizNo / totalQuestion) * 100) + '%'\"></div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      Question {{quizNo}} / {{totalQuestion}}\r\n    </div>\r\n  </div>\r\n  <div class=\"score-panel\">\r\n    <div class=\"title\">Your Score</div>\r\n    <div class=\"score\">{{score}}</div>\r\n    <div class=\"flex fcenter\">\r\n      <div class=\"batch\">\r\n        <img *ngIf=\"batches > 0\" src=\"assets/batches.png\" alt=\"Batches\">\r\n        <img *ngIf=\"batches > 1\" src=\"assets/batches.png\" alt=\"Batches\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"game\" class=\"game\" #game>\r\n\r\n  <div class=\"game_layout abs\"><img src=\"assets/game.png\" alt=\"game\"></div>\r\n\r\n  <div class=\"screen_10 abs\"><img src=\"assets/10_screen.png\" alt=\"game\"></div>\r\n\r\n  <div class=\"screen_10_1 abs\"><img src=\"assets/10_screen_1.png\" alt=\"game\"></div>\r\n\r\n  <div id=\"batch\" class=\"abs\"><img src=\"assets/batches.png\" alt=\"batch\"></div>\r\n  <div id=\"questNoAdd\" class=\"abs\">+1</div>\r\n\r\n\r\n  <div id=\"earn_batch1\" class=\"abs\"><img src=\"assets/earn_batch.png\" alt=\"Earn a Batch\"></div>\r\n\r\n  <div id=\"earn_batch2\" class=\"abs\"><img src=\"assets/earn_batch.png\" alt=\"Earn a Batch\"></div>\r\n\r\n  <div id=\"truck1\" class=\"Truck1 abs\"><img src=\"assets/Truck1.png\" alt=\"Truck1\"></div>\r\n  <div id=\"truck2\" class=\"Truck2 abs\"><img src=\"assets/Truck2.png\" alt=\"Truck2\"></div>\r\n  <div id=\"truck3\" class=\"Truck3 abs\"><img src=\"assets/Truck3.png\" alt=\"Truck2\"></div>\r\n\r\n\r\n</div>\r\n\r\n<div id=\"quiz\" class=\"quiz flex fcenter\" *ngIf=\"showPanel\">\r\n  <div class=\"instructor\" *ngIf=\"showQuizScreen == 'intro'\">\r\n    <img src=\"assets/man.png\" alt=\"Man\">\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"intro\" *ngIf=\"showQuizScreen == 'intro'\">\r\n      <h2>Instructions </h2>\r\n      <p>Welcome to this dynamic game where you can apply the knowledge you’ve gained to create a great order\r\n        experience for the customer. </p>\r\n\r\n      <p>In this game you’ll go through the Order Management process as a Customer Service Representative. In each\r\n        scenario, you will choose the ideal way to serve customers, in alignment with the service level they expect,\r\n        to achieve mutually winning outcomes. Each decision you make will impact the customer experience. </p>\r\n\r\n      <p>As you navigate through the challenges, <b>Think Forward</b>. You’ve seen what Cargill is working towards in\r\n        Order\r\n        Management to drive customer value and ensure seamless delivery. Although some processes and technology may\r\n        not be fully implemented today, consider what you have learned and how you can best apply it.</p>\r\n\r\n      <p>Read the instructions carefully before you begin. </p>\r\n      <div class=\"text-center\">\r\n        <button class=\"primary-btn\" (click)=\"this.showQuizScreen = 'rule'\">Next</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"rule\" *ngIf=\"showQuizScreen == 'rule'\">\r\n      <h2>About the Game </h2>\r\n      <p>Your journey begins with an order request scenario and runs through the end-to-end process \r\n        with the customer.\r\n        <ul>\r\n          <li>Each question is worth 100 points, and you can attempt each question only once.</li>\r\n          <li>There are a couple hidden “Proactive Behavior” questions. These are focused on positive behaviors that\r\n            drive exceptional performance and ones we want to see more of in action. For correct answers here, you\r\n            will earn bonus badges!</li>\r\n          <li>You need to score at least <b>600 points</b> to win.</li>\r\n        </ul>\r\n        <p>Are you ready to get into the Game? <b>Click Start and let’s begin! </b></p>\r\n        <div class=\"text-center\">\r\n          <button class=\"primary-btn\" (click)=\"action(1)\">Start</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"miles\" *ngIf=\"showQuizScreen == 'miles'\">\r\n      <h2>10 Miles to Go </h2>\r\n      <p>Good job! You have successfully achieved all the milestones in Order Management. However, we are not quite\r\n        there yet. There is 10 miles to go for the delivery to reach the customer. \r\n        Answer the next two questions and win the opportunity to earn 200 extra points and win the game.    \r\n      </p>\r\n      <div class=\"text-center\">\r\n        <button class=\"primary-btn\" (click)=\"getQuiz(9)\">Continue</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"quiz-panel\" *ngIf=\"showQuizScreen == 'quiz'\">\r\n      <div class=\"question\" *ngIf=\"selectedQuiz.submitted != true\">\r\n        <div class=\"flex\">\r\n          <div class=\"icon\"></div>\r\n          <div class=\"title\">\r\n            <h2>{{selectedQuiz.title}}</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"text\" [innerHTML]=\"selectedQuiz.question\">\r\n\r\n        </div>\r\n        <div class=\"text-center instr\">\r\n          {{selectedQuiz.instr}}\r\n        </div>\r\n\r\n        <div class=\"choices\" *ngIf=\"selectedQuiz.type == 'single_choice'\">\r\n          <div *ngFor=\"let item of selectedQuiz.choices; let i = index\">\r\n            <div class=\"flex choice\" (click)=\"selectedQuiz.selected = i; selectedQuiz.choosen = true\">\r\n              <div class=\"single-choice\">\r\n                <div class=\"dot\" [ngClass]=\"{'active' : selectedQuiz.selected == i}\"></div>\r\n              </div>\r\n              <div class=\"text\">\r\n                {{alpha[i]}}. {{item.text}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"sorting\" *ngIf=\"selectedQuiz.type == 'sort_order'\" cdkDropList (cdkDropListDropped)=\"drop($event)\">\r\n          <div *ngFor=\"let item of selectedQuiz.choices; let i = index\" cdkDrag>\r\n            <div class=\"flex choice\">\r\n              <div class=\"label\">\r\n                {{item.label}}\r\n              </div>\r\n              <div class=\"text\">\r\n                {{item.text}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"choices\" *ngIf=\"selectedQuiz.type == 'multiple_choice'\">\r\n          <div *ngFor=\"let item of selectedQuiz.choices; let i = index\">\r\n            <div class=\"flex choice\" (click)=\"item.selected = !item.selected; selectedQuiz.choosen = true\">\r\n              <div class=\"multi-choice\">\r\n                <div class=\"dot\" [ngClass]=\"{'active' : item.selected == true}\"></div>\r\n              </div>\r\n              <div class=\"text\">\r\n                {{alpha[i]}}. {{item.text}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"text-center submit\">\r\n          <button class=\"primary-btn\" [ngClass]=\"{'disabled' : !selectedQuiz.choosen}\"\r\n            (click)=\"quizSubmit(selectedQuiz)\">Submit</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"feedback\" *ngIf=\"selectedQuiz.submitted == true\">\r\n        <div *ngIf=\"selectedQuiz.correct == true\" [innerHTML]=\"selectedQuiz.feedback.correct\"></div>\r\n        <div *ngIf=\"selectedQuiz.correct == false\" [innerHTML]=\"selectedQuiz.feedback.incorrect\"></div>\r\n        <div class=\"text-center submit\">\r\n          <button class=\"primary-btn\" (click)=\"action(step + 1)\">Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"result\" *ngIf=\"showQuizScreen == 'result'\">\r\n      <div class=\"result_title\">\r\n        <h2>Order Management In Action</h2>\r\n      </div>\r\n      <h2 class=\"text-center\">{{result.title}}</h2>\r\n\r\n      <div class=\"flex\">\r\n        <div class=\"bubble\">\r\n          <img src=\"assets/bubble.png\" class=\"opacity0\" alt=\"\">\r\n          <div class=\"text\">{{result.bubble}}</div>\r\n\r\n        </div>\r\n        <div class=\"flex fcenter flex1\">\r\n          <div class=\"text-center\">\r\n            <h2>Your Score = <span class=\"primary-color\">{{score}} / 1000 </span> </h2>\r\n            <h3>You earned badges = <span class=\"primary-color\">{{batches}} </span> </h3>\r\n            <div class=\"flex fcenter\">\r\n              <div class=\"batch\" *ngFor=\"let b of counter(batches)\">\r\n                <img src=\"assets/batches.png\" alt=\"Batches\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- </drag-scroll> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quiz/quiz.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quiz/quiz.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <div id=\"quiz\" class=\"quiz flex fcenter\" *ngIf=\"showPanel\">\n    <div class=\"instructor\" *ngIf=\"showQuizScreen != 'quiz'\">\n      <img src=\"assets/man.png\" alt=\"Man\">\n    </div>\n    <div class=\"panel\">\n      <div class=\"intro\" *ngIf=\"showQuizScreen == 'intro'\">\n        <h2>Instructions </h2>\n        <p>Welcome to this dynamic game where you can apply the knowledge you’ve gained to create a great order\n          experience for the customer. </p>\n\n        <p>In this game you’ll go through the Order Management process as a Customer Service Representative. In each\n          scenario, you will choose the ideal way to serve customers, in alignment with the service level they expect,\n          to achieve mutually winning outcomes. Each decision you make will impact the customer experience. </p>\n\n        <p>As you navigate through the challenges, <b>Think Forward</b>. You’ve seen what Cargill is working towards in\n          Order\n          Management to drive customer value and ensure seamless delivery. Although some processes and technology may\n          not be fully implemented today, consider what you have learned and how you can best apply it.</p>\n\n        <p>Read the instructions carefully before you begin. </p>\n        <div class=\"text-center\">\n          <button class=\"primary-btn\" (click)=\" this.showQuizScreen = 'rule'\">Next</button>\n        </div>\n\n      </div>\n\n      <div class=\"rule\" *ngIf=\"showQuizScreen == 'rule'\">\n        <h2>About the Game </h2>\n        <p>Your journey begins with an order request scenario and runs through the end-to-end process \n          with the customer.\n          <ul>\n            <li>Each question is worth 100 points, and you can attempt each question only once.</li>\n            <li>There are a couple hidden “Proactive Behavior” questions. These are focused on positive behaviors that\n              drive exceptional performance and ones we want to see more of in action. For correct answers here, you\n              will earn bonus badges!</li>\n            <li>You need to score at least <b>600 points</b> to win.</li>\n          </ul>\n          <p>Are you ready to get into the Game? <b>Click Start and let’s begin! </b></p>\n          <div class=\"text-center\">\n            <button class=\"primary-btn\" (click)=\"action(1)\">Start</button>\n          </div>\n\n      </div>\n\n      <div *ngIf=\"showQuizScreen == 'quiz'\">\n        <div class=\"question\" *ngIf=\"selectedQuiz.submitted != true\">\n          <div class=\"flex\">\n            <div class=\"icon\"></div>\n            <div class=\"title\">\n              <h2>{{selectedQuiz.title}}</h2>\n            </div>\n          </div>\n          <div class=\"text\">\n            {{selectedQuiz.question}}\n          </div>\n          <div class=\"text-center instr\">\n            {{selectedQuiz.instr}}\n          </div>\n          <div class=\"choices\">\n            <div *ngFor=\"let item of selectedQuiz.choices; let i = index\">\n              <div class=\"flex choice\" (click)=\"selectedQuiz.selected = i\">\n                <div class=\"single-choice\">\n                  <div class=\"dot\" [ngClass]=\"{'active' : selectedQuiz.selected == i}\"></div>\n                </div>\n                <div class=\"text\">\n                  {{item.text}}\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center submit\">\n            <button class=\"primary-btn\" (click)=\"quizSubmit(selectedQuiz)\">Submit</button>\n          </div>\n        </div>\n\n\n        <div class=\"feedback\" *ngIf=\"selectedQuiz.submitted == true\">\n          <div *ngIf=\"selectedQuiz.correct == true\" [innerHTML]=\"selectedQuiz.feedback.correct\"></div>\n          <div *ngIf=\"selectedQuiz.correct == false\" [innerHTML]=\"selectedQuiz.feedback.incorrect\"></div>\n          <div class=\"text-center submit\">\n            <button class=\"primary-btn\">Next</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/game/game.component */ "./src/app/pages/game/game.component.ts");




const routes = [
    {
        path: '',
        component: _pages_game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'om-in-action';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/game/game.component */ "./src/app/pages/game/game.component.ts");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/fesm2015/ngx-drag-scroll.js");
/* harmony import */ var _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/quiz/quiz.component */ "./src/app/pages/quiz/quiz.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
            _pages_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_7__["QuizComponent"]
        ],
        imports: [
            ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_6__["DragScrollModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/game/data.js":
/*!************************************!*\
  !*** ./src/app/pages/game/data.js ***!
  \************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
let data = [
  //1
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
        correct: true,

      },
      {
        text: 'Read the request notes carefully. Perform updates exactly as they are outlined. Do nothing further.',
        correct: false,
      },
      {
        text: 'Hold the order request. Contact the Customer to double check and review all the details they submitted. Document your notes in a notebook or use post-it notes, and then save them to enter when you have all your responses from the Customer.',
        correct: false,
      },
      {
        text: 'Review and double check the details with the Customer. Wait to enter the details into the system until the day before the loading date.',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>
        <ul>
          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time engaging with the customers.</li>
          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>
          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>
          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>
        </ul>`,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Option A is the correct answer.</h2>
        <p>When we promptly ensure everything is set-up correctly in our systems, we enable our customers to consistently experience a seamless Order Management process. Here are a few actions to keep in mind:</p>
        <ul>
          <li>After completing requests, proactively check other key areas, like the Master data fields, to ensure updates are made to applicable key systems so seamless order process occurs that allows for automation of tasks. When this occurs successfully, CSRs can spend more time engaging with the customers.</li>
          <li>Validate the accuracy of key details like Ship To, Special Requests, confirming the products requested go to the right place and that their Incoterms are set up correctly. </li>
          <li>Occasionally, for some manual requests you may review an invoice to validate details. </li>
          <li>When a new customer is being setup, collaborate with the Commercial team and ensure that Service Level Agreements (SLA) are embedded in all systems in alignment with customer segmentation (where applicable).</li>
        </ul>`
    }
  },

  //2
  {
    type: 'sort_order',
    title: 'Order Intake',
    question: `As part of our future-forward aspirations, we strive to adopt automated system rules to support smooth order intake processes where possible. 
    Even when we implement automation on occasions, certain orders may be flagged and that’s our opportunity to be involved in closer review to ensure accuracy. Today, 
    you receive a message from a customer with a one-off Special Delivery request. The Customer wants the product loaded to a specific truck type. 
What steps should you follow?`,
    instr: 'Rearrange the options in the correct order.',
    selected: -1,
    submitted: false,
    score: 100,
    choices: [{
        label: 'A',
        text: 'Once you address the immediate request, ensure there are no other areas in the system that should be updated (i.e., Master data).',
        correct: 3,

      },
      {
        label: 'B',
        text: 'Check message details and validate that what is documented is correct.',
        correct: 1,
      },
      {
        label: 'C',
        text: 'Once the request is done, seek to understand why the Special Delivery request was needed. Was there an issue with the product? Is there an opportunity to upgrade services that would address this need in the future? Is there a chance to provide a meaningful cross/up-sell? Helping to determine the reasons behind exceptions gives us line of sight to possible longer-term solutions.  ',
        correct: 5,
      },
      {
        label: 'D',
        text: 'Determine what specific actions are required to fulfill Special Delivery request specifications (i.e., Special Approvals).',
        correct: 2,
      },
      {
        label: 'E',
        text: 'Once all updates are completed, ensure a response is sent to the Customer to keep them informed.',
        correct: 4,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>It is important that we understand the details of the request, address them and keep our customer informed.</p>`,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. This is the correct order.</h2>
      
        <ul>
          <li>Check message details and validate that what is documented is correct.</li>
          <li>Determine what specific actions are required to fulfill the Special Delivery specifications (i.e., Special Approvals).</li>
          <li>Once you address the immediate request, ensure there are no other areas in the system that should be updated (i.e., Master data).</li>
          <li>Once all updates are completed, ensure an automated response is sent to the Customer to keep them informed.</li>
          <li>Once the request is done, seek to understand why the Special Delivery was needed. Was there an issue with the product? Is there an opportunity to upgrade services 
          that would address this need in the future? Is there a chance to provide a meaningful cross/up-sell? Helping to determine the reasons behind exceptions gives us 
          line of sight to possible longer-term solutions.</li>
        </ul>
          <p>It is important that we understand the details of the request, address them, and keep our customer informed.</p>`
    }
  },

  //2 batch
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

      },
      {
        text: 'Use advanced analytics to identify meaningful cross / up-sell opportunities and communicate potential to the Sales team.',
        correct: true,
        selected: false
      },
      {
        text: `Inform other Customer Service team members by email that you've entered and confirmed the customer's request.`,
        correct: false,
        selected: false
      },
      {
        text: 'After sending an automated order acknowledgement to the customer using their preferred communication channel (i.e. email), make a phone call to them too to make sure they received the order confirmation.',
        correct: false,
        selected: false
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct and earned a bonus badge!</h2>
        <p>We make sure the data in our systems is correct. </p>
        <p>When we actively seek to deeply understand our customers’ needs and what drives their requests, we may be able to proactively offer solutions that create an enhanced outcome for both Cargill and the customer. For example, using advanced analytics creates opportunities for Vendor Managed Inventory (VMI), allowing us to let our customer know when they should be placing their order, or leveraging the current products or promotions to create up selling or cross selling opportunities.  
        </p>
        <p>All of this is done while working with the customer on the solutions that make sense for their business.</p>`,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Options A and B are correct answers.</h2>
       
        <ul>
          <li>We make sure the data in our systems is correct. </li>
          <li>When we actively seek to deeply understand our customers’ needs and what drives their requests, we may be able to proactively offer solutions that create an enhanced outcome. For example, using advanced analytics creates opportunities for Vendor Managed Inventory (VMI), allowing us to let our customer know when they should be placing their order, or leveraging the current products or promotions to create up-selling or cross-selling opportunities.  All of this is done while working with the customer on the solutions that make sense for their business. </li>
          <li>We should work in an efficient and effective manner. Informing Customer Service team members about the customer's specific requirements is important, but the best way to do that is using the system functionality and ensuring that master data is updated in all applicable systems.
</li>
          <li>Confirming back to the customer is important part of the process, but confirming through the customers' preferred channel is enough, unless there are exceptions or issues that require customer's immediate attention.
</li>
        </ul>`
    }
  },

  //3
  {
    type: 'multiple_choice',
    title: 'Order Confirmation',
    question: 'Let’s envision a well-managed customer order management experience. When the customer is ready, their order goes through the intake process with no issues because everything was configured correctly when the account was first set up. Just the way we like it!  Now it’s time for Order Confirmation. What steps do we take to contribute to this seamless experience for our customer?',
    instr: 'Choose the correct options.',
    selected: -1,
    submitted: false,
    score: 100,
    choices: [{
        text: 'We advise our customers if we are dealing with internal breakdowns (i.e., plant shutdowns).',
        correct: false,

      },
      {
        text: 'We perform credit checks and actively monitor release of orders on hold. We do this to ensure smooth processing.',
        correct: true,
      },
      {
        text: 'We confirm with CTL (the transportation schedule) to ensure there were no issues with the order request.',
        correct: true,
      },
      {
        text: 'We verify there’s enough volume of product, per their contract/plant inventory.',
        correct: true,
      },
      {
        text: 'We advise the Customer when they are on a credit hold.',
        correct: false,
      },
      {
        text: 'We tell the customer about pricing and costs. They should be kept informed about details like margins.',
        correct: false,
      },
      {
        text: 'We ensure accuracy on everything, from the start, in the system – credit check, contract, order creation. This supports seamless order process allowing for automation of tasks.',
        correct: false,
      },
      {
        text: 'We verify to ensure quality testing timelines are aligned to shipment schedule, where applicable.',
        correct: true,
      },
      {
        text: 'We select the appropriate sourcing location, based on business rules.',
        correct: true,
      },
      {
        text: 'Once the orders are completed, we send an order confirmation to the customer, to keep them informed.',
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>When we work to ensure everything is set up correctly, processed accurately and we connect with key internal partners, where appropriate, to verify important details like inventory availability and transportation schedules, we support seamless customer experiences. </p>
        <p>Keeping our customers informed is critical. As we embrace forward thinking ways, we are using more automated methods. For example, while in the past customers appreciated an email; with our new technology we believe that the system will take care of the confirmation for the customer and they can trust that their order is in process until the date the receive it. Digitalization impacts, like this one, positively influences our customers' perception.
        </p>
        <p>These actions reinforce our value proposition with our Customers to be their choice pick when we deliver what we say we will and meet their expectations, as mutually agreed upon in the SLA to ensure alignment. </p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Options B, C, D, G, H, I, J are correct answers.</h2>
        
        <ul>
          <li>B. We perform credit checks and actively monitor release of orders on hold. We do this to ensure smooth processing.</li>
          <li>C. We confirm with CTL (the transportation schedule) to ensure there were no issues with the order request.</li>
          <li>D. We verify there’s enough volume of product, per their contract/plant inventory.</li>
          <li>G. We ensure accuracy on everything, from the start, in the system – credit check, contract, order creation.</li>
          <li>H. We verify to ensure quality testing timelines are aligned to shipment schedule, where applicable.</li>
          <li>I. We select the appropriate sourcing location, based on business rules.</li>
          <li>J. Once the orders are completed, we send an order confirmation to the customer, to keep them informed!</li>
        </ul>
        <p>We generally want to be careful how and what we share information with our customers, especially when it concerns our internal processes and procedures. It's important to let the customers know if there is any risk for their order, but details about Cargill's plant breakdown is a circumstance we deal with internally. Another example of information sharing we should be mindful of, is pricing details, in which case we should direct the customer to our Commercial team, who can provide the most accurate information as needed.</p>
        <p>When we work to ensure everything is set up correctly, processed accurately and we connect with key internal partners, where appropriate, to verify important details like inventory availability and transportation schedules, we support seamless customer experiences. These actions reinforce our value proposition with our Customers to be their choice pick when we deliver what we say we will and meet their expectations, as mutually agreed upon in the SLA to ensure alignment.</p>`
    }
  },

  //4
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
        correct: false,

      },
      {
        text: 'Agree with planning team that customer can accept a similar product that they have previously ordered, which we can now deliver in a timely manner.',
        correct: false,
      },
      {
        text: 'Agree with the planner that sourcing location can be switched to a warehouse, which is far off the plant. Change the loading location in the system and only inform the customer about it.',
        correct: false,
      },
      {
        text: `You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed. After we agree on the resolution internally, you confirm expected next steps with the customer`,
        correct: true,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>Following these steps will support our ability to provide a seamless experience for our customer, despite the obstacles. It’s vital to keep your internal partners informed as well. It is important we align internally before updating the customer.You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements.</p>
        <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. The correct flow would look like this:</h2>
        <p>You advise your Supply Chain partner and follow the arbitrage process to make sure the sourcing change proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Inform/confirm on the outcome you intend to deliver to the customer is agreed upon internally. It is important we align internally before updating the customer. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed.</p>
       <p>It's important to keep the customer informed on any changes. Before cancelling the order, make sure we have explored all possible alternatives to deliver and meet the customer's expectations. It’s vital to keep your internal partners informed, as well. You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements. </p>
       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.
       </p>`,
       incorrect1: `<h2 class='correct'>Good try, but this is incorrect. The correct flow would look like this:</h2>
        <p>You advise your Supply Chain partner and follow the arbitrage process to make sure the sourcing change proposed meets all the customer's requirements. Also, do keep in mind that we can only serve a limited number of customers because of the plant downtime. Inform/confirm on the outcome you intend to deliver to the customer is agreed upon internally. It is important we align internally before updating the customer. Therefore, you will have to ensure that customer segmentation (where applicable) or prioritization rules are followed and align with Commercial team, if needed. </p>
       <p>Product changes should always be consulted with our customers, even if we are aware of their ordering patterns. It's not only important to deliver when the customer requested us to do so, but also to deliver exactly what the customer asked for. It’s vital to keep your internal partners informed, as well.You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements.</p>
       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>
       `,
        incorrect2: `<h2 class='correct'>Good try, but this is incorrect. Option D is the correct answer.</h2>
        <p>Informing the customer is correct, but it is also important to validate if that change is doable with the carrier / CTL. It’s vital to keep your internal partners (i.e. CTL) informed as well.You advise your Supply Chain partner, request a sourcing change and ensure the proposed meets all the customer's requirements.</p>
       <p>Order Processing is a key opportunity to promote a better approach to handling this challenge by including other key partners that will be impacted by the change. It is important to work closely with our internal partners as we want this to be a seamless process for our customers so we will only alert them if we need to change the order after working through the process, not beforehand.</p>
  
       `
    }
  },

  //5
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
        correct: false,

      },
      {
        text: `Don't do anything. Wait for the customer to call and ask where the truck is, and then provide details about the flat tire.`,
        correct: false,
      },
      {
        text: 'Once you have confirmed with CTL when the product is expected to be delivered, take action to provide an update to the Customer immediately, so they are aware of the change.',
        correct: true,
      },
      {
        text: `Immediately after receiving notification about the truck's flat tire, call the customer to let them know we'll send another truck.`,
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>Always keep the customer informed when the product fulfillment will not meet the expected time so they can know when to expect it. So, once you confirm the delivery, be sure to reach out to the customer with an update on what to expect.</p>
        <p>Also, it’s important that we work across functions as one team and to be proactive. We want to come across to our customers as being 1 Team. CTL and CS teams should collaborate and make sure that we proactively reach out to customers in case of exceptions.</p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Option C is the correct answer.</h2>
        <p>CTL would not update the customer. CSRs are the contact point for customers in case of order or delivery issues.</p>
        <p>The customers should always be proactively informed of any changes and provided assurance that we are working on it and solutions are in progress.</p>
        <p>We should first discuss possible solutions with CTL / the carrier and understand what is best resolution considering customer's urgency and transportation availability. Sending another truck might be a possibility, but it must be aligned with CS's partners in other functions.
</p>`
       }
  },

  //6
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
        correct: true,

      },
      {
        text: 'Process orders rejected or returned by customer',
        correct: true,
      },
      {
        text: 'Process order exceptions and issue escalations',
        correct: true,
      },
      {
        text: 'Make sure customer segmentation rules (where applicable) are properly setup in the system',
        correct: false,
      },
      {
        text: 'Manage Non-Standard Customer documentation requests –(e.g. issue/reissue B/L (Bill of Lading), COA (Certificate of Analysis), invoice)',
        correct: true,
      },
      {
        text: 'Enter customer orders in the system',
        correct: false,
      },
      {
        text: 'Receive invoice disputes',
        correct: true,
      },
      {
        text: 'Receive and process customer complaints',
        correct: true,
      },
      {
        text: 'New Customer – Helping to get them started',
        correct: true,
      },
      {
        text: 'Working with CTL to determine logistics planning',
        correct: false,
      },
      {
        text: 'Identify up sell opportunity and communicate to commercial team',
        correct: false,
      },
      {
        text: 'Work with CTC team to release customer orders that are on hold due to overdue invoices',
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct and earned a bonus badge!</h2>
        <p>These are the type of Order Support actions we provide our expertise to contribute towards seamless Order Management experiences for our customers. </p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Options B, C, D, G, H, I, J are correct answers.</h2>
        <p>The Order Support actions we provide our expertise towards include:</p>
        <ul>
          <li>B. Receive and answer order / general inquiries about our products</li>
          <li>C. Process orders rejected or returned by customer</li>
          <li>D. Process order exceptions and issue escalations</li>
          <li>G. Manage Non-Standard Customer documentation requests –(e.g. issue/reissue B/L (bill of lading),
     COA (certificate of analysis), invoice)</li>
          <li>H. Receive invoice disputes</li>
          <li>I. Receive and process customer complaints</li>
          <li>J. New Customer – Helping to get them started</li>
        </ul>`
         }
  },
  
  //6 batch
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
        text: `In case of customer complaint related to quality, route the case to Quality team and do nothing until it's resolved.`,
        correct: false,
      },
      {
        text: `When an order change comes through, ask questions to gain a deeper understanding of what’s prompting the change request. You may discover, through the details gathered, there may be a better long-term solution to offer to help mitigate the need for changes in the future.`,
        correct: true,
      },
      {
        text: 'The amount of financial disputes received from a customer has significantly increased in the past months. When a dispute notification is received from the customer forward it to CTC team.',
        correct: false,
      },
      {
        text: `Multiple customers reach out saying that they cannot download the documents related to their orders from Cargill's customers portal as they usually do. You manually send the documents to the customers by email and consider the case closed.`,
        correct: false,
      }
    ],
    feedback: {
      choice_feedback: true,
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>Following these steps gives us an opportunity to better understand our customers' needs and strive to enhance outcomes when we discover better solutions to service them.</p>
        `,
      choice_text: [`<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>
        <p>Timely follow up and keeping the customer aware of progress made is important. Customers should be aware about work in progress on their request, and proactive checking with responsible functions and stakeholders is  key to  that.</p>
        <p>The correct flow is the following:</p>
        <p>When an order change comes through, ask questions to gain a deeper understanding of what’s prompting the change request. You may discover, through the details gathered, there may be a better long-term solution to offer to help mitigate the need for changes in the future.</p>
        <p>Following these steps gives us an opportunity to better understand our customers' needs and strive to enhance outcomes when we discover better solutions to service them.</p>`
        ,
        '',
        `<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>
        <p>This is not all that we have to do. It's important we identify and address root cause issues, whether that be a Cargill issue or a specific Customer one. Thereby really looking to drive down the numbers through our reciprocal communication and the data available, as key trends could be identified via both CBS (CTC) and CSR teams, respectively.</p>

        <p>The correct flow is the following:</p>
        <p>When an order change comes through, ask questions to gain a deeper understanding of what’s prompting the change request. You may discover, through the details gathered, there may be a better long-term solution to offer to help mitigate the need for changes in the future.</p>
        
        <p>Following these steps gives us an opportunity to better understand our customers' needs and strive to enhance outcomes when we discover better solutions to service them.</p>        
        `,
        `
        <h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>
        <p>Sending the documents to the customers is correct, but you should also proactively reach out to higher level staff or technology specialist, making sure they are aware of the issue and that it's resolved as soon as possible.</p>

        <p>The correct flow is the following:</p>
        <p>When an order change comes through, ask questions to gain a deeper understanding of what’s prompting the change request. You may discover, through the details gathered, there may be a better long-term solution to offer to help mitigate the need for changes in the future.</p>
        
        <p>Following these steps gives us an opportunity to better understand our customers' needs and strive to enhance outcomes when we discover better solutions to service them.</p>
        `
    ]
       }
  },

  // 10 miles 
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
        correct: false,

      },
      {
        text: `Forward the results to all our customers.`,
        correct: false,
      },
      {
        text: 'Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) to identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.',
        correct: true,
      },
      {
        text: `Ask the VOC COE team to work on and resolve the issues flagged by our customers.`,
        correct: false,
      }
    ],
    feedback: {
      choice_feedback: true,
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.</p>
        `,
      choice_text: [`<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>
        <p>The purpose of all metrics measurement (including customer feedback) is to review and analyze the results, conduct root cause analysis for underperformance and take corrective actions.</p>
        <p>The correct answer is:</p>
        <p>Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.</p>`,

        `<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>
        <p>We might want to reach out to some select customers after the survey is complete, but before that we need to conduct root cause analysis and identify improvement actions in our internal processes. Forwarding all results to all our customers might jeopardize our relationship with them, as the feedback shared is sensitive.</p>

        <p>The correct answer is:</p>
        <p>Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.</p>
        `,
        '',
        `<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>
        <p>The VOC COE Team partners with the businesses to understand survey requirements, collect customer feedback, and analyze the data. However, the results and actions from the survey are owned by the business.</p>

        <p>The correct answer is:</p>
        <p>Interpret the summarized results and work with the VOC COE team to further understand the data behind it. Compare results to target and conduct root cause analysis in case of underperformance. Define the problem and collaborate with other functions (i.e. commercial, supply chain, finance) identify improvements. When appropriate, inform selected key customers about improvement results / actions based on their feedback.</p>
        `
        ]
       }
  },

  {
    type: 'single_choice',
    title: 'Customer Focus',
    question: `
    <p>Every touch point with a customer is an opportunity to learn and better equip the business with information by:</p>
    <ul><li>Asking meaningful questions. </li>
    <li>Validating key customer details, where applicable </li>
    <li>Documenting notes in Salesforce to make the information available to others across Cargill. </li>
    </ul>
    <p>Is this statement True or False?</p>
    `,
    instr: 'Choose the correct option.',
    selected: -1,
    submitted: false,
    score: 200,
    choices: [{
        text: 'True',
        correct: true,

      },
      {
        text: `False`,
        correct: false,
      }
    ],
    feedback: {
      correct: `<h2 class='correct'>Great job! You are correct.</h2>
        <p>Every opportunity taken to learn more about the customers' needs allows us to better serve them in the agreed upon manner and can provide potential additional opportunities for Cargill to fill more of their business needs as well. </p>
        <p>Getting to know our customers’ needs better will empower us to be more effective, efficient, agile and provide value for both Cargill and the customers.</p>
        `,
      incorrect: `<h2 class='correct'>Good try, but this is incorrect. Options B is the correct answer.</h2>
        <p>It is true that every opportunity taken to learn more about the customers' needs allows us to better serve them in the agreed upon manner and can provide potential additional opportunities for Cargill to fill more of their business needs as well. </p>
        <p>Getting to know our customers’ needs better will empower us to be more effective, efficient, agile and provide value for both Cargill and the customers.</p>
        
</p>`
       }
  },
];


/***/ }),

/***/ "./src/app/pages/game/game.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/game/game.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".top-panel {\n  color: #FFF;\n  padding: 30px;\n  position: relative;\n  z-index: 3;\n}\n.top-panel .title {\n  text-align: center;\n  font-size: 22px;\n}\n.top-panel .score {\n  text-align: center;\n  font-size: 34px;\n  margin: 5px;\n}\n.top-panel .progress {\n  max-width: 500px;\n  background-color: #FFF;\n  border-radius: 5px;\n  padding: 2px;\n  margin: 5px auto;\n}\n.top-panel .progress .thumb {\n  width: 50%;\n  height: 3px;\n  background-color: #279989;\n  border-radius: 5px;\n  transition: width 0.5s ease;\n}\n.game_layout,\n.screen_10,\n.screen_10_1 {\n  left: 0;\n  top: 0;\n  z-index: -1;\n}\n.screen_10,\n.screen_10_1 {\n  opacity: 0;\n}\n.game {\n  transform-origin: top left;\n  width: 1920px;\n  height: 1080px;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  touch-action: auto;\n}\n.game .abs {\n  position: absolute;\n}\n.game .road_path {\n  left: -76px;\n  top: 673px;\n}\n.game .road {\n  left: -76px;\n  top: 323px;\n}\n.game .building1 {\n  left: 284px;\n  top: 549px;\n}\n.game .tree1 {\n  left: 397px;\n  top: 551px;\n}\n.game .selection1 {\n  left: 111px;\n  top: 425px;\n}\n.game .Truck1 {\n  left: 128px;\n  top: 792px;\n}\n.game .Truck2 {\n  left: 409px;\n  top: 630px;\n  opacity: 0;\n}\n.game .Truck3 {\n  left: 0px;\n  top: 0px;\n  opacity: 0;\n}\ndrag-scroll {\n  touch-action: pan-x pan-y;\n}\ndrag-scroll .drag-scroll-content {\n  overflow: hidden !important;\n}\n.quiz {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  z-index: 2;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  -webkit-animation: zoomIn 0.5s ease;\n          animation: zoomIn 0.5s ease;\n}\n.quiz .panel {\n  margin: 20px;\n  padding: 30px;\n  min-width: 800px;\n  min-height: 400px;\n  background-color: #FFF;\n  border-radius: 10px;\n  box-shadow: 0 0 5px #33333347;\n}\n.text-center {\n  text-align: center;\n}\n.primary-btn {\n  background-color: #005F86;\n  color: #fff;\n  padding: 10px;\n  min-width: 200px;\n  text-align: center;\n  border: 0;\n  border-radius: 30px;\n  font-size: 18px;\n  cursor: pointer;\n}\n.primary-btn.disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.question {\n  font-size: 22px;\n  line-height: 32px;\n}\n.question .submit {\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n.question .instr {\n  font-style: italic;\n  color: #005F86;\n  margin: 20px 0;\n}\n.question .choice {\n  align-items: flex-start;\n  cursor: pointer;\n}\n.question .single-choice,\n.question .multi-choice {\n  background-color: #FFF;\n  border-radius: 50%;\n  margin: 7px 20px;\n  border: 1px solid #333;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n.question .single-choice .dot,\n.question .multi-choice .dot {\n  width: 7px;\n  height: 7px;\n  background-color: #fff;\n  border-radius: 50%;\n  margin: 5px;\n}\n.question .single-choice .dot.active,\n.question .multi-choice .dot.active {\n  background-color: #005F86;\n}\n.question .multi-choice {\n  border-radius: 0;\n}\n.question .multi-choice .dot {\n  border-radius: 0;\n}\n.sorting .label {\n  background-color: #005F86;\n  color: #fff;\n  border-radius: 50%;\n  padding: 5px 15px;\n  margin: 10px;\n  margin-top: 0px;\n  height: 30px;\n  font-size: 16px;\n}\n#earn_batch1 {\n  left: 845px;\n  top: 538px;\n  opacity: 0;\n}\n#earn_batch2 {\n  left: 1645px;\n  top: 300px;\n  opacity: 0;\n}\n.result_title {\n  background-color: #005F86;\n  margin: -30px -30px 0 -30px;\n  padding: 10px;\n  text-align: center;\n  color: #fff;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0px 0px 24px #0000003D;\n}\n.bubble {\n  background-image: url('bubble.png');\n  background-repeat: no-repeat;\n  position: relative;\n}\n.bubble .text {\n  position: absolute;\n  left: 136px;\n  top: 13px;\n  margin: 10px;\n}\n.opacity0 {\n  opacity: 0;\n}\n.batch {\n  margin: 10px;\n}\n#batch {\n  opacity: 0;\n}\n#questNoAdd {\n  color: #fff;\n  font-size: 18px;\n}\n@-webkit-keyframes zoomIn {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes zoomIn {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FtZS9GOlxcUHJvamVjdFxcR1BcXENhcmdpbGxcXE9NIEluIEFjdGlvblxcb20taW4tYWN0aW9uL3NyY1xcYXBwXFxwYWdlc1xcZ2FtZVxcZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNBSjtBREdFO0VBQ0UsZ0JBQUE7RUFFQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRko7QURJSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FDRk47QURPQTs7O0VBR0UsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDSkY7QURRQTs7RUFFRSxVQUFBO0FDTEY7QURRQTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7QUNQRjtBRFNFO0VBQ0Usa0JBQUE7QUNQSjtBRFdFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNUSjtBRFlFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNWSjtBRGFFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNYSjtBRGVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNiSjtBRGlCRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDZko7QURtQkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQ2pCSjtBRG9CRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ2xCSjtBRHFCRTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ25CSjtBRHVCQTtFQUNFLHlCQUFBO0FDcEJGO0FEc0JFO0VBQ0UsMkJBQUE7QUNwQko7QUR3QkE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUN0QkY7QUR1QkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNyQko7QUR5QkE7RUFDRSxrQkFBQTtBQ3RCRjtBRHlCQTtFQU9FLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUM1QkY7QURlRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ2JKO0FENEJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDekJGO0FEMkJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ3pCSjtBRDRCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUMxQko7QUQ2QkU7RUFDRSx1QkFBQTtFQUNBLGVBQUE7QUMzQko7QURnQ0U7O0VBSUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2hDSjtBRGtDSTs7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQU1BLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDcENOO0FEOEJNOztFQUNFLHlCQUFBO0FDM0JSO0FEb0NFO0VBQ0UsZ0JBQUE7QUNsQ0o7QURvQ0k7RUFDRSxnQkFBQTtBQ2xDTjtBRHdDRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDckNKO0FEeUNBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDdENGO0FEMENBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDdkNGO0FEMENBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0FDdkNGO0FEMENBO0VBQ0UsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDdkNGO0FEeUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUN2Q0o7QUQyQ0E7RUFDRSxVQUFBO0FDeENGO0FEMkNBO0VBQ0UsWUFBQTtBQ3hDRjtBRDRDQTtFQUNFLFVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ3pDRjtBRCtDQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDNUNGO0VEOENBO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VDNUNGO0FBQ0Y7QURvQ0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzVDRjtFRDhDQTtJQUNFLG1CQUFBO0lBQ0EsVUFBQTtFQzVDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1wYW5lbCB7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMztcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC5zY29yZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcyB7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBtYXJnaW46IDVweCBhdXRvO1xyXG5cclxuICAgIC50aHVtYiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc5OTg5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5nYW1lX2xheW91dCxcclxuLnNjcmVlbl8xMCxcclxuLnNjcmVlbl8xMF8xIHtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuXHJcbn1cclxuXHJcbi5zY3JlZW5fMTAsXHJcbi5zY3JlZW5fMTBfMSB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLmdhbWUge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JnLnBuZycpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtMTtcclxuXHJcbiAgdG91Y2gtYWN0aW9uOiBhdXRvO1xyXG5cclxuICAuYWJzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5yb2FkX3BhdGgge1xyXG4gICAgbGVmdDogLTc2cHg7XHJcbiAgICB0b3A6IDY3M3B4O1xyXG4gIH1cclxuXHJcbiAgLnJvYWQge1xyXG4gICAgbGVmdDogLTc2cHg7XHJcbiAgICB0b3A6IDMyM3B4O1xyXG4gIH1cclxuXHJcbiAgLmJ1aWxkaW5nMSB7XHJcbiAgICBsZWZ0OiAyODRweDtcclxuICAgIHRvcDogNTQ5cHg7XHJcbiAgICAvL3RyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG5cclxuICAudHJlZTEge1xyXG4gICAgbGVmdDogMzk3cHg7XHJcbiAgICB0b3A6IDU1MXB4O1xyXG4gICAgLy90cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGlvbjEge1xyXG4gICAgbGVmdDogMTExcHg7XHJcbiAgICB0b3A6IDQyNXB4O1xyXG4gICAgLy90cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIH1cclxuXHJcbiAgLlRydWNrMSB7XHJcbiAgICBsZWZ0OiAxMjhweDtcclxuICAgIHRvcDogNzkycHg7XHJcbiAgfVxyXG5cclxuICAuVHJ1Y2syIHtcclxuICAgIGxlZnQ6IDQwOXB4O1xyXG4gICAgdG9wOiA2MzBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAuVHJ1Y2szIHtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbmRyYWctc2Nyb2xsIHtcclxuICB0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15O1xyXG5cclxuICAuZHJhZy1zY3JvbGwtY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucXVpeiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9oZWlnaHQ6IGNhbGMoMTAwdmggLSA5MHB4KTtcclxuICBoZWlnaHQ6IDEwMHZoIDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gIGFuaW1hdGlvbjogem9vbUluIDAuNXMgZWFzZTtcclxuICAucGFuZWwge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAjMzMzMzMzNDc7XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnByaW1hcnktYnRuIHtcclxuXHJcbiAgJi5kaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUY4NjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4ucXVlc3Rpb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuXHJcbiAgLnN1Ym1pdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICB9XHJcblxyXG4gIC5pbnN0ciB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjogIzAwNUY4NjtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmNob2ljZSB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnNpbmdsZS1jaG9pY2UsXHJcbiAgLm11bHRpLWNob2ljZSB7XHJcbiAgICAvL3dpZHRoOiAxNXB4O1xyXG4gICAgLy9oZWlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luOiA3cHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuZG90IHtcclxuICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgaGVpZ2h0OiA3cHg7XHJcblxyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUY4NjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tdWx0aS1jaG9pY2Uge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuXHJcbiAgICAuZG90IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zb3J0aW5nIHtcclxuICAubGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUY4NjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4jZWFybl9iYXRjaDEge1xyXG4gIGxlZnQ6IDg0NXB4O1xyXG4gIHRvcDogNTM4cHg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuXHJcbiNlYXJuX2JhdGNoMiB7XHJcbiAgbGVmdDogMTY0NXB4O1xyXG4gIHRvcDogMzAwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnJlc3VsdF90aXRsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUY4NjtcclxuICBtYXJnaW46IC0zMHB4IC0zMHB4IDAgLTMwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDI0cHggIzAwMDAwMDNEO1xyXG59XHJcblxyXG4uYnViYmxlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9idWJibGUucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEzNnB4O1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm9wYWNpdHkwIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uYmF0Y2gge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuXHJcbiNiYXRjaCB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuI3F1ZXN0Tm9BZGR7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5cclxuQGtleWZyYW1lcyB6b29tSW4ge1xyXG4gIDAle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn0iLCIudG9wLXBhbmVsIHtcbiAgY29sb3I6ICNGRkY7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMztcbn1cbi50b3AtcGFuZWwgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG59XG4udG9wLXBhbmVsIC5zY29yZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBtYXJnaW46IDVweDtcbn1cbi50b3AtcGFuZWwgLnByb2dyZXNzIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAycHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG59XG4udG9wLXBhbmVsIC5wcm9ncmVzcyAudGh1bWIge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3OTk4OTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XG59XG5cbi5nYW1lX2xheW91dCxcbi5zY3JlZW5fMTAsXG4uc2NyZWVuXzEwXzEge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc2NyZWVuXzEwLFxuLnNjcmVlbl8xMF8xIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmdhbWUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgd2lkdGg6IDE5MjBweDtcbiAgaGVpZ2h0OiAxMDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgdG91Y2gtYWN0aW9uOiBhdXRvO1xufVxuLmdhbWUgLmFicyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5nYW1lIC5yb2FkX3BhdGgge1xuICBsZWZ0OiAtNzZweDtcbiAgdG9wOiA2NzNweDtcbn1cbi5nYW1lIC5yb2FkIHtcbiAgbGVmdDogLTc2cHg7XG4gIHRvcDogMzIzcHg7XG59XG4uZ2FtZSAuYnVpbGRpbmcxIHtcbiAgbGVmdDogMjg0cHg7XG4gIHRvcDogNTQ5cHg7XG59XG4uZ2FtZSAudHJlZTEge1xuICBsZWZ0OiAzOTdweDtcbiAgdG9wOiA1NTFweDtcbn1cbi5nYW1lIC5zZWxlY3Rpb24xIHtcbiAgbGVmdDogMTExcHg7XG4gIHRvcDogNDI1cHg7XG59XG4uZ2FtZSAuVHJ1Y2sxIHtcbiAgbGVmdDogMTI4cHg7XG4gIHRvcDogNzkycHg7XG59XG4uZ2FtZSAuVHJ1Y2syIHtcbiAgbGVmdDogNDA5cHg7XG4gIHRvcDogNjMwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG4uZ2FtZSAuVHJ1Y2szIHtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuZHJhZy1zY3JvbGwge1xuICB0b3VjaC1hY3Rpb246IHBhbi14IHBhbi15O1xufVxuZHJhZy1zY3JvbGwgLmRyYWctc2Nyb2xsLWNvbnRlbnQge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5xdWl6IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBhbmltYXRpb246IHpvb21JbiAwLjVzIGVhc2U7XG59XG4ucXVpeiAucGFuZWwge1xuICBtYXJnaW46IDIwcHg7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4ICMzMzMzMzM0Nztcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJpbWFyeS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Rjg2O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnByaW1hcnktYnRuLmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucXVlc3Rpb24ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuLnF1ZXN0aW9uIC5zdWJtaXQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnF1ZXN0aW9uIC5pbnN0ciB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICMwMDVGODY7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnF1ZXN0aW9uIC5jaG9pY2Uge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnF1ZXN0aW9uIC5zaW5nbGUtY2hvaWNlLFxuLnF1ZXN0aW9uIC5tdWx0aS1jaG9pY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogN3B4IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5xdWVzdGlvbiAuc2luZ2xlLWNob2ljZSAuZG90LFxuLnF1ZXN0aW9uIC5tdWx0aS1jaG9pY2UgLmRvdCB7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogNXB4O1xufVxuLnF1ZXN0aW9uIC5zaW5nbGUtY2hvaWNlIC5kb3QuYWN0aXZlLFxuLnF1ZXN0aW9uIC5tdWx0aS1jaG9pY2UgLmRvdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Rjg2O1xufVxuLnF1ZXN0aW9uIC5tdWx0aS1jaG9pY2Uge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLnF1ZXN0aW9uIC5tdWx0aS1jaG9pY2UgLmRvdCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5zb3J0aW5nIC5sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVGODY7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNlYXJuX2JhdGNoMSB7XG4gIGxlZnQ6IDg0NXB4O1xuICB0b3A6IDUzOHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4jZWFybl9iYXRjaDIge1xuICBsZWZ0OiAxNjQ1cHg7XG4gIHRvcDogMzAwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5yZXN1bHRfdGl0bGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1Rjg2O1xuICBtYXJnaW46IC0zMHB4IC0zMHB4IDAgLTMwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCAjMDAwMDAwM0Q7XG59XG5cbi5idWJibGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYnViYmxlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ1YmJsZSAudGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTM2cHg7XG4gIHRvcDogMTNweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ub3BhY2l0eTAge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uYmF0Y2gge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNiYXRjaCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbiNxdWVzdE5vQWRkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuQGtleWZyYW1lcyB6b29tSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/game/game.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/game/game.component.ts ***!
  \**********************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/MotionPathPlugin */ "./node_modules/gsap/MotionPathPlugin.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/app/pages/game/data.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");






let GameComponent = class GameComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.showPanel = true;
        // showPanel = false;
        this.showQuizScreen = 'intro';
        // showQuizScreen = '';
        this.score = 0;
        this.speed = 5;
        this.step = 1;
        this.totalQuestion = 6;
        this.questions = _data__WEBPACK_IMPORTED_MODULE_4__["data"];
        this.quizNo = 0;
        this.selectedQuiz = this.questions[this.quizNo];
        this.batchesArr = [];
        this.batches = 0;
        this.result = {
            title: '',
            bubble: ''
        };
        this.alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
        gsap_all__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(gsap_MotionPathPlugin__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }
    ngAfterViewInit() {
        this.tl = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
        this.onResize(null);
        //this.getQuiz(this.quizNo + 1);
        //this.animateBatch();
        //this.animateAddQuestion();
    }
    onResize(event) {
        const game = document.getElementById('game');
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;
        let scaleW = 1;
        let scaleH = 1;
        if (width < 1920) {
            scaleW = width / 1920;
        }
        if (height < 937) {
            scaleH = height / 937;
        }
        //console.log(scaleW, scaleH); 
        const scale = Math.min(scaleW, scaleH);
        game.style.transform = 'scale(' + scale + ')';
    }
    action(step) {
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
                this.tl.fromTo('#truck1', { x: -161, y: 100 }, {
                    x: 229, y: -140, duration: this.speed, onComplete: () => {
                        this.getQuiz(1);
                        //this.action(5);
                    }
                });
                break;
            case 2:
                this.showPanel = false;
                this.tl.set('#truck1', { opacity: 0 });
                this.tl.set('#truck2', { opacity: 1, duration: 0.1 });
                this.tl.fromTo('#truck2', { x: 0, y: 0 }, {
                    x: 160, y: 92, duration: this.speed / 1.5, delay: 2, onComplete: () => {
                        this.getQuiz(2);
                        //this.action(3);
                    }
                });
                break;
            //batch
            case 3:
                this.tl.to('#truck2', {
                    x: 240, y: 140, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__["Linear"], onComplete: () => {
                        // this.getQuiz(2);
                        this.tl.set('#truck2', { opacity: 0 });
                        this.tl.set('#truck1', { opacity: 1 });
                        this.tl.fromTo('#truck1', { x: 550, y: -15 }, {
                            x: 723, y: -111, duration: this.speed / 2, onComplete: () => {
                                this.animateAddQuestion();
                                this.tl.to('#earn_batch1', {
                                    opacity: 1, duration: 0.5, onComplete: () => {
                                        setTimeout(() => {
                                            this.getQuiz(3);
                                        }, 1000);
                                    }
                                });
                                // this.action(4);
                            }
                        });
                    }
                });
                break;
            case 4:
                this.tl.set('#truck2', { opacity: 1 });
                this.tl.set('#truck1', { opacity: 0 });
                this.tl.fromTo('#truck2', { x: 500, y: 40 }, {
                    x: 700, y: 165, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__["Linear"], onComplete: () => {
                        this.tl.set('#truck2', { opacity: 0 });
                        this.tl.set('#truck1', { opacity: 1 });
                        this.tl.fromTo('#truck1', { x: 1025, y: 20 }, {
                            x: 1150, y: -40, duration: this.speed / 2, onComplete: () => {
                                this.getQuiz(4);
                                //this.action(5);
                            }
                        });
                    }
                });
                break;
            case 5:
                this.tl.fromTo('#truck1', { x: 1150, y: -40 }, {
                    x: 1260, y: -110, duration: this.speed / 2, ease: gsap_all__WEBPACK_IMPORTED_MODULE_2__["Linear"], onComplete: () => {
                        this.tl.set('#truck1', { opacity: 0 });
                        this.tl.set('#truck3', { opacity: 1 });
                        this.tl.fromTo('#truck3', { x: 1394, y: 640 }, {
                            x: 1283, y: 571, duration: this.speed / 2, onComplete: () => {
                                //this.action(6);
                                this.getQuiz(5);
                            }
                        });
                    }
                });
                break;
            case 6:
                this.tl.fromTo('#truck3', { x: 1283, y: 571 }, {
                    x: 1125, y: 471, duration: this.speed / 2, onComplete: () => {
                        //this.getQuiz(1);
                        //console.log('came here');
                        this.tl.set('#truck1', { opacity: 1 });
                        this.tl.set('#truck3', { opacity: 0 });
                        this.tl.fromTo('#truck1', { x: 1013, y: -365 }, {
                            x: 1043, y: -380, duration: this.speed / 2, onComplete: () => {
                                this.getQuiz(6);
                                //this.action(6);
                            }
                        });
                    }
                });
                break;
            case 7:
                this.tl.fromTo('#truck1', { x: 1043, y: -380 }, {
                    x: 1209, y: -475, duration: this.speed / 2, onComplete: () => {
                        this.tl.set('#truck1', { opacity: 0 });
                        this.tl.set('#truck2', { opacity: 1 });
                        this.tl.fromTo('#truck2', { x: 1000, y: -300 }, {
                            x: 1000, y: -300, duration: this.speed / 2, onComplete: () => {
                                this.getQuiz(7);
                                //this.action(7);
                            }
                        });
                    }
                });
                break;
            //batch
            case 8:
                this.tl.set('#truck1', { opacity: 0 });
                this.tl.set('#truck2', { opacity: 1 });
                this.tl.to('#truck2', {
                    x: 1184, y: -200, duration: this.speed, onComplete: () => {
                        this.animateAddQuestion2();
                        this.tl.to('#earn_batch2', {
                            opacity: 1, duration: 0.5, onComplete: () => {
                                setTimeout(() => {
                                    this.getQuiz(8);
                                }, 1000);
                            }
                        });
                        // this.getQuiz(7)
                        //this.action(8);
                    }
                });
                break;
            case 9:
                this.tl.set('#truck1', { opacity: 0 });
                this.tl.set('#truck2', { opacity: 1 });
                this.tl.to('#truck2', {
                    x: 1484, y: -38, duration: this.speed, onComplete: () => {
                        // this.getQuiz(8);
                        //this.action(8);
                        this.tl.set('#truck2', { opacity: 0 });
                        this.tl.set('#earn_batch1', { opacity: 0 });
                        this.tl.set('#earn_batch2', { opacity: 0 });
                        this.tl.set('#truck2', { opacity: 0 });
                        this.tl.to('.game_layout', { opacity: 0 });
                        this.tl.to('.screen_10', {
                            opacity: 1, onComplete: () => {
                                setTimeout(() => {
                                    this.showPanel = true;
                                    this.showQuizScreen = 'miles';
                                    this.totalQuestion = 10;
                                    this.tl.to('#miles', { opacity: 1, duration: 1 });
                                }, 1000);
                            }
                        });
                    }
                });
                break;
            case 10:
                this.tl.to('.screen_10_1', {
                    opacity: 1, onComplete: () => {
                        setTimeout(() => {
                            this.showPanel = true;
                            this.getQuiz(10);
                        }, 1000);
                    }
                });
                break;
            case 11:
                this.showPanel = true;
                this.showQuizScreen = 'result';
                // this.score = 800;
                if (this.score >= 800) {
                    this.result.title = 'Congratulations! The product has been successfully delivered.';
                    this.result.bubble = 'Cargill came through for me on this order. These are the results that show me you can deliver on your promises and build my confidence that I will get excellent service from Cargill. Thankyou';
                }
                else if (this.score >= 400) {
                    this.result.title = 'Well done!';
                    this.result.bubble = 'Recommend to replay the game. ';
                }
                else {
                    this.result.title = 'Good try, but you missed it!';
                    this.result.bubble = `You can try the game again or revisit the learning in the ‘Order Management Process Overview’ pathway.`;
                }
                break;
            default:
                break;
        }
    }
    getQuiz(step) {
        console.log('getQuiz = ' + step);
        this.showPanel = true;
        this.showQuizScreen = 'quiz';
        this.selectedQuiz = this.questions[step - 1];
        this.selectedQuiz.choosen = false;
        this.selectedQuiz.submitted = false;
        this.quizNo = step;
    }
    quizSubmit(quiz) {
        if (quiz.type == 'single_choice') {
            if (quiz.choices[quiz.selected].correct == true) {
                this.setScore(quiz.score);
                quiz.correct = true;
                if (quiz.batch) {
                    this.animateBatch(1750, 300);
                }
                //quiz.feedbackText = quiz.feedback.correct;
                console.log(this.score);
            }
            else {
                //this.score = 0;
                if (quiz.feedback.choice_feedback) {
                    quiz.feedback.incorrect = quiz.feedback.choice_text[quiz.selected];
                }
                else {
                    //quiz.feedbackText = quiz.feedback.incorrect;
                }
                quiz.correct = false;
            }
            //console.log(quiz);
        }
        else if (quiz.type == 'sort_order') {
            let wrong = false;
            for (let i = 0; i < quiz.choices.length; i++) {
                const choice = quiz.choices[i];
                if (choice.correct != i + 1) {
                    wrong = true;
                }
            }
            if (wrong == false) {
                this.setScore(quiz.score);
                quiz.correct = true;
                quiz.feedbackText = quiz.feedback.correct;
            }
            else {
                quiz.correct = false;
                quiz.feedbackText = quiz.feedback.incorrect;
            }
        }
        else if (quiz.type == 'multiple_choice') {
            let wrong = false;
            for (let i = 0; i < quiz.choices.length; i++) {
                const choice = quiz.choices[i];
                if (choice.correct != choice.selected && choice.selected != undefined) {
                    console.log('multiple-choice ', i, choice.correct, choice.selected);
                    wrong = true;
                }
            }
            if (wrong == false) {
                this.setScore(quiz.score);
                quiz.correct = true;
                quiz.feedbackText = quiz.feedback.correct;
                console.log('batch' + quiz.batch);
                if (quiz.batch) {
                    this.animateBatch(900, 500);
                }
            }
            else {
                quiz.correct = false;
                quiz.feedbackText = quiz.feedback.incorrect;
            }
        }
        quiz.submitted = true;
    }
    animateBatch(xpos, ypos) {
        const tl1 = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
        this.showPanel = false;
        tl1.set('#batch', { x: xpos, y: ypos });
        tl1.fromTo('#batch', { opacity: 0 }, { opacity: 1, duration: 0.5 });
        tl1.to('#batch', { x: 1780, y: 200, delay: 0.5, duration: 0.5 });
        tl1.to('#batch', {
            opacity: 0, duration: 0.5, onComplete: () => {
                this.batches += 1;
                this.showPanel = true;
                this.cdRef.detectChanges();
            }
        });
    }
    animateAddQuestion() {
        const tl2 = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
        tl2.set('#questNoAdd', { x: 930, y: 550 });
        tl2.fromTo('#questNoAdd', { opacity: 0 }, { opacity: 1, duration: 0.5 });
        tl2.to('#questNoAdd', { x: 970, y: 90, delay: 0.5, duration: 0.5, onComplete: () => {
                this.totalQuestion += 1;
                this.cdRef.detectChanges();
            } });
        tl2.to('#questNoAdd', {
            opacity: 0, duration: 0.5
        });
    }
    animateAddQuestion2() {
        const tl2 = new gsap_all__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
        tl2.set('#questNoAdd', { x: 1730, y: 320 });
        tl2.fromTo('#questNoAdd', { opacity: 0 }, { opacity: 1, duration: 0.5 });
        tl2.to('#questNoAdd', { x: 970, y: 90, delay: 0.5, duration: 0.5, onComplete: () => {
                this.totalQuestion += 1;
                this.cdRef.detectChanges();
            } });
        tl2.to('#questNoAdd', {
            opacity: 0, duration: 0.5
        });
    }
    setScore(s) {
        this.score += s;
        /*gsap('#score_anim', {
          onComplete: () => {
            this.score += s;
          }
        });*/
    }
    drop(event) {
        console.log(event.previousIndex, event.currentIndex);
        this.selectedQuiz.choosen = true;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(this.selectedQuiz.choices, event.previousIndex, event.currentIndex);
    }
    counter(i) {
        return new Array(i);
    }
};
GameComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], GameComponent.prototype, "onResize", null);
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/game/game.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game.component.scss */ "./src/app/pages/game/game.component.scss")).default]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/quiz/quiz.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/quiz/quiz.component.ts ***!
  \**********************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuizComponent = class QuizComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quiz.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quiz/quiz.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quiz.component.scss */ "./src/app/pages/quiz/quiz.component.scss")).default]
    })
], QuizComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Project\GP\Cargill\OM In Action\om-in-action\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map