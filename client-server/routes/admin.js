var express = require('express');
var router = express.Router();
var schedule = require('../inc/schedule')
var clients = require('../inc/clients')
var contacts = require('../inc/contacts')
var users = require('../inc/users')

router.get('/', function(req, res, next){
res.render('admin/index', {title: 'AdminPage'})
})

router.get('/index', function(req, res, next){
    res.render('admin/index', {title: 'AdminPage'})
    })

router.get('/clients', function(req, res, next){

    clients.getClients().then(results =>{
        res.render('admin/clients', {
            date:'',
            data:results
        })

    })


    })

router.get('/schedule', function(req, res, next){

    schedule.getSchedule().then(results =>{
      
        res.render('admin/schedule', {
            title: 'AdminPage',
            data:results
        })
        })

    })



router.get('/contacts', function(req, res, next){

    contacts.getContacts().then(data =>{
      
        res.render('admin/contacts', {
            title: 'AdminPage',
            data
        })
        })

    })


router.get('/users', function(req, res, next){

    users.getUsers().then(results =>{
      
        res.render('admin/users', {
            title: 'AdminPage',
            data:results
        })
        })

    })




module.exports = router