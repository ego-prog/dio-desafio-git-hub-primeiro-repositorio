// o que são vetores ou arrays
/*let array =["string",1,false];
console.log(array);*/
//pode guardar varios tipos de dados
let array = ['string', 1, true, ['array1.1'], ['array2'], ['array3']];
// console.log(array[2]);
// forEach
//array.forEach(function(item, index){console.log(item, index)})
array.push('novo Item')
console.log(array);
array.pop()
console.log(array);
array.shift()
console.log(array);
array.unshift("novo item")
console.log(array);
console.log(array.indexOf(true));