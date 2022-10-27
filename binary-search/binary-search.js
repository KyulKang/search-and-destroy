"use strict";

// Complete this algo

//nLogn time no loops
//contain target in array
//recursion would work here for time not space

// contains (val) {
//   if (this.value === val) return true
//   if (val < this.value) { // left case
//     if (this.left) {
//       return this.left.contains(val)
//     } else {
//       return false
//     }
//   } else { // right case
//     if (this.right) {
//       return this.right.contains(val)
//     } else {
//       return false
//     }
//   }
// }

//root = splice half array
//if odd length array , midpoint for sure
// check if target < root , look at left, vice versa
//then check with recursion for child left or right


const binarySearch = (array, target) => {
	let length = array.length
  let midpt = Math.floor(length/ 2);
	let newArr ;

  if (array[midpt] === target) return true;
  if (target < array[midpt]){
			newArr= array.slice(0, midpt);
    return binarySearch(newArr, target);
	}else if (target > array[midpt]){
		 newArr = array.slice(midpt+1,array.length);
    return binarySearch(newArr, target);
	}else{
		return false
	}
}


//alternative way not using slice, but start/stop end points 


//function binarySearch(arr, target, start=0, stop=(arr.length-1)) {

//   let midPoint = Math.floor(((stop-start)/2) + start)

//   switch (true) {
//     case arr[midPoint] === target:
//       return true
//     case stop - start === 0:
//       return false
//     case arr[midPoint] < target:
//       return binarySearch(arr, target, midPoint+1, stop)
//     case arr[midPoint] > target:
//       return binarySearch(arr, target, start, midPoint)
//   }
// }
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
