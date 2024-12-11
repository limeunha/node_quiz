const Sequelize = require('sequelize')
const dotenv = require('dotenv')
const Author = require('./author')
const Book = require('./book')

dotenv.config()

const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]
const db = {}

dotenv.config()

const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize
db.Author = Author
db.Book = Book

Author.init(sequelize)
Book.init(sequelize)

Author.associate(db)
Book.associate(db)

module.exports = db
