/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

    Stores basic information that all html components use

*/

var Html = function () {
    function Html(config) {
        _classCallCheck(this, Html);

        if (!config) {
            config = {};
        }
        this._config = config;

        config = this.setConfigDefaults({
            parent: document.body
        });

        this.template = '<div></div>';
        this.node = $(this.template);
        this.parent = $(config.parent);
        this.attr = {};
        this.prop = {};
        this.css = {};
        this.class = '';
    }

    _createClass(Html, [{
        key: 'assignConfig',
        value: function assignConfig(config) {
            Object.assign(this, config);
        }
    }, {
        key: '_render',
        value: function _render(parent) {
            if (this._rendered) {
                console.warn('Element tried to render more than once.');console.trace();
                return;
            }

            // convert template html into a node
            this.node = $(this.template);

            // assign attributes
            // Attributes are assigned first since they must be strings
            this.node.attr(this.attr);

            // assign properties
            // prop and attr can assign the same things to an element,
            // but prop allows for non-string values.
            this.node.prop(this.prop);

            // Apply inline styling
            this.node.css(this.css);

            // add styling classes
            this.node.addClass(this.class);

            // Append object to parent
            this.parent.append(this.node[0]);

            this._rendered = true;
        }
    }, {
        key: 'render',
        value: function render(parent) {
            this._render(parent);
        }
    }, {
        key: 'renderToParent',
        value: function renderToParent() {
            this.render(this.parent);
        }
    }, {
        key: 'setConfigDefaults',
        value: function setConfigDefaults(defaults, assign) {
            var config = void 0,
                item = void 0,
                key = void 0;

            config = this._config;

            if (!config) {
                config = {};
            }

            for (key in defaults) {
                item = defaults[key];

                if (!(key in config)) {
                    config[key] = item;
                }
            }

            return config;
        }
    }]);

    return Html;
}();

exports.default = Html;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

    Stores basic information that all html components use

*/

var Html = function () {
    function Html(config) {
        _classCallCheck(this, Html);

        if (!config) {
            config = {};
        }
        this._config = config;

        config = this.setConfigDefaults({
            parent: document.body
        });

        this.template = '<div></div>';
        this.node = $(this.template);
        this.parent = $(config.parent);
        this.attr = {};
        this.prop = {};
        this.css = {};
        this.class = '';
    }

    _createClass(Html, [{
        key: 'assignConfig',
        value: function assignConfig(config) {
            Object.assign(this, config);
        }
    }, {
        key: '_render',
        value: function _render(parent) {
            if (this._rendered) {
                console.warn('Element tried to render more than once.');console.trace();
                return;
            }

            // convert template html into a node
            this.node = $(this.template);

            // assign attributes
            // Attributes are assigned first since they must be strings
            this.node.attr(this.attr);

            // assign properties
            // prop and attr can assign the same things to an element,
            // but prop allows for non-string values.
            this.node.prop(this.prop);

            // Apply inline styling
            this.node.css(this.css);

            // add styling classes
            this.node.addClass(this.class);

            // Append object to parent
            this.parent.append(this.node[0]);

            this._rendered = true;
        }
    }, {
        key: 'render',
        value: function render(parent) {
            this._render(parent);
        }
    }, {
        key: 'renderToParent',
        value: function renderToParent() {
            this.render(this.parent);
        }
    }, {
        key: 'setConfigDefaults',
        value: function setConfigDefaults(defaults, assign) {
            var config = void 0,
                item = void 0,
                key = void 0;

            config = this._config;

            if (!config) {
                config = {};
            }

            for (key in defaults) {
                item = defaults[key];

                if (!(key in config)) {
                    config[key] = item;
                }
            }

            return config;
        }
    }]);

    return Html;
}();

exports.default = Html;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates a label comprised of three parts: prefix, content, and suffix
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Holds helper functions for making modifications easy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Label = function (_Html) {
    _inherits(Label, _Html);

    function Label(config) {
        _classCallCheck(this, Label);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onClick: function onClick(data) {
                console.log('clicked', data);
            },
            class: 'ui label',
            prefix: '',
            content: 'Hello world!',
            suffix: ''
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();
        return _this;
    }

    _createClass(Label, [{
        key: 'render',
        value: function render(parent) {
            this.template = '\n            <div>\n                <div class="prefix">' + this.prefix + '</div>\n                <div class="content">' + this.content + '</div>\n                <div class="suffix">' + this.suffix + '</div>\n            </div>\n        ';

            this._render(parent);

            this.prefixNode = this.node.find('.prefix');
            this.contentNode = this.node.find('.content');
            this.suffixNode = this.node.find('.suffix');
        }
    }, {
        key: 'setPrefix',
        value: function setPrefix(prefix) {
            this.prefixNode.html(prefix);
        }
    }, {
        key: 'setContent',
        value: function setContent(content) {
            this.contentNode.html(content);
        }
    }, {
        key: 'setSuffix',
        value: function setSuffix(suffix) {
            this.suffixNode.html(suffix);
        }
    }, {
        key: 'getPrefix',
        value: function getPrefix() {
            return this.prefixNode.html();
        }
    }, {
        key: 'getContent',
        value: function getContent() {
            return this.contentNode.html();
        }
    }, {
        key: 'getSuffix',
        value: function getSuffix() {
            return this.suffixNode.html();
        }
    }]);

    return Label;
}(_HTML2.default);

exports.default = Label;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates a button object and its own html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Takes a callback for when it is clicked
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Button = function (_Html) {
    _inherits(Button, _Html);

    function Button(config) {
        _classCallCheck(this, Button);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onClick: function onClick(data) {
                console.log('clicked', data);
            },
            class: 'ui button',
            label: 'Click Me!'
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        // Assign event handlers
        _this.node.click(function (event) {
            _this.clickHandler(event);
        });
        return _this;
    }

    // default click hanlder if nothing is given


    _createClass(Button, [{
        key: 'clickHandler',
        value: function clickHandler(event) {
            this.onClick({
                node: this.node,
                target: this,
                event: event
            });
        }

        // Overriding render function to update template as well

    }, {
        key: 'render',
        value: function render(parent) {
            // Update template
            this.template = '<div>' + this.label + '</div>';

            // Call original render function
            this._render(parent);
        }
    }]);

    return Button;
}(_HTML2.default);

exports.default = Button;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

var _Label = __webpack_require__(2);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Groups elements together under a div
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Can easily add or remove elements
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Group = function (_Html) {
    _inherits(Group, _Html);

    function Group(config) {
        _classCallCheck(this, Group);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            label: {},
            class: 'ui segment group'
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        // Collect needed information to work
        _this.content = _this.node.find('div.content');

        // Create child objects
        config.label.parent = _this.node.find('div.label > div > label');
        _this.label = new _Label2.default(config.label);

        return _this;
    }

    _createClass(Group, [{
        key: 'render',
        value: function render(parent) {
            this.template = '\n            <div>\n                <div class="label">\n                    <div>\n                        <label></label>\n                    </div>\n                </div>\n                <div class="content">\n                </div>\n            </div>\n        ';

            this._render(parent);
        }
    }, {
        key: 'addContent',
        value: function addContent(node) {
            this.content.append(node);
        }
    }, {
        key: 'removeContent',
        value: function removeContent(node) {
            this.content.remove(node);
        }
    }]);

    return Group;
}(_HTML2.default);

