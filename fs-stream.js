const fs = require('fs')
const zlib = require('zlib')

/* // 压缩
const gzip = zlib.createGzip()
const readStream = fs.createReadStream('./stream.txt', 'utf-8')
const writeStreamZip = fs.createWriteStream('stream.txt.zip')

readStream.pipe(gzip).pipe(writeStreamZip) */

/* // 解压
const gunzip = zlib.createGunzip()
const readStreamZip = fs.createReadStream('./stream.txt.zip')
const writeStreamTxt = fs.createWriteStream('uncompressed.txt')

readStreamZip.pipe(gunzip).pipe(writeStreamTxt) */



const readStreamCopy = fs.createReadStream('./stream.txt', 'utf-8')
const writeStreamCopy = fs.createWriteStream('./stream_copy.txt')
// 复制方法1
readStreamCopy.on('data', chunk => {
  console.log(chunk)
  writeStreamCopy.write(chunk)
})



/*
// 复制方法2
fs.copyFile('./stream.txt', './stream_copy.txt', err => {
  err && console.log(err)
})
*/

/*
// 复制方法3
fs.createReadStream('./stream.txt', 'utf-8').pipe(fs.createWriteStream('./stream_copy.txt'))

readStream.pipe(writeStreamCopy)
*/