const express = require('express')
const router = express.Router()
const { Book, Author } = require('../models')

router.get('/:id/books', async (req, res, next) => {
   try {
      const authorWithBooks = await Author.findOne({
         where: { id: req.params.id },
         include: {
            model: Book,
         },
      })
      if (!authorWithBooks) {
         return res.status(404).json({ message: '저자를 찾을 수 없습니다.' })
      }
      res.json(authorWithBooks)
   } catch (error) {
      console.error(error)
      next(error)
   }
})

module.exports = router
