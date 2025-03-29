let n = 9;

for (let row = 1; row <= n; row++) {
  let line = '';
  for (let column = 1; column <= row; column++) {
    line = line + '*';
  }
  console.log(line);
}