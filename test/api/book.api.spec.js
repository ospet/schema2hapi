var chai = require('chai');
chai.use(require('chai-http'));
chai.use(require('chai-shallow-deep-equal'));
const expect = require('chai').expect;
var schema2api = require('../../index');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tests2h');
const Hapi = require('hapi');
var server = null;

var bookSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    author: {type: String, custom: true, put: false},
    isbn: String
  }, 
  {collection: 'books'}
);
var bookModel = mongoose.model('BookModel', bookSchema);

describe('API', () => {
  before(async () => {
    server = new Hapi.Server({
      port: 8091
    });
  
    const options = {};
    var models = [
      bookModel
    ];
    schema2api.generateAPI(server, models, options);
  
    await server.start();

  });

  after(async () => {
    await mongoose.disconnect();
    if (server) await server.stop();
  });

  it('POST a book', async () => {
    let book = {
      name: 'test book',
      author: 'test author',
      isbn: '1231321312313123'
    }
    let response = await chai.request('http://localhost:8091/')
    .post('books')
    .send(book);
    expect(response).to.have.property('body').to.shallowDeepEqual(book);
  });
});
