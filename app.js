var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.resolve()));
app.set('view engine', 'ejs');
app.set('views', path.resolve());
var users = [];
app.get('/signup', function (req, res) {
    var user = req.query;
    if (user.username) {
        users.push(user);

        res.redirect('/signin')
    } else {
        res.render('views/signup');
    }
});
app.get('/signin', function (req, res) {
    var user = req.query;
    if (user.username) {
        var s = users.find(function (item) {
            return item.username == user.username && item.password == user.password;
        });
        if (s) {
            res.redirect('/welcome');
        } else {
            res.redirect('/signin');
        }
    } else {
        res.render('views/signin');
    }
});
app.get('/welcome', function (req, res) {
    res.render('views/welcome');
});
app.listen(8000);


