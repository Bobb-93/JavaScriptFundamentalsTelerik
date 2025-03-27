let input = [
      '2',
      '5',
    ];
     
    let print = this.print || console.log;
    let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
     
    let firstNumber = +gets(); // 2
    let secondNumber = +gets(); // 7
     
    console.log(firstNumber + secondNumber); // '7'