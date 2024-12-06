const express = require('express')
const router = express.Router()

router.get('/:num', (req, res) => {
   if ((req, params)) {
      res.send(`게시물 번호: ${req.params.num}`)
   }

   console.log(`검색어: #{req.query.search}`)
})

module.exports = router
