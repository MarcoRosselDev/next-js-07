const proto = (int) => {
  let arr = [];
  console.log(int);
  
  for (let i = 0; i < int.length; i++) {
    if (i === (int.length - 1)) {
      arr.push(int[i])
    } else {
      arr.push(int[i] + "0".repeat(int.length - 1 - i))
    }
  }
  console.log(arr);
  return arr
}

const roman = (arr) => {
  let n = ""
  const ArrRoman = ["", "I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
  const arrDecimal = [0, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  for (let i = 0; i < arr.length; i++) {
    const int = Number(arr[i])
    const f = arrDecimal.findIndex((e) => e === int);
    console.log(f);
    if (f !== -1) {
      n+= ArrRoman[f];
    } else {
      console.log(int);
      console.log(typeof int);
      if (int > 1 && int < 4) {
        n+= "I".repeat(int)
      } else if (int > 5 && int < 9) {
        n+= "V"+"I".repeat(int - 5);
      } else if (int >= 20 && int < 40) {
        n+= "X".repeat(arr[i][0]);
      } else if (int => 60 && int < 90) {
        n+= "L"+ "X".repeat(arr[i][0] - 5)
      }
    }
  }
  console.log(n, "o");
}
roman(proto("100"))
/* roman(proto("541"))
roman(proto("542")) */
/* proto("23")
proto("90")
proto("1235")
proto("123235") 
[ '20', '3' ]
[ '90', '0' ]
[ '1000', '200', '30', '5' ]
[ '100000', '20000', '3000', '200', '30', '5' ]*/