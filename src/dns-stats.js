const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  let currentAdress;
  for (let j = 0; j < domains.length; j++) {
    currentAdress = getDNSStat(domains[j]);
    for (let i = 0; i < currentAdress.length; i++) {
      if (dns.hasOwnProperty(currentAdress[i])) {
        dns[currentAdress[i]] += 1;
      } else {
        dns[currentAdress[i]] = 1;
      }
    }
  }
  return dns;
}

function getDNSStat(domain) {
  const result = [];
  let arr = domain.split(".").reverse();
  for (const elem of arr) {
    if (result.length === 0) {
      result.push("." + elem);
    } else {
      result.push(result[result.length - 1] + "." + elem);
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
