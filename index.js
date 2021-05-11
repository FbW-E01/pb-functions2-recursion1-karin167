// This is Normal Summing

   const array = [1, 2, 3, 4, 5, 6];
      let sumTotal = 0
    const sum = (arr)=> {
      arr.forEach(x => {
              sumTotal += x;
          });
          return sumTotal;
            }
        console.log(sum(array));
        
        
// This is with N numbers  
        
const array = [1, 2, 3, 4, 5, 6];

let totalNumber =0
let sumNumbers = 0

const sumUpToN = (item)=>{
    if(item.length === 1){
        console.log(item[0]);
    }else{
       let nItem = item.pop() // we create N numbers
       array.forEach(element => {
           sumNumbers+=element // here we sum all the elements together instead of last Item
       });
       console.log(sumNumbers + nItem);
    }
}

sumUpToN(array)