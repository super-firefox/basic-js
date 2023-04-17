const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(hasReverse = true) {
    this.hasReverse = hasReverse;
    this.ALFABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.VIGENER = this.createVigener();
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let mark = 0;
    let indexChar;
    let indexKey;
    let enc = [];
    for (let i = 0; i < message.length; i++) {
      indexChar = this.ALFABET.indexOf(message[i]);
      if (indexChar === -1) {
        enc.push(message[i])
      } else {
        indexKey = this.ALFABET.indexOf(key[mark])
        enc.push(this.VIGENER[indexChar][indexKey]);
        mark = mark < key.length-1 ? mark + 1 : 0;
      }
    }

    return this.hasReverse ? enc.join("") : enc.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let mark = 0;
    let indexChar;
    let indexKey;
    let decr = [];

    for (let i = 0; i < encryptedMessage.length; i++) {
      indexKey = this.ALFABET.indexOf(key[mark]);
      indexChar = this.ALFABET.indexOf(encryptedMessage[i]);
      if (indexChar === -1) {
        decr.push(encryptedMessage[i])
      } else {
        decr.push(this.ALFABET[this.VIGENER[indexKey].indexOf(encryptedMessage[i])]);
        mark = mark < key.length-1 ? mark + 1 : 0;
      }
    }

    return this.hasReverse ? decr.join("") : decr.reverse().join("");
  }

  createVigener() {
    const vigener = [];
    for (let i = 0; i < this.ALFABET.length; i++) {
      vigener.push(this.ALFABET.slice(i) + this.ALFABET.slice(0, i));
    }
    return vigener;
  }
}

module.exports = {
  VigenereCipheringMachine
};
