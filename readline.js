const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const num1 = Math.floor(Math.random() * 10)
const num2 = Math.floor(Math.random() * 10)
const anwser = num1 + num2

rl.question(`What is ${num1} + ${num2}?`, (userInput) => {
    if (userInput.trim() == anwser) {
        rl.close()
    } else {
        rl.setPrompt('错误了！请重新回答！')
        rl.prompt()
        rl.on('line', (userInput) => {
            if (userInput.trim() == anwser) {
                rl.close()
            } else {
                rl.setPrompt('错误了！请重新回答！')
                rl.prompt()
            }
        })
    }
})

/*
// 或者用下面的代码也可以
console.log(`What is ${num1} + ${num2}?`)

rl.on('line', (userInput) => {
    if (userInput.trim() == anwser) {
        rl.close()
    } else {
        rl.setPrompt('错误了！请重新回答！')
        rl.prompt()
    }
})
*/

rl.on('close', () => {
    console.log('回答正确！')
})