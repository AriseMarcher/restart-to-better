const message = "Hello Babel"
console.log(message)

const foo = () => {
  console.log("foo function exec")
}

foo()

const obj = { name: "xiaoming", age: 18 }
const { name, age } = obj
console.log(name, age)