/*! For license information please see 869.7cf6c9d5.chunk.js.LICENSE.txt */
(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[869,679],{7869:function(e,t,r){"use strict";r.r(t);var n=r(4165),i=r(5861),o=r(8152),a=r(2791),s=r(97),c=r.n(s),u=(r(1679),r(184));t.default=function(e){var t=(0,a.useState)("environment"),r=(0,o.Z)(t,2),s=r[0],d=(r[1],(0,a.useState)(null)),h=(0,o.Z)(d,2),l=h[0],f=h[1],p=(0,a.useState)(null),v=(0,o.Z)(p,2),m=v[0],g=v[1],y=(0,a.useState)(!0),S=(0,o.Z)(y,2),M=(S[0],S[1],(0,a.useRef)(null));console.log(e.appData);var U=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:{facingMode:s}});case 3:t=e.sent,f(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error accessing camera:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=function(){l&&(l.getTracks().forEach((function(e){return e.stop()})),f(null))};return(0,a.useEffect)((function(){return s&&M.current&&U(),function(){b()}}),[s]),(0,u.jsxs)("div",{className:"camera-app",children:[(0,u.jsx)("div",{className:"camera-preview",children:(0,u.jsx)("div",{className:"camera-frame",children:(0,u.jsx)(c(),{className:"camera-view",ref:M,screenshotFormat:"image/jpeg"})})}),(0,u.jsxs)("div",{className:"controls",children:[m&&(0,u.jsx)("a",{href:m,target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("img",{className:"captured-photo",src:m,alt:"Captured"})}),(0,u.jsx)("button",{onClick:function(){if(M.current){var e=M.current.getScreenshot();g(e)}},children:(0,u.jsx)("i",{className:"fas fa-camera"})}),(0,u.jsx)("button",{onClick:b,children:"X"})]})]})}},97:function(e,t,r){var n;n=function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(e,t,r){"use strict";r.r(t);var n=r("react"),i=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};function s(){return!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)}"undefined"!==typeof window&&(void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise((function(r,n){t.call(navigator,e,r,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}));var c=function(e){function t(t){var r=e.call(this,t)||this;return r.canvas=null,r.ctx=null,r.requestUserMediaId=0,r.unmounted=!1,r.state={hasUserMedia:!1},r}return i(t,e),t.prototype.componentDidMount=function(){var e=this.state,t=this.props;this.unmounted=!1,s()?(e.hasUserMedia||this.requestUserMedia(),t.children&&"function"!=typeof t.children&&console.warn("children must be a function")):t.onUserMediaError("getUserMedia not supported")},t.prototype.componentDidUpdate=function(e){var t=this.props;if(s()){var r=JSON.stringify(e.audioConstraints)!==JSON.stringify(t.audioConstraints),n=JSON.stringify(e.videoConstraints)!==JSON.stringify(t.videoConstraints),i=e.minScreenshotWidth!==t.minScreenshotWidth,o=e.minScreenshotHeight!==t.minScreenshotHeight;(n||i||o)&&(this.canvas=null,this.ctx=null),(r||n)&&(this.stopAndCleanup(),this.requestUserMedia())}else t.onUserMediaError("getUserMedia not supported")},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},t.stopMediaStream=function(e){e&&(e.getVideoTracks&&e.getAudioTracks?(e.getVideoTracks().map((function(t){e.removeTrack(t),t.stop()})),e.getAudioTracks().map((function(t){e.removeTrack(t),t.stop()}))):e.stop())},t.prototype.stopAndCleanup=function(){var e=this.state;e.hasUserMedia&&(t.stopMediaStream(this.stream),e.src&&window.URL.revokeObjectURL(e.src))},t.prototype.getScreenshot=function(e){var t=this.state,r=this.props;if(!t.hasUserMedia)return null;var n=this.getCanvas(e);return n&&n.toDataURL(r.screenshotFormat,r.screenshotQuality)},t.prototype.getCanvas=function(e){var t=this.state,r=this.props;if(!this.video)return null;if(!t.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var n=this.video.videoWidth,i=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var o=n/i;i=(n=r.minScreenshotWidth||this.video.clientWidth)/o,r.minScreenshotHeight&&i<r.minScreenshotHeight&&(n=(i=r.minScreenshotHeight)*o)}this.canvas=document.createElement("canvas"),this.canvas.width=(null===e||void 0===e?void 0:e.width)||n,this.canvas.height=(null===e||void 0===e?void 0:e.height)||i,this.ctx=this.canvas.getContext("2d")}var a=this.ctx,s=this.canvas;return a&&s&&(s.width=(null===e||void 0===e?void 0:e.width)||s.width,s.height=(null===e||void 0===e?void 0:e.height)||s.height,r.mirrored&&(a.translate(s.width,0),a.scale(-1,1)),a.imageSmoothingEnabled=r.imageSmoothing,a.drawImage(this.video,0,0,(null===e||void 0===e?void 0:e.width)||s.width,(null===e||void 0===e?void 0:e.height)||s.height),r.mirrored&&(a.scale(-1,1),a.translate(-s.width,0))),s},t.prototype.requestUserMedia=function(){var e=this,r=this.props,n=function(n,i){var o={video:"undefined"===typeof i||i};r.audio&&(o.audio="undefined"===typeof n||n),e.requestUserMediaId++;var a=e.requestUserMediaId;navigator.mediaDevices.getUserMedia(o).then((function(r){e.unmounted||a!==e.requestUserMediaId?t.stopMediaStream(r):e.handleUserMedia(null,r)})).catch((function(t){e.handleUserMedia(t)}))};if("mediaDevices"in navigator)n(r.audioConstraints,r.videoConstraints);else{var i=function(e){return{optional:[{sourceId:e}]}},o=function(e){var t=e.deviceId;return"string"===typeof t?t:Array.isArray(t)&&t.length>0?t[0]:"object"===typeof t&&t.ideal?t.ideal:null};MediaStreamTrack.getSources((function(e){var t=null,a=null;e.forEach((function(e){"audio"===e.kind?t=e.id:"video"===e.kind&&(a=e.id)}));var s=o(r.audioConstraints);s&&(t=s);var c=o(r.videoConstraints);c&&(a=c),n(i(t),i(a))}))}},t.prototype.handleUserMedia=function(e,t){var r=this.props;if(e||!t)return this.setState({hasUserMedia:!1}),void r.onUserMediaError(e);this.stream=t;try{this.video&&(this.video.srcObject=t),this.setState({hasUserMedia:!0})}catch(n){this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(t)})}r.onUserMedia(t)},t.prototype.render=function(){var e=this,t=this.state,r=this.props,i=r.audio,s=(r.forceScreenshotSourceSize,r.onUserMedia,r.onUserMediaError,r.screenshotFormat,r.screenshotQuality,r.minScreenshotWidth,r.minScreenshotHeight,r.audioConstraints,r.videoConstraints,r.imageSmoothing,r.mirrored),c=r.style,u=void 0===c?{}:c,d=r.children,h=a(r,["audio","forceScreenshotSourceSize","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),l=s?o(o({},u),{transform:(u.transform||"")+" scaleX(-1)"}):u,f={getScreenshot:this.getScreenshot.bind(this)};return n.createElement(n.Fragment,null,n.createElement("video",o({autoPlay:!0,src:t.src,muted:!i,playsInline:!0,ref:function(t){e.video=t},style:l},h)),d&&d(f))},t.defaultProps={audio:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},t}(n.Component);t.default=c},react:function(t,r){t.exports=e}}).default},e.exports=n(r(2791))},1679:function(e,t,r){"use strict";r.r(t),t.default={}}}]);
//# sourceMappingURL=869.7cf6c9d5.chunk.js.map