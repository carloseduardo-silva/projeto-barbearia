var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/haircuts.html', function(req, res, next) {
  res.render('haircuts', { title: 'Express' });
});

router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/agendamento/haircutType.html', function(req, res, next) {
  res.render('agendamento/haircutType', { title: 'Express' });
});

router.get('/agendamento/time.html', function(req, res, next) {
  res.render('agendamento/time', { title: 'Express' });
});

router.get('/agendamento/clientData.html', function(req, res, next) {
  res.render('agendamento/clientData', { title: 'Express' });
  
});


router.get('/agendamento/confirmed.html', function(req, res, next) {
  res.render('agendamento/confirmed', { title: 'Express' });
});


module.exports = router;
