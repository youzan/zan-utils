/**
 * tozhCN 把字符串转成以分为单位的整数。
 * @memberof module:money
 * @param {number|string} num 金额
 * @returns {string} 中文大写的金额, 标准会计格式
 * @runkit true
 * @example
 * const tozhCN = require('zan-utils/money/tozhCN');
 * tozhCN(500.3);
 * // => 伍佰元叁角整
 */
declare function tozhCN(num: string | number): string;
export default tozhCN;
