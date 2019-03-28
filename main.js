(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/list/list.component */ "./src/app/todo/list/list.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");





var routes = [
    {
        path: '',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"],
    },
    {
        path: 'list/:id',
        component: _todo_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app__menu\">\n\t<div class=\"app__menu-container\">\n\t\t<app-menu></app-menu>\n\t</div>\n</div>\n<div class=\"app__content\">\n\t<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app__menu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #1b1b1b;\n  right: 0;\n  border-bottom: 1px solid #353535; }\n\n.app__menu-container {\n  max-width: 1024px;\n  margin: 0 auto;\n  display: block;\n  padding: 0 32px; }\n\n.app__content {\n  max-width: 1024px;\n  margin: 0 auto;\n  display: block;\n  padding: 64px 32px 32px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHhhbXBwXFxodGRvY3NcXG5neHMtdG9kby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixnQ0FBZ0MsRUFBQTs7QUFHakM7RUFDQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX19tZW51IHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdGJhY2tncm91bmQ6ICMxYjFiMWI7XG5cdHJpZ2h0OiAwO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM1MzUzNTtcbn1cblxuLmFwcF9fbWVudS1jb250YWluZXIge1xuXHRtYXgtd2lkdGg6IDEwMjRweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiAwIDMycHg7XG59XG5cbi5hcHBfX2NvbnRlbnQge1xuXHRtYXgtd2lkdGg6IDEwMjRweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nOiA2NHB4IDMycHggMzJweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'task';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _todo_list_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/list/list.component */ "./src/app/todo/list/list.component.ts");
/* harmony import */ var _todo_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/new-task/new-task.component */ "./src/app/todo/new-task/new-task.component.ts");
/* harmony import */ var _todo_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./todo/task-list/task-list.component */ "./src/app/todo/task-list/task-list.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_10__["TodoComponent"],
                _todo_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"],
                _todo_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_9__["TaskListComponent"],
                _todo_list_list_component__WEBPACK_IMPORTED_MODULE_7__["ListComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _store_store_module__WEBPACK_IMPORTED_MODULE_6__["StoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\">\n  <a [routerLink]=\"''\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLinkActive]=\"'menu__link--active'\"\n     class=\"menu__link\">Strona główna</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  display: flex; }\n\n.menu__link {\n  padding: 12px 16px;\n  color: white;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  text-decoration: none;\n  border-bottom: 2px solid transparent; }\n\n.menu__link:hover {\n    color: goldenrod; }\n\n.menu__link:first-child {\n    margin-left: -16px; }\n\n.menu__link--active {\n  border-color: goldenrod; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxceGFtcHBcXGh0ZG9jc1xcbmd4cy10b2RvL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYSxFQUFBOztBQUdkO0VBQ0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG9DQUFvQyxFQUFBOztBQVJyQztJQVdFLGdCQUFnQixFQUFBOztBQVhsQjtJQWVFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNDLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWVudV9fbGluayB7XG5cdHBhZGRpbmc6IDEycHggMTZweDtcblx0Y29sb3I6IHdoaXRlO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRmb250LXNpemU6IDEycHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiBnb2xkZW5yb2Q7XG5cdH1cblxuXHQmOmZpcnN0LWNoaWxkIHtcblx0XHRtYXJnaW4tbGVmdDogLTE2cHg7XG5cdH1cbn1cblxuLm1lbnVfX2xpbmstLWFjdGl2ZSB7XG5cdGJvcmRlci1jb2xvcjogZ29sZGVucm9kO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/store/list/list.actions.ts":
/*!********************************************!*\
  !*** ./src/app/store/list/list.actions.ts ***!
  \********************************************/
/*! exports provided: ListAction, AssignTaskToListAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAction", function() { return ListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignTaskToListAction", function() { return AssignTaskToListAction; });
var ListAction = /** @class */ (function () {
    function ListAction(payload) {
        this.payload = payload;
    }
    ListAction.type = '[List] Add item';
    return ListAction;
}());

var AssignTaskToListAction = /** @class */ (function () {
    function AssignTaskToListAction(payload) {
        this.payload = payload;
    }
    AssignTaskToListAction.type = '[List] Assign task to list';
    return AssignTaskToListAction;
}());



/***/ }),

/***/ "./src/app/store/list/list.state.ts":
/*!******************************************!*\
  !*** ./src/app/store/list/list.state.ts ***!
  \******************************************/
