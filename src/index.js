module.exports = function solveEquation(equation) {
  let k = equation.match(/((- )|-)?\d+/g);
  let a = +k[0];
  let b = +k[2];
  let c = +k[3];
  let x1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a);
  let x2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a);
  let solutions = [x1, x2];
  return solutions.sort((x1, x2) => x1 - x2);
}
