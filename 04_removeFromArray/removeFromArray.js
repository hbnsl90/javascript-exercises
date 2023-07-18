const removeFromArray = function(array, ...remove) {
    const arr = Array.from(arguments[0]);
for(let a of remove){
   let idx = arr.findIndex((element)=> element ===a);
   if(idx!=-1) arr.splice(idx,1);
}
return arr;
};

// Method 2:
// const removeFromArray = function(array, ...remove) {
//     const newArray = [];
//     array.forEach((item)=>{
//         if(!remove.includes(item)) newArray.push(item);
//     }
//     );
//     return newArray;
// }

// // Method 3:
// const removeFromArray = function( array, ...Removelements){
//     return array.filter(element=> !Removelements.includes(element));
// }
// Do not edit below this line
module.exports = removeFromArray;