/*! exports provided: ListState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListState", function() { return ListState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store/operators */ "./node_modules/@ngxs/store/fesm5/ngxs-store-operators.js");
/* harmony import */ var _task_task_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task/task.actions */ "./src/app/store/task/task.actions.ts");
/* harmony import */ var _task_task_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task/task.state */ "./src/app/store/task/task.state.ts");
/* harmony import */ var _list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.actions */ "./src/app/store/list/list.actions.ts");






var ListState = /** @class */ (function () {
    function ListState() {
    }
    ListState_1 = ListState;
    ListState.getItems = function (state) {
        return state.items;
    };
    ListState.getListWithItems = function (id) {
        return Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ListState_1, _task_task_state__WEBPACK_IMPORTED_MODULE_4__["TaskState"]], function (listState, taskState) {
            var foundList = listState.items.find(function (list) {
                return list.id === id;
            });
            var items = [];
            foundList._items.forEach(function (taskId) {
                items.push(taskState.items.find(function (task) {
                    return task.id === taskId;
                }));
            });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, foundList, { items: items });
        });
    };
    ListState.getListById = function (id) {
        return Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])([ListState_1], function (state) {
            return state.items.find(function (el) {
                return el.id === id;
            });
        });
    };
    ListState.prototype.assignTaskToList = function (ctx, _a) {
        var payload = _a.payload;
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({
            items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(function (list) { return list.id === payload.listId; }, Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({ _items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["append"])([payload.taskId]) })),
        }));
    };
    ListState.prototype.remove = function (ctx, _a) {
        var payload = _a.payload;
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({
            items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(function (list) { return list._items.indexOf(payload.id) > -1; }, Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({ _items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["removeItem"])(function (taskId) { return taskId === payload.id; }) })),
        }));
    };
    var ListState_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_list_actions__WEBPACK_IMPORTED_MODULE_5__["AssignTaskToListAction"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _list_actions__WEBPACK_IMPORTED_MODULE_5__["AssignTaskToListAction"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ListState.prototype, "assignTaskToList", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_task_task_actions__WEBPACK_IMPORTED_MODULE_3__["TodoRemove"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _task_task_actions__WEBPACK_IMPORTED_MODULE_3__["TodoRemove"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ListState.prototype, "remove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ListState, "getItems", null);
    ListState = ListState_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'list',
            defaults: {
                items: [
                    {
                        id: '1',
                        name: 'Lista zakupów',
                        _items: ['1', '2'],
                        loading: false,
                    }, {
                        id: '2',
                        name: 'Zadania',
                        _items: ['3'],
                        loading: false,
                    },
                ],
            },
        })
    ], ListState);
    return ListState;
}());



/***/ }),

/***/ "./src/app/store/store.config.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.config.ts ***!
  \***************************************/
/*! exports provided: STATES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES", function() { return STATES; });
/* harmony import */ var _task_task_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task/task.state */ "./src/app/store/task/task.state.ts");
/* harmony import */ var _list_list_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.state */ "./src/app/store/list/list.state.ts");


var STATES = [_task_task_state__WEBPACK_IMPORTED_MODULE_0__["TaskState"], _list_list_state__WEBPACK_IMPORTED_MODULE_1__["ListState"]];


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "./node_modules/@ngxs/devtools-plugin/fesm5/ngxs-devtools-plugin.js");
/* harmony import */ var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/router-plugin */ "./node_modules/@ngxs/router-plugin/fesm5/ngxs-router-plugin.js");
/* harmony import */ var _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/storage-plugin */ "./node_modules/@ngxs/storage-plugin/fesm5/ngxs-storage-plugin.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _store_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.config */ "./src/app/store/store.config.ts");








var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["NgxsModule"].forRoot(_store_config__WEBPACK_IMPORTED_MODULE_7__["STATES"], {
                    developmentMode: true,
                }),
                _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_4__["NgxsRouterPluginModule"].forRoot(),
                _ngxs_storage_plugin__WEBPACK_IMPORTED_MODULE_5__["NgxsStoragePluginModule"].forRoot(),
                _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_3__["NgxsReduxDevtoolsPluginModule"].forRoot(),
            ],
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/app/store/task/task.actions.ts":
/*!********************************************!*\
  !*** ./src/app/store/task/task.actions.ts ***!
  \********************************************/
