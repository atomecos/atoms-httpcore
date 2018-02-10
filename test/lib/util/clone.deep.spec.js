'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const cloneDeep = require('../../../dst/lib/util').cloneDeep;

describe('clone.deep.js tests', () => {
  describe('#cloneDeep()', () => {
    it('expect to create an instance of HttpContextStore', () => {
      // arranges
      const arranged = { a: 1, b: 2, c: 3 };

      // acts
      const result = cloneDeep(arranged);

      // asserts
      expect(result).not.to.equal(arranged);
      expect(result).to.deep.equal(arranged);
    });
  });
});
