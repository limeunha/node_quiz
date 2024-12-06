const sequelize = require('sequelize')
const User = require('./user')
const Book = require('./book')
const Profile = require('./profile')
const Author = require('./author')

const dotenv = require('dotenv')

const env = process.env.NODE_RNV

const config = require('../config/config')[env]
const db = {}