exports.default = Group;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates an input field
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Handles changes to input and enter key press
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Input = function (_Html) {
    _inherits(Input, _Html);

    function Input(config) {
        _classCallCheck(this, Input);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onInput: function onInput(data) {
                console.log('User typed in input: ', data);
            },
            onEnter: function onEnter(data) {
                console.log('User pressed enter in input: ', data);
            },
            template: '<input>',
            class: 'ui input'
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        // Create event handlers
        _this.node.on('input', function (event) {
            _this.inputHandler(event);
        });
        _this.node.on('keypress', function (event) {
            if (event.which != 13) {
                return;
            }_this.enterHandler(event);
        });
        return _this;
    }

    _createClass(Input, [{
        key: 'inputHandler',
        value: function inputHandler(event) {
            this.onInput({
                target: this,
                event: event,
                node: this.node,
                value: this.node[0].value
            });
        }
    }, {
        key: 'enterHandler',
        value: function enterHandler(event) {
            this.onEnter({
                target: this,
                event: event,
                node: this.node,
                value: this.node[0].value
            });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var val = this.node.prop('value');

            if (!isNaN(Number(val))) {
                val = Number(val);
            }

            return val;
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.node.prop({ value: value });
        }
    }, {
        key: 'getIsCheckedAsBoolean',
        value: function getIsCheckedAsBoolean() {
            if (this.node[0].type == "checkbox") {
                return this.node[0].checked;
            }
        }
    }]);

    return Input;
}(_HTML2.default);

exports.default = Input;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(1);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates a label comprised of three parts: prefix, content, and suffix
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Holds helper functions for making modifications easy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Label = function (_Html) {
    _inherits(Label, _Html);

    function Label(config) {
        _classCallCheck(this, Label);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Label.__proto__ || Object.getPrototypeOf(Label)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onClick: function onClick(data) {
                console.log('clicked', data);
            },
            class: 'ui label',
            prefix: '',
            content: 'Hello world!',
            suffix: ''
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();
        return _this;
    }

    _createClass(Label, [{
        key: 'render',
        value: function render(parent) {
            this.template = '\n            <div>\n                <div class="prefix">' + this.prefix + '</div>\n                <div class="content">' + this.content + '</div>\n                <div class="suffix">' + this.suffix + '</div>\n            </div>\n        ';

            this._render(parent);

            this.prefixNode = this.node.find('.prefix');
            this.contentNode = this.node.find('.content');
            this.suffixNode = this.node.find('.suffix');
        }
    }, {
        key: 'setPrefix',
        value: function setPrefix(prefix) {
            this.prefixNode.html(prefix);
        }
    }, {
        key: 'setContent',
        value: function setContent(content) {
            this.contentNode.html(content);
        }
    }, {
        key: 'setSuffix',
        value: function setSuffix(suffix) {
            this.suffixNode.html(suffix);
        }
    }, {
        key: 'getPrefix',
        value: function getPrefix() {
            return this.prefixNode.html();
        }
    }, {
        key: 'getContent',
        value: function getContent() {
            return this.contentNode.html();
        }
    }, {
        key: 'getSuffix',
        value: function getSuffix() {
            return this.suffixNode.html();
        }
    }]);

    return Label;
}(_HTML2.default);

exports.default = Label;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(8);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create the App
// Pass in schema for app here
window.VileSpawn = new _App2.default({
    stageQuerySelector: "#stage",
    exportFileName: "entity-animation-data.json",
    canvasHeight: 512,
    canvasWidth: 512,
    defaultFrameDuration: 200,
    background: {
        scrollSpeed: 3.3
    },
    animationCategories: {
        'Idle': {
            'face-right': {},
            'face-left': {},
            'face-right-away': { optional: true },
            'face-left-away': { optional: true }
        },
        'Movement': {
            'face-right': { scrollDir: 'right up' },
            'face-left': { scrollDir: 'left up' },
            'face-right-away': { scrollDir: 'down right', optional: true },
            'face-left-away': { scrollDir: 'down left', optional: true }
        },
        'Combat': {
            'basic-attack': {},
            'cast-ability': {},
            'hurt': {},
            '(knockedout-start)': { optional: true },
            'knockedout-loop': {}
        }
    }
}); // import files needed here
//import App from './Kitchen-Sink'

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Base Components


// App Components


var _Tabber = __webpack_require__(9);

var _Tabber2 = _interopRequireDefault(_Tabber);

var _Group = __webpack_require__(4);

var _Group2 = _interopRequireDefault(_Group);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _TextFileInput = __webpack_require__(10);

var _TextFileInput2 = _interopRequireDefault(_TextFileInput);

var _AnimationForm = __webpack_require__(11);

var _AnimationForm2 = _interopRequireDefault(_AnimationForm);

var _AboutForm = __webpack_require__(19);

var _AboutForm2 = _interopRequireDefault(_AboutForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App(_ref) {
        var _this = this;

        var stageQuerySelector = _ref.stageQuerySelector,
            headerQuerySelector = _ref.headerQuerySelector,
            animationCategories = _ref.animationCategories,
            canvasHeight = _ref.canvasHeight,
            canvasWidth = _ref.canvasWidth,
            defaultFrameDuration = _ref.defaultFrameDuration,
            background = _ref.background,
            exportFileName = _ref.exportFileName;

        _classCallCheck(this, App);

        this.const = {};
        this.const.CANVAS_HEIGHT = canvasHeight;
        this.const.CANVAS_WIDTH = canvasWidth;
        this.const.DEFAULT_FRAME_DURATION = defaultFrameDuration;
        this.const.EXPORT_FILE_NAME = exportFileName;

        this.groups = {
            animation: new _Group2.default({
                parent: $(stageQuerySelector),
                label: {
                    content: 'Animations'
                }
            }),
            data: new _Group2.default({
                parent: $("#footer-bar"),
                class: 'ui segment group data-area',
                label: {
                    content: 'Save/Load'
                }
            })
        };

        this.dataImporter = new _TextFileInput2.default({
            parent: $(document.body),
            onFile: function onFile(data) {
                _this.HandleDataImport(data);
            }
        });

        this.exportButton = new _Button2.default({
            parent: $(document.body),
            label: 'Export Data',
            onClick: function onClick(e) {
                _this.ExportData();
            }
        });

        this.importButton = new _Button2.default({
            parent: $(document.body),
            label: 'Import Data',
            onClick: function onClick(e) {
                _this.dataImporter.node.click();
            }
        });

        this.groups.data.addContent(this.exportButton.node);
        this.groups.data.addContent(this.importButton.node);

        this.animationCategoriesNames = Object.keys(animationCategories);

        this.animationTabbers = {};
        this.animationForms = {};

        this.animationCategoryTabber = new _Tabber2.default({
            parent: $(document.body),
            tabs: this.animationCategoriesNames
        });

        var item, targetTabIndex;
        for (var key in animationCategories) {
            item = animationCategories[key];

            this.CreateAnimationsTabberForCategory({
                categoryName: key,
                category: item,
                background: background
            });
        }

        this.groups.animation.addContent(this.animationCategoryTabber.node);
    }

    _createClass(App, [{
        key: 'CreateAnimationsTabberForCategory',
        value: function CreateAnimationsTabberForCategory(_ref2) {
            var category = _ref2.category,
                categoryName = _ref2.categoryName,
                background = _ref2.background;

            var targetTabIndex = this.animationCategoryTabber.getTabIndexByName(categoryName);

            this.animationTabbers[categoryName] = new _Tabber2.default({
                parent: $(document.body),
                tabs: Object.keys(category)
            });

            this.animationCategoryTabber.addContent(targetTabIndex, this.animationTabbers[categoryName].node);

            this.CreateAnimationFormsForCategory({
                category: category,
                categoryName: categoryName,
                background: background,
                parentTabber: this.animationTabbers[categoryName]
            });
        }
    }, {
        key: 'CreateAnimationFormsForCategory',
        value: function CreateAnimationFormsForCategory(_ref3) {
            var category = _ref3.category,
                categoryName = _ref3.categoryName,
                parentTabber = _ref3.parentTabber,
                background = _ref3.background;

            this.animationForms[categoryName] = {};

            var item;
            for (var key in category) {
                item = category[key];

                this.animationForms[categoryName][key] = new _AnimationForm2.default({
                    parent: $(document.body),
                    categoryName: categoryName,
                    background: background,
                    name: key,
                    optional: item.optional,
                    frameCount: 5,
                    frameDuration: this.const.DEFAULT_FRAME_DURATION,
                    canvasHeight: this.const.CANVAS_HEIGHT,
                    canvasWidth: this.const.CANVAS_WIDTH,
                    scrollDir: item.scrollDir
                });

                var targetTabIndex = parentTabber.getTabIndexByName(key);

                parentTabber.addContent(targetTabIndex, this.animationForms[categoryName][key].node);

                if (item.optional) {
                    parentTabber.tabs[targetTabIndex].node.addClass('optional');
                }
            }
        }
    }, {
        key: 'CollectStateData',
        value: function CollectStateData() {
            var _this2 = this;

            var data = {};
            data.animationCategories = {};

            Object.keys(this.animationTabbers).forEach(function (name) {
                data.animationCategories[name] = {};

                Object.keys(_this2.animationForms[name]).forEach(function (key) {
                    console.log(name, key);
                    var item = _this2.animationForms[name][key];
                    data.animationCategories[name][item.state.name] = item.GetState();
                });
            });

            return data;
        }
    }, {
        key: 'HandleDataImport',
        value: function HandleDataImport(data) {
            var _this3 = this;

            console.log("received file!");
            console.log(data.value);
            var json = JSON.parse(data.value);

            // about form
            Object.keys(json.animationCategories).forEach(function (categoryName) {
                Object.keys(json.animationCategories[categoryName]).forEach(function (animationName) {
                    console.log(_this3.animationForms);
                    console.log(categoryName + ' ' + animationName);
                    _this3.animationForms[categoryName][animationName].ImportData(json.animationCategories[categoryName][animationName]);
                });
            });
        }
    }, {
        key: 'ExportData',
        value: function ExportData() {
            var data = this.CollectStateData();
            var name = this.const.EXPORT_FILE_NAME;
            var jsonFileContent = JSON.stringify(data, null, 4);
            this.Download(jsonFileContent, name, "text/plain");
        }

        // Borrowd from here: http://www.4codev.com/javascript/download-save-json-content-to-local-file-in-javascript-idpx473668115863369846.html

    }, {
        key: 'Download',
        value: function Download(content, fileName, contentType) {
            var a = document.createElement("a");
            var file = new Blob([content], { type: contentType });
            a.href = URL.createObjectURL(file);
            a.download = fileName;
            a.click();
        }
    }]);

    return App;
}();

