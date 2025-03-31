let input = [
    '2,3,5,7',
  ];
   
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
   
  // SOLUTION
  let primesAsString = gets(); // '2,3,5,7'
  let primesStringArray = primesAsString.split(','); // ['2', '3', '5', '7']
  let sumOfPrimes = 0;
   
  for (let i = 0; i < primesStringArray.length; i++) {
      let prime = Number(primesStringArray[i]);
      sumOfPrimes += prime;
  }
   
  console.log(sumOfPrimes); // 17