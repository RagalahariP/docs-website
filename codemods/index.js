const indentedCodeBlock = require('./indentedCodeBlock');
const paragraphsInsideTableCells = require('./paragraphsInsideTableCells');
const callouts = require('./callouts');
const clamshells = require('./clamshells');
const videos = require('./videos');
const tables = require('./tables');
const icons = require('./icons');

module.exports = [
  paragraphsInsideTableCells,
  indentedCodeBlock,
  callouts,
  clamshells,
  videos,
  tables,
  icons,
];
