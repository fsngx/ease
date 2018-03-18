"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Collection of animation easing functions.
 */
var Ease = /** @class */ (function () {
    function Ease() {
    }
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} linear ease value
     */
    Ease.linearEase = function (t, b, c, d) {
        return c * t / d + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in quad value value
     */
    Ease.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out quad value
     */
    Ease.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out quad value
     */
    Ease.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in cubic value
     */
    Ease.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out cubic value
     */
    Ease.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out cubic value
     */
    Ease.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in quart value
     */
    Ease.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out quart value
     */
    Ease.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out quart value
     */
    Ease.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in quint value
     */
    Ease.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out quint value
     */
    Ease.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out quint value
     */
    Ease.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in sine value
     */
    Ease.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out sine value
     */
    Ease.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out sine value
     */
    Ease.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in expo value
     */
    Ease.easeInExpo = function (t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out expo value
     */
    Ease.easeOutExpo = function (t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out expo value
     */
    Ease.easeInOutExpo = function (t, b, c, d) {
        if (t == 0) {
            return b;
        }
        ;
        if (t == d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in circ value
     */
    Ease.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out circ value
     */
    Ease.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out circ value
     */
    Ease.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in elastic value
     */
    Ease.easeInElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out elastic value
     */
    Ease.easeOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * 0.3;
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out elastic value
     */
    Ease.easeInOutElastic = function (t, b, c, d) {
        var s = 1.70158;
        var p = d * (0.3 * 1.5);
        var a = c;
        if (t == 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in back value
     */
    Ease.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out back value
     */
    Ease.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out back value
     */
    Ease.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) { s = 1.70158; }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in bounce value
     */
    Ease.easeInBounce = function (t, b, c, d) {
        return c - this.easeOutBounce(d - t, 0, c, d) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease bounce value
     */
    Ease.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        }
        else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    };
    ;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out bounce value
     */
    Ease.easeInOutBounce = function (t, b, c, d) {
        if (t < d / 2) {
            return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
        }
        return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    };
    ;
    return Ease;
}());
exports.Ease = Ease;