exports.default = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _Group = __webpack_require__(4);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Allows data to be hidden behind tabs via a tabular menu
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Tabber = function (_Html) {
    _inherits(Tabber, _Html);

    function Tabber(config) {
        _classCallCheck(this, Tabber);

        // Make sure config has certain properties
        var _this = _possibleConstructorReturn(this, (Tabber.__proto__ || Object.getPrototypeOf(Tabber)).call(this, config));
        // Run HTML object constructor


        config = _this.setConfigDefaults({
            tabs: ['first', 'second'],
            class: 'tabber',
            template: '\n                <div>\n                    <div class="ui tabular menu">\n                    </div>\n                </div>\n            ',
            activeTab: 0,
            onTabChange: function onTabChange(data) {
                console.log('Tab was changed:', data);
            }
        });

        // Render
        _this.assignConfig(config);
        _this.renderToParent();

        // Collect info needed to function
        _this.buttonNode = _this.node.find('.ui.tabular.menu');

        // Create child Objects
        _this._tabs = config.tabs;
        _this.tabs = [];
        _this._tabs.forEach(function (item, index) {
            var tabButton = new _Button2.default({
                parent: _this.buttonNode,
                label: item,
                attr: { 'data-tab': item },
                class: 'item',
                onClick: function onClick(event) {
                    _this.tabChangeHandler(event);
                }
            });

            var tabContent = new _Group2.default({
                parent: _this.node,
                attr: { 'data-tab': item },
                class: 'ui tab',
                label: { content: item }
            });

            tabButton.node.tab();
            tabContent.node.tab();

            _this.tabs.push({
                name: item,
                button: tabButton,
                content: tabContent,
                index: index,
                node: tabButton.node
            });
        });

        _this.setActiveTab(_this.activeTab);
        return _this;
    }

    _createClass(Tabber, [{
        key: 'addContent',
        value: function addContent(tab, content) {
            var tabIndex = tab;

            if (typeof tabIndex == 'string') {
                tabIndex = this.getTabByName(tabIndex).index;
            }

            var tabObject = this.tabs[tabIndex];

            tabObject.content.node.append(content);
        }
    }, {
        key: 'changeTab',
        value: function changeTab(tab) {
            var tabIndex = tab;

            if (typeof tabIndex == 'string') {
                tabIndex = this.getTabByName(tabIndex).index;
            }

            this.setActiveTab(tabIndex);
        }
    }, {
        key: 'getTabByName',
        value: function getTabByName(name) {
            var item = void 0,
                key = void 0;

            for (key in this.tabs) {
                item = this.tabs[key];

                if (item.name == name) {
                    return item;
                }
            }
        }
    }, {
        key: 'getTabIndexByName',
        value: function getTabIndexByName(name) {
            var item = void 0,
                key = void 0;

            for (key in this.tabs) {
                item = this.tabs[key];

                if (item.name == name) {
                    return Number(key);
                }
            }
        }
    }, {
        key: 'setActiveTab',
        value: function setActiveTab(index) {
            // Deactivate all tab
            this.tabs.forEach(function (item, index) {
                item.button.node.removeClass('active');
                item.content.node.removeClass('active');
            });

            // Activate the given index
            this.tabs[index].button.node.addClass('active');
            this.tabs[index].content.node.addClass('active');

            this.activeTab = index;
            this.activeTabName = this.tabs[index].name;
        }
    }, {
        key: 'tabChangeHandler',
        value: function tabChangeHandler(data) {
            var tab = this.getTabByName(data.target.label);
            this.activeTab = tab.index;
            this.activeTabName = tab.name;

            this.onTabChange({
                event: data.event,
                target: this,
                node: this.node,
                tab: tab
            });
        }
    }]);

    return Tabber;
}(_HTML2.default);