/*! exports provided: TodoAdd, TodoRemove, TodoComplete, TodoUncomplete, TodoToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoAdd", function() { return TodoAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRemove", function() { return TodoRemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComplete", function() { return TodoComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoUncomplete", function() { return TodoUncomplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoToggle", function() { return TodoToggle; });
var TodoAdd = /** @class */ (function () {
    function TodoAdd(payload) {
        this.payload = payload;
    }
    TodoAdd.type = '[Todo] Add task';
    return TodoAdd;
}());

var TodoRemove = /** @class */ (function () {
    function TodoRemove(payload) {
        this.payload = payload;
    }
    TodoRemove.type = '[Todo] Remove task';
    return TodoRemove;
}());

var TodoComplete = /** @class */ (function () {
    function TodoComplete(payload) {
        this.payload = payload;
    }
    TodoComplete.type = '[Todo] Complete task';
    return TodoComplete;
}());

var TodoUncomplete = /** @class */ (function () {
    function TodoUncomplete(payload) {
        this.payload = payload;
    }
    TodoUncomplete.type = '[Todo] Uncomplete task';
    return TodoUncomplete;
}());

var TodoToggle = /** @class */ (function () {
    function TodoToggle(payload) {
        this.payload = payload;
    }
    TodoToggle.type = '[Todo] Toggle task';
    return TodoToggle;
}());



/***/ }),

/***/ "./src/app/store/task/task.state.ts":
/*!******************************************!*\
  !*** ./src/app/store/task/task.state.ts ***!
  \******************************************/
/*! exports provided: TaskState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskState", function() { return TaskState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store/operators */ "./node_modules/@ngxs/store/fesm5/ngxs-store-operators.js");
/* harmony import */ var _list_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list/list.actions */ "./src/app/store/list/list.actions.ts");
/* harmony import */ var _task_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.actions */ "./src/app/store/task/task.actions.ts");





var TaskState = /** @class */ (function () {
    function TaskState() {
    }
    TaskState.getState = function (state) {
        return state;
    };
    TaskState.prototype.add = function (ctx, _a) {
        var payload = _a.payload;
        var id = ctx.getState().nextId;
        var task = {
            id: id,
            completed: false,
            name: payload.name,
        };
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({
            items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["append"])([task]),
            nextId: (+id + 1) + '',
        }));
        ctx.dispatch(new _list_list_actions__WEBPACK_IMPORTED_MODULE_3__["AssignTaskToListAction"]({ taskId: id, listId: payload.listId }));
    };
    TaskState.prototype.remove = function (ctx, _a) {
        var payload = _a.payload;
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({
            items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["removeItem"])(function (el) { return el.id === payload.id; }),
        }));
    };
    TaskState.prototype.complete = function (ctx, _a) {
        var payload = _a.payload;
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({
            items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(function (item) { return item.id === payload.id; }, Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({ completed: true })),
        }));
    };
    TaskState.prototype.uncomplete = function (ctx, _a) {
        var payload = _a.payload;
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({
            items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(function (item) { return item.id === payload.id; }, Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({ completed: false })),
        }));
    };
    TaskState.prototype.toggleComplete = function (ctx, _a) {
        var payload = _a.payload;
        var prevValue = ctx.getState().items.find(function (item) { return item.id === payload.id; }).completed;
        ctx.setState(Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({
            items: Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["updateItem"])(function (item) { return item.id === payload.id; }, Object(_ngxs_store_operators__WEBPACK_IMPORTED_MODULE_2__["patch"])({ completed: !prevValue })),
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoAdd"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoAdd"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TaskState.prototype, "add", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoRemove"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoRemove"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TaskState.prototype, "remove", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoComplete"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoComplete"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TaskState.prototype, "complete", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoUncomplete"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoComplete"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TaskState.prototype, "uncomplete", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoToggle"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _task_actions__WEBPACK_IMPORTED_MODULE_4__["TodoComplete"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TaskState.prototype, "toggleComplete", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TaskState, "getState", null);
    TaskState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'todo',
            defaults: {
                items: [
                    {
                        id: '1',
                        name: 'Masło',
                        completed: false,
                    },
                    {
                        id: '2',
                        name: 'Chleb',
                        completed: false,
                    },
                    {
                        id: '3',
                        name: 'Przeczytać książkę',
                        completed: false,
                    },
                ],
                nextId: '4',
            },
        })
    ], TaskState);
    return TaskState;
}());



/***/ }),

