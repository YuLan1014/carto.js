var _ = require('underscore');
var log = require('cdb.log');

// layer factory
var Layers = {

  _types: {},

  register: function (type, creatorFn) {
    this._types[type] = creatorFn;
  },

  create: function (type, data, options) {
    if (!type) {
      log.error('creating a layer without type');
      return null;
    }
    var LayerClass = this._types[type.toLowerCase()];

    var layerAttributes = {};
    layerAttributes.type = type;
    _.extend(layerAttributes, data, data.options);
    return new LayerClass(layerAttributes, options);
  },

  moduleForLayer: function (type) {
    if (type.toLowerCase() === 'torque') {
      return 'torque';
    }
    return null;
  },

  modulesForLayers: function (layers) {
    var modules = _(layers).map(function (layer) {
      return Layers.moduleForLayer(layer.type || layer.kind);
    });
    return _.compact(_.uniq(modules));
  }

};

module.exports = Layers;
