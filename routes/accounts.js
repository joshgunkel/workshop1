
var models = require('../models/models');
var utils = require('../lib/utils');
var constants = require('../lib/constants');
var moment = require('moment');


exports.register = function (req, res) {

    console.log('Register: ' + JSON.stringify(req.body));
    //var model = new models.AccountRegister(req.body);

    models.Account.findOne({ user_name: req.body.user_name }, function (err, data) {
        if (err) {
            res.json(err);
        }
        else if (data == null) {

            var _now = new Date();

            var account_data = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                user_name: req.body.user_name,
                password: req.body.password,
                emails: [{ address: req.body.email, primary: true, created_at: _now, updated_at: _now }],
                created_at: _now,
                updated_at: _now,
                expires_at: moment().add('days', 365)
                
            };

            var account = new models.Account(account_data);
               
                account.save(function (error, data) {
                    if (error) {
                        res.json(error);
                    }
                    else {                     
                        
                        res.send(200, { status: 200, message: 'account created successfully'});

                    }
                });

        }
        else {
            res.send(400, { status: 400, message: 'Bad Request', errors: { user_name: ['has already been taken'] } });
        }
    });
};

exports.login = function (req, res) {
    //console.log("req.body: " + JSON.stringify(req.body));
    //var model = new models.AccountLogin(req.body);
    //console.log('Login: ' + JSON.stringify(model));
    models.Account.findOne({ user_name: req.body.user_name }, function (error, account) {
        if (error) {
            res.json(error);
        }
        else if (account == null) {
            res.send(401, { error: 'Unauthorized', message: 'invalid user name and/or password' });
        }
        else {
            if (account.password == req.body.password) {
                res.send(200, { status: 200, message: 'login successful'});
            }
            else {
                res.send(401, { error: 'Unauthorized', message: 'invalid user name and/or password' });
            }
        }
    });

};



exports.getAll = function (req, res) {


    //var query = Person.findOne({ 'name.last': 'Ghost' });
    //var query = models.Account.find();

    //// selecting the `name` and `occupation` fields
    //query.select('_id user_name password password_reminder emails version access_token');

    //// execute the query at a later time
    //query.exec(function (err, data) {
    //    if (err) return handleError(err);
    //    //console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
    //    res.send(data);
    //})


    models.Account.find(function (err, data) {
        if (err) {
            // TODO handle err
        }
        else {
            res.send(data)
        }
    });

};


exports.getById = function (req, res) {
    var id = req.params.id;
    console.log('Retrieving id: ' + id);

    models.Account.findById(id, function (err, account) {

        if (err) {
            res.send(500, { code: 500, error: err });
        }
        else if (account == null) {
            res.send(404, { code: 404, message: 'not found' });
        }
        else {
            res.send(account);
        }
    });

};

//this isn't really used since exports.register is serving the same function
/*
exports.add = function (req, res) {
    var obj = req.body;
    console.log('Adding: ' + JSON.stringify(obj));
    //this is handled by exports.register
};
*/

exports.update = function (req, res) {

    var id = req.params.id;
    var obj = req.body;

    var model = new models.Account(req.body);

    console.log('Updating password to ' + model.password + ' for ' + id);
    console.log(JSON.stringify(obj));


    models.Account.findById(id, function (err, account) {
        if (err) {

        }
        else {
            //allow specific properties to be updated
            account.password = model.password;
            account.updated_at = new Date();
            account.save(function (err, data) {
                if (err) {
                    res.json(err);
                }
                else {

                    res.send(200, { status: 200, message: 'update successful' });

                }
            });
        }

    });

};

exports.delete = function (req, res) {

    console.log('Deleting: ' + req.params.id);

    models.Account.remove({ _id: req.params.id }, function (err) {

        console.log('err: ' + err);

        if (err) {
            res.send(500, { error: err });
        }
        else {
            res.send(200, { status: 200, message: 'delete successful' });
        }
    });

};


