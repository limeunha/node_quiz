const express = require('express')
const { Book, Author } = require('../models')

const router = express.Router()

/*GET /books
POST /books
PATCH /books/책 :id
DELETE /books/책 :id*/

//localhost:8000/Book
router.get('/', async (req, res, next) => {
   try {
      const bookrs = await Book.findAll({ include: Author })
      res.status(200).json(bookrs)
   } catch (error) {
      console.error(error)
      next(error)
   }
})
//localhost:8000/Book
router.post('/', async (req, res, next) => {
   try {
      //req.body - > 원하는 컬럼들에 insert
      const book = await Book.create(req.body)
      res.status(201).json(book)
   } catch (error) {
      console.error(error)
      next(err)
   }
})
//localhost:8000/Book/:id
router.patch('/:id', async (req, res, next) => {
   try {
      //req.body => 원하는 컬럼을 수정가능
      const result = await Book.update(req.body, { where: { id: req.params.id } })

      if (result[0] === 0) {
         return res.status(404).json({ Message: '책을 찾을 수 없습니다.' })
      }

      res.json({ Message: '책 데이터가 수정되었습니다.' })
   } catch (error) {
      console.error(error)
      next(err)
   }
})

//localhost:8000/Book/:id
router.delete('/:id', async (req, res, next) => {
   try {
      const result = await Book.destroy({ where: { id: req.params.id } })

      if (result === 0) {
         return res.status(404).json({ Message: '책을 찾을 수 없습니다.' })
      }
      res.json({ message: '삭제가 완료되었습니다.' })
   } catch (error) {
      console.error(error)
      next(err)
   }
})

module.exports = router
