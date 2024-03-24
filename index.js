function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/*
Another and better approach
function hasTargetSum(array, target) {
  const seen = new Set();

  for (let num of array) {
      const complement = target - num;
      if (seen.has(complement)) {
          return true;
      }
      seen.add(num);
  }

  return false;
}

  Linear Time: O(n)
  */








/* 
  Write the Big O time complexity of your function here
  Quadratic Time: O(n²)*/

/* 
  Add your pseudocode here
  iterate through the array
  for each index iterate again through the array 
  sum the index with the other elements of the array through the second for loop
  if the index + j equals the target
    return true
  else 
    return false
*/

/*
  Add written explanation of your solution here
  The function iterates through the array twice summing every element
  with the other elements one by one and comparing it with the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-4, -8, 12, 4, 11, 7], 8));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 1, 1, 1], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 1, 1, 1], 4));
}

module.exports = hasTargetSum;
