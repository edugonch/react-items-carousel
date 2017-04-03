!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-measure"),require("react-motion"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","react-measure","react-motion","styled-components"],t):"object"==typeof exports?exports.ReactItemsCarousel=t(require("react"),require("react-measure"),require("react-motion"),require("styled-components")):e.ReactItemsCarousel=t(e.React,e.ReactMeasure,e.ReactMotion,e.ReactStyled)}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="build/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=u(["\n  width: 100%;\n  overflow: hidden;\n"],["\n  width: 100%;\n  overflow: hidden;\n"]),f=u(["\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  transform: translate(","px, 0);\n"],["\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  transform: translate(","px, 0);\n"]),h=u(["\n  padding-left: ","px;\n  padding-right: ","px;\n"],["\n  padding-left: ","px;\n  padding-right: ","px;\n"]),d=u(["\n  width: ","px;\n  flex-shrink: 0;\n  margin-right: ","px;\n  margin-left: ","px;\n"],["\n  width: ","px;\n  flex-shrink: 0;\n  margin-right: ","px;\n  margin-left: ","px;\n"]),p=n(3),m=r(p),g=n(5),v=n(4),y=r(v),C=n(6),I=r(C),w=n(1),T=r(w),x=I.default.div(c),k=I.default.div(f,function(e){return e.translateX}),b=I.default.div(h,function(e){return e.firstItemGutter},function(e){return e.lastItemGutter}),X=I.default.div(d,function(e){return e.width},function(e){return e.rightGutter},function(e){return e.leftGutter}),O=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onSwipeStart=function(e){n.animator.startDrag();var t=n.getPosition(e),r=t.posX,i=t.posY;n.setState({startSwipe:{posX:r,posY:i}})},n.onSwipeEnd=function(){var e=n.state.lastSwipe.posX-n.state.startSwipe.posX;n.animator.endDrag();var t=n.animator.getSwipeReleaseCenterItemIndex(e);n.setState({translateX:n.animator.calculateCenterTranslateXAtItem(t),centeredItemIndex:t})},n.onSwipe=function(e){var t=n.getPosition(e),r=t.posX,i=t.posY,a=r-n.state.startSwipe.posX;n.setState({translateX:n.animator.calculateSwipeTranslateX(a),lastSwipe:{posX:r,posY:i}})},n.animator=new T.default,n.animator.setCurrentTranslateX(0),n.updateAnimatorFromProps(e),n.state={translateX:0,centeredItemIndex:0},n.props.centeredItemIndex&&n.animator.whenReady(function(){n.setState(n.getCenterItemState(n.props.centeredItemIndex))}),n}return o(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.updateAnimatorFromProps(e),e.centeredItemIndex!==this.state.centeredItemIndex&&this.centerItem(e.centeredItemIndex)}},{key:"updateAnimatorFromProps",value:function(e){this.animator.setNumberOfChildren(e.children.length),this.animator.setNumberOfCards(e.numberOfCards),this.animator.setGutter(e.gutter),this.animator.setSafeMargin(e.safeMargin),this.animator.setInitialTranslation(e.initialTranslation),this.animator.setResistanceCoeffiecent(e.resistanceCoeffiecent),this.animator.setCanCenterOne(e.canCenterOne)}},{key:"componentWillUpdate",value:function(e,t){t.translateX!==this.state.translateX&&this.animator.setCurrentTranslateX(t.translateX),e.onCenteredItemChange&&t.centeredItemIndex!==this.state.centeredItemIndex&&e.onCenteredItemChange(t.centeredItemIndex)}},{key:"getPosition",value:function(e){var t=void 0!==e.touches&&e.touches[0]?e.touches[0].pageX:e.clientX,n=void 0!==e.touches&&e.touches[0]?e.touches[0].pageY:e.clientY;return{posX:t,posY:n}}},{key:"getCenterItemState",value:function(e){return{translateX:this.animator.calculateCenterTranslateXAtItem(e),centeredItemIndex:e}}},{key:"centerItem",value:function(e){this.setState(this.getCenterItemState(e))}},{key:"getInitialFrame",value:function(){return{translateX:this.state.translateX}}},{key:"calculateNextFrame",value:function(){var e={stiffness:this.props.stiffness,damping:this.props.damping};return{translateX:(0,g.spring)(this.state.translateX,e)}}},{key:"renderList",value:function(e,t,n){var r=this;return m.default.createElement(k,{translateX:e},n.map(function(e,i){return m.default.createElement(y.default,{key:i,includeMargin:!1,onMeasure:function(e){var t=e.width;t>20&&(r.animator.setChildWidth(i,t),r.setState({update:!0}))}},m.default.createElement(X,{width:r.animator.getItemWidth(),rightGutter:i===n.length-1?0:t},e))}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.gutter,r=t.children,a=t.firstItemGutter,s=t.lastItemGutter;return i(t,["gutter","children","firstItemGutter","lastItemGutter"]),m.default.createElement(x,{onTouchEnd:this.onSwipeEnd,onTouchMove:this.onSwipe,onTouchStart:this.onSwipeStart},m.default.createElement(b,{firstItemGutter:a,lastItemGutter:s},m.default.createElement(y.default,{onMeasure:function(t){var n=t.width;e.animator.setContainerWidth(n),e.setState({update:!0})}},m.default.createElement(g.Motion,{onRest:function(){},defaultStyle:this.getInitialFrame(),style:this.calculateNextFrame()},function(t){var i=t.translateX;return e.renderList(i,n,r)}))))}}]),t}(m.default.Component);O.propTypes={resistanceCoeffiecent:m.default.PropTypes.number,stiffness:m.default.PropTypes.number,damping:m.default.PropTypes.number,children:m.default.PropTypes.array.isRequired,safeMargin:m.default.PropTypes.number,gutter:m.default.PropTypes.number,initialTranslation:m.default.PropTypes.number,numberOfCards:m.default.PropTypes.number,firstItemGutter:m.default.PropTypes.number,lastItemGutter:m.default.PropTypes.number,centeredItemIndex:m.default.PropTypes.number,onCenteredItemChange:m.default.PropTypes.func,canCenterOne:m.default.PropTypes.bool},O.defaultProps={resistanceCoeffiecent:.5,stiffness:270,damping:30,gutter:0,safeMargin:100,initialTranslation:0,numberOfCards:3.5,firstItemGutter:0,lastItemGutter:0,centeredItemIndex:0,canCenterOne:!0},t.default=O},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),s=function(){return(new Date).getTime()},o=function(){function e(){r(this,e),this.children=[],this.readyListeners=[],this.noOfChildren=0}return i(e,[{key:"setChildrenWidth",value:function(e){this.childrenWidth=e}},{key:"setContainerWidth",value:function(e){this.containerWidth=e}},{key:"getContainerWidth",value:function(){return this.containerWidth}},{key:"setSafeMargin",value:function(e){this.safeMargin=e}},{key:"setInitialTranslation",value:function(e){this.initialTranslation=e}},{key:"setResistanceCoeffiecent",value:function(e){this.resistanceCoeffiecent=e}},{key:"setCurrentTranslateX",value:function(e){this.currentTranslateX=e}},{key:"startDrag",value:function(){this.startDragMillis=s(),this.startTranslateX=this.currentTranslateX}},{key:"endDrag",value:function(){this.endDragMillis=s()}},{key:"isFarLeft",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e>(t?this.safeMargin:0)}},{key:"isFarRight",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?this.safeMargin:0;return e*-1+this.containerWidth>this.childrenWidth+n}},{key:"isChildrenSmallerThanContainer",value:function(){return this.childrenWidth<this.containerWidth}},{key:"getFarLeftTranslation",value:function(e){return this.initialTranslation+0+(e?this.safeMargin:0)}},{key:"getFarRightTranslation",value:function(e){return this.initialTranslation-this.childrenWidth+this.containerWidth-(e?this.safeMargin:0)}},{key:"checkAndGetTranslateX",value:function(e,t){return this.isFarLeft(e,t)?this.getFarLeftTranslation(t):this.isFarRight(e,t)?this.getFarRightTranslation(t):e}},{key:"calculateSwipeNextDistance",value:function(e){return(0,a.calculateNextDistance)({deltaX:e,startDragMillis:this.startDragMillis,endDragMillis:this.endDragMillis,resistanceCoeffiecent:this.resistanceCoeffiecent})}},{key:"calculateSwipeReleaseTranslateX",value:function(e){if(this.check(),this.isChildrenSmallerThanContainer())return this.initialTranslation;var t=this.calculateSwipeNextDistance(e);return this.checkAndGetTranslateX(t+this.currentTranslateX,!1)}},{key:"calculateSwipeTranslateX",value:function(e){return this.check(),this.isChildrenSmallerThanContainer()?this.initialTranslation:this.checkAndGetTranslateX(e+this.startTranslateX,!0)}},{key:"check",value:function(){if(void 0===this.safeMargin)throw new Error("You have to set safeMargin for the animator");if(void 0===this.initialTranslation)throw new Error("You have to set initialTranslation for the animator");if(void 0===this.resistanceCoeffiecent)throw new Error("You have to set resistanceCoeffiecent for the animator");if(void 0===this.currentTranslateX)throw new Error("You have to set currentTranslateX for the animator")}},{key:"setNumberOfChildren",value:function(e){this.noOfChildren=e}},{key:"whenReady",value:function(e){this.readyListeners.push(e)}},{key:"callReadyListeners",value:function(){this.readyListeners.forEach(function(e){return e()}),this.readyListeners=[]}},{key:"setGutter",value:function(e){this.gutter=e}},{key:"setCanCenterOne",value:function(e){this.canCenterOne=e}},{key:"setNumberOfCards",value:function(e){this.noOfCards=e}},{key:"setChildWidth",value:function(e,t){this.children[e]=t;var n=this.children.reduce(function(e,t){return e+t},0);this.setChildrenWidth(n+this.gutter*(this.children.length-1)),e===this.noOfChildren-1&&this.callReadyListeners()}},{key:"getItemWidth",value:function(){var e=this.gutter*(this.noOfCards-1),t=(this.getContainerWidth()-e)/this.noOfCards;return Math.floor(t)}},{key:"getCenterPointAt",value:function(e){var t=this.children.slice(0,e+1).reduce(function(e,t){return e+t},0);return t+this.gutter*e+this.gutter/2}},{key:"getItemCenterAt",value:function(e){var t=this.children.slice(0,e).reduce(function(e,t){return e+t},0);return this.children.length-1<=e?this.childrenWidth:t+this.gutter*e+this.children[e+1]/2}},{key:"calculateCenterTranslateXAtItem",value:function(e){var t=this.containerWidth/2-(this.shouldntCenterOneItem()?this.getCenterPointAt(e):this.getItemCenterAt(e));return this.checkAndGetTranslateX(t,!1)}},{key:"shouldntCenterOneItem",value:function(){if(this.canCenterOne){var e=this.children.slice(0,2).reduce(function(e,t){return e+t},0)+this.gutter;return e<this.containerWidth}return!0}},{key:"getCenterItemIndex",value:function(e,t){var n=this,r=void 0,i=function(e){return n.containerWidth/2-(n.shouldntCenterOneItem()?n.getCenterPointAt(e):n.getItemCenterAt(e))};if(t){for(var a=0;a<this.children.length;a++)if(r=i(a),r<e)return a}else for(var a=this.children.length-1;a>=0;a--)if(r=i(a),r>e)return a;throw new Error("Cant getCenterItemIndex")}},{key:"getSwipeReleaseCenterItemIndex",value:function(e){var t=this.calculateSwipeReleaseTranslateX(e);if(t===this.initialTranslation)return 0;var n=e<0;return this.getCenterItemIndex(t,n)}}]),e}();t.default=o},function(e,t){"use strict";function n(e){var t=e.deltaX,n=e.startDragMillis,r=e.endDragMillis,i=e.resistanceCoeffiecent;if(!r)throw new Error("endDragMillis is not set");if(!n)throw new Error("startDragMillis is not set");if(!i)throw new Error("resistanceCoeffiecent is not set");if(!t)throw new Error("deltaX is not set");var a=Math.abs(t),s=r-n,o=9.8,u=.05,l=2*a/Math.pow(s,2),c=Math.abs(l-o*u)*-1,f=2*a/s,h=Math.pow(f,2)/(2*c)*-1*(1/i);return t>0?h:-1*h}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateNextDistance=n},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r}])});
//# sourceMappingURL=react-items-carousel.map