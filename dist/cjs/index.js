"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=require("classnames"),a=require("react");function r(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var t=r(n),i=r(a);!function(n,a){void 0===a&&(a={});var r=a.insertAt;if(n&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}('body {\n  padding-top: 107px;\n  padding-bottom: 40px;\n}\n\n.circle-spin-1 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  width: var(--size);\n  height: var(--size);\n  border-width: var(--stroke-width);\n  border-style: solid;\n  border-color: var(--color) var(--color) var(--color) transparent;\n  border-radius: 50%;\n  transform: rotate(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-spin-1-animation;\n}\n\n@keyframes circle-spin-1-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.circle-spin-2 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --accent-opacity: .25;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.circle-spin-2::before,\n.circle-spin-2::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-width: var(--stroke-width);\n  border-style: solid;\n  border-radius: 50%;\n  transform: rotate(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-spin-2-animation;\n}\n\n.circle-spin-2::before {\n  border-color: var(--color) var(--color) var(--color) transparent;\n  opacity: var(--accent-opacity);\n}\n\n.circle-spin-2::after {\n  border-color: transparent transparent transparent var(--color);\n}\n\n@keyframes circle-spin-2-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.circle-spin-3 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  width: var(--size);\n  height: var(--size);\n  border-width: var(--stroke-width);\n  border-style: solid;\n  border-color: var(--color) transparent var(--color) transparent;\n  border-radius: 50%;\n  transform: rotate(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-spin-3-animation;\n}\n\n@keyframes circle-spin-3-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.circle-spin-4 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-duration: 1s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.circle-spin-4::before,\n.circle-spin-4::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-width: var(--stroke-width);\n  border-style: solid;\n  border-color: var(--color) var(--color) transparent transparent;\n  border-radius: 50%;\n  transform: rotate(0deg);\n  animation: var(--animation-duration) infinite circle-spin-4-animation;\n}\n\n.circle-spin-4::before {\n  animation-timing-function: cubic-bezier(0.5, 0, 0.75, 0);\n}\n\n.circle-spin-4::before {\n  animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1);\n}\n\n@keyframes circle-spin-4-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.circle-spin-5 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 2);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  width: var(--size);\n  height: var(--size);\n  border-width: var(--stroke-width);\n  border-style: solid;\n  border-color: var(--color) transparent var(--color) transparent;\n  border-radius: 50%;\n  transform: rotate(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-spin-5-animation;\n}\n\n@keyframes circle-spin-5-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.circle-spin-6 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --accent-opacity: .25;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-spin-6-animation;\n}\n\n.circle-spin-6::before,\n.circle-spin-6::after {\n  content: "";\n  position: absolute;\n  background-color: var(--color);\n  border-radius: 50%;\n}\n\n.circle-spin-6::before {\n  inset: 0;\n  opacity: var(--accent-opacity);\n}\n\n.circle-spin-6::after {\n  top: var(--stroke-width);\n  left: 50%;\n  width: var(--stroke-width);\n  height: var(--stroke-width);\n  transform: translateX(-50%);\n}\n\n@keyframes circle-spin-6-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.circle-grow-1 {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  width: var(--size);\n  height: var(--size);\n  border-radius: 50%;\n  background-color: var(--color);\n  opacity: 0;\n  transform: scale(0);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-grow-1-animation;\n}\n\n@keyframes circle-grow-1-animation {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  80% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n.circle-pulse-1 {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.circle-pulse-1::before,\n.circle-pulse-1::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: var(--color);\n  border-radius: 50%;\n  opacity: 1;\n  transform: scale(0);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-pulse-1-animation;\n}\n\n.circle-pulse-1::after {\n  animation-delay: calc(var(--animation-duration) / 2);\n}\n\n@keyframes circle-pulse-1-animation {\n  0% {\n    opacity: 1;\n    transform: scale(0);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n.circle-rotate-1-horizontal {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  width: var(--size);\n  height: var(--size);\n  background-color: var(--color);\n  border-radius: 50%;\n  transform: rotateY(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-rotate-1-horizontal-animation;\n}\n\n@keyframes circle-rotate-1-horizontal-animation {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(180deg);\n  }\n}\n.circle-rotate-1-vertical {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  width: var(--size);\n  height: var(--size);\n  background-color: var(--color);\n  border-radius: 50%;\n  transform: rotateX(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-rotate-1-vertical-animation;\n}\n\n@keyframes circle-rotate-1-vertical-animation {\n  from {\n    transform: rotateX(0deg);\n  }\n  to {\n    transform: rotateX(180deg);\n  }\n}\n.circle-packman-1 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 2);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.circle-packman-1::before,\n.circle-packman-1::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  border-width: var(--stroke-width);\n  border-style: solid;\n  border-radius: 50%;\n}\n\n.circle-packman-1::before {\n  border-color: var(--color) transparent transparent var(--color);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-packman-1-animation-before;\n}\n\n.circle-packman-1::after {\n  border-color: transparent transparent var(--color) var(--color);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite circle-packman-1-animation-after;\n}\n\n@keyframes circle-packman-1-animation-before {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(45deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes circle-packman-1-animation-after {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-45deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.square-spin-1 {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  width: var(--size);\n  height: var(--size);\n  background-color: var(--color);\n  transform: rotate(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite square-spin-1-animation;\n}\n\n@keyframes square-spin-1-animation {\n  0% {\n    transform: scale(1) rotate(0deg);\n  }\n  25% {\n    transform: scale(0.5) rotate(90deg);\n  }\n  50% {\n    transform: scale(1) rotate(180deg);\n  }\n  75% {\n    transform: scale(0.5) rotate(270deg);\n  }\n  100% {\n    transform: scale(1) rotate(360deg);\n  }\n}\n.square-rotate-1-horizontal {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  width: var(--size);\n  height: var(--size);\n  background-color: var(--color);\n  transform: rotateY(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite square-rotate-1-horizontal-animation;\n}\n\n@keyframes square-rotate-1-horizontal-animation {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(180deg);\n  }\n}\n.square-rotate-1-vertical {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  width: var(--size);\n  height: var(--size);\n  background-color: var(--color);\n  transform: rotateX(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite square-rotate-1-vertical-animation;\n}\n\n@keyframes square-rotate-1-vertical-animation {\n  from {\n    transform: rotateX(0deg);\n  }\n  to {\n    transform: rotateX(180deg);\n  }\n}\n.square-rotate-2 {\n  --size: 24px;\n  --accent-opacity: .25;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.square-rotate-2::before,\n.square-rotate-2::after {\n  content: "";\n  position: absolute;\n  transform: rotate(0deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite square-rotate-2-animation;\n}\n\n.square-rotate-2::before {\n  inset: 0;\n  background-color: var(--color);\n  opacity: var(--accent-opacity);\n}\n\n.square-rotate-2::after {\n  top: 12.5%;\n  left: 12.5%;\n  width: 75%;\n  height: 75%;\n  background-color: var(--color);\n  animation-direction: reverse;\n}\n\n@keyframes square-rotate-2-animation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.square-move-1 {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.square-move-1::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 50%;\n  bottom: 50%;\n  left: 0;\n  background-color: var(--color);\n  transform: translate(0%, 0%);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite square-move-1-animation;\n}\n\n@keyframes square-move-1-animation {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(100%, 0%);\n  }\n  50% {\n    transform: translate(100%, 100%);\n  }\n  75% {\n    transform: translate(0%, 100%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n.square-move-2 {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.square-move-2::before,\n.square-move-2::after {\n  content: "";\n  position: absolute;\n  width: 50%;\n  height: 50%;\n  background-color: var(--color);\n}\n\n.square-move-2::before {\n  top: 0;\n  left: 0;\n  transform: translate(0%, 0%);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite square-move-2-animation-before;\n}\n\n.square-move-2::after {\n  right: 0;\n  bottom: 0;\n  transform: translate(0%, 0%);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite square-move-2-animation-after;\n}\n\n@keyframes square-move-2-animation-before {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(100%, 0%);\n  }\n  50% {\n    transform: translate(100%, 100%);\n  }\n  75% {\n    transform: translate(0%, 100%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n@keyframes square-move-2-animation-after {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(-100%, 0%);\n  }\n  50% {\n    transform: translate(-100%, -100%);\n  }\n  75% {\n    transform: translate(0%, -100%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n.square-move-3 {\n  --size: 24px;\n  --color: currentColor;\n  --accent-opacity: .25;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.square-move-3::before,\n.square-move-3::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 50%;\n  background-color: var(--color);\n  transform: translate(0%, 0%);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite square-move-3-animation;\n}\n\n.square-move-3::before {\n  opacity: var(--accent-opacity);\n  animation-delay: calc(var(--animation-duration) * 0.125);\n}\n\n@keyframes square-move-3-animation {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  12.5% {\n    transform: translate(100%, 0%);\n  }\n  25% {\n    transform: translate(100%, 0%);\n  }\n  37.5% {\n    transform: translate(100%, 100%);\n  }\n  50% {\n    transform: translate(100%, 100%);\n  }\n  62.5% {\n    transform: translate(0%, 100%);\n  }\n  75% {\n    transform: translate(0%, 100%);\n  }\n  87.5% {\n    transform: translate(0%, 0%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n.line-1-horizontal {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);\n  --animation-duration: 2s;\n  width: var(--size);\n  height: var(--stroke-width);\n  background-color: var(--color);\n  transform: scaleX(0);\n  transform-origin: center left;\n  animation: var(--animation-timing-function) var(--animation-duration) infinite line-1-horizontal-animation;\n}\n\n@keyframes line-1-horizontal-animation {\n  0% {\n    transform: scaleX(0);\n    transform-origin: center left;\n  }\n  50% {\n    transform: scaleX(1);\n    transform-origin: center left;\n  }\n  51% {\n    transform: scaleX(1);\n    transform-origin: center right;\n  }\n  100% {\n    transform: scaleX(0);\n    transform-origin: center right;\n  }\n}\n.line-1-vertical {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);\n  --animation-duration: 2s;\n  width: var(--stroke-width);\n  height: var(--size);\n  background-color: var(--color);\n  transform: scaleY(0);\n  transform-origin: top center;\n  animation: var(--animation-timing-function) var(--animation-duration) infinite line-1-vertical-animation;\n}\n\n@keyframes line-1-vertical-animation {\n  0% {\n    transform: scaleY(0);\n    transform-origin: top center;\n  }\n  50% {\n    transform: scaleY(1);\n    transform-origin: top center;\n  }\n  51% {\n    transform: scaleY(1);\n    transform-origin: bottom center;\n  }\n  100% {\n    transform: scaleY(0);\n    transform-origin: bottom center;\n  }\n}\n.line-2-horizontal {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.line-2-horizontal::before,\n.line-2-horizontal::after {\n  content: "";\n  position: absolute;\n  transform: scaleY(1);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite line-2-horizontal-animation;\n}\n\n.line-2-horizontal::before {\n  inset: 0;\n  border-top: var(--stroke-width) solid var(--color);\n  border-bottom: var(--stroke-width) solid var(--color);\n}\n\n.line-2-horizontal::after {\n  top: calc(50% - var(--stroke-width) / 2);\n  right: 0;\n  left: 0;\n  border-top: var(--stroke-width) solid var(--color);\n  animation-delay: calc(var(--animation-duration) / 2);\n}\n\n@keyframes line-2-horizontal-animation {\n  0% {\n    transform: scaleX(1);\n  }\n  50% {\n    transform: scaleX(0.5);\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n.line-2-vertical {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.line-2-vertical::before,\n.line-2-vertical::after {\n  content: "";\n  position: absolute;\n  transform: scaleY(1);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite line-2-vertical-animation;\n}\n\n.line-2-vertical::before {\n  inset: 0;\n  border-right: var(--stroke-width) solid var(--color);\n  border-left: var(--stroke-width) solid var(--color);\n}\n\n.line-2-vertical::after {\n  top: 0;\n  bottom: 0;\n  left: calc(50% - var(--stroke-width) / 2);\n  border-left: var(--stroke-width) solid var(--color);\n  animation-delay: calc(var(--animation-duration) / 2);\n}\n\n@keyframes line-2-vertical-animation {\n  0% {\n    transform: scaleY(1);\n  }\n  50% {\n    transform: scaleY(0.5);\n  }\n  100% {\n    transform: scaleY(1);\n  }\n}\n.line-3-horizontal {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --scale: calc(4 / 24);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.line-3-horizontal::before,\n.line-3-horizontal::after {\n  content: "";\n  position: absolute;\n  transform: scaleY(1);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite line-3-horizontal-animation;\n}\n\n.line-3-horizontal::before {\n  inset: 0;\n  border-top: var(--stroke-width) solid var(--color);\n  border-bottom: var(--stroke-width) solid var(--color);\n}\n\n.line-3-horizontal::after {\n  top: calc(50% - var(--stroke-width) / 2);\n  right: 0;\n  left: 0;\n  border-top: var(--stroke-width) solid var(--color);\n}\n\n@keyframes line-3-horizontal-animation {\n  0% {\n    transform: scaleX(1);\n  }\n  25% {\n    transform: scaleX(var(--scale));\n  }\n  75% {\n    transform: scaleX(var(--scale));\n  }\n  100% {\n    transform: scaleX(1);\n  }\n}\n.line-3-vertical {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --scale: calc(4 / 24);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n}\n\n.line-3-vertical::before,\n.line-3-vertical::after {\n  content: "";\n  position: absolute;\n  transform: scaleY(1);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite line-3-vertical-animation;\n}\n\n.line-3-vertical::before {\n  inset: 0;\n  border-right: var(--stroke-width) solid var(--color);\n  border-left: var(--stroke-width) solid var(--color);\n}\n\n.line-3-vertical::after {\n  top: 0;\n  bottom: 0;\n  left: calc(50% - var(--stroke-width) / 2);\n  border-left: var(--stroke-width) solid var(--color);\n}\n\n@keyframes line-3-vertical-animation {\n  0% {\n    transform: scaleY(1);\n  }\n  25% {\n    transform: scaleY(var(--scale));\n  }\n  75% {\n    transform: scaleY(var(--scale));\n  }\n  100% {\n    transform: scaleY(1);\n  }\n}\n.arrow-1-up {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  overflow-y: hidden;\n}\n\n.arrow-1-up::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: var(--color);\n  clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 75% 50%, 75% 100%, 25% 100%, 25% 50%, 0% 50%);\n  transform: translateY(-100%);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite arrow-1-up-animation;\n}\n\n@keyframes arrow-1-up-animation {\n  0% {\n    transform: translateY(100%);\n  }\n  45% {\n    transform: translateY(0%);\n  }\n  55% {\n    transform: translateY(0%);\n  }\n  100% {\n    transform: translateY(-100%);\n  }\n}\n.arrow-1-right {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  overflow-x: hidden;\n}\n\n.arrow-1-right::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: var(--color);\n  clip-path: polygon(0% 25%, 50% 25%, 50% 0%, 100% 50%, 50% 100%, 50% 75%, 0% 75%, 0% 25%);\n  transform: translateX(-100%);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite arrow-1-right-animation;\n}\n\n@keyframes arrow-1-right-animation {\n  0% {\n    transform: translateX(-100%);\n  }\n  45% {\n    transform: translateX(0%);\n  }\n  55% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n.arrow-1-down {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  overflow-y: hidden;\n}\n\n.arrow-1-down::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: var(--color);\n  clip-path: polygon(0% 50%, 50% 100%, 100% 50%, 75% 50%, 75% 0%, 25% 0%, 25% 50%, 0% 50%);\n  transform: translateY(-100%);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite arrow-1-down-animation;\n}\n\n@keyframes arrow-1-down-animation {\n  0% {\n    transform: translateY(-100%);\n  }\n  45% {\n    transform: translateY(0%);\n  }\n  55% {\n    transform: translateY(0%);\n  }\n  100% {\n    transform: translateY(100%);\n  }\n}\n.arrow-1-left {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: cubic-bezier(0.85, 0, 0.15, 1);\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  overflow-x: hidden;\n}\n\n.arrow-1-left::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: var(--color);\n  clip-path: polygon(0% 50%, 50% 0%, 50% 25%, 100% 25%, 100% 75%, 50% 75%, 50% 100%, 0% 50%);\n  transform: translateX(100%);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite arrow-1-left-animation;\n}\n\n@keyframes arrow-1-left-animation {\n  0% {\n    transform: translateX(100%);\n  }\n  45% {\n    transform: translateX(0%);\n  }\n  55% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n.plus-1 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 4s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite plus-1-animation;\n}\n\n.plus-1::before,\n.plus-1::after {\n  content: "";\n  position: absolute;\n  background-color: var(--color);\n}\n\n.plus-1::before {\n  top: 50%;\n  left: 0;\n  width: 100%;\n  height: var(--stroke-width);\n  transform: translateY(-50%);\n}\n\n.plus-1::after {\n  top: 0;\n  left: 50%;\n  width: var(--stroke-width);\n  height: 100%;\n  transform: translateX(-50%);\n}\n\n@keyframes plus-1-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  2.5% {\n    transform: rotate(0deg);\n  }\n  22.5% {\n    transform: rotate(90deg);\n  }\n  27.5% {\n    transform: rotate(90deg);\n  }\n  47.5% {\n    transform: rotate(180deg);\n  }\n  52.5% {\n    transform: rotate(180deg);\n  }\n  72.5% {\n    transform: rotate(270deg);\n  }\n  77.5% {\n    transform: rotate(270deg);\n  }\n  97.5% {\n    transform: rotate(360deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.misc-1-horizontal {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: var(--size);\n  height: calc(var(--size) / 2);\n  border-radius: var(--size);\n  overflow-x: hidden;\n}\n\n.misc-1-horizontal::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: var(--color);\n  border-radius: inherit;\n  transform: translateX(calc(var(--size) / 2 - 100%));\n  animation: var(--animation-timing-function) var(--animation-duration) infinite misc-1-horizontal-animation;\n}\n\n@keyframes misc-1-horizontal-animation {\n  0% {\n    transform: translateX(calc(var(--size) / 2 - 100%));\n  }\n  50% {\n    transform: translateX(calc(100% - var(--size) / 2));\n  }\n  100% {\n    transform: translateX(calc(var(--size) / 2 - 100%));\n  }\n}\n.misc-1-vertical {\n  --size: 24px;\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 2s;\n  position: relative;\n  width: calc(var(--size) / 2);\n  height: var(--size);\n  border-radius: var(--size);\n  overflow-y: hidden;\n}\n\n.misc-1-vertical::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: var(--color);\n  border-radius: inherit;\n  transform: translateY(calc(var(--size) / 2 - 100%));\n  animation: var(--animation-timing-function) var(--animation-duration) infinite misc-1-vertical-animation;\n}\n\n@keyframes misc-1-vertical-animation {\n  0% {\n    transform: translateY(calc(var(--size) / 2 - 100%));\n  }\n  50% {\n    transform: translateY(calc(100% - var(--size) / 2));\n  }\n  100% {\n    transform: translateY(calc(var(--size) / 2 - 100%));\n  }\n}\n.typing-1 {\n  --size: 24px;\n  --stroke-width: calc(var(--size) / 6);\n  --color: currentColor;\n  --animation-timing-function: linear;\n  --animation-duration: 1s;\n  position: relative;\n  width: var(--size);\n  height: var(--size);\n  border-bottom: var(--stroke-width) solid var(--color);\n}\n\n.typing-1::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: calc(var(--stroke-width) / 2);\n  left: 0;\n  width: calc(var(--stroke-width) * 1.25);\n  background-color: var(--color);\n  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%);\n  transform: translateX(0) rotate(10deg);\n  animation: var(--animation-timing-function) var(--animation-duration) infinite typing-1-animation;\n}\n\n@keyframes typing-1-animation {\n  0% {\n    transform: translateX(0) rotate(10deg);\n  }\n  85% {\n    transform: translateX(var(--size)) rotate(10deg);\n  }\n  100% {\n    transform: translateX(0) rotate(10deg);\n  }\n}'),exports.Loader=function(n){var{as:a="div",type:r,size:o,color:e,animationTimingFunction:s,animationDuration:c,className:l,style:m}=n,f=function(n,a){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&a.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(t=Object.getOwnPropertySymbols(n);i<t.length;i++)a.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(n,t[i])&&(r[t[i]]=n[t[i]])}return r}(n,["as","type","size","color","animationTimingFunction","animationDuration","className","style"]);const d=t.default(r,l),v=Object.assign(Object.assign({},m),{"--size":o,"--color":e,"--animation-timing-function":s,"--animation-duration":c});return i.default.createElement(a,Object.assign({role:"status",className:d,style:v},f))};
//# sourceMappingURL=index.js.map