exports.default = Tabber;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFileInput = function (_Html) {
    _inherits(TextFileInput, _Html);

    function TextFileInput(config) {
        _classCallCheck(this, TextFileInput);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (TextFileInput.__proto__ || Object.getPrototypeOf(TextFileInput)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            template: '<div></div>',
            onFile: function onFile(data) {
                console.log("Text File detected!");
            }
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        var fileElement = document.createElement('input');
        fileElement.type = 'file';
        _this.reader = new FileReader();
        _this.reader.onload = function (e) {
            _this.FileHandler(e);
        };
        _this.node = $(fileElement);
        _this.fileOrder = [];
        _this.uploadedFiles = [];
        _this.node[0].addEventListener('change', function (e) {
            if (_this.reader.readyState != 0) {
                _this.reader.abort();
            }

            if (e.target.files[0].type.match('image')) {
                console.log("Attempted image upload with text file input.");
                return;
            }

            _this.LoadFileFromEvent(e);
        }, false);
        return _this;
    }

    _createClass(TextFileInput, [{
        key: 'FileHandler',
        value: function FileHandler(e) {
            this.onFile({
                target: this,
                event: e,
                node: this.node,
                value: this.reader.result
            });
        }
    }, {
        key: 'LoadFileFromEvent',
        value: function LoadFileFromEvent(e) {
            this.reader.readAsText(e.target.files[0]);
        }
    }]);

    return TextFileInput;
}(_HTML2.default);

exports.default = TextFileInput;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _CanvasManager = __webpack_require__(12);

var _CanvasManager2 = _interopRequireDefault(_CanvasManager);

var _Group = __webpack_require__(4);

var _Group2 = _interopRequireDefault(_Group);

var _ImageInput = __webpack_require__(15);

var _ImageInput2 = _interopRequireDefault(_ImageInput);

var _InputSlider = __webpack_require__(16);

var _InputSlider2 = _interopRequireDefault(_InputSlider);

var _Label = __webpack_require__(2);

var _Label2 = _interopRequireDefault(_Label);

var _LabeledInput = __webpack_require__(18);

var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnimationForm = function (_Html) {
    _inherits(AnimationForm, _Html);

    function AnimationForm(_ref) {
        var parent = _ref.parent,
            frameCount = _ref.frameCount,
            frameDuration = _ref.frameDuration,
            canvasHeight = _ref.canvasHeight,
            canvasWidth = _ref.canvasWidth,
            scrollDir = _ref.scrollDir,
            optional = _ref.optional,
            name = _ref.name,
            categoryName = _ref.categoryName,
            background = _ref.background;

        _classCallCheck(this, AnimationForm);

        var _this = _possibleConstructorReturn(this, (AnimationForm.__proto__ || Object.getPrototypeOf(AnimationForm)).call(this, { parent: parent }));

        _this.state = {};
        _this.state.images = [];
        _this.state.playing = false;
        _this.state.optional = optional;
        _this.state.scrollDir = scrollDir;
        _this.state.name = name;
        _this.state.categoryName = categoryName;

        _this.const = {};
        _this.const.FRAME_DURATION_LABEL = 'Duration(ms)';
        _this.const.IMG_SIZE = 256;
        _this.const.TIP_MULTIPLE_FRAME_UPLOAD = "You can upload multiple frames by shift clicking images. Frame count will be adjusted automatically.";

        _this.groups = {
            canvas: new _Group2.default({
                class: 'ui segment group canvas preview',
                parent: _this.node,
                label: {
                    content: 'Preview'
                }
            }),
            form: new _Group2.default({
                parent: _this.node,
                class: 'ui segment group frame-form',
                label: {
                    content: 'Frames Upload'
                }
            }),
            frames: new _Group2.default({
                parent: _this.node,
                class: 'ui segment group frames',
                label: {
                    content: 'Frames'
                }
            })
        };

        _this.canvasManager = new _CanvasManager2.default({
            parent: _this.node,
            height: canvasHeight, width: canvasWidth,
            imgSize: _this.const.IMG_SIZE,
            scrollDir: scrollDir,
            background: background
        });

        _this.groups.canvas.addContent(_this.canvasManager.node);

        _this.maxFrameCountInput = new _LabeledInput2.default({
            parent: _this.node,
            onInput: function onInput(data) {
                _this.HandleMaxFrameCountChange(data);
            },
            label: { content: 'Frame Count' }
        });

        _this.maxFrameCountInput.setValue(frameCount);

        _this.frameSelector = new _InputSlider2.default({
            parent: _this.node,
            onSlider: function onSlider(data) {
                _this.HandleCurrentFrameChange(data);
            },
            onInput: function onInput(data) {
                _this.HandleCurrentFrameChange(data);
            },
            label: {
                class: 'ui label',
                content: 'Frame Selection'
            },
            slider: {
                prop: {
                    min: 1,
                    max: frameCount,
                    value: 1
                }
            }
        });

        _this.frameSelector.input.setValue(1);

        _this.imageLoader = new _ImageInput2.default({
            parent: _this.node,
            onImage: function onImage(data) {
                _this.HandleImage(data);
            },
            onMultiImageUpload: function onMultiImageUpload(data) {
                _this.HandleMultipleImages(data);
            }
        });

        _this.imageLoader.node.prop('multiple', 'multiple');

        _this.tipMultiUploadLabel = new _Label2.default({
            parent: _this.node,
            class: "ui tip label",
            content: _this.const.TIP_MULTIPLE_FRAME_UPLOAD
        });

        _this.uploadFrameButton = new _Button2.default({
            parent: _this.node,
            label: 'Upload Frames',
            onClick: function onClick(e) {
                _this.imageLoader.node.click();
            }
        });

        _this.playPauseButton = new _Button2.default({
            parent: _this.node,
            label: 'Play',
            onClick: function onClick(e) {
                _this.HandlePlayPause(e);
            }
        });

        _this.frameDurationInput = new _LabeledInput2.default({
            parent: _this.node,
            label: { content: 'Frame 1 Duration(ms)', class: 'ui label' },
            onInput: function onInput(data) {
                _this.HandleFrameDurationChange(data);
            }
        });

        _this.frameDurationInput.setValue(frameDuration);

        _this.groups.form.addContent(_this.maxFrameCountInput.node);
        _this.groups.form.addContent(_this.frameSelector.node);
        _this.groups.form.addContent(_this.frameDurationInput.node);
        _this.groups.form.addContent(_this.tipMultiUploadLabel.node);
        _this.groups.form.addContent(_this.uploadFrameButton.node);
        _this.groups.form.addContent(_this.playPauseButton.node);
        return _this;
    }

    _createClass(AnimationForm, [{
        key: 'HandleImage',
        value: function HandleImage(data) {
            var frameIndex = this.GetCurrentFrame();
            this.SetImageInFramesGroup({ index: frameIndex, src: data.value.src });
            this.canvasManager.SetImage({
                index: frameIndex,
                img: data.value,
                duration: this.frameDurationInput.getValue()
            });
        }
    }, {
        key: 'HandleMaxFrameCountChange',
        value: function HandleMaxFrameCountChange(data) {
            var val = data.value;
            var oldVal = this.frameSelector.slider.getMaxValue();

            if (val < oldVal) {
                var length = this.state.images.length - val;
                this.ClearFrames({ startIndex: val, endIndex: length });
            }

            this.frameSelector.slider.setMaxValue(val);
            this.HandleCurrentFrameChange({ value: val });

            if (this.frameSelector.getValue() > val) {
                this.frameSelector.setValue(val);
            }
        }
    }, {
        key: 'ClearFrames',
        value: function ClearFrames(_ref2) {
            var startIndex = _ref2.startIndex,
                endIndex = _ref2.endIndex;

            this.state.images.splice(startIndex, endIndex);
            this.canvasManager.state.frames.splice(startIndex, endIndex);
        }
    }, {
        key: 'HandleFrameDurationChange',
        value: function HandleFrameDurationChange(data) {
            if (this.CurrentFrameExists()) {
                var curFrame = this.GetCurrentFrame();
                this.canvasManager.state.frames[curFrame].duration = data.value;
                this.state.images[this.GetCurrentFrame()].duration = data.value;
            }
        }
    }, {
        key: 'HandleCurrentFrameChange',
        value: function HandleCurrentFrameChange(data) {
            this.canvasManager.state.currentFrame = data.value;

            if (this.CurrentFrameExists()) {
                var frameData = this.canvasManager.state.frames[data.value];

                if (frameData) {
                    this.frameDurationInput.setValue(frameData.duration);
                }
            }

            this.frameDurationInput.label.setContent('Frame ' + data.value + ' ' + this.const.FRAME_DURATION_LABEL);

            this.canvasManager.RedrawScene();
        }
    }, {
        key: 'HandlePlayPause',
        value: function HandlePlayPause() {
            this.state.playing = !this.state.playing;

            if (this.state.playing) {
                this.playPauseButton.node.html('Pause');
                this.PlayFrame(this.canvasManager.GetFrameDuration(this.frameSelector.getValue()));
            } else {
                this.playPauseButton.node.html('Play');
            }
        }
    }, {
        key: 'HandleMultipleImages',
        value: function HandleMultipleImages(_ref3) {
            var _this2 = this;

            var target = _ref3.target,
                event = _ref3.event,
                node = _ref3.node,
                value = _ref3.value;

            // if we are on frame 1, adjust the max number of frames to the number of images
            var curFrame = this.GetCurrentFrame();
            var maxFrames = curFrame + value.length - 1;
            this.maxFrameCountInput.setValue(maxFrames);
            this.HandleMaxFrameCountChange({ value: maxFrames });

            value.forEach(function (img) {
                _this2.HandleImage({ value: img });

                if (curFrame <= maxFrames) {
                    curFrame++;
                    _this2.frameSelector.setValue(curFrame);
                }
            });

            this.frameSelector.setValue(curFrame - 1);
            this.HandleCurrentFrameChange({ value: curFrame - 1 });
        }
    }, {
        key: 'SetImageInFramesGroup',
        value: function SetImageInFramesGroup(_ref4) {
            var _this3 = this;

            var index = _ref4.index,
                src = _ref4.src;

            var curFrame = this.GetCurrentFrame();

            var frameExists = this.CurrentFrameExists();
            if (!frameExists) {
                var newImg = $('<img />');
                newImg.height(this.const.IMG_SIZE);
                newImg.width(this.const.IMG_SIZE);
                this.state.images[index] = {
                    node: newImg,
                    src: src,
                    duration: this.frameDurationInput.getValue()
                };
                this.groups.frames.addContent(newImg);
            }

            this.state.images[index].src = src;
            this.state.images[index].node[0].src = src;

            // Re-add img elements so they appear in order
            this.state.images.forEach(function (img) {
                _this3.groups.frames.addContent(img.node);
            });
        }
    }, {
        key: 'GetCurrentFrame',
        value: function GetCurrentFrame() {
            return this.frameSelector.getValue();
        }
    }, {
        key: 'GetMaxFrameCount',
        value: function GetMaxFrameCount() {
            return this.maxFrameCountInput.getValue();
        }
    }, {
        key: 'CurrentFrameExists',
        value: function CurrentFrameExists() {
            var curFrame = this.GetCurrentFrame();
            var curFrameData = this.canvasManager.state.frames[curFrame];

            if (!curFrameData) {
                return false;
            }

            return true;
        }
    }, {
        key: 'PlayFrame',
        value: function PlayFrame(duration) {
            var _this4 = this;

            if (this.state.playing) {
                var nextFrame = this.GetCurrentFrame() + 1;
                if (nextFrame > this.GetMaxFrameCount()) {
                    nextFrame = 1;
                }

                this.frameSelector.setValue(nextFrame);
                this.HandleCurrentFrameChange({ value: nextFrame });

                window.setTimeout(function () {
                    _this4.PlayFrame(_this4.canvasManager.GetFrameDuration(nextFrame));
                }, duration);
            }
        }
    }, {
        key: 'GetState',
        value: function GetState() {
            return {
                images: this.state.images
            };
        }
    }, {
        key: 'ClearData',
        value: function ClearData() {
            this.ClearFrames({ startIndex: 0, endIndex: this.state.images.length });
        }
    }, {
        key: 'ImportData',
        value: function ImportData(data) {
            var _this5 = this;

            this.frameSelector.setValue(0);
            this.HandleCurrentFrameChange({ value: 0 });
            this.HandleMaxFrameCountChange({ value: 0 });
            this.maxFrameCountInput.setValue(data.images.length - 1);
            this.HandleMaxFrameCountChange({ value: data.images.length - 1 });

            var index = 0;
            data.images.forEach(function (image) {

                if (image) {
                    _this5.frameSelector.setValue(index);
                    _this5.HandleCurrentFrameChange({ value: index });

                    _this5.frameDurationInput.setValue(image.duration);
                    _this5.HandleFrameDurationChange({ value: image.duration });

                    var img = $('<img />');
                    img[0].src = image.src;

                    _this5.HandleImage({ value: img[0] });

                    _this5.state.images[index].duration = image.duration;
                    console.log(image.duration);
                }

                index++;
            });

            this.frameSelector.setValue(1);
            this.HandleCurrentFrameChange({ value: 1 });

            console.log('Uploaded images');
            console.log(this.state.images);
        }
    }]);

    return AnimationForm;
}(_HTML2.default);

exports.default = AnimationForm;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Html2 = __webpack_require__(13);

var _Html3 = _interopRequireDefault(_Html2);

var _Canvas = __webpack_require__(14);

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasManager = function (_Html) {
    _inherits(CanvasManager, _Html);

    function CanvasManager(_ref) {
        var parent = _ref.parent,
            height = _ref.height,
            width = _ref.width,
            imgSize = _ref.imgSize,
            background = _ref.background,
            _ref$scrollDir = _ref.scrollDir,
            scrollDir = _ref$scrollDir === undefined ? '' : _ref$scrollDir;

        _classCallCheck(this, CanvasManager);

        var _this = _possibleConstructorReturn(this, (CanvasManager.__proto__ || Object.getPrototypeOf(CanvasManager)).call(this, { parent: parent }));

        _this.const = { HEIGHT: height, WIDTH: width };
        _this.const.HALF_HEIGHT = height / 2;
        _this.const.HALF_WIDTH = width / 2;
        _this.const.IMG_SIZE = imgSize;
        _this.const.HALF_IMG_SIZE = imgSize / 2;
        _this.const.FRAME_RATE = 1000 / 60;
        _this.const.SCROLL_SPEED = background.scrollSpeed;

        _this.canvas = new _Canvas2.default({
            parent: _this.node,
            prop: { width: width, height: height }
        });

        _this.ctx = _this.canvas.GetContext();

        _this.state = {};
        _this.state.frames = [];
        _this.state.currentFrame = 0;

        _this.scrolling = true;
        _this.scrollDir = scrollDir;
        _this.bgImg = $('<img src="./assets/Tiling Grid.png" />');
        _this.bgImg.on('load', function () {
            _this.GetBgImageDimensions();
        });
        return _this;
    }

    _createClass(CanvasManager, [{
        key: 'GetBgImageDimensions',
        value: function GetBgImageDimensions() {
            var _this2 = this;

            this.bgImgWidth = this.bgImg[0].naturalWidth;
            this.bgImgHeight = this.bgImg[0].naturalHeight;

            if (this.bgImgHeight == 0 && this.bgImgWidth == 0) {
                window.setTimeout(function () {
                    _this2.GetBgImageDimensions();
                }, 50);
            } else {
                this.bgAspect = this.bgImgHeight / this.bgImgWidth;
                this.bgImgPos = {
                    x: this.bgImgWidth / 4 + 35,
                    y: -this.bgImgHeight / 3 + this.const.HEIGHT
                };
                this.bgImgSpeed = {
                    x: this.const.SCROLL_SPEED,
                    y: this.const.SCROLL_SPEED * this.bgAspect
                };
                this.ready = true;
                this.RedrawLoop();
            }
        }
    }, {
        key: 'SetImage',
        value: function SetImage(_ref2) {
            var index = _ref2.index,
                img = _ref2.img,
                duration = _ref2.duration;

            this.state.currentFrame = index;
            this.state.frames[index] = { img: img, duration: duration };
            this.RedrawScene();
        }
    }, {
        key: 'RedrawLoop',
        value: function RedrawLoop() {
            var _this3 = this;

            if (this.scrolling) {
                this.ScrollBg();
                this.RedrawScene();

                window.setTimeout(function () {
                    _this3.RedrawLoop();
                }, this.const.FRAME_RATE);
            }
        }
    }, {
        key: 'ScrollBg',
        value: function ScrollBg() {
            if (this.scrollDir.indexOf('right') != -1) {
                this.bgImgPos.x -= this.bgImgSpeed.x;
            }

            if (this.scrollDir.indexOf('left') != -1) {
                this.bgImgPos.x += this.bgImgSpeed.x;
            }

            if (this.scrollDir.indexOf('down') != -1) {
                this.bgImgPos.y += this.bgImgSpeed.y;
            }

            if (this.scrollDir.indexOf('up') != -1) {
                this.bgImgPos.y -= this.bgImgSpeed.y;
            }

            if (this.bgImgPos.x <= -this.bgImgWidth || this.bgImgPos.x >= this.bgImgWidth) {
                this.bgImgPos.x = 0;
            }

            if (this.bgImgPos.y <= -this.bgImgHeight || this.bgImgPos.y >= this.bgImgHeight) {
                this.bgImgPos.y = 0;
            }
        }
    }, {
        key: 'RedrawScene',
        value: function RedrawScene() {
            if (!this.ready) {
                return;
            }
            this.ctx.clearRect(0, 0, this.const.WIDTH, this.const.HEIGHT);

            this.DrawBgGrid();

            if (this.state.frames[this.state.currentFrame]) {
                this.ctx.drawImage(this.state.frames[this.state.currentFrame].img, this.const.HALF_WIDTH - this.const.HALF_IMG_SIZE, this.const.HALF_HEIGHT - this.const.HALF_IMG_SIZE, this.const.IMG_SIZE, this.const.IMG_SIZE);
            }
        }
    }, {
        key: 'DrawBgGrid',
        value: function DrawBgGrid() {
            // center img
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x, this.bgImgPos.y);

            // Helds remove grid lines between images
            var alignmentBuffer = 1;

            // center right img
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x + this.bgImgWidth - alignmentBuffer, this.bgImgPos.y);

            // center top img
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x, this.bgImgPos.y - this.bgImgHeight + alignmentBuffer);

            // top right img
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x + this.bgImgWidth - alignmentBuffer, this.bgImgPos.y - this.bgImgHeight + alignmentBuffer);

            // center left
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x - this.bgImgWidth + alignmentBuffer, this.bgImgPos.y);

            // center bottom img
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x, this.bgImgPos.y + this.bgImgHeight - alignmentBuffer);

            // bottom left img
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x - this.bgImgWidth + alignmentBuffer, this.bgImgPos.y + this.bgImgHeight - alignmentBuffer);

            // top left img
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x - this.bgImgWidth + alignmentBuffer, this.bgImgPos.y - this.bgImgHeight + alignmentBuffer);

            // bottom right img
            this.ctx.drawImage(this.bgImg[0], this.bgImgPos.x + this.bgImgWidth - alignmentBuffer, this.bgImgPos.y + this.bgImgHeight - alignmentBuffer);
        }
    }, {
        key: 'GetFrameDuration',
        value: function GetFrameDuration(index) {
            var dur = 0;
            var frame = this.state.frames[index];

            if (frame) {
                dur = frame.duration;
            }

            return dur;
        }
    }]);

    return CanvasManager;
}(_Html3.default);

