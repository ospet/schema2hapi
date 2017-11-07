var expect = require('chai').expect;
var controllers = require('../../lib/controllers');
var mongoose = require('mongoose');

var dummySchema = new mongoose.Schema({
    testString: String,
    testNumber: Number,
    testBool: Boolean
  }, 
  {collection: 'dummies'}
);
var dummyModel = mongoose.model('DummyModel', dummySchema);

describe('Controllers', () => {
  it('generateController on empty schema', () => {
    var ctrl = controllers.generateController({}, {});
    expect(ctrl).not.to.have.property('getAll');
    expect(ctrl).not.to.have.property('create');
    expect(ctrl).to.be.empty;
  });

  it('generateController', () => {
    var ctrl = controllers.generateController({}, dummySchema);
    expect(ctrl).to.have.property('getAll').to.be.a('function');
    expect(ctrl).to.have.property('create').to.be.a('function');
  });
});
