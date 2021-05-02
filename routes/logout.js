const express = require('express');
const app = express();
const router = new express.Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const User = require('../schemas/UserSchema');

app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res, next) => {
    if (req.session) {
        req.session.destroy(() => {
            res.redirect('/');
        })
    }
});



module.exports = router;