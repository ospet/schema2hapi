/*
{ schema:
  Schema {
    obj:
     { firstname: [Function: String],
       lastname: [Function: String],
       email: [Function: String],
       gender: [Object] },
    paths:
     { firstname: [Object],
       lastname: [Object],
       email: [Object],
       gender: [Object],
       _id: [Object],
       __v: [Object] },
    aliases: {},
    subpaths: {},
    virtuals: { id: [Object] },
    singleNestedPaths: {},
    nested: {},
    inherits: {},
    callQueue: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    _indexes: [],
    methods: {},
    statics: {},
    tree:
     { firstname: [Function: String],
       lastname: [Function: String],
       email: [Function: String],
       gender: [Object],
       _id: [Object],
       __v: [Function: Number],
       id: [Object] },
    query: {},
    childSchemas: [],
    plugins: [ [Object], [Object], [Object], [Object] ],
    s: { hooks: [Object], kareemHooks: [Object] },
    options:
     { collection: 'users',
       retainKeyOrder: false,
       typeKey: 'type',
       id: true,
       noVirtualId: false,
       _id: true,
       noId: false,
       validateBeforeSave: true,
       read: null,
       shardKey: null,
       autoIndex: null,
       minimize: true,
       discriminatorKey: '__t',
       versionKey: '__v',
       capped: false,
       bufferCommands: true,
       strict: true,
       pluralization: true },
    '$globalPluginsApplied': true },
 model:
  { [Function: model]
    hooks: Kareem { _pres: {}, _posts: {} },
    base:
     Mongoose {
       connections: [Array],
       models: [Object],
       modelSchemas: [Object],
       options: [Object],
       plugins: [Array] },
    modelName: 'UserModel',
    model: [Function: model],
    db:
     NativeConnection {
       base: [Object],
       collections: [Object],
       models: [Object],
       config: [Object],
       replica: false,
       hosts: null,
       host: 'localhost',
       port: 27017,
       user: undefined,
       pass: undefined,
       name: 'tests2h',
       options: [Object],
       otherDbs: [],
       states: [Object],
       _readyState: 2,
       _closeCalled: false,
       _hasOpened: false,
       _listening: false,
       db: [Object] },
    discriminators: undefined,
    '$appliedMethods': true,
    '$appliedHooks': true,
    _events: { init: [Function], save: [Function] },
    _eventsCount: 2,
    schema:
     Schema {
       obj: [Object],
       paths: [Object],
       aliases: {},
       subpaths: {},
       virtuals: [Object],
       singleNestedPaths: {},
       nested: {},
       inherits: {},
       callQueue: [Array],
       _indexes: [],
       methods: {},
       statics: {},
       tree: [Object],
       query: {},
       childSchemas: [],
       plugins: [Array],
       s: [Object],
       options: [Object],
       '$globalPluginsApplied': true },
    collection:
     NativeCollection {
       collection: null,
       opts: [Object],
       name: 'users',
       collectionName: 'users',
       conn: [Object],
       queue: [],
       buffer: true,
       emitter: [Object] },
    Query: { [Function] base: [Object] },
    '$__insertMany': [Function],
    insertMany: [Function],
    '$init': Promise { emitter: [Object], emitted: {}, ended: false } } }
*/