/***/ "./src/app/todo/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/todo/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo\" *ngIf=\"(list$ | async) as list\">\r\n\t<h2 class=\"todo__header\">\r\n\t\t{{list.name}}\r\n\t</h2>\r\n\t<div class=\"todo__input\">\r\n\t\t<app-new-task (createChange)=\"create($event)\"></app-new-task>\r\n\t</div>\r\n\t<div class=\"todo__list\">\r\n\t\t<app-task-list\r\n\t\t\t(toggleChange)=\"toggle($event)\" (removeChange)=\"remove($event)\"\r\n\t\t\t[list]=\"list.items\"\r\n\t\t></app-task-list>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo/list/list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/todo/list/list.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo__input {\n  border-bottom: 1px solid #404040;\n  margin-bottom: 8px;\n  padding-bottom: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9saXN0L0M6XFx4YW1wcFxcaHRkb2NzXFxuZ3hzLXRvZG8vc3JjXFxhcHBcXHRvZG9cXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdG9kby9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kb19faW5wdXQge1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQwNDA0MDtcblx0bWFyZ2luLWJvdHRvbTogOHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/todo/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_list_list_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/list/list.state */ "./src/app/store/list/list.state.ts");
/* harmony import */ var _store_task_task_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/task/task.actions */ "./src/app/store/task/task.actions.ts");







var ListComponent = /** @class */ (function () {
    function ListComponent(store, activatedRoute) {
        this.store = store;
        this.activatedRoute = activatedRoute;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.id = this.activatedRoute.snapshot.params.id;
        this.list$ = this.store.select(_store_list_list_state__WEBPACK_IMPORTED_MODULE_5__["ListState"].getListWithItems(this.id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (list) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, list, { items: list.items.sort(function (a, b) {
                    return a.completed === b.completed ? 0 : a.completed ? 1 : -1;
                }) });
        }));
    };
    ListComponent.prototype.create = function (task) {
        this.store.dispatch(new _store_task_task_actions__WEBPACK_IMPORTED_MODULE_6__["TodoAdd"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, { listId: this.id })));
    };
    ListComponent.prototype.remove = function (id) {
        this.store.dispatch(new _store_task_task_actions__WEBPACK_IMPORTED_MODULE_6__["TodoRemove"]({ id: id }));
    };
    ListComponent.prototype.complete = function (id) {
        this.store.dispatch(new _store_task_task_actions__WEBPACK_IMPORTED_MODULE_6__["TodoComplete"]({ id: id }));
    };
    ListComponent.prototype.toggle = function (id) {
        this.store.dispatch(new _store_task_task_actions__WEBPACK_IMPORTED_MODULE_6__["TodoToggle"]({ id: id }));
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/todo/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/todo/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/todo/new-task/new-task.component.html":
/*!*******************************************************!*\
  !*** ./src/app/todo/new-task/new-task.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field\">\r\n\t<input (keyup.enter)=\"create()\" [(ngModel)]=\"newTask\" class=\"field__input\" placeholder=\"Dodaj nowe zadanie...\"\r\n\t\t\t type=\"text\">\r\n\t<button (click)=\"create()\" class=\"field__btn\">+ Dodaj</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo/new-task/new-task.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/todo/new-task/new-task.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".field {\n  display: flex; }\n\n.field__input {\n  flex: 0 1 100%;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 16px;\n  border-radius: 4px;\n  color: white;\n  font-weight: bold;\n  background: #1b1b1b;\n  border: 1px solid #353535;\n  font-size: 14px; }\n\n.field__btn {\n  cursor: pointer;\n  height: 32px;\n  line-height: 32px;\n  padding: 0 16px;\n  border-radius: 4px;\n  margin-left: 8px;\n  background: goldenrod;\n  color: white;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 14px;\n  letter-spacing: 1px;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9uZXctdGFzay9DOlxceGFtcHBcXGh0ZG9jc1xcbmd4cy10b2RvL3NyY1xcYXBwXFx0b2RvXFxuZXctdGFza1xcbmV3LXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhLEVBQUE7O0FBSWQ7RUFDQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90b2RvL25ldy10YXNrL25ldy10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkIHtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuXG4uZmllbGRfX2lucHV0IHtcblx0ZmxleDogMCAxIDEwMCU7XG5cdGhlaWdodDogMzJweDtcblx0bGluZS1oZWlnaHQ6IDMycHg7XG5cdHBhZGRpbmc6IDAgMTZweDtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRiYWNrZ3JvdW5kOiAjMWIxYjFiO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzUzNTM1O1xuXHRmb250LXNpemU6IDE0cHg7XG59XG5cbi5maWVsZF9fYnRuIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRoZWlnaHQ6IDMycHg7XG5cdGxpbmUtaGVpZ2h0OiAzMnB4O1xuXHRwYWRkaW5nOiAwIDE2cHg7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0bWFyZ2luLWxlZnQ6IDhweDtcblx0YmFja2dyb3VuZDogZ29sZGVucm9kO1xuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxldHRlci1zcGFjaW5nOiAxcHg7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/todo/new-task/new-task.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/new-task/new-task.component.ts ***!
  \*****************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewTaskComponent = /** @class */ (function () {
    function NewTaskComponent() {
        this.createChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newTask = '';
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent.prototype.create = function () {
        if (this.newTask.length > 0) {
            this.createChange.emit({ name: this.newTask });
            this.newTask = '';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewTaskComponent.prototype, "createChange", void 0);
    NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-task',
            template: __webpack_require__(/*! ./new-task.component.html */ "./src/app/todo/new-task/new-task.component.html"),
            styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/todo/new-task/new-task.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewTaskComponent);
    return NewTaskComponent;
}());



/***/ }),

