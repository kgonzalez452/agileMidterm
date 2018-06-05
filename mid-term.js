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

let keys =
{
    name : 'Sam',
    age : 25,
    hasPets : true
}

function getAllKeys(keys) {
    // return array of all keys
    // return Object.keys(obj);
    
    let arr = [];
    for (let k in keys) {
        arr.push(k);
        console.log(k);
    };
    console.log(arr);
    return arr;
  }
  console.log(getAllKeys(keys));
 
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
// How would you use a closure to create a private counter? You will need to return more than one function. At least two. One to add to the counter, and another to retrieve the value. You will need to research how to return more than one function from a function.





// CHALLENGE 5