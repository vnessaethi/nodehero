const fs = require('fs')
let content
try {
    if (fs.existsSync('file.md')) {
        fs.writeFileSync('file.md', 'forma assíncrona de ler e escrever arquivos', 'utf-8')
        content = fs.readFileSync('file.md', 'utf-8')
    }
    else {
        fs.writeFileSync('file.md', 'forma assíncrona de ler e escrever arquivos', 'utf-8')
        content = fs.readFileSync('file.md', 'utf-8')
    } 
} catch (ex) {
  console.log(ex)
}
console.log(content)