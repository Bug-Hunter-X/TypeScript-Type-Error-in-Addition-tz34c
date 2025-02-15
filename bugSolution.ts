function add(a: number, b: number): number {
  return a + b;
}

function addString(a: number, b: string): number {
  return a + parseFloat(b);
}

let result1 = add(1, 2); // Correct
let result2 = addString(1, '2'); // Correct