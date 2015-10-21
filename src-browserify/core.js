var cdb = {};
cdb.VERSION = "3.15.8";
cdb.DEBUG = false;
cdb.CARTOCSS_VERSIONS = {
  '2.0.0': '',
  '2.1.0': ''
};
cdb.CARTOCSS_DEFAULT_VERSION = '2.1.1';

var Loader = require('./core/loader');

cdb.config = {};
cdb.core = {
  Profiler: require('./core/profiler'),
  util: require('./core/util'),
  Loader: Loader
};
cdb.Image = require('./vis/image.js');
cdb.SQL = require('./api/sql');
cdb.Tiles = require('./api/tiles');

cdb.vis = {
  Loader: Loader
};

cdb._Promise = require('_Promise');

if (typeof window !== 'undefined') {
  window.cartodb = cdb;

  if (!window.JST) {
    window.JST = {};
  }

  if (!window._) {
    window._ = require('underscore');
  }

  if (!window.Backbone) {
    window.Backbone = require('backbone-isch')
  }

  if (!window.Mustache) {
    window.Mustache = require('mustache')
  }

  // required by api/sql at global namespace at runtime
  window.reqwest = require('reqwest')
}

module.exports = cdb;