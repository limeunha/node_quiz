const fs = require('fs')

function readFileAndUppercase(filePath) {
   // 파일 읽는 코드 작성
   fs.readFile(filePath, (error, data) => {
      if (error) {
         console.log(`Error:${err.message}`)
         return
      }
      console.log(data.toString().toUpperCase())
   })
}

readFileAndUppercase('input.txt')
