'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');
const HttpContextStore = require('../../dst/lib/http.context.store').HttpContextStore;

describe('http.context.store.js tests', () => {
  describe('#constructor()', () => {
    it('expect to create an instance of HttpContextStore', () => {
      // arranges

      // acts
      const instance = new HttpContextStore();

      // asserts
      expect(instance instanceof HttpContextStore).to.be.true;
    });
  });

  describe('#set() and #get()', () => {
    it('expect to get and set a process context', () => {
      // arranges
      const name = "test";
      const value = "sample";
      const instance = new HttpContextStore();

      // acts
      instance.set(name, value)

      // asserts
      expect(instance.get(name)).to.equal(value);
    });
  });
});
