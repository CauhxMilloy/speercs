
var chiefOfLabor = require('chiefOfLabor');

chiefOfLabor.init();

module.exports.loop = function () {
    chiefOfLabor.ensureCreepsAreTracked();
};
