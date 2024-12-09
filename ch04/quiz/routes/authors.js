const express = require('express')
const { Author } = require('../models')

const router = express.Router()

/*GET /authors
POST /authors
PATCH /authors/작가 :id
DELETE /authors/ 작가 :id*/

router.get('/', async (req, res, next) => {})
router.post('/', async (req, res, next) => {})
router.patch('/:id', async (req, res, next) => {})
router.delete('/:id', async (req, res, next) => {})

module.exports = router
