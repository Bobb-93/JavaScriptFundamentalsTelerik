let input = [
      '2',    // first line of input
      '3',    // second line of input
    ];
     
    let print = this.print || console.log;
    let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
     
    let number = +input[0]; // don't use input, this will not work
    let firstNumber = +gets(); // 2
    let secondNumber = +gets(); // 3

    console.log(number, firstNumber, secondNumber);
    