/*{
	"obj": {
		"gender": {
			"enum": ["F", "M"]
		}
	},
	"paths": {
		"firstname": {
			"enumValues": [],
			"regExp": null,
			"path": "firstname",
			"instance": "String",
			"validators": [],
			"setters": [],
			"getters": [],
			"options": {},
			"_index": null
		},
		"lastname": {
			"enumValues": [],
			"regExp": null,
			"path": "lastname",
			"instance": "String",
			"validators": [],
			"setters": [],
			"getters": [],
			"options": {},
			"_index": null
		},
		"email": {
			"enumValues": [],
			"regExp": null,
			"path": "email",
			"instance": "String",
			"validators": [],
			"setters": [],
			"getters": [],
			"options": {},
			"_index": null
		},
		"gender": {
			"enumValues": ["F", "M"],
			"regExp": null,
			"path": "gender",
			"instance": "String",
			"validators": [{
				"message": "`{VALUE}` is not a valid enum value for path `{PATH}`.",
				"type": "enum",
				"enumValues": ["F", "M"]
			}],
			"setters": [],
			"getters": [],
			"options": {
				"enum": ["F", "M"]
			},
			"_index": null
		},
		"_id": {
			"path": "_id",
			"instance": "ObjectID",
			"validators": [],
			"setters": [null],
			"getters": [],
			"options": {
				"auto": true
			},
			"_index": null
		},
		"__v": {
			"path": "__v",
			"instance": "Number",
			"validators": [],
			"setters": [],
			"getters": [],
			"options": {},
			"_index": null
		}
	},
	"aliases": {},
	"subpaths": {},
	"virtuals": {
		"id": {
			"path": "id",
			"getters": [null],
			"setters": [],
			"options": {}
		}
	},
	"singleNestedPaths": {},
	"nested": {},
	"inherits": {},
	"callQueue": [
		["pre", ["save", null]],
		["pre", ["save", null]],
		["pre", {
			"0": "remove",
			"1": true
		}],
		["on", ["init", null]],
		["pre", {
			"0": "save"
		}],
		["on", ["save", null]]
	],
	"_indexes": [],
	"methods": {},
	"statics": {},
	"tree": {
		"gender": {
			"enum": ["F", "M"]
		},
		"_id": {
			"auto": true
		},
		"id": {
			"path": "id",
			"getters": [null],
			"setters": [],
			"options": {}
		}
	},
	"query": {},
	"childSchemas": [],
	"plugins": [{
		"opts": {
			"deduplicate": true
		}
	}, {
		"opts": {
			"deduplicate": true
		}
	}, {
		"opts": {
			"deduplicate": true
		}
	}, {
		"opts": {
			"deduplicate": true
		}
	}],
	"s": {
		"hooks": {
			"_pres": {},
			"_posts": {}
		},
		"kareemHooks": {
			"count": true,
			"find": true,
			"findOne": true,
			"findOneAndUpdate": true,
			"findOneAndRemove": true,
			"insertMany": true,
			"replaceOne": true,
			"update": true,
			"updateMany": true,
			"updateOne": true
		}
	},
	"options": {
		"collection": "users",
		"retainKeyOrder": false,
		"typeKey": "type",
		"id": true,
		"noVirtualId": false,
		"_id": true,
		"noId": false,
		"validateBeforeSave": true,
		"read": null,
		"shardKey": null,
		"autoIndex": null,
		"minimize": true,
		"discriminatorKey": "__t",
		"versionKey": "__v",
		"capped": false,
		"bufferCommands": true,
		"strict": true,
		"pluralization": true
	},
	"$globalPluginsApplied": true
}*/

const _ = require('lodash');
const Boom = require('boom');
var mongoose = require('mongoose');

/**
 * Generate a controller object with some default methods:
 * getAll --> gets all objects from this entity
 * getById --> gets from the unique id
 * post --> create such object
 * put --> update the object
 * delete --> remove the object from collection
 * @param {*} schema 
 * @param {*} options 
 */
const generateController = (Model, options) => {
  var controller = {};
  if (_.isUndefined(Model) || _.isEmpty(Model)) {
    return controller;
  }
  controller.post = async (request, h) => {
    var entity = new Model(request.payload);
    try {
      let obj = await entity.save();
      return _.omit(obj.toObject(), ['__v']);
    }
    catch(e) {
      throw Boom.badImplementation('Cannot perform requested action');
    }
  }
  controller.getAll = async (request, h) => {
    try {
      return await Model.find({}, {'__v': 0});
    }
    catch(e) {
      throw Boom.badImplementation('Cannot perform requested action');
    }
  }
  controller.getById = async (request, h) => {
    try {
      return await Model.findOne({_id: request.params.id}, {'__v': 0});
    }
    catch(e) {
      throw Boom.badImplementation('Cannot perform requested action');
    }
  }
  controller.put = async (request, h) => {
    try {
      return await Model.update({_id: request.params.id},
        {'$set': request.payload}, 
        {upsert: true}
      );
    }
    catch(e) {
      throw Boom.badImplementation('Cannot perform requested action');
    }
  }
  controller.delete = async (request, h) => {
    try {
      return await Model.deleteOne({_id: request.params.id});
    }
    catch(e) {
      throw Boom.badImplementation('Cannot perform requested action');
    }
  }
  return controller;
}

module.exports.generateController = generateController;
