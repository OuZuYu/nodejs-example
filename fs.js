const fs = require('fs')

// file
fs.writeFile('example.txt', '我是node创建的文件', err => {
    err && console.log(err)

    /*
    // buffer
    fs.readFile('example.txt', (err, file) => {
        console.log(file)
    }) */

    console.log('successfully created the file "example.txt"')

    // utf-8
    fs.readFile('example.txt', 'utf-8', (err, file) => {
        console.log(file)
    })

    fs.rename('example.txt', 'example_rename.txt', err => {
        if (err) {
            console.log(err)
        } else {
            console.log('successfully renamed the file')
            fs.appendFile('example_rename.txt', '\nadd some data', err => {
                if (err) {
                    console.log('err :', err);
                } else {
                    console.log('some data successfully appended to file')
                    fs.copyFile('example_rename.txt', 'example_copy.txt', err => {
                        err && console.log('err :', err);
                        fs.unlink('example_rename.txt', err => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log('deleted');
                            }
                        })
                    })
                }
            })
        }
    })
})

// dir
fs.mkdir('dir', err => {
  if (err) {
    console.log('err :', err);
  } else {
    console.log('folder successfully created');
    fs.writeFile('./dir/demo.txt', 'demo', err => {
      if (err) {
        console.log(err)
      } else {
        console.log('successfully created ./dir/demo.txt')

        fs.unlink('./dir/demo.txt', err => {
          if (err) {
            console.log(err)
          } else {
            console.log('deleted ./dir/demo.txt')
            fs.rmdir('dir', err => {
              if (err) {
                console.log('err :', err);
              } else {
                console.log('successfully deleted the folder')
              }
            })
          }
        })
      }
    })
  }
})