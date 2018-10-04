console.log("Ejercicio 3");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese un texto: ", (answer) => {
  console.log(ExpressionMatcher(answer));

  rl.close();
});


const ExpressionMatcher = (str, openExpArr, closeExpArr) => {
  const openingExp = openExpArr || ['[', '{', '('];
  const closingExp = closeExpArr || [')', '}', ']'];
  const inputExp = str.split('');
  const tempArr = [];
  let index = 0

  while (index < inputExp.length) {
    if (openingExp.indexOf(inputExp[index]) > -1) tempArr.push(inputExp[index])
    if (closingExp.indexOf(inputExp[index]) > -1) tempArr.pop()
    index++
  }

  return tempArr.length === 0 ? 'Texto correcto' : 'Error en texto'

}
