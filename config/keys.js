// module.exports = {
//   mongoURI: 'mongodb://ahmad:a123456@ds247141.mlab.com:47141/astrolabsapp2018',
//   secret: 'sdfdsfsafdsfas'

// };

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