/***/ "./src/app/todo/task-list/task-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/todo/task-list/task-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of list\" [class.task-list__element--completed]=\"item.completed\" class=\"task-list__element\">\r\n\t<div class=\"task-list__element-toggle\" (click)=\"toggle(item.id)\"></div>\r\n\t<div class=\"task-list__element-body\">\r\n\t\t{{ item.name }}\r\n\t</div>\r\n\t<div class=\"task-list__element-options\">\r\n\t\t<button (click)=\"remove(item.id)\" class=\"task-list__element-link\">Usuń</button>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo/task-list/task-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/todo/task-list/task-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".completed {\n  color: green; }\n\n.task-list__element {\n  margin: 8px 0;\n  background: #1b1b1b;\n  padding: 12px 16px;\n  border-radius: 4px;\n  display: flex;\n  justify-content: space-between; }\n\n.task-list__element-toggle {\n  content: \"\";\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  background: #404040;\n  margin-right: 16px;\n  border-radius: 4px;\n  cursor: pointer; }\n\n.task-list__element-toggle:hover {\n    background: rgba(218, 165, 32, 0.2); }\n\n.task-list__element-body {\n  width: 100%; }\n\n.task-list__element--completed {\n  text-decoration: line-through; }\n\n.task-list__element--completed .task-list__element-toggle {\n    background: goldenrod; }\n\n.task-list__element-options {\n  margin: 0 -8px;\n  white-space: nowrap; }\n\n.task-list__element-link {\n  color: white;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: bold;\n  margin: 0 8px;\n  cursor: pointer; }\n\n.task-list__element-link:hover {\n    color: goldenrod; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90YXNrLWxpc3QvQzpcXHhhbXBwXFxodGRvY3NcXG5neHMtdG9kby9zcmNcXGFwcFxcdG9kb1xcdGFzay1saXN0XFx0YXNrLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBUmhCO0lBV0UsbUNBQTBCLEVBQUE7O0FBSTVCO0VBQ0MsV0FBVyxFQUFBOztBQUdaO0VBQ0MsNkJBQTZCLEVBQUE7O0FBRDlCO0lBSUUscUJBQXFCLEVBQUE7O0FBSXZCO0VBQ0MsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQU5oQjtJQVNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdG9kby90YXNrLWxpc3QvdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXBsZXRlZCB7XHJcblx0Y29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4udGFzay1saXN0X19lbGVtZW50IHtcclxuXHRtYXJnaW46IDhweCAwO1xyXG5cdGJhY2tncm91bmQ6ICMxYjFiMWI7XHJcblx0cGFkZGluZzogMTJweCAxNnB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRhc2stbGlzdF9fZWxlbWVudC10b2dnbGUge1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGhlaWdodDogMTZweDtcclxuXHR3aWR0aDogMTZweDtcclxuXHRiYWNrZ3JvdW5kOiAjNDA0MDQwO1xyXG5cdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoZ29sZGVucm9kLCAwLjIpO1xyXG5cdH1cclxufVxyXG5cclxuLnRhc2stbGlzdF9fZWxlbWVudC1ib2R5IHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhc2stbGlzdF9fZWxlbWVudC0tY29tcGxldGVkIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuXHJcblx0LnRhc2stbGlzdF9fZWxlbWVudC10b2dnbGUge1xyXG5cdFx0YmFja2dyb3VuZDogZ29sZGVucm9kO1xyXG5cdH1cclxufVxyXG5cclxuLnRhc2stbGlzdF9fZWxlbWVudC1vcHRpb25zIHtcclxuXHRtYXJnaW46IDAgLThweDtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGFzay1saXN0X19lbGVtZW50LWxpbmsge1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRtYXJnaW46IDAgOHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRjb2xvcjogZ29sZGVucm9kO1xyXG5cdH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/todo/task-list/task-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/task-list/task-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaskListComponent = /** @class */ (function () {
    function TaskListComponent() {
        this.removeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.completeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    TaskListComponent.prototype.ngOnInit = function () {
    };
    TaskListComponent.prototype.remove = function (id) {
        this.removeChange.emit(id);
    };
    TaskListComponent.prototype.complete = function (id) {
        this.completeChange.emit(id);
    };
    TaskListComponent.prototype.toggle = function (id) {
        this.toggleChange.emit(id);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TaskListComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskListComponent.prototype, "removeChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskListComponent.prototype, "completeChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskListComponent.prototype, "toggleChange", void 0);
    TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/todo/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.scss */ "./src/app/todo/task-list/task-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Twoje listy zadań</h2>\r\n<div class=\"todo\">\r\n\t<button *ngFor=\"let list of lists$ | async\" [routerLink]=\"['list', list.id]\" class=\"todo__card\">\r\n\t\t<span class=\"todo__card-title\">\r\n\t\t\t{{list.name}}\r\n\t\t</span>\r\n\t\t<div class=\"todo__card-details\">\r\n\t\t\tLista zadań: {{list._items.length}}\r\n\t\t</div>\r\n\t</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo/todo.component.scss":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));\n  grid-gap: 16px; }\n\n.todo__card {\n  display: block;\n  background: #1d1d1d;\n  border: none;\n  border-radius: 8px;\n  color: white;\n  cursor: pointer;\n  transition: 0.2s all;\n  padding: 24px;\n  text-align: left; }\n\n.todo__card:hover {\n    box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);\n    background: #121212; }\n\n.todo__card:focus {\n    outline: none; }\n\n.todo__card-title {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 16px;\n  display: block; }\n\n.todo__card-details {\n  font-size: 16px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9DOlxceGFtcHBcXGh0ZG9jc1xcbmd4cy10b2RvL3NyY1xcYXBwXFx0b2RvXFx0b2RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQVRqQjtJQVlFLHVDQUErQjtJQUMvQixtQkFBbUIsRUFBQTs7QUFickI7SUFnQkUsYUFBYSxFQUFBOztBQUlmO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdmO0VBQ0MsZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b2RvIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNThweCwgMWZyKSk7XG5cdGdyaWQtZ2FwOiAxNnB4O1xufVxuXG4udG9kb19fY2FyZCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRiYWNrZ3JvdW5kOiAjMWQxZDFkO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IDAuMnMgYWxsO1xuXHRwYWRkaW5nOiAyNHB4O1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXG5cdCY6aG92ZXIge1xuXHRcdGJveC1zaGFkb3c6IDAgMCAzMnB4IHJnYmEoYmxhY2ssIDAuNSk7XG5cdFx0YmFja2dyb3VuZDogIzEyMTIxMjtcblx0fVxuXHQmOmZvY3VzIHtcblx0XHRvdXRsaW5lOiBub25lO1xuXHR9XG59XG5cbi50b2RvX19jYXJkLXRpdGxlIHtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi50b2RvX19jYXJkLWRldGFpbHMge1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "./node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_list_list_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/list/list.state */ "./src/app/store/list/list.state.ts");





var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_store_list_list_state__WEBPACK_IMPORTED_MODULE_4__["ListState"].getItems),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], TodoComponent.prototype, "lists$", void 0);
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/todo/todo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    hmr: false,
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _ngxs_hmr_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/hmr-plugin */ "./node_modules/@ngxs/hmr-plugin/fesm5/ngxs-hmr-plugin.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrap = function () { return Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]); };
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hmr) {
    Object(_ngxs_hmr_plugin__WEBPACK_IMPORTED_MODULE_2__["hmr"])(module, bootstrap).catch(function (err) { return console.error(err); });
}
else {
    bootstrap().catch(function (err) { return console.log(err); });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\ngxs-todo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map