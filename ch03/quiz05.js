const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())

app.get('/setId', (req, res) => {
   // 1시간 동안 유효하고 name: id, value: user1인 쿠키를 만든다
   res.cookie('id', 'user1', { maxAge: 1000 * 60 * 60 })
   res.send('쿠키가 설정되었습니다.')
})

app.get('/getId', (req, res) => {
   // 쿠키 value값 읽어서 화면에 출력하기
   const id = req.cookies.id
   res.send(id ? `환영합니다, ${id}님` : `쿠키가 없습니다.`)
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