exports.default = CanvasManager;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

    Stores basic information that all html components use

*/

var Html = function () {
    function Html(config) {
        _classCallCheck(this, Html);

        if (!config) {
            config = {};
        }
        this._config = config;

        config = this.setConfigDefaults({
            parent: document.body
        });

        this.template = '<div></div>';
        this.node = $(this.template);
        this.parent = $(config.parent);
        this.attr = {};
        this.prop = {};
        this.css = {};
        this.class = '';
    }

    _createClass(Html, [{
        key: 'assignConfig',
        value: function assignConfig(config) {
            Object.assign(this, config);
        }
    }, {
        key: '_render',
        value: function _render(parent) {
            if (this._rendered) {
                console.warn('Element tried to render more than once.');console.trace();
                return;
            }

            // convert template html into a node
            this.node = $(this.template);

            // assign attributes
            // Attributes are assigned first since they must be strings
            this.node.attr(this.attr);

            // assign properties
            // prop and attr can assign the same things to an element,
            // but prop allows for non-string values.
            this.node.prop(this.prop);

            // Apply inline styling
            this.node.css(this.css);

            // add styling classes
            this.node.addClass(this.class);

            // Append object to parent
            this.parent.append(this.node[0]);

            this._rendered = true;
        }
    }, {
        key: 'render',
        value: function render(parent) {
            this._render(parent);
        }
    }, {
        key: 'renderToParent',
        value: function renderToParent() {
            this.render(this.parent);
        }
    }, {
        key: 'setConfigDefaults',
        value: function setConfigDefaults(defaults, assign) {
            var config = void 0,
                item = void 0,
                key = void 0;

            config = this._config;

            if (!config) {
                config = {};
            }

            for (key in defaults) {
                item = defaults[key];

                if (!(key in config)) {
                    config[key] = item;
                }
            }

            return config;
        }
    }]);

    return Html;
}();

