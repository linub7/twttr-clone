require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => {
        console.log('DATABASE connection Successful');
      })
      .catch((err) => {
        console.log(`DATABASE connection error: ${err}`);
      });
  }
}

module.exports = new Database();
