'use strict';

var React = require('react');
var reactDom = require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function isReactRefreshBoundary(moduleExports) {
                        for (let key in moduleExports) {
                            let _c = moduleExports[key];
                            if ($RefreshRuntime$.isLikelyComponentType(_c)) {
                                $RefreshReg$(_c, _c.displayName || _c.name);
                            }
                        }

                        if ($RefreshRuntime$.isLikelyComponentType(moduleExports)) {
                            return true;
                        }
                        if (moduleExports == null || typeof moduleExports !== 'object') {
                            // Exit if we can't iterate over exports.
                            return false;
                        }
                        let hasExports = false;
                        let areAllExportsComponents = true;
                        for (const key in moduleExports) {
                            hasExports = true;
                            if (key === '__esModule') {
                                continue;
                            }
                            const desc = Object.getOwnPropertyDescriptor(moduleExports, key);
                            if (desc && desc.get) {
                                // Don't invoke getters as they may have side effects.
                                return false;
                            }
                            const exportValue = moduleExports[key];
                            if (!$RefreshRuntime$.isLikelyComponentType(exportValue)) {
                                areAllExportsComponents = false;
                            }
                        }
                        return hasExports && areAllExportsComponents;
                    }
                    function __$RefreshCheck$__(m) {
                        if (isReactRefreshBoundary(m.exports)) {
                            m.hot.accept(() => require(m.id));    
                            setTimeout(function () {
                                $RefreshRuntime$.performReactRefresh();
                            }, 0);
                        }
                    }

var LikeButton = /*#__PURE__*/function (_Component) {
  _inherits(LikeButton, _Component);

  var _super = _createSuper(LikeButton);

  function LikeButton(props) {
    var _this;

    _classCallCheck(this, LikeButton);

    _this = _super.call(this, props);
    _this.state = {
      liked: false
    };
    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return 'You liked this';
      }

      return /*#__PURE__*/React__default['default'].createElement('button', {
        onClick: function onClick() {
          return _this2.setState({
            liked: true
          });
        }
      }, 'Like');
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#react-container');
reactDom.render( /*#__PURE__*/React__default['default'].createElement(LikeButton), domContainer);__$RefreshCheck$__(module);
