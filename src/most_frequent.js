/*
Write a function that finds the most frequent element in an array.

find_most_frequent_element([1, 2, 2, 3]) // 2
{
  1: 1,
  2: 2,
  3: 1
}
*/

function find_most_frequent_element(input) {
  
  let counts = {};

  for(let i=0; i<input.length; i++) {
    // console.log(input[i]);
    // console.log(`the count is: ${counts[input[i]]}`);
    if (!isNaN(counts[input[i]])) {
      counts[input[i]] = counts[input[i]] + 1; 
    } else {
      counts[input[i]] = 1;
    }
    
  }

  const entries = Object.entries(counts)
  console.log(entries)

  let highest = -1;
  let highest_key = -1;
  for(let i = 0; i<entries.length; i++) {
    if (entries[i][1] > highest) {
      highest = entries[i][1];
      highest_key = entries[i][0];
    }
  }

  return highest_key;
}


let result = find_most_frequent_element([1, 2, 2, 5, 5, 5, 3]);

console.log(`the most frequent number is: ${result}`);
