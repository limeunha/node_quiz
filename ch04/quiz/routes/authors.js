const express = require('express')
const router = express.Router()
const { Author } = require('../models')

/*GET /authors
POST /authors
PATCH /authors/작가 :id
DELETE /authors/ 작가 :id*/

//localhost:8000/authors
router.get('/', async (req, res, next) => {
   try {
      const authors = await Author.findAll()
      res.status(200).json(authors)
   } catch (error) {
      console.error(error)
      next(error)
   }
})
//localhost:8000/authors
router.post('/', async (req, res, next) => {
   try {
      const author = await Author.create({
         name: req.body.name,
         age: req.body.age,
      })
      res.status(201).json(author)
   } catch (error) {
      console.error(error)
      next(err)
   }
})
//localhost:8000/authors/:id
router.patch('/:id', async (req, res, next) => {
   try {
      //req.body => 원하는 컬럼을 수정가능
      const result = await Author.update(req.body, { where: { id: req.params.id } })

      if (result[0] === 0) {
         return res.status(404).json({ Message: '작가를 찾을 수 없습니다.' })
      }

      res.json({ Message: '작가 데이터가 수정되었습니다.' })
   } catch (error) {
      console.error(error)
      next(err)
   }
})

//localhost:8000/authors/:id
router.delete('/:id', async (req, res, next) => {
   try {
      const result = await Author.destroy({ where: { id: req.params.id } })

      if (result === 0) {
         return res.status(404).json({ Message: '작가를 찾을 수 없습니다.' })
      }
      res.json({ message: '삭제가 완료되었습니다.' })
   } catch (error) {
      console.error(error)
      next(err)
   }
})

route.module.exports = router
