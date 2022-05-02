const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value = "") {
    this.chain.push(value+'')
    return this;
  },

  removeLink(position) {
    if(!(Number.isInteger(position) && position > 0 && position < this.chain.length)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position-1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = '';
    for(let i = 0; i < this.chain.length; i++) {
      if(i === 0) {
        result += `( ${this.chain[i]} )`;
      } else {
        result += `~~( ${this.chain[i]} )`;
      }
    }
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};