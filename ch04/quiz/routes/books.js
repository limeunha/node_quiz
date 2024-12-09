const express = require('express')
const { Book } = require('../models')

const router = express.Router()

/*GET /books
POST /books
PATCH /books/책 :id
DELETE /books/책 :id*/

router.get('/', async (req, res, next) => {})
router.post('/', async (req, res, next) => {})
router.patch('/:id', async (req, res, next) => {})
router.delete('/:id', async (req, res, next) => {})

module.exports = router
