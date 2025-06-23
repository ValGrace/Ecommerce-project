	
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')
 
module.exports = function() {
 
      const parsed = dotenv.config()
      return dotenvExpand(parsed)
    }
 