exports.default = Html;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates a canvas element
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Canvas = function (_Html) {
    _inherits(Canvas, _Html);

    function Canvas(config) {
        _classCallCheck(this, Canvas);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            template: '<canvas></canvas>',
            prop: {
                width: '800',
                height: '600'
            }
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();
        return _this;
    }

    _createClass(Canvas, [{
        key: 'GetContext',
        value: function GetContext() {
            return this.node[0].getContext('2d');
        }
    }, {
        key: 'ToDataURL',
        value: function ToDataURL(imageType) {
            return this.node[0].toDataURL(imageType);
        }
    }]);

    return Canvas;
}(_HTML2.default);

exports.default = Canvas;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageInput = function (_Html) {
    _inherits(ImageInput, _Html);

    function ImageInput(config) {
        _classCallCheck(this, ImageInput);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (ImageInput.__proto__ || Object.getPrototypeOf(ImageInput)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            template: '<div></div>',
            onImage: function onImage(data) {
                console.log("Image detected!");
            },
            onMultiImageUpload: function onMultiImageUpload(data) {
                console.log("Multiple images detected for upload! " + data.value);
            }
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        var fileElement = document.createElement('input');
        fileElement.type = 'file';
        _this.reader = new FileReader();
        _this.reader.onload = function (e) {
            _this.ImageHandler(e);
        };
        _this.node = $(fileElement);
        _this.fileOrder = [];
        _this.uploadedFiles = [];
        _this.node[0].addEventListener('change', function (e) {
            if (_this.reader.readyState != 0) {
                _this.reader.abort();
            }

            var files = event.target.files;
            if (files.length > 1) {
                _this.fileOrder = [];
                _this.uploadedFiles = [];

                for (var index = 0; index < files.length; index++) {
                    var file = files[index];

                    if (!file.type.match('image')) {
                        continue;
                    }

                    _this.fileOrder.push(file.name);
                    _this.LoadImageFromMultipleImageEvent(file, index);
                }

                console.log(_this.fileOrder);
            } else {
                _this.LoadImageFromEvent(e);
            }
        }, false);
        return _this;
    }

    _createClass(ImageInput, [{
        key: 'ImageHandler',
        value: function ImageHandler(e) {
            var _this2 = this;

            var img = new Image();
            img.src = this.reader.result;
            img.onload = function () {
                _this2.onImage({
                    target: _this2,
                    event: e,
                    node: _this2.node,
                    value: img
                });
                _this2.node[0].value = null;
            };
        }
    }, {
        key: 'MultiImageHandler',
        value: function MultiImageHandler(e, reader, index) {
            var _this3 = this;

            var img = new Image();
            var i = index;

            img.src = reader.result;
            img.onload = function () {
                _this3.PlaceImageInMultiImageArray(img, i);
                _this3.node[0].value = null;
            };
        }
    }, {
        key: 'PlaceImageInMultiImageArray',
        value: function PlaceImageInMultiImageArray(img, index) {
            this.uploadedFiles[index] = img;

            var loadedCount = 0;
            this.uploadedFiles.forEach(function (img) {
                if (img) {
                    loadedCount++;
                }
            });

            console.log('Images loaded: ' + loadedCount + ' Images to load: ' + this.fileOrder.length);

            if (loadedCount == this.fileOrder.length) {
                this.onMultiImageUpload({
                    target: this,
                    event: {},
                    node: this.node,
                    value: this.uploadedFiles
                });
            }
        }
    }, {
        key: 'LoadImageFromEvent',
        value: function LoadImageFromEvent(e) {
            this.reader.readAsDataURL(e.target.files[0]);
        }
    }, {
        key: 'LoadImageFromMultipleImageEvent',
        value: function LoadImageFromMultipleImageEvent(file, index) {
            var _this4 = this;

            var reader = new FileReader();
            var i = index;
            reader.onload = function (e) {
                _this4.MultiImageHandler(e, reader, i);
            };

            reader.readAsDataURL(file);
        }
    }]);

    return ImageInput;
}(_HTML2.default);

exports.default = ImageInput;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

var _Input = __webpack_require__(5);

var _Input2 = _interopRequireDefault(_Input);

var _Slider = __webpack_require__(17);

var _Slider2 = _interopRequireDefault(_Slider);

var _Label = __webpack_require__(2);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Manages an input and a slider
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Maintains their values to be the same
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var InputSlider = function (_Html) {
    _inherits(InputSlider, _Html);

    function InputSlider(config) {
        _classCallCheck(this, InputSlider);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (InputSlider.__proto__ || Object.getPrototypeOf(InputSlider)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onInput: function onInput(data) {
                console.log('User typed in input: ', data);
            },
            onSlider: function onSlider(data) {
                console.log('User moved slider: ', data);
            },
            onEnter: function onEnter(data) {
                console.log('User pressed enter in input: ', data);
            },
            template: '<div><div class="ui header"></div><div class="ui input-slider"></div>',
            class: 'ui input-slider',
            label: {
                content: 'Hello World',
                class: 'ui label'
            },
            slider: {},
            input: {}
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        // Create child objects
        config.label.parent = _this.node.find('.ui.header');
        _this.label = new _Label2.default(config.label);

        config.slider.parent = _this.node.find('.ui.input-slider'), config.slider.onInput = function (data) {
            _this.sliderHandler(data);
        };
        _this.slider = new _Slider2.default(config.slider);

        config.input.parent = _this.node.find('.ui.input-slider'), config.input.onInput = function (data) {
            _this.inputHandler(data);
        };
        config.input.onEnter = function (data) {
            _this.enterHandler(data);
        };
        _this.input = new _Input2.default(config.input);
        return _this;
    }

    _createClass(InputSlider, [{
        key: 'sliderHandler',
        value: function sliderHandler(event) {
            this._changed = 'slider';

            this.syncFields();
            this.onSlider({
                target: this,
                node: this.slider.node,
                value: this.slider.getValue(),
                event: event
            });
        }
    }, {
        key: 'inputHandler',
        value: function inputHandler(event) {
            this._changed = 'input';

            this.syncFields();
            this.onInput({
                target: this,
                node: this.input.node,
                value: this.input.getValue(),
                event: event
            });
        }
    }, {
        key: 'enterHandler',
        value: function enterHandler(event) {
            this._changed = 'input';

            this.syncFields();
            this.onEnter({
                target: this,
                node: this.input.node,
                value: this.input.getValue(),
                event: event
            });
        }
    }, {
        key: 'syncFields',
        value: function syncFields() {
            if (this._changed == 'slider') {
                this.input.setValue(this.slider.getValue());
            } else {
                this.slider.setValue(this.input.getValue());
            }

            this._changed = 'clean';
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.input.setValue(value);
            this.slider.setValue(value);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.input.getValue();
        }
    }]);

    return InputSlider;
}(_HTML2.default);

exports.default = InputSlider;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates a slider.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Runs a callback when the user changes something
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Slider = function (_Html) {
    _inherits(Slider, _Html);

    function Slider(config) {
        _classCallCheck(this, Slider);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onInput: function onInput(data) {
                console.log('Input', data);
            },
            prop: {
                min: 1,
                max: 100,
                value: 50
            },
            template: '<input type="range">'
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        _this.node.on('input', function (event) {
            _this.inputHandler(event);
        });
        return _this;
    }

    _createClass(Slider, [{
        key: 'inputHandler',
        value: function inputHandler(event) {
            this.onInput({
                target: this,
                node: this.node,
                event: event,
                value: Number(this.node[0].value)
            });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return Number(this.node.prop('value'));
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            value = value.toString();
            this.node.prop({ value: value });
        }
    }, {
        key: 'setMaxValue',
        value: function setMaxValue(value) {
            value = value.toString();
            this.node.prop({ max: value });
        }
    }, {
        key: 'getMaxValue',
        value: function getMaxValue() {
            return Number(this.node.prop('max'));
        }
    }, {
        key: 'setMinValue',
        value: function setMinValue(value) {
            value = value.toString();
            this.node.prop({ min: value });
        }
    }]);

    return Slider;
}(_HTML2.default);

exports.default = Slider;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(0);

var _HTML2 = _interopRequireDefault(_HTML);

var _Input = __webpack_require__(5);

var _Input2 = _interopRequireDefault(_Input);

var _Label = __webpack_require__(2);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates an input with a label header
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var LabeledInput = function (_Html) {
    _inherits(LabeledInput, _Html);

    function LabeledInput(config) {
        _classCallCheck(this, LabeledInput);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (LabeledInput.__proto__ || Object.getPrototypeOf(LabeledInput)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onInput: function onInput(data) {
                console.log('User typed in input: ', data);
            },
            onEnter: function onEnter(data) {
                console.log('User pressed enter in input: ', data);
            },
            template: '<div><div class="ui header"></div><div class="ui label-input"></div>',
            class: 'ui labeled-input',
            label: {
                content: 'Hello World',
                class: 'ui label'
            },
            input: {}
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        // Create child objects
        config.label.parent = _this.node.find('.ui.header');
        _this.label = new _Label2.default(config.label);

        config.input.parent = _this.node.find('.ui.label-input'), config.input.onInput = function (data) {
            _this.inputHandler(data);
        };
        config.input.onEnter = function (data) {
            _this.enterHandler(data);
        };
        _this.input = new _Input2.default(config.input);
        return _this;
    }

    _createClass(LabeledInput, [{
        key: 'inputHandler',
        value: function inputHandler(event) {
            this.onInput({
                target: this,
                node: this.input.node,
                value: this.input.getValue(),
                event: event
            });
        }
    }, {
        key: 'enterHandler',
        value: function enterHandler(event) {
            this.onEnter({
                target: this,
                node: this.input.node,
                value: this.input.getValue(),
                event: event
            });
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.input.setValue(value);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.input.getValue();
        }
    }, {
        key: 'setChecked',
        value: function setChecked(value) {
            this.input.node.prop('checked', value);
        }
    }, {
        key: 'getIsCheckedAsBoolean',
        value: function getIsCheckedAsBoolean() {
            if (this.input.node[0].type == "checkbox") {
                return this.input.node[0].checked;
            }
        }
    }]);

    return LabeledInput;
}(_HTML2.default);

exports.default = LabeledInput;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(1);

var _HTML2 = _interopRequireDefault(_HTML);

var _LabeledInput = __webpack_require__(20);

var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

var _Group = __webpack_require__(22);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutForm = function (_Html) {
    _inherits(AboutForm, _Html);

    function AboutForm(data) {
        _classCallCheck(this, AboutForm);

        var _this = _possibleConstructorReturn(this, (AboutForm.__proto__ || Object.getPrototypeOf(AboutForm)).call(this, data));

        _this.state = {};
        _this.state.name;
        _this.state.keywords = {};

        _this.inputs = {};

        _this.name = new _LabeledInput2.default({
            parent: _this.node,
            label: { content: 'Name' },
            input: { class: 'ui input name' }
        });

        _this.name.setValue('');

        _this.keywordsGroup = new _Group2.default({
            parent: _this.node,
            label: { content: 'Keywords' }
        });

        var keywords = data.keywords.sort();

        keywords.forEach(function (name) {
            var newInput = _this.CreateKeywordCheckbox({ name: name });
            _this.inputs[name] = newInput;
            _this.keywordsGroup.addContent(newInput.node);
        });
        return _this;
    }

    _createClass(AboutForm, [{
        key: 'CreateKeywordCheckbox',
        value: function CreateKeywordCheckbox(_ref) {
            var _this2 = this;

            var name = _ref.name;

            this.state.keywords[name] = false;

            return new _LabeledInput2.default({
                parent: this.node,
                name: name,
                label: { content: name },
                input: { prop: { type: 'checkbox' } },
                onInput: function onInput(data) {
                    _this2.HandleCheckbox({
                        name: data.target.name,
                        value: data.target.getIsCheckedAsBoolean()
                    });
                }
            });
        }
    }, {
        key: 'HandleCheckbox',
        value: function HandleCheckbox(data) {
            this.state.keywords[data.name] = data.value;
        }
    }, {
        key: 'GetName',
        value: function GetName() {
            return this.name.getValue();
        }
    }, {
        key: 'GetState',
        value: function GetState() {
            this.state.name = this.GetName();

            if (this.state.name == 0) {
                this.state.name = '';
            }

            return this.state;
        }
    }, {
        key: 'ImportData',
        value: function ImportData(data) {
            var _this3 = this;

            console.log("About form received data");
            console.log(data);

            this.name.setValue(data.name);

            var item;
            Object.keys(data.keywords).forEach(function (key) {
                item = data.keywords[key];

                _this3.state.keywords[key] = item;
                console.log('Settin keword ' + key + ' to ' + item);
                _this3.inputs[key].setChecked(item);
            });
        }
    }]);

    return AboutForm;
}(_HTML2.default);

exports.default = AboutForm;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(1);

var _HTML2 = _interopRequireDefault(_HTML);

var _Input = __webpack_require__(21);

var _Input2 = _interopRequireDefault(_Input);

var _Label = __webpack_require__(6);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates an input with a label header
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var LabeledInput = function (_Html) {
    _inherits(LabeledInput, _Html);

    function LabeledInput(config) {
        _classCallCheck(this, LabeledInput);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (LabeledInput.__proto__ || Object.getPrototypeOf(LabeledInput)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onInput: function onInput(data) {
                console.log('User typed in input: ', data);
            },
            onEnter: function onEnter(data) {
                console.log('User pressed enter in input: ', data);
            },
            template: '<div><div class="ui header"></div><div class="ui label-input"></div>',
            class: 'ui labeled-input',
            label: {
                content: 'Hello World',
                class: 'ui label'
            },
            input: {}
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        // Create child objects
        config.label.parent = _this.node.find('.ui.header');
        _this.label = new _Label2.default(config.label);

        config.input.parent = _this.node.find('.ui.label-input'), config.input.onInput = function (data) {
            _this.inputHandler(data);
        };
        config.input.onEnter = function (data) {
            _this.enterHandler(data);
        };
        _this.input = new _Input2.default(config.input);
        return _this;
    }

    _createClass(LabeledInput, [{
        key: 'inputHandler',
        value: function inputHandler(event) {
            this.onInput({
                target: this,
                node: this.input.node,
                value: this.input.getValue(),
                event: event
            });
        }
    }, {
        key: 'enterHandler',
        value: function enterHandler(event) {
            this.onEnter({
                target: this,
                node: this.input.node,
                value: this.input.getValue(),
                event: event
            });
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.input.setValue(value);
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.input.getValue();
        }
    }, {
        key: 'setChecked',
        value: function setChecked(value) {
            this.input.node.prop('checked', value);
        }
    }, {
        key: 'getIsCheckedAsBoolean',
        value: function getIsCheckedAsBoolean() {
            if (this.input.node[0].type == "checkbox") {
                return this.input.node[0].checked;
            }
        }
    }]);

    return LabeledInput;
}(_HTML2.default);

exports.default = LabeledInput;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(1);

var _HTML2 = _interopRequireDefault(_HTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Creates an input field
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Handles changes to input and enter key press
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Input = function (_Html) {
    _inherits(Input, _Html);

    function Input(config) {
        _classCallCheck(this, Input);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            onInput: function onInput(data) {
                console.log('User typed in input: ', data);
            },
            onEnter: function onEnter(data) {
                console.log('User pressed enter in input: ', data);
            },
            template: '<input>',
            class: 'ui input'
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        // Create event handlers
        _this.node.on('input', function (event) {
            _this.inputHandler(event);
        });
        _this.node.on('keypress', function (event) {
            if (event.which != 13) {
                return;
            }_this.enterHandler(event);
        });
        return _this;
    }

    _createClass(Input, [{
        key: 'inputHandler',
        value: function inputHandler(event) {
            this.onInput({
                target: this,
                event: event,
                node: this.node,
                value: this.node[0].value
            });
        }
    }, {
        key: 'enterHandler',
        value: function enterHandler(event) {
            this.onEnter({
                target: this,
                event: event,
                node: this.node,
                value: this.node[0].value
            });
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var val = this.node.prop('value');

            if (!isNaN(Number(val))) {
                val = Number(val);
            }

            return val;
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            this.node.prop({ value: value });
        }
    }, {
        key: 'getIsCheckedAsBoolean',
        value: function getIsCheckedAsBoolean() {
            if (this.node[0].type == "checkbox") {
                return this.node[0].checked;
            }
        }
    }]);

    return Input;
}(_HTML2.default);

exports.default = Input;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HTML = __webpack_require__(1);

var _HTML2 = _interopRequireDefault(_HTML);

var _Label = __webpack_require__(6);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Groups elements together under a div
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Can easily add or remove elements
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Group = function (_Html) {
    _inherits(Group, _Html);

    function Group(config) {
        _classCallCheck(this, Group);

        // Make sure the config has certain properties
        var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, config));
        // Run HTML object setup


        config = _this.setConfigDefaults({
            label: {},
            class: 'ui segment group'
        });

        // Assign properties from config and render our dom
        _this.assignConfig(config);
        _this.renderToParent();

        // Collect needed information to work
        _this.content = _this.node.find('div.content');

        // Create child objects
        config.label.parent = _this.node.find('div.label > div > label');
        _this.label = new _Label2.default(config.label);

        return _this;
    }

    _createClass(Group, [{
        key: 'render',
        value: function render(parent) {
            this.template = '\n            <div>\n                <div class="label">\n                    <div>\n                        <label></label>\n                    </div>\n                </div>\n                <div class="content">\n                </div>\n            </div>\n        ';

            this._render(parent);
        }
    }, {
        key: 'addContent',
        value: function addContent(node) {
            this.content.append(node);
        }
    }, {
        key: 'removeContent',
        value: function removeContent(node) {
            this.content.remove(node);
        }
    }]);

    return Group;
}(_HTML2.default);

exports.default = Group;

/***/ })
/******/ ]);