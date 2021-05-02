const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);

class Database {
    constructor() {
        this.connect();
    }

    connect() {
        mongoose
            .connect(
                "mongodb+srv://admin:dbuserpassword@twitterclonecluster.by2jq.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority"
            )
            .then(() => {
                console.log("DATABASE connection Successful");
            })
            .catch((err) => {
                console.log(`DATABASE connection error: ${err}`);
            });
    }
}

module.exports = new Database();