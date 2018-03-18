/**
 * Collection of animation easing functions.
 */
export declare class Ease {
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} linear ease value
     */
    static linearEase(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in quad value value
     */
    static easeInQuad(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out quad value
     */
    static easeOutQuad(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out quad value
     */
    static easeInOutQuad(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in cubic value
     */
    static easeInCubic(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out cubic value
     */
    static easeOutCubic(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out cubic value
     */
    static easeInOutCubic(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in quart value
     */
    static easeInQuart(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out quart value
     */
    static easeOutQuart(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out quart value
     */
    static easeInOutQuart(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in quint value
     */
    static easeInQuint(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out quint value
     */
    static easeOutQuint(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out quint value
     */
    static easeInOutQuint(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in sine value
     */
    static easeInSine(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out sine value
     */
    static easeOutSine(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out sine value
     */
    static easeInOutSine(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in expo value
     */
    static easeInExpo(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out expo value
     */
    static easeOutExpo(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out expo value
     */
    static easeInOutExpo(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in circ value
     */
    static easeInCirc(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out circ value
     */
    static easeOutCirc(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out circ value
     */
    static easeInOutCirc(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in elastic value
     */
    static easeInElastic(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out elastic value
     */
    static easeOutElastic(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out elastic value
     */
    static easeInOutElastic(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in back value
     */
    static easeInBack(t: number, b: number, c: number, d: number, s?: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease out back value
     */
    static easeOutBack(t: number, b: number, c: number, d: number, s?: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out back value
     */
    static easeInOutBack(t: number, b: number, c: number, d: number, s?: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in bounce value
     */
    static easeInBounce(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease bounce value
     */
    static easeOutBounce(t: number, b: number, c: number, d: number): number;
    /**
     * @param {number} t The current time (or position) of the neonate (Can be seconds, frames, ms as long as the unit is consistent the total time span).
     * @param {number} b The start value of the animation property
     * @param {number} c The change between the beginning and destination value of the animation property
     * @param {number} d The total time of the neonate
     * @return {number} The ease in out bounce value
     */
    static easeInOutBounce(t: number, b: number, c: number, d: number): number;
}
