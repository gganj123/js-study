const { obj } = require("./myDog")

console.log("getter 함수로 얻은 현재 상태")
console.log(`종: ${obj.getSpecies()}, 나이: ${obj.getAge()}, 색: ${obj.getColor()}`)

console.log("\nsetter 함수를 사용하여 상태를 흰둥이, 1살, 흰색으로 바꿈")
obj.changeSpecies("흰둥이")
obj.changeAge(1)
obj.changeColor("흰색")

console.log("\n다시 getter 함수로 얻은 현재 상태")
console.log(`종: ${obj.getSpecies()}, 나이: ${obj.getAge()}, 색: ${obj.getColor()}`)
