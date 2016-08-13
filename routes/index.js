var express = require('express');
var router = express.Router();

var shjs = require('shelljs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET memory status page. */
router.get('/memory', function(req, res, next) {
  var memorySummary = shjs.exec('free -mt', {
    silent: true
  }).stdout;

  var diskSummary = shjs.exec('df -h | grep -v File', {
    silent: true
  }).stdout;

  res.render('status', {
    title: 'Memory Usage Summary',
    memory: memorySummary,
    disk: diskSummary
  });
});

module.exports = router;
// require('repl').start('.').context.r = router;
