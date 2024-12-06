const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

try {
   fs.readdirSync('uploads')
} catch (error) {
   console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.')
   fs.mkdirSync('uploads')
}

const upload = multer({
   //uploads 폴더에 파일을 올리고
   // 현재시간-파일명.png 형태로 이미지 파일을 저장
   // 파일 크기 제한은 7MB
   storage: multer.diskStorage({
      // 업로드 파일 저장 경로 설정
      destination(req, file, done) {
         done(null, 'uploads/')
      },

      filename(req, file, done) {
         done(null, `${Date.now()}-${file.originalname}`)
      },
   }),
   limits: { fileSize: 5 * 1024 * 1024 },
})

app.get('/uploadFile', (req, res) => {
   res.sendFile(path.join(__dirname, 'multipart.html')) // multipart.html 파일 응답
})

//업로드된 파일 정보를 출력하고 클라이언트 화면에 'ok'를 보여줌
app.post('/uploadFile', upload.fields([{ name: 'file1' }, { name: 'file2' }]), (req, res) => {
   console.log(req.files, req.body)
   res.send('ok')
})

app.get(
   '/',
   (req, res, next) => {
      console.log('GET / 요청에서만 실행됩니다.')
      next()
   },
   (req, res) => {
      throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
   }
)

app.use((err, req, res, next) => {
   console.error(err)
   res.status(500).send(err.message)
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
