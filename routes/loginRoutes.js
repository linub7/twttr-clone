const express = require('express');
const app = express();
const router = new express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../schemas/UserSchema');


app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
    res.status(200).render('login');
});

router.post("/", async (req, res, next) => {
    var username = req.body.logUsername;
    var email = req.body.logUsername;
    var payload = req.body;
    if (req.body.logUsername && req.body.logPassword) {
        var user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        })
        .catch((error) => {
            console.log(error);
            payload.errorMessage = "Something went Wrong";
            res.status(200).render("login", payload);
        })

        if (user != null) {
            var result = await bcrypt.compare(req.body.logPassword, user.password);

            if (result === true) {
                req.session.user = user;
                return res.redirect('/');
            }
        }
        payload.errorMessage = "Login credentials incorrect.";
        return res.status(200).render("login", payload);
    }
    payload.errorMessage = "Make sure each field has a value";
    res.status(200).render('login');
});

module.exports = router;