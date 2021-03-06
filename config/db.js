const mongoose = require('mongoose');
const config = require('config');
const localdb = config.get('mongoLocal');

const connectDB = async () => {
  try {
    await mongoose.connect(localdb, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB Connected ...');
  } catch(err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB
