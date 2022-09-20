const checkArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    // console.log(array1[i]);
    if (array1[i] === array2[0]) {
      let tempI = i;
      for (let j = 0; j < array2.length; j++) {
        if (array1[tempI] != array2[j]) {
           j=array2.length;
        }
        else if(j==array2.length-1 && array1[tempI]===array2[j]){
            return true
        }
        tempI++
      }
    }
  }
return false
};

console.log(checkArrays([1, 2,2, 3, 4,1,2,3,4], [1, 2, 3, 4]));
