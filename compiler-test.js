const compiler  = require('vue-template-compiler')

const ast = compiler.compile(
  '<div>hello {{vue}}</div>'
)
console.log(ast)