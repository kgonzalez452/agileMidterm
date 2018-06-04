// CHALLENGE 1
let arr = ['hey', 'hello', 'hiya', 'sup'];

function transformFirstAndLast (arr){
    // return obj
    //forgot how to return object keys so i hard coded to change it up later
    // return `{ ${arr[0]} : ${arr[3]} }`;
    let array = {};
    array[arr[0]] = arr[arr.length - 1];
    return array;
}
console.log(transformFirstAndLast(arr));


//CHALLENGE 2

let obj =
{
    name : 'Sam',
    age : 25,
    hasPets : true
}

function getAllKeys(obj) {
    // return array of all keys
    // return Object.keys(obj);
    
    // let array = [];
    // for (let i = 0; i < obj.length - 1; i++ ) {
    //     array.push(obj[i]);
    // };
    // return array;
  }
  console.log(getAllKeys(obj));
 
//   {
//     name : 'Sam',
//     age : 25,
//     hasPets : true
//   }

// CHALLENGE 3

var obj = {
    key: [1, 20, 30]
};

function getElementsGreaterThan10AtProperty(obj, key) {
    // your code here
  }


// CHALLENGE 4




// CHALLENGE 5