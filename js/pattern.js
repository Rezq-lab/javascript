
let x = '';
for (let index = 0; index < 5; index++) {
   for (let col = 0; col <=index ; col++) {
     
      x += '*';
   }
      x += '\n';
    
}
for (let b = 5; b > 0; b--) {
   for (let c = 0; c < b ; c++) {
     
      x += '*';
   }
      x += '\n';
    
}


console.log(x);

let n = 5; // you can take input from prompt or change the value
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);